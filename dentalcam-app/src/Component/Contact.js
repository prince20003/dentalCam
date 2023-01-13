import React from 'react'
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system'
import Butt from './Buttonstyle';
import Contactstyled from './Contactstyle';
import Footer from './Footer';
import { useForm } from 'react-hook-form';

function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'all', });
    const onSubmit = (data) => console.log(data);
    return (
        <>
            <Contactstyled>
                <Box className='main'>
                    <Container>
                        <Box className='mainbo'>
                            <Container className='mainbox'>
                                <Box className='contactbox'>
                                    <img src="https://dentalcam.app/static/logo.png" alt="logo" className='logo1' />
                                </Box>
                                <h2 style={{ textAlign: "center", margin: '0px' }}>
                                    <span className='title' style={{ fontSize: '20px' }}>
                                        DentalCam
                                    </span>
                                </h2>
                                <Typography variant='h1' className='createcliniclogo'>Contact Us</Typography>
                                <Box sx={{ marginTop: '15px' }}>
                                    <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                                        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                                            <Grid item xs={6} >
                                                <TextField sx={{ width: '100%',}} variant='outlined' label='First Name' color='success' name='firstname'
                                                 {...register("firstname", { required: 'First Name is required' })}
                                                 error={Boolean(errors.firstname)}
                                                 helperText={errors.firstname?.message}
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField sx={{ width: '100%', }} variant='outlined' label='Last Name' color='success' name='lastname' 
                                                 {...register("lastname", { required: 'Last Name is required' })}
                                                 error={Boolean(errors.lastname)}
                                                 helperText={errors.lastname?.message}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField sx={{ width: '100%' }} variant='outlined' label='Email' color='success'/>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    id="outlined-multiline-static"
                                                    label="Message"
                                                    multiline
                                                    rows={7}
                                                    fullWidth
                                                    color='success'
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Butt>
                                                    <Button variant='contained' fullWidth className='loginb' type='sumbit'>Sumbit</Button>
                                                </Butt>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Box>
                            </Container>
                        </Box>
                    </Container>
                </Box>
                <Footer/>
            </Contactstyled >
        </>
    )
}

export default Contact