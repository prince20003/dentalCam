import React, { useState } from 'react'
import Userstyle from './Userstyle'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Container, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Butt from './Buttonstyle';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { editUser } from '../actions';

function UpdateUser() {
   const location =  useLocation()
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [update, setUpdate] = useState({
        clinicname: location.state.data.clinicname,
        email: location.state.data.email,
        username: location.state.data.username,
        password: location.state.data.password,
        date: location.state.data.date,
        plan: location.state.data.plan,
    
    })
    // console.log(update)

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleBack = () => {
        navigate('/clinics')
    }

   const handleUpdate = () =>{
    dispatch(editUser(location.state.id,update))
   }


    return (
        <>
            <Userstyle>

                <Box className='main'>
                    <Container >
                        <Box className='mainbo'>
                            <ArrowBackIcon className='back' onClick={handleBack} sx={{ cursor: 'pointer' }} />
                            <Box className='mainbox'>
                                <Typography variant='h1' className='createcliniclogo'>Update Clinic</Typography>
                                <Box sx={{ width: '100%', marginTop: '28px' }}>
                                    <form autoComplete='off'>
                                        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 12, md: 12 }}>
                                            <Grid item xs={6} >
                                                <TextField sx={{ width: '100%', }} variant='outlined' label='Clinic Name' value={update.clinicname} onChange={(e) => setUpdate({ ...update, clinicname: e.target.value })} />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField sx={{ width: '100%' }} variant='outlined' label='Email' value={update.email} onChange={(e) => setUpdate({ ...update, email: e.target.value })}  />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField sx={{ width: '100%' }} variant='outlined' label='User Name' value={update.username} onChange={(e) => setUpdate({ ...update, username: e.target.value })} />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormControl sx={{ width: '100%' }} variant="outlined" value={update.password}  >
                                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                                    <OutlinedInput
                                                        id="outlined-adornment-password"
                                                        type={showPassword ? 'text' : 'password'}
                                                        value={update.password}
                                                        onChange={(e) => setUpdate({ ...update, password: e.target.value })}
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
                                                <TextField type='date' fullWidth value={update.date} onChange={(e) => setUpdate({ ...update, date: e.target.value })}  />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">Plan</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={update.plan} onChange={(e) => setUpdate({ ...update, plan: e.target.value })}
                                                        label="Plan"
                                                       
                                                    >
                                                        <MenuItem value="Monthly Dental Plan PRO">Monthly Dental Plan PRO</MenuItem>
                                                        <MenuItem value="3-Monthly Dental Plan PRO">3-Monthly Dental Plan PRO</MenuItem>
                                                        <MenuItem value="Annual  Dental Plan PRO">Annual  Dental Plan PRO</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Butt>
                                                    <Button variant='contained' fullWidth className='loginb' onClick={handleUpdate}>Update</Button>
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

export default UpdateUser