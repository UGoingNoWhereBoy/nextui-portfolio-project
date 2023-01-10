import { Card, Container, Grid } from '@nextui-org/react'
import React from 'react'
import { SiNetlify } from 'react-icons/si'

const Footer = () => {
  return (
    <Container css={{textAlign:'left'}}>
        <Card>
            <Grid css={{padding:'$8'}}>
            Mady by Eyad
            
            </Grid>
            <Grid css={{marginBottom: '$8', ml: '$8' }}>
             Copyright © 2023 - All rights reserved
            </Grid>
            <Grid css={{marginBottom: '$8', textAlign:'center', mr: '$8' }}>
                <SiNetlify style={{fontSize: '24px'}} />
            </Grid>
        </Card>
    </Container>
  )
}

export default Footer