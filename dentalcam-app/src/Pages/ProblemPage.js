import { Box } from '@mui/material'
import React from 'react'
import Footer from '../Component/Footer'
import LeftSlidbar from '../Component/Leftslidbar'
import Problem from '../Component/Problem'

function ProblemPage() {
  return (
    <>
    <Box sx={{display:'flex'}}>
       <LeftSlidbar/>
       <Problem/>
    </Box>
    <Footer/>
    </>
  )
}

export default ProblemPage