import { Box, Paper, Table, TableBody, TableCell, TableRow } from '@mui/material'
import React from 'react'
import Prof from '../../Style/Styleprofile'


function Profile() {
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
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>First Name</TableCell>
                                            <TableCell>Admin</TableCell>
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
                                    </TableBody>
                                  </Table>

            </Box>
        </Paper>
            </Box>
    </Box >
    </Prof>
    </>
  )
}

export default Profile
