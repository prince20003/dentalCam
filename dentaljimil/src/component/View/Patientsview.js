import React, { useState } from 'react'
import { Box, Button, Container, Grid, Paper, Table, TableBody, TableCell, TableRow, TextField, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useLocation, } from 'react-router-dom';
import Main from '../../Style/StylePatientsview';
import Divider from '@mui/material/Divider';
import { useDispatch, useSelector } from 'react-redux';
import { imgdele, uplodeimg } from '../../Action';
import { render } from '@testing-library/react';


function Patientsview() {
    // let imgdata = [];
    const vp = useLocation()
    const dispatch = useDispatch()
    const listim = useSelector((state) => state.Dental.patientsdata)
    const [data, setData] = useState({
        Firstname: vp.state.pdata.Firstname,
        Lastname: vp.state.pdata.Lastname,
        Dateofbirth: vp.state.pdata.Dateofbirth,
    })

    const Img = (e) => {
        const reder = new FileReader()

        reder.addEventListener("load", () => {

            console.log(reder.result);
            dispatch(uplodeimg(reder.result, vp.state.pid))
        })
        reder.readAsDataURL(e[0])

    }
let imgdata =""
    for (let i = 0; i < listim.length; i++) {
        console.log(listim[i].photos, "forloop");
        if (listim[i].pid === vp.state.pid) {
            imgdata=listim[i].photos

        }
    }
    const imgdelete = (elem) => {
        console.log("ffff");
        dispatch(imgdele(elem,imgdata))
    }


    return (
        <>
            <Main>
                <Box className='main'>
                    <>
                        <Box className='mainbo'>
                            <Link to='/clinic'>
                                <ArrowBackIcon className='back' />
                            </Link>
                            <Box className='mainbox'>


                                <Box className='bt'>
                                    <Link to='/Update' ><Button variant="contained" className='updatebtn'>Update</Button></Link>
                                    <Button variant="contained" className='delbtn'>Delete</Button>
                                </Box>
                                <p></p>
                                <Box> <Grid container spacing={1} >
                                    <Grid item xs={2}>

                                        <Typography variant='body1' className='createcliniclogo'>First Name</Typography>
                                    </Grid>

                                    <Grid item xs={10}>
                                        <Typography variant='body1' className='createcliniclogo'>{data.Firstname}</Typography>
                                    </Grid>

                                    <Grid item xs={2}>
                                        <Typography variant='body1' className='createcliniclogo'>Last Name</Typography>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Typography variant='body1' className='createcliniclogo'>{data.Lastname}</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography variant='body1' className='createcliniclogo' >Date Of Birth</Typography>  </Grid>
                                    <Grid item xs={10}>
                                        <Typography variant='body1' className='createcliniclogo'>{data.Dateofbirth}</Typography>
                                    </Grid>

                                </Grid></Box>


                                <Box className='det2'>
                                    <Divider >

                                        <Button variant="contained" className='photobtn'>Photos</Button>
                                        <Button variant="contained" className='otpbtn'>OPT</Button>
                                    </Divider>
                                </Box>
                                <Box>

                                </Box>
                                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                                    {imgdata.map((elem) =>{
                                           return (
                                                <Grid item xs={4} sm={4} md={3} >
                                                    <Box sx={{ position: 'relative' }}>
                                                        < img src={elem.images} style={{ width: '200px', height: '200px', margin: '20px' }} />
                                                        <Button className='imgdele' >
                                                            <svg  onClick={()=>imgdelete(elem)} class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" viewBox="0 0 24 24" aria-hidden="true" data-testid="DeleteIcon" ><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
                                                        </Button> 

                                                    </Box>
                                                </Grid>
                                            )
                                    
                              
                                                    })  }


                                </Grid>

                                <Box className='ex'>
                                    <Button variant="contained" component="label" >
                                        Upload
                                        <input hidden accept="image/*" type="file" onChange={(e) => Img(e.target.files)} />
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </>
                </Box>
            </Main>
        </>
    )
}

export default Patientsview
