import React, { useState } from 'react'
import Box from '@mui/material/Box';
import AB from './Loginstyle'
import Butt from './Buttonstyle'
import { Button, Card, Checkbox, FormControl, FormControlLabel, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Footer from './Footer'
import MediaLogin from './MediaLogin';


const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({
    username: '',
    password: ''
  })

  // const { data, handleSubmit,errors } = useForm();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("click")
  }

  return (
    <>
      <AB>
        <Box className='main'>
          <Card className='leftside'>
            <img src="https://dentalcam.app/static/logo.png" alt="logo" className='logo' />
            <h2 style={{ textAlign: "center", margin: '0px' }}>
              <span className='title'>
                DentalCam
              </span>
            </h2>
            <img src="https://dentalcam.app/static/illustrations/illustration_login.png" alt="login" className='loginimg2' />
          </Card>
          <Container maxWidth="sm" className='rightside'>
            <Box className='detail'>
              <Box className='de'>
                <Typography variant='h4' className='sign' >Sign in to DentalCam</Typography>
              </Box>
              <form autoComplete='off'>
                <Box className='formdata'>
                  <TextField id="outlined-basic" sx={{ borderRadius: '8px' }} label="Username" variant="outlined" color="success" name='username' value={values.username} onChange={handleChange} />
                  <FormControl sx={{ marginTop: '24px', borderRadius: '8px' }} variant="outlined" color="success" name='password' value={values.password} onChange={handleChange}>
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword ? 'text' : 'password'}
                      label="Password"
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
                    />
                  </FormControl>
                  <FormControlLabel className='check' control={<Checkbox defaultChecked sx={{ '&.Mui-checked': { color: '#0B3379' }, paddingLeft: '0px' }} />} label="Remember me" />
                  <Butt>
                    <Button variant="contained" className='loginb' fullWidth onClick={handleLogin}>Login</Button>
                  </Butt>
                </Box>
              </form>
            </Box>
          </Container>
        </Box>
        <MediaLogin>
          <Footer />
        </MediaLogin>
      </AB>
    </>
  )
}

export default LoginPage