import React from 'react'
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system'
import Butt from './Buttonstyle';
import Contactstyled from './Contactstyle';
import Footer from './Footer';

function Contact() {
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
                                    <form autoComplete='off'>
                                        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                                            <Grid item xs={6} >
                                                <TextField sx={{ width: '100%',}} variant='outlined' label='First Name' />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField sx={{ width: '100%', }} variant='outlined' label='Last Name' />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField sx={{ width: '100%' }} variant='outlined' label='Email'/>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    id="outlined-multiline-static"
                                                    label="Message"
                                                    multiline
                                                    rows={7}
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Butt>
                                                    <Button variant='contained' fullWidth className='loginb'>Sumbit</Button>
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