import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Butt from '../Style/Buttonstyle';
import { useNavigate } from 'react-router-dom';
import Userstyle from '../Style/Userstyle';
import { useDispatch } from 'react-redux';
import { Addpatient } from '../actions';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
function AddPatients() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [patientdata,setPatientdata] = useState({
        firstname : '',
        lastname : '',
        dob : '',
    })
    const [open, setOpen] = useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };
    const handleBack = () => {
        navigate('/patients')
    }
 
    const handlePatient = () =>{
       if(patientdata.firstname === "" || patientdata.lastname === "" || patientdata.dob === ""){
          setOpen(true)
       }
       else{
        dispatch(Addpatient(patientdata), 
        setPatientdata({
            firstname: "",
            lastname: "",
            dob: "",
        }))
    }
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
                                                <TextField  fullWidth variant='outlined' label='First Name' value={patientdata.firstname} onChange={(e)=>setPatientdata({...patientdata,firstname:e.target.value})} />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField  fullWidth variant='outlined' label='Last Name' value={patientdata.lastname} onChange={(e)=>setPatientdata({...patientdata,lastname:e.target.value})} />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField type='date' fullWidth value={patientdata.dob} onChange={(e)=>setPatientdata({...patientdata,dob:e.target.value})} />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Butt>
                                                    <Button variant='contained' fullWidth className='loginb' onClick={() => handlePatient() }>Create</Button>
                                                </Butt>
                                            </Grid>
                                        </Grid>
                                    </form>
                                    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                                        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                                            Please Fill All The Filed
                                        </Alert>
                                    </Snackbar>
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