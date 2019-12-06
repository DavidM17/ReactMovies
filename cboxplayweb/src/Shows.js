import React, { useEffect,useState } from 'react';
import axios from 'axios';
import './App.css';
import {  Row, Col, Media, Image } from 'react-bootstrap';


const Shows = () => {
  const [result,setResult] = useState("false"); 
  const [uo,setUo] = useState();
  var img = [];
  var movies = [];

  async function fetchItems(){
  
  
  
  
    const popular =
      await axios.get("https://api.trakt.tv/shows/trending",
        { headers: { "Content-Type": "application/json", "trakt-api-key": "be2c245a3fe85baffd5c8046b307985c6d03fd01eacef5e107ed9bd2579cd998", "trakt-api-version": "2" } }
      )
  
  
    for (var u in popular.data) {
      const im =
        await axios.get("https://www.omdbapi.com/?i=" + popular.data[u].show.ids.imdb + "&apikey=cc2d9b0d")
  
      img.push(im.data)
    }
  
    for (var i = 0; i < img.length; i++) {
      
      movies.push(
  
        <Col style={{ alignItems: 'center',paddingBottom:20 }} key={i} sm>
          <Media>
            <Image
          
              width={150}
              height={200}
              src={img[i].Poster} rounded />
          </Media>
        </Col>
  
      );
    }
    setUo(movies);
    setResult("true");
    
  
  }
  useEffect(() => 
   {
     
     fetchItems(); 
   },[]);



  return (

    <Row style={{ paddingLeft: 50 }}>
      {result === "false" ? (
        <h1>Loading ...</h1>
      ) : result === "true" ? (
        uo.map(item => {
          
          return <div>{item}</div>;
        })
      ) : (
       
        <p>Error</p>
        
      )}
    </Row>

  );
}

export default Shows;
