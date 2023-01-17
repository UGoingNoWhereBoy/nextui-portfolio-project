import * as React from 'react';
import Nav from './Comps/Nav';
import { Container, Text,  Grid } from "@nextui-org/react";
import Accounts from './Comps/Accounts';
import Footer from './Comps/Footer';
import Cards from './Comps/Cards';
import Link from 'react-scroll/modules/components/Link';



const App = () => {
  return (

  
 
      <Container css={{width: "100%", height:'100vh'}}>

        

        <Grid.Container justify='center' css={{minWidth:'300px'}}> 

        <Nav />

        <Text css={{marginBottom:'$6', marginTop:'$24', textAlign:'center', '@xsMax':{fontSize:'26px'}, '@xs':{fontSize:'50px'}}}>
          (OUTDATED) <a href='https://eyadsportfolio.vercel.app'>Go to my new portfolio<br/>https://eyadsportfolio.vercel.app </a></Text>
          <Text>
           
          </Text>

        <Cards />

        <Accounts />

        <Footer />

        </Grid.Container>

       
      </Container>
      
    
 
  )
}

export default App
