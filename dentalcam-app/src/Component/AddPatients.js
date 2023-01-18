import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system'
import Butt from '../Style/Buttonstyle';
import { useNavigate } from 'react-router-dom';
import Userstyle from '../Style/Userstyle';

function AddPatients() {
    const navigate = useNavigate()

    const handleBack = () => {
        navigate('/patients')
    }

    return (
        <>
            <Userstyle>

                <Box className='main'>
                    <Container >
                        <Box className='mainbo'>
                            <ArrowBackIcon className='back' onClick={handleBack} sx={{ cursor: 'pointer' }} />
                            <Box className='mainbox'>
                                <Typography variant='h1' className='createcliniclogo'>Create Patients</Typography>
                                <Box sx={{ width: '100%', marginTop: '28px' }}>
                                    <form autoComplete='off'>
                                        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 12, md: 12 }}>
                                            <Grid item xs={6} >
                                                <TextField  fullWidth variant='outlined' label='First Name'/>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField  fullWidth variant='outlined' label='Last Name' />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField type='date' fullWidth />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Butt>
                                                    <Button variant='contained' fullWidth className='loginb'>Create</Button>
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

export default AddPatients