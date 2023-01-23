import React,{useState} from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Container, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system'
import Butt from '../Style/Buttonstyle';
import { useNavigate } from 'react-router-dom';
import Userstyle from '../Style/Userstyle';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { addstaff } from '../actions';

function AddStaff() {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const [staffData,setStaffData] = useState({
        firstname : "",
        lastname : "",
        username : "",
        password : '',
    })
   
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
   
    const handleStaff = () =>{
        dispatch(addstaff(staffData))
        setStaffData({
        firstname : "",
        lastname : "",
        username : "",
        password : '',
        }) 
    }

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
                                <Typography variant='h1' className='createcliniclogo'>Create Staffs</Typography>
                                <Box sx={{ width: '100%', marginTop: '28px' }}>
                                    <form autoComplete='off'>
                                        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 12, md: 12 }}>
                                            <Grid item xs={6} >
                                                <TextField sx={{ width: '100%', }} variant='outlined' label='First Name' value={staffData.firstname} onChange={(e)=>setStaffData({...staffData,firstname:e.target.value})} />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField sx={{ width: '100%' }} variant='outlined' label='Last Name' value={staffData.lastname} onChange={(e)=>setStaffData({...staffData,lastname:e.target.value})}/>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField sx={{ width: '100%' }} variant='outlined' label='User Name' value={staffData.username} onChange={(e)=>setStaffData({...staffData,username:e.target.value})} />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormControl sx={{ width: '100%' }} variant="outlined"  onChange={(e)=>setStaffData({...staffData,password:e.target.value})}>
                                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                                    <OutlinedInput
                                                        id="outlined-adornment-password"
                                                        type={showPassword ? 'text' : 'password'}
                                                        value={staffData.password}
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
                                                    <Button variant='contained' fullWidth className='loginb' onClick={handleStaff}>Create</Button>
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

export default AddStaff