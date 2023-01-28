import React from 'react'
import { Box, Button, Dialog, DialogContent, FormControl, Grid, imageListItemBarClasses, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useLocation, useNavigate, } from 'react-router-dom';
import ViewPatientStyle from '../Style/ViewPatientStyle';
import { imgdele, patientdele, uploadimg } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import Divider from '@mui/material/Divider';
import Butt from '../Style/Buttonstyle';
import { useState } from 'react';
import jspdf from 'jspdf'
import jsPDF from 'jspdf';


function ViewPatients() {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [op, setOp] = useState(false);
    const [item, setItem] = useState('');

    const handleChange = (event) => {
        setItem(event.target.value);
    };
    const listimg = useSelector((state) => state.dentalreducers.PatientDATA)
    let displayimg = ""
    for (let u = 0; u < listimg.length; u++) {
        if (listimg[u].pid === location.state.pid) {
            displayimg = listimg[u].photos
        }
    }
    const setImgDetail1 = (e) => {
        const reder = new FileReader();
        reder.addEventListener("load", () => {
            dispatch(uploadimg(reder.result, location.state.pid))
        })
        reder.readAsDataURL(e[0])
    }
    const handleBack = () => {
        navigate('/patients')
    }
    const handledele = () => {
        dispatch(patientdele(location.state.pid));
        navigate('/patients')
    }
    const imgdelete = (elem) => {
        dispatch(imgdele(elem, displayimg, location.state.pid))
    }
    const handleOpen = () => {
        setOp(true);
    };
    const handleClickClose = () => {
        setOp(false);
    };
    // displayimg.map((elem)=>console.log(elem,"ee"))
    const handleexpo = () => {
        var doc = new jsPDF('landscape', 'px', 'a4', 'false');
        // console.log(displayimg[0].images,"photo")
        for(let i=0;i<item.length;i++){
            doc.addImage(displayimg[i].images, 'JPG', 65,20, 400)
            doc.addPage()
            doc.addImage(displayimg[i].images, 'JPG', 65,20, 400, 400)
            doc.save('photo.pdf')
        }
        console.log("Click")
    }
    return (
        <>
            <ViewPatientStyle>
                <Box className='main'>
                    <>
                        <Box className='mainbo'>
                            <ArrowBackIcon className='back' onClick={handleBack} sx={{ cursor: 'pointer' }} />
                            <Box className='mainbox'>
                                <Box className='bt'>
                                    <Link to='/patients/update' state={location.state} style={{ textDecoration: 'none' }}><Button variant="contained" className='updatebtn'>Update</Button></Link>
                                    <Button variant="contained" className='delbtn' onClick={handledele}>Delete</Button>
                                </Box>
                                <Grid container sx={{ marginTop: '10px' }} >
                                    <Grid item xs={2}>
                                        <Typography variant='body1' className='createcliniclogo'>First Name</Typography>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Typography variant='body1' className='createcliniclogo'>{location.state.patientDAta.firstname}</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography variant='body1' className='createcliniclogo'>Last Name</Typography>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Typography variant='body1' className='createcliniclogo'>{location.state.patientDAta.lastname}</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography variant='body1' className='createcliniclogo' >Date Of Birth</Typography></Grid>
                                    <Grid item xs={10}>
                                        <Typography variant='body1' className='createcliniclogo'>{location.state.patientDAta.dob}</Typography>
                                    </Grid>
                                </Grid>
                                <Divider>
                                    <Button variant="contained" className='photos'>Photos</Button>
                                    <Button variant="contained" className='otpbtn'>OPT</Button>
                                </Divider>
                                {
                                    displayimg.length === 0 ?
                                        <Box className='photocontainer'>
                                            <Box className='gallery'>
                                                <h3>No Patients Images</h3>
                                            </Box>
                                        </Box> :
                                        <Box className='imagesga'>
                                            {displayimg.map((elem) => {
                                                return (
                                                    <>
                                                        <Box className='imageBox'>
                                                            < img alt='' src={elem.images === "" ? false : elem.images
                                                            } style={{
                                                                height: '200px',
                                                                width: '200px',
                                                                cursor: 'pointer'
                                                            }} />
                                                            <Button className='deleicon' >
                                                                <svg onClick={() => imgdelete(elem)} className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="DeleteIcon" style={{ color: 'black', fontSize: '20px' }}><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
                                                            </Button>
                                                        </Box>
                                                    </>
                                                )
                                            })
                                            }

                                        </Box>
                                }
                                {
                                    displayimg.length === 0 ?
                                        <Box className='uploadbox'>
                                            <Button className='uploadbtn' component='label' variant='contained'>
                                                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="PublishIcon" style={{ marginRight: '3px' }}><path d="M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z"></path></svg>
                                                Upload
                                                <input hidden accept="image/*" type="file" onChange={(e) => setImgDetail1(e.target.files)} />
                                            </Button>
                                        </Box> :
                                        <Box className='uploadbox'>
                                            <Button className='uploadbtn' component='label' variant='contained'>
                                                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="PublishIcon" style={{ marginRight: '3px' }}><path d="M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z"></path></svg>
                                                Upload
                                                <input hidden accept="image/*" type="file" onChange={(e) => setImgDetail1(e.target.files)} />
                                            </Button>
                                            <Button className='uploadbtn' variant='contained' onClick={() => handleOpen()}>Export</Button>
                                        </Box>
                                }
                            </Box>
                        </Box>
                    </>
                </Box>
                <Dialog open={op} onClose={handleClickClose} sx={{ background: "linear-gradient(75deg, rgba(22, 28, 36, 0.48) 0%, rgba(22, 28, 36, 1) 100%)" }}>
                    <DialogContent>
                        <Grid container>
                            <Typography component='h2'>Total Selected Images : {item}</Typography>
                        </Grid>
                    </DialogContent>
                    <DialogContent>
                        <Box className='modelForm'>
                            <Grid container>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Select Per Page Image</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={item}
                                            // label="Plan"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="1">1</MenuItem>
                                            <MenuItem value="2">2</MenuItem>
                                            <MenuItem value="3">3</MenuItem>
                                            <MenuItem value="4">4</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            {/* </Grid> */}
                        </Box>
                    </DialogContent>
                    <DialogContent>
                        <TextField
                            id="outlined-multiline-static"
                            label="Notes"
                            multiline
                            rows={4}
                        />
                    </DialogContent>
                    <DialogContent>
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <Butt>
                                    <Button className='deletepop' variant='contained' onClick={() => handleexpo()}>Export</Button>
                                </Butt>
                            </Grid>
                            <Grid item xs={6}>
                                <Butt>
                                    <Button className='deletepop' variant='contained' fullWidth sx={{ marginLeft: '8px' }} onClick={handleClickClose}>Cancel</Button>
                                </Butt>
                            </Grid>
                        </Grid>
                    </DialogContent>
                </Dialog>
            </ViewPatientStyle>
        </>
    )
}
export default ViewPatients