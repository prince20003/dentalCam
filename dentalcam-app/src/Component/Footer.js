import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import FooterStyle from './Footerstyle'

function Footer() {
  return (
    <>
      <FooterStyle>
        <Box className="footer">
          <Typography variant='p' className='copy'>Copyright © 2022
            <a href="/" target="_blank" rel="noreferrer" style={{paddingLeft:'2px'}}>DentalCam</a>
          </Typography>
          <Typography  variant='p' className='tc'><a href="./contact-us" target="_blank" rel="noreferrer">Contact Us</a>
            <Typography variant='span' className='footerline'>|</Typography>
            <a href="/TermsAndConditions" target="_blank" rel="noreferrer">Terms and Condition</a>
            <Typography variant='span' className='footerline'>|</Typography>
            <a href="/Policy" target="_blank" rel="noreferrer">Privacy Policy</a>
          </Typography>
        </Box>
      </FooterStyle>

    </>
  )
}

export default Footer