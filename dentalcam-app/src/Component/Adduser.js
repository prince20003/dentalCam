import React from 'react'
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
import { useNavigate } from 'react-router-dom';

function Adduser() {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleBack = () =>{
        navigate('/clinics')
    }

    return (
        <>
            <Userstyle>

                <Box className='main'>
                    <Container >
                        <Box className='mainbo'>
                            <ArrowBackIcon className='back' onClick={handleBack} sx={{cursor:'pointer'}} />
                            <Box className='mainbox'>
                                <Typography variant='h1' className='createcliniclogo'>Create Clinic</Typography>
                                <Box sx={{ width: '100%', marginTop: '28px' }}>
                                    <form autoComplete='off'>
                                    <Grid container spacing={{ xs: 2, md: 2 }}  columns={{ xs: 4, sm: 8, md: 12 }}>
                                        <Grid item xs={6} >
                                            <TextField sx={{ width: '100%', }} variant='outlined' label='Clinic Name' />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField sx={{ width: '100%' }} variant='outlined' label='Email' />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField sx={{ width: '100%' }} variant='outlined' label='User Name' />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <FormControl sx={{ width: '100%' }} variant="outlined">
                                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-password"
                                                    type={showPassword ? 'text' : 'password'}
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
                                            <TextField type='date' fullWidth />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Plan</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={age}
                                                    label="Age"
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={10}>Monthly Dental Plan PRO</MenuItem>
                                                    <MenuItem value={20}>3-Monthly Dental Plan PRO</MenuItem>
                                                    <MenuItem value={30}>Annual  Dental Plan PRO</MenuItem>
                                                </Select>
                                            </FormControl>
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

export default Adduser