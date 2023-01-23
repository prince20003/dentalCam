import React, { useState } from 'react'
import Userstyle from '../Style/Userstyle'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Container, FormControl, Grid, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system'
import IconButton from '@mui/material/IconButton';
import Butt from '../Style/Buttonstyle';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { editStaff } from '../actions';


function UpdateStaff() {
    const location = useLocation(); 
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [updates, setUpdates] = useState({
        firstname: location.state.staffDATA.firstname,
        lastname: location.state.staffDATA.lastname,
        username: location.state.staffDATA.username,
        password: location.state.staffDATA.password,
    })
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleBack = () => {
        navigate('/staffs')
    }
    return (
        <>
            <Userstyle>

                <Box className='main'>
                    <Container >
                        <Box className='mainbo'>
                            <ArrowBackIcon className='back' onClick={handleBack} sx={{ cursor: 'pointer' }} />
                            <Box className='mainbox'>
                                <Typography variant='h1' className='createcliniclogo'>Update Staffs</Typography>
                                <Box sx={{ width: '100%', marginTop: '28px' }}>
                                    <form autoComplete='off'>
                                        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 12, md: 12 }}>
                                            <Grid item xs={6} >
                                                <TextField fullWidth variant='outlined' label='First Name' value={updates.firstname} onChange={(e) => setUpdates({ ...updates, firstname: e.target.value })}/>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField fullWidth variant='outlined' label='Last Name' value={updates.lastname} onChange={(e) => setUpdates({ ...updates, lastname: e.target.value })}/>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField variant='outlined' label='User Name'  fullWidth value={updates.username} onChange={(e) => setUpdates({ ...updates, username: e.target.value })} />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormControl sx={{ width: '100%' }} variant="outlined"  onChange={(e)=>setUpdates({...updates,password:e.target.value})}>
                                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                                    <OutlinedInput
                                                        id="outlined-adornment-password"
                                                        type={showPassword ? 'text' : 'password'}
                                                        value={updates.password}
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
                                            <Grid item xs={12}>
                                                <Butt>
                                                    <Button variant='contained' fullWidth className='loginb' onClick={()=>dispatch(editStaff(updates,location.state.sid))}>Update</Button>
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

export default UpdateStaff