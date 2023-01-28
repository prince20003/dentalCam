import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Container, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Butt from '../Style/Buttonstyle';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../actions';
import { useDispatch } from "react-redux"
import Userstyle from '../Style/Userstyle';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

function Adduser() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };
    const [userData, setUserData] = useState({
        clinicname: "",
        email: "",
        username: "",
        password: "",
        date: "",
        plan: "",
        role: "admin_patients"
    })
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleChange = (event) => {
        setUserData({ ...userData, plan: event.target.value });
    };

    const handleBack = () => {
        navigate('/clinics')
    }

    const handlecreate = () =>{
      if(userData.clinicname === "" || userData.email === "" || userData.password === "" || userData.date === "" || userData.plan === "" ){
        setOpen(true)
      }
    else{
        dispatch(addUser(userData),
        setUserData({
            clinicname: "",
            email: "",
            username: "",
            password: "",
            date: "",
            plan: "",
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
                                <Typography variant='h1' className='createcliniclogo'>Create Clinic</Typography>
                                <Box sx={{ width: '100%', marginTop: '28px' }}>
                                    <form autoComplete='off'>
                                        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 12, md: 12 }}>
                                            <Grid item xs={6} >
                                                <TextField sx={{ width: '100%', }} variant='outlined' label='Clinic Name' value={userData.clinicname} onChange={(e) => setUserData({ ...userData, clinicname: e.target.value })} />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField sx={{ width: '100%' }} variant='outlined' label='Email' value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField sx={{ width: '100%' }} variant='outlined' label='User Name' value={userData.username} onChange={(e) => setUserData({ ...userData, username: e.target.value })} />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormControl sx={{ width: '100%' }} variant="outlined" onChange={(e) => setUserData({ ...userData, password: e.target.value })}>
                                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                                    <OutlinedInput
                                                        id="outlined-adornment-password"
                                                        type={showPassword ? 'text' : 'password'}
                                                        value={userData.password}
                                                        endAdornment={
                                                            <InputAdornment position="end">
                                                                <IconButton
                                                                    aria-label="toggle password visibility"
                                                                    onClick={handleClickShowPassword}
                                                                    onMouseDown={handleMouseDownPassword}
                                                                    edge="end"
                                                                >
                                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                                </IconButton>
                                                            </InputAdornment>
                                                        }
                                                        label="Password"
                                                    />
                                                </FormControl>         </Grid>
                                            <Grid item xs={6}>
                                                <TextField type='date' fullWidth value={userData.date} onChange={(e) => setUserData({ ...userData, date: e.target.value })} />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">Plan</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={userData.plan}
                                                        label="Plan"
                                                        onChange={handleChange}
                                                    >
                                                        <MenuItem value="Monthly Dental Plan PRO">Monthly Dental Plan PRO</MenuItem>
                                                        <MenuItem value="3-Monthly Dental Plan PRO">3-Monthly Dental Plan PRO</MenuItem>
                                                        <MenuItem value="Annual  Dental Plan PRO">Annual  Dental Plan PRO</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Butt>
                                                    <Button variant='contained' fullWidth className='loginb' onClick={() => handlecreate()}>Create</Button>
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

export default Adduser