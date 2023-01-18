import { Box, Button, Card, CardContent, Grid, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material'
import React from 'react'
import Profilestyle from '../Style/Profilestyle'
import Userstyle from '../Style/Userstyle'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function ViewUser() {
    const location = useLocation();
    const navigate = useNavigate();
    const handleBack = () =>{
        navigate('/clinics')
    }
    return (
        <>
            <Profilestyle>
                <Box className='mprofile'>
                    <Box>
                        <Grid container sx={{ justifyContent: 'center' }}>
                            <Grid xs={12} md={6} lg={6}>
                                <Userstyle>
                                    <Box sx={{ display: 'flex',marginLeft:'-50px' }}>
                                        <ArrowBackIcon className='back' onClick={handleBack} sx={{ cursor: 'pointer' }} />
                                        <Box className='mainbox'>
                                            <Typography variant='h1' className='createcliniclogo'>View Clinic</Typography>
                                        </Box>
                                    </Box>
                                </Userstyle>

                                <Card sx={{ boxShadow: '0 0 2px 0 rgb(145 158 171 / 24%), 0 16px 32px -4px rgb(145 158 171 / 24%)', borderRadius: '16px', marginTop: '20px' }}>
                                    <CardContent className='cardc'>
                                        <Table>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell className='cell'>Clinc Name</TableCell>
                                                    <TableCell className='cell'>{location.state.data.clinicname}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className='cell'>User Name</TableCell>
                                                    <TableCell className='cell'>{location.state.data.username}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className='cell'>Email</TableCell>
                                                    <TableCell className='cell'>{location.state.data.email}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className='cell'>Plan name</TableCell>
                                                    <TableCell className='cell'>{location.state.data.plan}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className='cell'>Active</TableCell>
                                                    <TableCell className='cell'>Active</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className='cell'>Expiry Date</TableCell>
                                                    <TableCell className='cell'>{location.state.data.date}</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Link style={{textDecoration:'none'}}  to='/clinics/update' state={location.state}><Button variant='contained' className='update'>Update</Button></Link>
                                            <Button variant='contained' className='delete'>Delete</Button>
                                        </Box>
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

export default ViewUser