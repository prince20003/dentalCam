import { Box } from '@mui/system'
import React from 'react'
import Data from '../Component/Data'
import Footer from '../Component/Footer'
import Leftslidbar from '../Component/Leftslidbar'

function Clinics() {
  return (
    <>
     <Box sx={{display:'flex',flexDirection:'row'}}>
        <Leftslidbar/>
        <Data/>
     </Box>
     <Footer/>
    
    </>
  )
}

export default Clinics