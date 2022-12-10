import React from 'react'
import { Container, Text, Card } from '@nextui-org/react'




const About = () => {



  return (
    <Container css={{margin:'$12'}} id='2'>
      <Card isHoverable>
        <Card.Header css={{'justifyContent':'center'}}>
            <Text size={25} css={{'@xs':{fontSize:'$4xl'}, '@sm':{fontSize:'$7xl'},}} color='error'>journey</Text>
        </Card.Header>
        <Card.Body css={{display:'flex', 'flexDirection':'row', justifyContent:'center'}}>
          <Text size={20} weight={'bold'}>
           Thank you for visitng my portfolio,
            Im Eyad a 20 year's old programmer started this journey 7 months ago,
            i won't show a "Skills" section i think its useless because in this field you always don't know everything,
            i just learn by bulding projects , fall into a tons of errors 
            solve them, and publish my project , i always love to learn new stuff and build a new project with them,
            you can see each project what tech stack i used by hovering over the icons or clicking them if you're on a mobile,
           </Text>
        </Card.Body>
      </Card>
      
    </Container>
  )
}

export default About