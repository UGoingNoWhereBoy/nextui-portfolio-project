import React from 'react'
import { Container, Text, Card } from '@nextui-org/react'




const About = () => {



  return (
    <Container css={{margin:'$12'}} id='2'>
      <Card isHoverable>
        <Card.Header css={{'justifyContent':'center'}}>
            <Text size={25} css={{'@xs':{fontSize:'$4xl'}, '@sm':{fontSize:'$7xl'},}}>About</Text>
        </Card.Header>
        <Card.Body css={{display:'flex', 'flexDirection':'row', justifyContent:'center'}}>
          <Text size={20} weight={'bold'}>
           Im Eyad a 20 years old, in the past few months ive worked really hard to get here ,
           ive learnt a lot , struggled a lot , googled a lot.
           for my projects i aim to make each one with unique new tech ive learnt ,
           every project i publish here is a good project with new ideas which took  a lot of effort
           i just love computer software and always wanting to learn more and im just getting started
           </Text>
        </Card.Body>
      </Card>
      
    </Container>
  )
}

export default About