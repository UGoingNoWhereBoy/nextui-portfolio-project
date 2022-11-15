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
          <Text size={20} weight={'bold'}>Hey and thanks for checking my website out,
            All projects on my profile fully made by me and i would never post/showcase anything thats not mine,
            I faced countless errors, bugs,
             got stuck alot of times, looked stuff on google,stackoverflow, or any platform really and loved solving them without copying and pasting fixes because i always want to make my own project with my own ideas and my own code.
            <Text size={20} color='primary' weight={'bold'}>6 Months ago i took udamy's web full stack path course spent a month on it and as a result it was a waste of time</Text>
            <Text size={20} color='secondary' weight={'bold'}>3 Months ago Started learning Django through a youtube course and i made my first Project took about two weeks </Text>
            <Text size={20} color='error' weight={'bold'}>1 Month and 2 Weeks ago i started Learning ReactJs, TailwindCss, Apis and here where i started 
            really enjoying the code i write because reactjs and tailwindcss are fun and opend alot of doors for me i made my first project with reactjs,tailwindcss,api's
            it took a reactjs small course on youtube and i didn't do any tutorials for tailwindcss i just read the docs same for apis a bit of tutorials alot of practice
             and fixing errors</Text>
             <Text size={20} color='success' weight={'bold'}>2 Weeks ago i started learning NextJs/Auth/Mongodb and again it was super fun even though i got stuck alot of times making the auth and connecting to mongodb database 
             making the api methods such as delete and post and it was okay because i was totally new to all of it the same thing a course of the basics on youtube
             and playing around with the code and fixing errors and look them up on google, youtube, stackoverflow</Text>
             <Text size={20} color='primary' weight={'bold'}>This project, it wasn't as advanced in the logic as my previous projects 
             i made it in two days with NextUI, it was a bit painful because i never used UI Comps before i always hated bootstrap and i think it looks ugly but when i saw NextUI i really loved the design and the looks of it and i wanted to make something with it
             i struggled a bit because there is really not alot of resources and its not full yet i guess i faced some issues with the navbar and other stuff</Text>
            </Text>
        
        </Card.Body>
      </Card>
      
    </Container>
  )
}

export default About