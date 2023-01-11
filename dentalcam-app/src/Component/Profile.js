import { Box, Card, CardContent, CardMedia, Grid, Table, TableBody, TableCell, TableRow } from '@mui/material'
import React from 'react'
import Profilestyle from './Profilestyle'

function Profile() {
    return (
        <>
            <Profilestyle>
                <Box className='mprofile'>
                    <Box>
                    <Grid container sx={{justifyContent:'center'}}>
                        <Grid xs={12} md={6} lg={6}>
                            <Card sx={{boxShadow: '0 0 2px 0 rgb(145 158 171 / 24%), 0 16px 32px -4px rgb(145 158 171 / 24%)',borderRadius:'16px'}}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="200px"
                                    image="https://dentalcam.app/static/mock-images/avatars/avatar_default.jpg"
                                />
                                <CardContent className='cardc'>
                                  <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className='cell'>First Name</TableCell>
                                            <TableCell className='cell'>Admin</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className='cell'>Last Name</TableCell>
                                            <TableCell className='cell'>Admin</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className='cell'>Plan-Name</TableCell>
                                            <TableCell className='cell'>3-Month Dental Plan PRO</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className='cell'>Expiry Date</TableCell>
                                            <TableCell className='cell'>10-07-2022</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className='cell'>Password</TableCell>
                                            <TableCell className='cell'></TableCell>
                                        </TableRow>
                                    </TableBody>
                                  </Table>
                                </CardContent>
                            </Card>

                        </Grid>
                    </Grid>
                    </Box>


                </Box>
            </Profilestyle>
        </>
    )
}

export default Profile