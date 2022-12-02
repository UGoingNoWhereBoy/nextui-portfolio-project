import React from 'react'
import { Container, Text, Card } from '@nextui-org/react'




const About = () => {



  return (
    <Container css={{margin:'$12'}} id='2'>
      <Card isHoverable>
        <Card.Header css={{'justifyContent':'center'}}>
            <Text size={25} css={{'@xs':{fontSize:'$4xl'}, '@sm':{fontSize:'$7xl'},}} color='error'>My journey</Text>
        </Card.Header>
        <Card.Body css={{display:'flex', 'flexDirection':'row', justifyContent:'center'}}>
          <Text size={20} weight={'bold'}>
          Hi , im a 20 year old programmer

            My journey started 6-7 months ago

            I wont say what level i am for any of my skills 
            Because I don’t know how i would rate my self
            You can see my projects and judge me based on them

            The way i learn something is just reading the docs 
            Watch a basic tutorial if its needed then starting building a project with it without any help besides google and stackoverflow 



            <Text color='secondary' size={20} weight={'bold'}>
              All projects on my profile made only by me from scracth i would never copy others projects and make it my own, You're welcome to use my code as long you give credits.</Text>
              <Text size={20} color='error'>I Used NextUI for this page and it might have some bugs and thats because NextUI still in beta and minority of people use it, so there are only few sources and people talking about the issues </Text>

           </Text>
        </Card.Body>
      </Card>
      
    </Container>
  )
}

export default About