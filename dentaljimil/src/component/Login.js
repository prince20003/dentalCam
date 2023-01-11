import { Box, Button, Checkbox, Container, FormControl, FormControlLabel, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Logmain from './Style'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Foot from './Foot';
function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Logmain>
      <Box className='main'>
        <Paper elevation={1} className='mainbox' >
          <img className='logo' alt='' src='https://dentalcam.app/static/logo.png' />
          <h2 style={{ textAlign: 'center' }}><span style={{fontFamily:'Public Sans,sans-serif',background: 'linear-gradient(90deg, rgb(171, 48, 177) 0%, rgb(91, 114, 180) 70%)',WebkitBackgroundClip:'text' ,color: 'transparent'}}>DentalCam</span></h2>
       
        <img className='lo' alt='' src='https://dentalcam.app/static/illustrations/illustration_login.png' />
      </Paper >
      <Container>

        <Box className='textfil2'>
          <Typography variant='h5' sx={{ fontFamily: 'Public Sans,sans-serif', fontWeight: '700', lineHeight: '1.5' }}><b>Sign in to DentalCam</b></Typography>
          <form className='form'>
            <TextField sx={{ marginTop: '0px', width: '480px', borderRadius: 10 }} id="outlined-basic" label="Username" variant="outlined" />
            <FormControl sx={{ marginTop: '24px', width: '480px' }} variant="outlined">
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
            </FormControl>

            <FormControlLabel sx={{ marginTop: '16px' }} control={<Checkbox defaultChecked sx={{ '&.Mui-checked': { color: '#0B3379' }, }} />} label="Remember me" />
            <Button className='log'  variant="contained"><b>Login</b></Button>

          </form>
        </Box>
      </Container>
    </Box>
    <Foot/>
    </Logmain >
  )
}

export default Login
  
