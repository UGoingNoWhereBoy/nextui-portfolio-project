import React, { useState } from 'react'
import { Card, Link, Button, Text, Tooltip, Container, Grid, css} from "@nextui-org/react";
import { FaGithub } from 'react-icons/fa';
import { CgMediaLive } from 'react-icons/cg'
import ReactPlayer from 'react-player/youtube'



const Customcard = ({cardtitle, cardpicture, cardurl, githublink, iconone,icontwo,iconthree,iconfour,iconfive,iconsix,
content1,content2,content3,content4,content5,content6, customButton, githubButton, liveDemo, customPadding, liveDemoLink}) => {
 
  const Icons = [
    <Tooltip content={content1}>
      {iconone}
    </Tooltip>,
    <Tooltip content={content2}>
        {icontwo}
    </Tooltip>,

    <Tooltip content={content3}>
         {iconthree}
    </Tooltip>,

    <Tooltip content={content4}>
        {iconfour}
    </Tooltip>,

    <Tooltip content={content5}>
         {iconfive}
    </Tooltip>,
        <Tooltip content={content6}>
        {iconsix}
    </Tooltip>,
        
  ]
  

return (

   
  <Card css={{marginTop:'$12', marginBottom:'$12', backgroundImage:`url(${cardpicture})`, backgroundAttachment:'fixed',
  backgroundRepeat:'no-repeat',backgroundSize:'cover'}} id='0'> 

   <Card.Header css={{flexWrap:'wrap', flexDirection:'column'}}>

         <Card isHoverable isPressable css={{maxW:'500px', textAlign:'center', marginRight:'auto',marginBottom:'$12'}}>

           <Text css={{textGradient: "45deg, $purple600 -20%, $pink600 100%",
            '@xsMax':{fontSize:'26px'}, '@xs':{fontSize:'50px'}}}>{cardtitle}</Text>
           
           </Card>
           
           <Grid css={{marginLeft:'auto', marginTop:'auto', marginBottom:'auto', width:'300px' ,'@xs':{width:'500px', '@sm':{width:'800px'}}}}>
               <ReactPlayer controls url={cardurl} light={true}  pip={true} width={'100%'} stopOnUnmount={false}/>
           </Grid>
   </Card.Header>

       <Card.Body>

         <Card css={{display:'flex', width:'400px', textAlign:'center', flexWrap:'wrap', flexDirection:'row'}}>
           {Icons.map((index, key) => (
      
         <Text size={40} css={{padding:'$2', paddingLeft:`${customPadding}`}} key={key}>{index}</Text>
   
         ))}</Card>
         <Container css={{paddingTop:'$4', display:'flex', padding:'$4'}}>
        {githubButton == true ?
            <Link  href={githublink} target={'_blank'}>
            <Button css={{fontSize:'$lg', paddingRight:'$2'}} icon={<FaGithub fill="currentColor" />} color="primary" flat>
                View on Github
            </Button>
            
        </Link> : null}
        {liveDemo == true ?
            <Link  href={liveDemoLink} target={'_blank'} css={{paddingLeft:'$6'}}>
            <Button css={{fontSize:'$lg', paddingLeft:'$6'}} icon={<CgMediaLive fill="currentColor" />} color="secondary" flat>
                Live Demo
            </Button>
            
        </Link> : null}
            
         {customButton == true ? <Button bordered rounded color={'gradient'} css={{marginLeft:'$6'}}>Current page</Button> : null}
         </Container>
     
     
       </Card.Body>

</Card>


)

}

export default Customcard