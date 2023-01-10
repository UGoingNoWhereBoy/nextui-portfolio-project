import React from 'react'
import { Card, Link, Button, Text, Tooltip, Container, Grid, Popover} from "@nextui-org/react";
import { FaGithub } from 'react-icons/fa';
import { HiStatusOnline } from 'react-icons/hi'
import ReactPlayer from 'react-player/youtube'
import { useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'



const Customcard = ({cardtitle, isPrivate, cardurl, githublink, iconone,icontwo,iconthree,iconfour,iconfive,iconsix,
content1,content2,content3,content4,content5,content6, customButton, githubButton, liveDemo, customPadding, liveDemoLink, description}) => {

  const [isReady, Setready] = useState(false)

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

   
  <Card css={{marginTop:'$12', marginBottom:'$12', }} id='0'> 

   <Card.Header css={{flexWrap:'wrap', flexDirection:'column'}}>

         <Card isHoverable isPressable css={{maxW:'500px', textAlign:'center', marginRight:'auto',marginBottom:'$12'}}>

           <Text css={{textGradient: "45deg, $purple600 -20%, $pink600 100%",
            '@xsMax':{fontSize:'26px'}, '@xs':{fontSize:'50px'}}}>{cardtitle}</Text>
             <Popover placement={'bottom'}>
            <Popover.Trigger>
              <Button css={{width:'200px', ml:'auto', mr:'auto', mb:'$4'}} bordered color="secondary">{'Note'}</Button>
            </Popover.Trigger>
            <Popover.Content>
              <Text css={{ p: "$10" }}>
                {description}
              </Text>
            </Popover.Content>
          </Popover>
            
           </Card>
           <Grid css={{marginLeft:'auto', marginTop:'auto', marginBottom:'auto', width:'300px' ,'@xs':{width:'500px', '@sm':{width:'800px'}}}}>
           {isReady ? null  :
              <SkeletonTheme baseColor='#000' highlightColor='#262626'>
               <Skeleton count={1} width={800} height={400} />
               </SkeletonTheme>
               }
               <ReactPlayer controls url={cardurl}  pip={true} width={'100%'} onReady={() => Setready(true)} stopOnUnmount={false}/>
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
            <Button css={{fontSize:'$lg', paddingRight:'$2', marginBottom:'$8', marginRight:'$2'}} icon={<FaGithub fill="currentColor" />} color="primary" flat>
                View on Github
            </Button>
            
        </Link> : null}
        {isPrivate == true ?
            <Tooltip content='Private Repo'>
              <Button disabled  css={{fontSize:'$lg', paddingRight:'$2', marginBottom:'$8', marginRight:'$2'}} icon={<FaGithub fill="currentColor" />} color="primary" flat>
                  View on Github
              </Button>
            </Tooltip>
            
        : null}
        {liveDemo == true ?
            <Link  href={liveDemoLink} target={'_blank'} css={{paddingLeft:'$6'}}>
            <Button css={{'@sm':{marginTop:'$0'},'@xs':{marginTop:'-10px'}, fontSize:'$lg'}} icon={<HiStatusOnline fill="currentColor" />} color="secondary" flat>
                Live Demo
            </Button>
            
        </Link> : null}
            
         {customButton == true ? <Button bordered rounded color={'gradient'} css={{'@sm':{marginTop:'$0', marginLeft:'$0'},'@xs':{marginTop:'$1', marginLeft:'$4'}}}>Current page</Button> : null}
         </Container>
     
     
       </Card.Body>

</Card>


)

}

export default Customcard