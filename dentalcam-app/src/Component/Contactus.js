import React from 'react'
import Userstyle from './Userstyle'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system'
import Butt from './Buttonstyle';
import { useNavigate } from 'react-router-dom';

function Contactus() {
    const navigate = useNavigate();
    const handleBack = ()=>{
        navigate('/clinics')
    }
    return (
        <>
            <Userstyle>
                <Box className='main'>
                    <Container>
                        <Box className='mainbo'>
                            <ArrowBackIcon className='back' onClick={handleBack} sx={{cursor:'pointer'}} />
                            <Box className='mainbox'>
                                <Typography variant='h1' className='createcliniclogo'>Contact Us</Typography>
                                <Box sx={{ width: '100%', marginTop: '15px' }}>
                                    <form autoComplete='off'>
                                        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                                            <Grid item xs={6}  >
                                                <TextField fullWidth variant='outlined' label='First Name' />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField fullWidth variant='outlined' label='Last Name' />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField sx={{ width: '100%' }} variant='outlined' label='Email' />
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
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Userstyle>
        </>
    )
}

export default Contactus