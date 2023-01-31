import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { Button, Card, Checkbox, FormControl, FormControlLabel, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Container } from '@mui/system';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Footer from './Footer'
import AB from '../Style/Loginstyle';
import Butt from '../Style/Buttonstyle';
import { useDispatch, useSelector } from 'react-redux';
import { LoginD } from '../actions';
import { useNavigate } from 'react-router-dom';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const LoginPage = () => {
  const [open, setOpen] = React.useState(false);
  const [op, setOp] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    setOp(false)
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [val, setVal] = useState({
    username: '',
    password: ''
  })
  const list = useSelector((state) => state.dentalreducers.list)
  // const user = useSelector((state) => state.dentalreducers.LoginData)

  useEffect(() => {
    let name = JSON.parse(localStorage.getItem("LoginDetail")) ? JSON.parse(localStorage.getItem("LoginDetail")) : ''
    if (name.username === "admin") {
      navigate("/clinics")
    }
    for (let i = 0; i < list.length; i++) {
      if (name.username === list[i].data.username && name.password === list[i].data.password) {
        navigate('/patients')
      }
    }
    })

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // const handleLogin = () => {
  //   for (let i = 0; i < list.length; i++) {
  //     if (val.username === "admin" && val.password === "Test@123") {
  //       navigate('/clinics')
  //     }
  //     else if (val.username === list[i].data.username && val.password === list[i].data.password) {
  //       navigate('/patients')
  //     }
  //     else if (val.username === "" && val.password === ""){
  //       setOp(true)
  //     } 
  //     else if(val.username === "" && val.password !== ""){
  //       setOpen(true);
  //     }

  //     else if (i === list.length - 1 && ((val.username !== list[i].data.username && val.password !== list[i].data.password) ||
  //       (val.username === list[i].data.username && val.password !== list[i].data.password) ||
  //       (val.username !== list[i].data.username && val.password === list[i].data.password) ||
  //       (val.username !== "admin" && val.password !== "Test@123") ||
  //       (val.username === "admin" && val.password !== "Test@123") ||
  //       (val.username !== "admin" && val.password === "Test@123") 
  //     )) {
  //       setOpen(true);
  //     }
  //   }
  //   dispatch(LoginD(val))
  //   setVal({
  //     username: '',
  //     password: ''
  //   })
  // }

  const handleLogin = () => {
    const lDetail = JSON.stringify(val);
    localStorage.setItem("LoginDetail", lDetail);
    if (val.username === "admin" && val.password === "Test@123") {
      navigate('/clinics')
      window.location.reload();
    }
    else if (val.username === "" || val.password === "") {
      setOp(true)
    }
    for (let i = 0; i < list.length; i++) {
      if (val.username === "admin" && val.password === "Test@123") {
        navigate('/clinics')
      }
      if (val.username === list[i].data.username && val.password === list[i].data.password) {
        navigate('/patients')
        window.location.reload();
      }
      else if (val.username === "" || val.password === "") {
        setOp(true)
      }
      else if (i === list.length - 1 && ((val.username !== list[i].data.username && val.password !== list[i].data.password) ||
        (val.username === list[i].data.username && val.password !== list[i].data.password) ||
        (val.username !== list[i].data.username && val.password === list[i].data.password) ||
        (val.username !== "admin" && val.password !== "Test@123")
        (val.username === "admin" && val.password !== "Test@123") ||
        (val.username !== "admin" && val.password === "Test@123")
      )) {
        setOpen(true);
      }

    }
    dispatch(LoginD(val))
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
              <form autoComplete='off' >
                <Box className='formdata'>
                  <TextField id="outlined-basic" sx={{ borderRadius: '8px' }} label="Username" variant="outlined" color="success" name='username'
                    value={val.username}
                    onChange={(e) => setVal({ ...val, username: e.target.value })}
                  />
                  <FormControl sx={{ marginTop: '24px', borderRadius: '8px' }} variant="outlined" color="success" name='password'
                    onChange={(e) => setVal({ ...val, password: e.target.value })}
                  >
                    <InputLabel htmlFor="outlined-adornment-password" name='password'>Password</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword ? 'text' : 'password'}
                      name='password'
                      label="Password"
                      value={val.password}
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
                  </FormControl>
                  <FormControlLabel className='check' control={<Checkbox defaultChecked sx={{ '&.Mui-checked': { color: '#0B3379' }, paddingLeft: '0px' }} />} label="Remember me" />
                  <Butt>
                    <Button variant="contained" className='loginb' fullWidth onClick={handleLogin} >Login</Button>
                  </Butt>
                </Box>
              </form>
              <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                  Invalid Username or Password!
                </Alert>
              </Snackbar>
              <Snackbar open={op} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                  Please Enter UserName and Password!
                </Alert>
              </Snackbar>
            </Box>
          </Container>
        </Box>
        <Footer />
      </AB>
    </>
  )
}

export default LoginPage