import React, { useState } from 'react'
import Box from '@mui/material/Box';
import AB from './Loginstyle'
import Butt from './Buttonstyle'
import { Button, Card, Checkbox, FormControl, FormControlLabel, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Footer from './Footer'
import { useForm } from "react-hook-form";


const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  // const [values, setValues] = useState({
  //   username: '',
  //   password: ''
  // })

  const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'all', });
  const onSubmit = (data) => console.log(data);


  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  // const handleChange = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value })
  // }

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   console.log("click")
  // }

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
              <form autoComplete='off' onSubmit={handleSubmit(onSubmit)} >
                <Box className='formdata'>
                  <TextField id="outlined-basic" sx={{ borderRadius: '8px' }} label="Username" variant="outlined" color="success" name='username'
                    {...register("username", { required: 'User Name is required' })}
                    error={Boolean(errors.username)}
                    helperText={errors.username?.message}
                  />
                  <FormControl sx={{ marginTop: '24px', borderRadius: '8px' }} variant="outlined" color="success" name='password'
                    {...register("password", { required: 'Password is required' })}
                    error={Boolean(errors.password)}
                  >
                    <InputLabel htmlFor="outlined-adornment-password" name='password'>Password</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword ? 'text' : 'password'}
                      name='password'
                      label="Password"
                      
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}

                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    <FormHelperText>{errors.password?.message}</FormHelperText>
                  </FormControl>
                  <FormControlLabel className='check' control={<Checkbox defaultChecked sx={{ '&.Mui-checked': { color: '#0B3379' }, paddingLeft: '0px' }} />} label="Remember me" />
                  <Butt>
                    <Button variant="contained" className='loginb' fullWidth type='Submit' >Login</Button>
                  </Butt>
                </Box>
              </form>
            </Box>
          </Container>
        </Box>
        <Footer />
      </AB>
    </>
  )
}

export default LoginPage