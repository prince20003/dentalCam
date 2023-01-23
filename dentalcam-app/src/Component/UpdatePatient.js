import React, { useState } from 'react'
import Userstyle from '../Style/Userstyle'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system'
import IconButton from '@mui/material/IconButton';
import Butt from '../Style/Buttonstyle';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { editPatient } from '../actions';


function UpdatePatient() {
    const location = useLocation(); 
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [updatep, setUpdatep] = useState({
        firstname: location.state.patientDAta.firstname,
        lastname: location.state.patientDAta.lastname,
        dob: location.state.patientDAta.dob,
    })
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
                                <Typography variant='h1' className='createcliniclogo'>Update Patients</Typography>
                                <Box sx={{ width: '100%', marginTop: '28px' }}>
                                    <form autoComplete='off'>
                                        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 12, md: 12 }}>
                                            <Grid item xs={6} >
                                                <TextField fullWidth variant='outlined' label='First Name' value={updatep.firstname} onChange={(e) => setUpdatep({ ...updatep, firstname: e.target.value })}/>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField fullWidth variant='outlined' label='Last Name' value={updatep.lastname} onChange={(e) => setUpdatep({ ...updatep, lastname: e.target.value })}/>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField type='date' fullWidth value={updatep.dob} onChange={(e) => setUpdatep({ ...updatep, dob: e.target.value })} />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Butt>
                                                    <Button variant='contained' fullWidth className='loginb' onClick={()=>dispatch(editPatient(updatep,location.state.pid))}>Update</Button>
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

export default UpdatePatient