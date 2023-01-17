import { Box, Button, Container, Paper, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material'
import React from 'react'
import Main from './Styleview'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useLocation } from 'react-router-dom';

function View() {
const vi= useLocation()
  return (
    <>
  <Main>
      <Box className='main'>
        <Container >
       <Box className='mainbo'>
        <Link to='/clinic'>
       <ArrowBackIcon className='back'/>
       </Link>
       <Box className='mainbox'>
       <Typography variant='h1' className='createcliniclogo'>View Clinic</Typography>

       <Box sx={{ width: '100%',marginTop:'15px' }}>
          <Paper className='paper'>
            <Table >
                  <TableBody>
                  <TableRow>
                      <TableCell>Clinic Name</TableCell>
                      <TableCell>{vi.state.data.Clinicname}</TableCell>
                  </TableRow>
                  <TableRow>
                      <TableCell>User Name</TableCell>
                      <TableCell>{vi.state.data.Username}</TableCell>
                  </TableRow>
                  <TableRow>
                      <TableCell>Email</TableCell>
                      <TableCell>{vi.state.data.Email}</TableCell>
                  </TableRow>
                  <TableRow>
                      <TableCell>Plan-Name</TableCell>
                      <TableCell>{vi.state.data.plan}</TableCell>
                  </TableRow>
                  <TableRow>
                      <TableCell>Expiry Date</TableCell>
                      <TableCell>{vi.state.data.date}</TableCell>
                  </TableRow>
                  <TableRow>
                      <TableCell>Active</TableCell>
                      <TableCell></TableCell>
                  </TableRow>
                  
              </TableBody>
                                    
                                  </Table>
                                  <Box className='bt'>
                                  <Link to='/Update' state={vi.state}><Button variant="contained" className='updatebtn'>Update</Button></Link>
                                    <Button variant="contained" className='delbtn'>Delete</Button>

                                  </Box>
          </Paper>
      
    </Box>
       </Box>
       </Box>
      </Container>
        </Box>
    </Main>
    </>
  )
}

export default View
