import { Button, Container, Grid,  TextField, Typography } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'
import Main from './Stylecont';

import Foot from '../Foot';
import { useForm } from "react-hook-form";

function Cont() {
 
  const { register, handleSubmit, formState: { errors } } = useForm({mode: "all",});
  const onSubmit = (data) => console.log(data);


  return (
    <>
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

                <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                  <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                    <Grid item xs={6}>
                      <TextField fullWidth variant='outlined' label='First Name' 
                       name='firstname'
                       {...register("firstname", { required: 'First Name is required' })}
                       error={Boolean(errors.firstname)}
                       helperText={errors.firstname?.message} />
                    </Grid>
                    <Grid item xs={6} >
                      <TextField fullWidth variant='outlined' label='Last Name'
                      name='lastname'
                      {...register("lastname", { required: 'Last Name is required' })}
                      error={Boolean(errors.lastname)}
                      helperText={errors.lastname?.message} />

                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth variant='outlined' label='Email' />

                    </Grid>
                    <Grid item xs={12} >
                      <TextField multiline rows={7} fullWidth variant='outlined' label='Message' />

                    </Grid>


                    <Grid item xs={12}>
                      <Button className='Createbtn' type='Submit' variant="contained"><b>Create</b></Button>

                    </Grid>
                  </Grid>
                </form>
              </Box>
            </Container>
          </Box>
        </Container>
      </Box>
    </Main>
          <Foot />
          </>

  )
}

export default Cont
