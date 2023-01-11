import { Box } from '@mui/material'
import React from 'react'
import Contactus from '../Component/Contactus'
import Footer from '../Component/Footer'
import LeftSlidbar from '../Component/Leftslidbar'

function ContactPage() {
  return (
    <>
    <Box sx={{display:'flex'}}>
       <LeftSlidbar/>
       <Contactus/>
    </Box>
    <Footer/>
    
    </>
  )
}

export default ContactPage