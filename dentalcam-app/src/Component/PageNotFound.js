import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import Butt from '../Style/Buttonstyle'
import { useNavigate } from 'react-router-dom'
import PageNotStyle from '../Style/PageNotStyle';

function PageNotFound() {
    const navigate = useNavigate();
    const handleHome = ()=>{
        navigate('/clinics')
    }
  return (
    <>
    <PageNotStyle>
    <Box className='main'>
        <Container >
       <Box className='mainbo'>
      <Box className='box'>
        <Typography component='p' sx={{fontWeight:'700',fontSize:'2rem',lineHeight:'1.5',margin:'0',marginBottom:'16px',fontFamily:'Public Snas,sans-serif'}}>Sorry, page not found!</Typography>
        <Typography component='p' sx={{fontWeight:'200',color:'gray',lineHeight:'1.5',margin:'0',marginBottom:'16px',fontFamily:'Public Snas,sans-serif'}}>Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling.
        </Typography>
        <img className="MuiBox-root css-ms6sww  img404" src="https://dentalcam.app/static/illustrations/illustration_404.svg" alt='NotFound'/>
        <Butt>
        <Button className='loginb' variant='contained' onClick={handleHome}>Go to Home</Button>
        </Butt>
        </Box>
       </Box>
      </Container>
        </Box>




    </PageNotStyle>
    </>
  )
}

export default PageNotFound