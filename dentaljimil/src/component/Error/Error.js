import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import Main from './Styleerror'

function Error() {
  return (
    <Main>
      <Box className='main'>
        <Container >
       <Box className='mainbo'>
       
      <Box className='box'>
        <Typography component='p' sx={{fontWeight:'700',fontSize:'2rem',lineHeight:'1.5',margin:'0',marginBottom:'16px',fontFamily:'Public Snas,sans-serif'}}>Sorry, page not found!</Typography>
        <Typography component='p' sx={{fontWeight:'200',color:'gray',lineHeight:'1.5',margin:'0',marginBottom:'16px',fontFamily:'Public Snas,sans-serif'}}>Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling.
        </Typography>
        <img alt='' className="MuiBox-root css-ms6sww  img404" src="https://dentalcam.app/static/illustrations/illustration_404.svg"/>
        <Button className='btn'><a href='/clinic' style={{color:'white',textDecoration:'none'}}>Go to Home</a></Button>
        </Box>
       </Box>
      </Container>
        </Box>
    </Main>
  )
}

export default Error
