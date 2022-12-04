import { Card, Container, Grid } from '@nextui-org/react'
import React from 'react'

const Footer = () => {
  return (
    <Container css={{textAlign:'center'}}>
        <Card>
            <Grid css={{padding:'$8'}}>
                All rights reserved  @Eyad
            </Grid>
        </Card>
    </Container>
  )
}

export default Footer