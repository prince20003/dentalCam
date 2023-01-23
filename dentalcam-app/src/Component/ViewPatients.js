import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useLocation, useNavigate, } from 'react-router-dom';
import ViewPatientStyle from '../Style/ViewPatientStyle';
import { patientdele } from '../actions';
import { useDispatch } from 'react-redux';

function ViewPatients() {
    const location = useLocation(); 
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/patients')
    }
    const handledele = () =>{
        dispatch(patientdele(location.state.pid));
        navigate('/patients')
    }
    return (
        <>
            <ViewPatientStyle>
                <Box className='main'>
                    <>
                        <Box className='mainbo'>
                                <ArrowBackIcon className='back' onClick={handleBack} sx={{cursor:'pointer'}} />
                            <Box className='mainbox'>
                                <Box className='bt'>
                                    <Link to='/patients/update' state={location.state} style={{textDecoration:'none'}}><Button variant="contained" className='updatebtn'>Update</Button></Link>
                                    <Button variant="contained" className='delbtn' onClick={handledele}>Delete</Button>
                                </Box>
                                <Box className='det'>
                                    <Box>
                                    <Typography variant='body1' className='createcliniclogo'>First Name</Typography>
                                    <Typography variant='body1' className='createcliniclogo'>Last Name</Typography>
                                    <Typography variant='body1' className='createcliniclogo'>Date Of Birth</Typography>
                                    </Box>
                                    <Box>
                                    <Typography variant='body1' className='createcliniclogo'>{location.state.patientDAta.firstname}</Typography>
                                    <Typography variant='body1' className='createcliniclogo'>{location.state.patientDAta.lastname}</Typography>
                                    <Typography variant='body1' className='createcliniclogo'>{location.state.patientDAta.dob}</Typography>
                                    </Box>
                                </Box>
                                <Box className='det2'>
                                    <Box className='hr1'/>
                                    <Button variant="contained" className='updatebtn'>Photos</Button>
                                    <Button variant="contained" className='otpbtn'>OPT</Button>
                                    <Box className='hr2' />
                                </Box>
                            </Box>
                        </Box>
                    </>
                </Box>
            </ViewPatientStyle>
        </>
    )
}
export default ViewPatients