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
import {  patientscreate } from '../../Action';

function PatientsCreate() {
  const dispatch = useDispatch()

  const [data, setData] = useState({
    Firstname:'',
    Lastname:'',
    Dateofbirth:'',

    
  })
 

      
  return (
    <Main>
      <Box className='main'>
        <Container >
       <Box className='mainbo' >
       <ArrowBackIcon className='back'/>
       <Box className='mainbox'>
       <Typography variant='h1' className='createcliniclogo'>Create Patients </Typography>

       <Box sx={{ width: '100%',marginTop:'28px' }}>
        
     <form autoComplete='off'>
     <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={6}>
            <TextField fullWidth variant='outlined' label='First Name' onChange={(e) => setData({...data,Firstname: e.target.value})} value={data.Firstname} autoComplete="off"/>
        </Grid>
        <Grid item xs={6} >
        <TextField fullWidth variant='outlined' label='Last Name' autoComplete="off" onChange={(e) => setData({...data,Lastname: e.target.value})} value={data.Lastname}/>

        </Grid>
      
        <Grid item xs={12}>
           <TextField type='date' fullWidth onChange={(e) => setData({...data,Dateofbirth: e.target.value})} value={data.Dateofbirth}/>
          
        </Grid>
        
         <Grid item xs={12}>
         <Button className='Createbtn'  variant="contained" onClick={() => dispatch(patientscreate(data),setData({Firstname:'',
    Lastname:'',
    Dateofbirth:'',
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

export default PatientsCreate
