import { Box } from '@mui/material'
import React from 'react'
import Adduser from '../Component/Adduser'
import LeftSlidbar from '../Component/Leftslidbar'

function CreateUserPage() {
  return (
    <>
     <Box sx={{display:'flex'}}>
        <LeftSlidbar/>
        <Adduser/>
     </Box>
    </>
  )
}

export default CreateUserPage