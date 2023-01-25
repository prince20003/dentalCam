import { Box, Paper, Table, TableBody, TableCell, TableRow } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import Prof from '../../Style/Styleprofile'


function Profilepatints() {
    const info = useSelector((state) => state.Dental.info)
console.log(info[0].data);
  return (
    <>
    <Prof>
    <Box >
        <Box className='main'>
        <Paper className='peper'>
            <Box>
                <img alt='' className='prologo' src='https://dentalcam.app/static/mock-images/avatars/avatar_default.jpg'></img>
            </Box>  
            <Box className='table'>
            <Table >
               { info.map((row)=>(
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Clinic Name</TableCell>
                                            <TableCell>{row.data.Clinicname}</TableCell>
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
                                            <TableCell>Password</TableCell>
                                            <TableCell>{row.data.password}</TableCell>
                                        </TableRow>
                                    </TableBody>
))}
                                  </Table>

            </Box>
        </Paper>
            </Box>
    </Box >
    </Prof>
    </>
  )
}

export default Profilepatints
