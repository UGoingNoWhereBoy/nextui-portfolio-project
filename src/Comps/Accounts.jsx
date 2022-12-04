import React from 'react'
import { Text, Avatar, Card, Col, Grid, Button, Link, Container, Spacer } from '@nextui-org/react'
import { FaSteam } from 'react-icons/fa'
import Github from '../assets/github.png'
import Discord from '../assets/discord.png'
import Linkedin from '../assets/linkedin.png'
import Steam from '../assets/steam.png'

const Accounts = () => {
  return (
    <Container  display='flex' justify='center' alignContent='center' id='1'>

        <Grid  css={{minWidth:'330px', marginBottom:'$12'}}>
            <Card css={{mw: '330px'}} isHoverable>
                <Card.Header>
                  <Avatar css={{'marginLeft':'auto', 'marginRight':'auto'}} src={Github}></Avatar>  
                 
                </Card.Header>
                <Text h3 css={{"textAlign": 'center'}}>GitHub</Text>
                <Text h5 css={{"textAlign": 'center'}}>UGoingNoWhereBoy</Text>
                <Card.Body>
                      <Link css={{marginLeft:'auto', marginRight:'auto'}}
                      href='https://github.com/UGoingNoWhereBoy' target={'_blank'}>
                    
                        <Button color="gradient" css={{width:'250px'}}>
                            Add me
                        </Button>
                        </Link>
                
               
                </Card.Body>
                
            </Card>
        </Grid>
        <Spacer x={2}/>
    
        <Grid  css={{minWidth:'330px',marginBottom:'$12'}}>
            <Card css={{mw: '330px'}} isHoverable>
                <Card.Header>
                  <Avatar css={{'marginLeft':'auto', 'marginRight':'auto'}} src={Discord}></Avatar>  
                 
                </Card.Header>
                <Text h3 css={{"textAlign": 'center'}}>Discord</Text>
                <Text h5 css={{"textAlign": 'center'}}>UGoingNoWhereBoy#1736</Text>
                <Card.Body>
                <Link css={{marginLeft:'auto', marginRight:'auto'}}
                      href='https://discord.com/users/UGoingNoWhereBoy#1736' target={'_blank'}>
                    
                        <Button color="primary" css={{width:'250px'}}>
                            Add me
                        </Button>
                        </Link>
                </Card.Body>
                
            </Card>
        </Grid>
        <Spacer x={2}/>
        <Grid  css={{minWidth:'330px'}}>
            <Card css={{mw: '330px'}} isHoverable>
                <Card.Header>
                  <Avatar css={{'marginLeft':'auto', 'marginRight':'auto'}} src={Linkedin}></Avatar>  
                </Card.Header>
                <Text h3 css={{"textAlign": 'center'}}>LinkedIn</Text>
                <Text h5 css={{"textAlign": 'center'}}>Eyad .</Text>
                <Card.Body>
                <Link href='https://www.linkedin.com/in/eyad-93327b244/' target='_blank' 
                css={{marginLeft:'auto', marginRight:'auto'}}>
                    
                        <Button color="primary" css={{width:'250px'}}>
                            Add me
                        </Button>
                        </Link>
                </Card.Body>
                
            </Card>
        </Grid>
        <Spacer x={2}/>
        <Grid  css={{minWidth:'330px', marginBottom:'$12', marginTop:'$8'}}>
            <Card css={{mw: '330px'}} isHoverable>
                <Card.Header>
                  <Avatar css={{'marginLeft':'auto', 'marginRight':'auto'}} src={Steam}></Avatar>  
                 
                </Card.Header>
                <Text h3 css={{"textAlign": 'center'}}>Steam</Text>
                <Text h5 css={{"textAlign": 'center'}}>UGoingNoWhereBoy</Text>
                <Card.Body>
                      <Link css={{marginLeft:'auto', marginRight:'auto'}}
                      href='https://steamcommunity.com/profiles/76561199161141214/' target={'_blank'}>
                    
                        <Button color="gradient" css={{width:'250px'}}>
                            Game with me
                        </Button>
                        </Link>
                
               
                </Card.Body>
                
            </Card>
        </Grid>
        <Spacer x={2}/>
    </Container>
 
  )
}

export default Accounts