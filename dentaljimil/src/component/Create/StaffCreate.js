import { Button, Container, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system'
import React,{useState} from 'react'
import Main from '../../Style/StyleCreate';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useDispatch } from 'react-redux';
import { addcreate, staffcreate } from '../../Action';

function StaffCreate() {
  const dispatch = useDispatch()

  const [data, setData] = useState({
    Firstname:'',
    Lastname:'',
    Username:'',
    password:'',
    
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
       <Typography variant='h1' className='createcliniclogo'>Staff Create</Typography>

       <Box sx={{ width: '100%',marginTop:'28px' }}>
        
     <form autoComplete='off'>
     <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={6}>
            <TextField fullWidth variant='outlined' label='First Name' onChange={(e) => setData({...data,Firstname: e.target.value})} value={data.Firstname} autoComplete="off"/>
        </Grid>
        <Grid item xs={6} >
        <TextField fullWidth variant='outlined' label='Last Name' autoComplete="off" onChange={(e) => setData({...data,Lastname: e.target.value})} value={data.Lastname}/>

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
        
        <Grid item xs={12}>
         <Button className='Createbtn'  variant="contained" onClick={() => dispatch(staffcreate(data),setData({Firstname:'',
    Lastname:'',
    Username:'',
    password:'',
    }))}><b>Create</b></Button>

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

export default StaffCreate
