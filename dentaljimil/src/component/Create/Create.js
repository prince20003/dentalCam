import { Button, Container, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'
import Main from './StyleCreate';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function Create() {
    const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

      
  return (
    <Main>
      <Box className='main'>
        <Container >
       <Box className='mainbo'>
       <ArrowBackIcon className='back'/>
       <Box className='mainbox'>
       <Typography variant='h1' className='createcliniclogo'>Create Clinic</Typography>

       <Box sx={{ width: '100%',marginTop:'28px' }}>
        
     <form autoComplete='off'>
     <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={6}>
            <TextField fullWidth variant='outlined' label='Clinic Name'/>
        </Grid>
        <Grid item xs={6} >
        <TextField fullWidth variant='outlined' label='Email'/>

        </Grid>
        <Grid item xs={6}>
        <TextField fullWidth variant='outlined' label='User Name'/>

        </Grid>
        <Grid item xs={6}>
        <FormControl fullWidth variant="outlined">
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
           <TextField type='date' fullWidth/>
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
         <Button className='Createbtn'  variant="contained"><b>Create</b></Button>

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

export default Create
