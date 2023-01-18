import React,{useState} from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Container, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system'
import Butt from '../Style/Buttonstyle';
import { useNavigate } from 'react-router-dom';
import Userstyle from '../Style/Userstyle';
import { Visibility, VisibilityOff } from '@mui/icons-material';

function AddStaff() {
    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleBack = () => {
        navigate('/patintes')
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
                                                <TextField sx={{ width: '100%', }} variant='outlined' label='First Name'/>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField sx={{ width: '100%' }} variant='outlined' label='Last Name' />
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

export default AddStaff