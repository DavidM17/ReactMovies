import React, { useEffect,useState } from 'react';
import axios from 'axios';
import './App.css';
import { Row, Col, Media, Image } from 'react-bootstrap';

import { useGlobal } from 'reactn';

const Search = (data) => {
  const [result,setResult] = useState("false"); 
  const [uo,setUo] = useState();

  
  const [ id, setId ] = useGlobal('id');
  const [ s, setS ] = useGlobal('s');
  

  var img = [];
  var movies = [];
   
  function handleClick(e) {
    
    setId(e.target.id);
    setS('false');
    e.preventDefault();  
  }
  
  async function fetchItems(){
  
 
    const search =
      await axios.get("https://api.trakt.tv/search/movie?query="+data.value,
        { headers: { "Content-Type": "application/json", "trakt-api-key": "be2c245a3fe85baffd5c8046b307985c6d03fd01eacef5e107ed9bd2579cd998", "trakt-api-version": "2" } }
      )
  
  
  
    for (var u in search.data) {
      const im =
        await axios.get("https://www.omdbapi.com/?i=" + search.data[u].movie.ids.imdb + "&apikey=cc2d9b0d")
  
      img.push(im.data)
    }
  
    for (var i = 0; i < img.length; i++) {
      
      
      movies.push(
  	<div>
        <Col style={{ alignItems: 'center',paddingBottom:20 }} key={i} sm>
          <Media>
            <Image
              onClick={handleClick}
              width={150}
              height={200}
              id={img[i].imdbID}
              src={img[i].Poster} rounded />
              
          </Media>
        </Col>
        </div>
  
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
        <></>
      ) : result === "true" ? (
        
        uo.map(item => {
          
          return <>{item}</>;
        })
      ) : (
       
        <p>Error</p>
        
      )}
    </Row>

  );
}

export default Search;
