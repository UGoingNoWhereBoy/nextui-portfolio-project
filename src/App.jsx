import * as React from 'react';
import Nav from './Comps/Nav';
import { NextUIProvider } from '@nextui-org/react';
import { Container, Card, Row, Text, Avatar, Grid } from "@nextui-org/react";
import Accounts from './Comps/Accounts';
import About from './Comps/About';
import Footer from './Comps/Footer';
import Customcard from './Comps/Customcard';
import Cards from './Comps/Cards';



const App = () => {
  return (

  
 
      <Container css={{width: "100%", height:'100vh'}}>

        

        <Grid.Container justify='center' css={{minWidth:'300px'}}> 

        <Nav />

        <Text css={{marginBottom:'$6', marginTop:'$24', textAlign:'center', '@xsMax':{fontSize:'26px'}, '@xs':{fontSize:'50px'}}}>
          Eyad's Portfolio/Resume</Text>

        <Cards />

        <Accounts />

        <About />

        <Footer />

        </Grid.Container>

       
      </Container>
      
    
 
  )
}

export default App
