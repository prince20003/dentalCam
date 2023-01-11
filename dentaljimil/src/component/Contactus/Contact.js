import { Button, Container, Grid,TextField, Typography } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'
import Main from './StyleCon';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import IconButton from '@mui/material/IconButton';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormControl from '@mui/material/FormControl';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

function Contact() {
    

      
  return (
    <Main>
      <Box className='main'>
        <Container >
       <Box className='mainbo'>
       <ArrowBackIcon className='back'/>
       <Box className='mainbox'>
       <Typography variant='h1' className='createcliniclogo'>Contact Us</Typography>

       <Box sx={{ width: '100%',marginTop:'15px' }}>
        
     <form autoComplete='off'>
     <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 12, sm: 12, md: 12 }}>
        <Grid item xs={6}>
            <TextField fullWidth variant='outlined' label='First Name'/>
        </Grid>
        <Grid item xs={6} >
        <TextField fullWidth variant='outlined' label='Last Name'/>

        </Grid>
        <Grid item xs={12}>
        <TextField fullWidth variant='outlined' label='Email'/>

        </Grid>
        <Grid item xs={12} >
        <TextField multiline rows={7} fullWidth variant='outlined' label='Message'/>

        </Grid>
     
       
         <Grid item xs={12}>
         <Button className='Createbtn'  variant="contained"><b>Submit</b></Button>

        </Grid>
      </Grid>
     </form>
    </Box>
       </Box>
       </Box>
      </Container>
        </Box>
    </Main>
  )
}

export default Contact
