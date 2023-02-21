import { Box, Button, Checkbox, Container, FormControl, FormControlLabel, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Foot from './Foot';
import { useForm } from "react-hook-form";
import Logmain from '../Style/Style';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { log } from '../Action';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);
  const [op, setOp] = React.useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "all", });
  const list = useSelector((state) => state.Dental.list)
  const lo = useSelector((state) => state.Dental.logindata)
  useEffect(() => {


    for (let i = 0; i < list.length; i++) {

      if (lo[0].data.username === 'admin' && lo[0].data.username !== "") {
        navigate('/clinic')
        console.log("hhh");
      }
      else if (lo[0].data.username !== '' && lo[0].data.username === list[i].data.Username && lo[0].data.password === list[i].data.password) {
        navigate('/patients')
      }


    }

  })
  const [logdata, setLogdata] = useState({
    username: '',
    password: ''
  })

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const onSubmit = () => {

    const al = JSON.stringify(logdata)
    localStorage.setItem("logindata", al)

    if (logdata.username === "admin" && logdata.password === "Test@123") {
      navigate('/clinic')
      window.location.reload();


    }
    else if (logdata.username === "" || logdata.password === "") {
      setOp(true)
    }
    for (let i = 0; i < list.length; i++) {

      if (logdata.username === "admin" && logdata.password === "Test@123") {
        navigate('/clinic')
        break;

      }
       else if (logdata.username === list[i].data.Username && logdata.password === list[i].data.password) {
        navigate('/patients')
        break;

      }
      else if(i === list.length-1 && ((logdata.username !== list[i].data.Username && logdata.password !== list[i].data.password ) ||
        (logdata.username !== list[i].data.Username && logdata.password === list[i].data.password) ||
        (logdata.username === list[i].data.Username && logdata.password !== list[i].data.password )||
          (logdata.username !== "admin" && logdata.password !== "Test@123")||
          (logdata.username === "admin" && logdata.password !== "Test@123") ||
          (logdata.username !== "admin" && logdata.password === "Test@123")
          ) ){
            console.log("ll");
            setOpen(true);
          }

    }
    dispatch(log(logdata), setLogdata({
      username: '',
      password: ''
    }))

  }


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    setOp (false);
  };
  return (
    <Logmain>
      <Box className='main'>
        <Paper elevation={1} className='mainbox' >
          <img className='logo' alt='' src='https://dentalcam.app/static/logo.png' />
          <h2 style={{ textAlign: 'center' }}><span style={{ fontFamily: 'Public Sans,sans-serif', background: 'linear-gradient(90deg, rgb(171, 48, 177) 0%, rgb(91, 114, 180) 70%)', WebkitBackgroundClip: 'text', color: 'transparent' }}>DentalCam</span></h2>

          <img className='lo' alt='' src='https://dentalcam.app/static/illustrations/illustration_login.png' />
        </Paper >
        <Container>

          <Box className='textfil2'>
            <Typography variant='h5' sx={{ fontFamily: 'Public Sans,sans-serif', fontWeight: '700', lineHeight: '1.5' }}><b>Sign in to DentalCam</b></Typography>
            <form className='form' >
              <TextField sx={{ marginTop: '0px', width: '480px', borderRadius: 10 }} id="outlined-basic" label="Username" variant="outlined" name='username'

                onChange={(e) => setLogdata({ ...logdata, username: e.target.value })}
                value={logdata.username} />
              <FormControl sx={{ marginTop: '24px', width: '480px' }} variant="outlined"

                onChange={(e) => setLogdata({ ...logdata, password: e.target.value })}
              >

                <InputLabel htmlFor="outlined-adornment-password" >Password</InputLabel>

                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  value={logdata.password}

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
                <FormHelperText >
                  {errors.password?.message}        </FormHelperText>
              </FormControl>

              <FormControlLabel sx={{ marginTop: '16px' }} control={<Checkbox defaultChecked sx={{ '&.Mui-checked': { color: '#0B3379' }, }} />} label="Remember me" />
              <Button className='log' type="Submit" variant="contained" onClick={handleSubmit(onSubmit)}><b>Login</b></Button>

            </form>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}
              sx={{ marginBottom: '80px' }}>
              <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                Invalid Username or Password!
              </Alert>
            </Snackbar>

            <Snackbar open={op} autoHideDuration={3000} onClose={handleClose} sx={{ marginBottom: '80px' }}>
              <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                Please Enter UserName and Password!
              </Alert>
            </Snackbar>
          </Box>
        </Container>
      </Box>
      <Foot />
    </Logmain >
  )
}

export default Login

