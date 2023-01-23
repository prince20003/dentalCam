import { Box, Card, CardContent, CardMedia, Grid, Table, TableBody, TableCell, TableRow } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import Profilestyle from '../Style/Profilestyle'

function ProfilePatients() {
    const userdetail = useSelector((state)=>state.dentalreducers.userinfo)
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
                                   {
                                    userdetail.map((elem)=>(
                                        <TableBody>
                                        <TableRow>
                                            <TableCell className='cell'>Clinic Name</TableCell>
                                            <TableCell className='cell'>{elem.userData.clinicname}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className='cell'>Email</TableCell>
                                            <TableCell className='cell'>{elem.userData.email}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className='cell'>Plan-Name</TableCell>
                                            <TableCell className='cell'>{elem.userData.plan}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className='cell'>Expiry Date</TableCell>
                                            <TableCell className='cell'>{elem.userData.date}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className='cell'>Password</TableCell>
                                            <TableCell className='cell'>{elem.userData.password}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                    ))
                                   }
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

export default ProfilePatients