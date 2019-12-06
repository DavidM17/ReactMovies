import React, { useState } from 'react';
import './App.css';
import { Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';

import Popular from './Popular';
import Trending from './Trending';
import Played from './Played';
import Shows from './Shows';
import Video from './videolink';
import Search from './search';
import { useGlobal } from 'reactn';
function App() {

  
  const [ id, setId ] = useGlobal('id');
  const [ sea,setSea ] = useState('');
  const [ s,setS ] = useGlobal('s');
  var x = '';

  function find() {
       
      setS('true');
      setS('false');
      setS('true');
      setSea(x)
  }
  
  function home() {
       
      setS('false');
      setId('0')

  }
   
 
  return (

    <div style={{ background: 'black' }}>
      <Navbar style={{ background: 'black' }}>
        <Navbar.Brand href="#home" onClick={home} style={{ color: 'white', fontSize: 30 }}>CboxPlay</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home" onClick={home} style={{ color: 'white' }}>Home</Nav.Link>

        </Nav>
        <Form onSubmit={e=> console.log(e)} inline>
          <FormControl type="text" placeholder="Search" onChange={e=> x = e.target.value} className="mr-sm-2" />
          <Button variant="outline-info" onClick={find}>Search</Button>
        </Form>
      </Navbar>
      {id !== "0" && s==='false' ? (
        <Video id={id}></Video>
      ) : id === '0' && s === 'false' ? (
  
      <>
      <h1 style={{ color: 'white', fontSize: 30, padding: 10 }}>Trending</h1>
      <Trending/>
      
      <h1 style={{ color: 'white', fontSize: 30, padding: 10 }}>Popular</h1>
      
      <Popular/>
      <h1 style={{ color: 'white', fontSize: 30, padding: 10 }}>Most Played</h1>
      
      <Played/>
      <h1 style={{ color: 'white', fontSize: 30, padding: 10 }}>Tv Shows</h1>
      
      <Shows/>
      </>
      ): s === 'true' ? (
       <Search value={sea}/>
      ):(<></>)}


    </div>

  );
}

export default App;
