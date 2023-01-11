import { Button, Container, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'
import Main from './Stylecont';

import Foot from '../Foot';

function Cont() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  return (
    <Main>
      <Box className='main'>
        <Container >
          <Box className='mainbo'>
            <Container className='mainbox'>
              <Box className='boxlogo'>
                <img className='logo' alt='' src='https://dentalcam.app/static/logo.png' />
              </Box>
              <h3 style={{ textAlign: 'center', margin: '0px' }}><span style={{ fontFamily: 'Public Sans,sans-serif', background: 'linear-gradient(90deg, rgb(171, 48, 177) 0%, rgb(91, 114, 180) 70%)', WebkitBackgroundClip: 'text', color: 'transparent', fontSize: '18.32px' }}>DentalCam</span></h3>
              <Typography variant='h2' className='createcliniclogo'>Contact Us</Typography>

              <Box sx={{ width: '100%', marginTop: '15px' }}>

                <form autoComplete='off'>
                  <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={6}>
                      <TextField fullWidth variant='outlined' label='First Name' />
                    </Grid>
                    <Grid item xs={6} >
                      <TextField fullWidth variant='outlined' label='Last Name' />

                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth variant='outlined' label='Email' />

                    </Grid>
                    <Grid item xs={12} >
                      <TextField multiline rows={7} fullWidth variant='outlined' label='Message' />

                    </Grid>


                    <Grid item xs={12}>
                      <Button className='Createbtn' variant="contained"><b>Create</b></Button>

                    </Grid>
                  </Grid>
                </form>
              </Box>
            </Container>
          </Box>
        </Container>
      </Box>
      <Foot />
    </Main>
  )
}

export default Cont
