import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system'
import Butt from '../Style/Buttonstyle';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import CircularProgress from '@mui/material/CircularProgress';
import { useState, useEffect } from 'react';
import Userstyle from '../Style/Userstyle';

function Contactus() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [])






    const handleBack = () => {

        navigate('/clinics')
    }
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'all', });
    const onSubmit = (data) => console.log(data);
    return (
        <>
            <Userstyle>
                <Box className='main'>
                    <Container>
                        <Box className='mainbo'>
                            {
                                loading ?
                                    <CircularProgress sx={{marginTop:'200px',marginLeft:'400px'}} />
                                    :
                                    <>

                                        <ArrowBackIcon className='back' onClick={handleBack} sx={{ cursor: 'pointer' }} />
                                        <Box className='mainbox'>
                                            <Typography variant='h1' className='createcliniclogo'>Contact Us</Typography>
                                            <Box sx={{ width: '100%', marginTop: '15px' }}>
                                                <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                                                    <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                                                        <Grid item xs={6}  >
                                                            <TextField fullWidth variant='outlined' label='First Name' name='firstname' color='success'
                                                                {...register("firstname", { required: 'First Name is required' })}
                                                                error={Boolean(errors.firstname)}
                                                                helperText={errors.firstname?.message}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <TextField fullWidth variant='outlined' label='Last Name' name='lastname' color='success'
                                                                {...register("lastname", { required: 'Last Name is required' })}
                                                                error={Boolean(errors.lastname)}
                                                                helperText={errors.lastname?.message}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <TextField sx={{ width: '100%' }} variant='outlined' label='Email' color='success' />
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
                                        </Box>

                                    </>
                            }
                        </Box>
                    </Container>
                </Box>
            </Userstyle>
        </>
    )
}

export default Contactus