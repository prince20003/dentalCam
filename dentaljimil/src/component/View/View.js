import { Box, Button, Container, Paper, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material'
import React from 'react'
import Main from './Styleview'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSelector } from 'react-redux';

function View() {
    const view = useSelector((state) => state.Dental.view)

  return (
    <>
  <Main>
      <Box className='main'>
        <Container >
       <Box className='mainbo'>
       <ArrowBackIcon className='back'/>
       <Box className='mainbox'>
       <Typography variant='h1' className='createcliniclogo'>View Clinic</Typography>

       <Box sx={{ width: '100%',marginTop:'15px' }}>
          <Paper className='paper'>
            <Table >
            {view.map((row) => (
                  <TableBody>
                  <TableRow>
                      <TableCell>Clinic Name</TableCell>
                      <TableCell>{row.data.Clinicname}</TableCell>
                  </TableRow>
                  <TableRow>
                      <TableCell>User Name</TableCell>
                      <TableCell>{row.data.Username}</TableCell>
                  </TableRow>
                  <TableRow>
                      <TableCell>Email</TableCell>
                      <TableCell>{row.data.Email}</TableCell>
                  </TableRow>
                  <TableRow>
                      <TableCell>Plan-Name</TableCell>
                      <TableCell>{row.data.plan}</TableCell>
                  </TableRow>
                  <TableRow>
                      <TableCell>Expiry Date</TableCell>
                      <TableCell>{row.data.date}</TableCell>
                  </TableRow>
                  <TableRow>
                      <TableCell>Active</TableCell>
                      <TableCell></TableCell>
                  </TableRow>
                  
              </TableBody>
          ))} 
                                    {/* <TableBody>
                                        <TableRow>
                                            <TableCell>Clinic Name</TableCell>
                                            <TableCell>{view.Cinicname}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Last Name</TableCell>
                                            <TableCell>Admin</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Plan-Name</TableCell>
                                            <TableCell>3-Month Dental Plan PRO</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Expiry Date</TableCell>
                                            <TableCell>10-07-2022</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Password</TableCell>
                                            <TableCell></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Password</TableCell>
                                            <TableCell></TableCell>
                                        </TableRow>
                                    </TableBody> */}
                                  </Table>
                                  <Box className='bt'>
                                    <Button variant="contained" className='updatebtn'>Update</Button>
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
