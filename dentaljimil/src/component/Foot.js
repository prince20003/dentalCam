import { Button, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Fo from './Footer'



function Foot() {
  return (
    <Fo>
      <Paper elevation={3} className='main'>
            <Typography variant='body1' className='a'>Copyright © 2022 <a href='https://dentalcam.app/login' className='delink'>  DentalCam</a></Typography>
          
            <Typography  variant='p' sx={{paddingRight:'30px'}}><a href='./Contact' target="_blank" rel="noreferrer">Contact Us</a>

            <Typography variant='span' className='footerline'>|</Typography>
            <a href="/TermsAndCondition" target="_blank" rel="noreferrer">Terms and Condition</a>
            <Typography variant='span' className='footerline'>|</Typography>
            <a href="https://dentalcam.app/Policy/" target="_blank" rel="noreferrer">Privacy Policy</a>
          </Typography>
      </Paper>
    </Fo>
  )
}

export default Foot
