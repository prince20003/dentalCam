import {  Paper, Typography } from '@mui/material'
import React from 'react'
import Fo from '../Style/Footer'



function Foot() {
  return (
    <Fo>
      <Paper elevation={3} className='main'>
            <Typography variant='body1' className='a'>Copyright © 2022 <a href='/' className='delink'>  DentalCam</a></Typography>
          
            <Typography  variant='p' sx={{paddingRight:'30px'}}><a href='./Contact' target="_blank" rel="noreferrer">Contact Us</a>

            <Typography variant='span' className='footerline'>|</Typography>
            <a href="/TermsAndCondition" target="_blank" rel="noreferrer">Terms and Condition</a>
            <Typography variant='span' className='footerline'>|</Typography>
            <a href="/Policy/" target="_blank" rel="noreferrer">Privacy Policy</a>
          </Typography>
      </Paper>
    </Fo>
  )
}

export default Foot
