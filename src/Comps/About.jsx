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
            Hey, im Eyad a 20 years old self taught programmer, my journey started 6 months ago give or take,
            faced countless errors,bugs and loved solving them on my own by looking up the docs or google and sometimes youtube but i never copy and paste code and move on,
            first i understand the issue, write the solution as it is see what ive done wrong and then i re-write it the way i see fits my app,
            sometimes it can be really hard and i get stuck hours but the feeling once i make it work my way makes it worth it.
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