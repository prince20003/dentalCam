import { Box } from '@mui/material'
import React from 'react'
import Footer from '../Component/Footer'
import LeftSlidbar from '../Component/Leftslidbar'
import Profile from '../Component/Profile'

function ProfilePage() {
  return (
   <>
   
    <Box sx={{display:'flex'}}>
       <LeftSlidbar/>
       <Profile/>
    </Box>
   <Footer/>
   </>
  )
}

export default ProfilePage