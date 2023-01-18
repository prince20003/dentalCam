import { Button, Container, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system'
import React,{useState} from 'react'
import Main from '../../Style/Styleupdate';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useDispatch } from 'react-redux';
import {  update } from '../../Action';
import { useLocation } from 'react-router-dom';
function Update() {
    const dispatch = useDispatch()
   const up=useLocation()
    const [data, setData] = useState({
      Clinicname:up.state.data.Clinicname,
      Email:up.state.data.Email,
      Username:up.state.data.Username,
      password:up.state.data.password,
      date:up.state.data.date,
      plan:up.state.data.plan,
      
      
    })
      const [showPassword, setShowPassword] = React.useState(false);
  
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
  
    const handleChange = (event) => {
      setData({...data,plan:event.target.value});
    };
  
        
  return (
     <Main>
      <Box className='main'>
        <Container >
       <Box className='mainbo'>
       <ArrowBackIcon className='back'/>
       <Box className='mainbox'>
       <Typography variant='h1' className='createcliniclogo'>Update Clinic</Typography>

       <Box sx={{ width: '100%',marginTop:'28px' }}>
        
     <form autoComplete='off'>
     <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={6}>
            <TextField fullWidth variant='outlined' label='Clinic Name' onChange={(e) => setData({...data,Clinicname: e.target.value})} value={data.Clinicname} autoComplete="off"/>
        </Grid>
        <Grid item xs={6} >
        <TextField fullWidth variant='outlined' label='Email' autoComplete="off" onChange={(e) => setData({...data,Email: e.target.value})} value={data.Email}/>

        </Grid>
        <Grid item xs={6}>
        <TextField fullWidth variant='outlined' label='User Name'autoComplete="off" onChange={(e) => setData({...data,Username: e.target.value})} value={data.Username}/>

        </Grid>
        <Grid item xs={6}>
        <FormControl fullWidth variant="outlined" onChange={(e) => setData({...data,password: e.target.value})} >
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={data.password}
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
           <TextField type='date' fullWidth onChange={(e) => setData({...data,date: e.target.value})} value={data.date}/>
        </Grid>
        <Grid item xs={6}>
        <FormControl fullWidth onChange={(e) => setData({...data,plan: e.target.value})} value={data.plan}>
        <InputLabel id="demo-simple-select-label">Plan</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={data.plan}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value='Monthly Dental Plan PRO'>Monthly Dental Plan PRO</MenuItem>
          <MenuItem value='3-Monthly Dental Plan PRO'>3-Monthly Dental Plan PRO</MenuItem>
          <MenuItem value='Annual  Dental Plan PRO'>Annual  Dental Plan PRO</MenuItem>
        </Select>
      </FormControl>
         </Grid>
         <Grid item xs={12}>
         <Button className='Createbtn'  variant="contained" onClick={() => dispatch(update(up.state.id,data))}><b>Update</b></Button>

        </Grid>
      </Grid>
     </form>
    </Box>
       </Box>
       </Box>
      </Container>
        </Box>
    </Main> 
  )
}

export default Update
