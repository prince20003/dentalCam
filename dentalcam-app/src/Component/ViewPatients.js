import React from 'react'
import { Box, Button, Dialog, DialogContent, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useLocation, useNavigate, } from 'react-router-dom';
import ViewPatientStyle from '../Style/ViewPatientStyle';
import { imgdele, patientdele, uploadimg } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import Divider from '@mui/material/Divider';
import Butt from '../Style/Buttonstyle';
import { useState } from 'react';
import jsPDF from 'jspdf';
import Checkbox from '@mui/material/Checkbox';

function ViewPatients() {
    const arrimg = [];
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [op, setOp] = useState(false);
    const [item, setItem] = useState('');
    const [isImageActive, setIsImageActive] = useState(false);
    const [checked, setChecked] = React.useState(false);
    const [photovar,setPhotovar] = useState([])
    const listimg = useSelector((state) => state.dentalreducers.PatientDATA)
      const clickEventHandler = () => {
        setIsImageActive(true);
    }
    const handleChange = (event) => {
        setItem(event.target.value);
    };
    let checkedBoxes = document.querySelectorAll('input[name=chkBox]:checked');
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
    // var photovar = [];
    const handleCheckChange = (event) => {
        setChecked(event.target.checked);
        displayimg.map((el)=>{
            if(el.imgid === event.target.defaultValue ){
                console.log(el.imgid)
                console.log(event.target.defaultValue);
                setPhotovar([...photovar,el])
            }
        })
    };
    const handleexpo = () => {
        var doc = new jsPDF();
        // var doc = new jsPDF('landscape', 'px', 'a4', 'false');
        console.log(photovar,"expo")
        photovar.map((elem) => {
            if (item === '1') {
                return(
                doc.addImage(elem.images, 'JPEG', 15, 35, 180, 150),
                doc.addPage(),
                doc.save('photo.pdf')
                )
            }
            if (item === '2') {
                return(
                doc.addImage(elem.images, 'JPEG', 10, 55, 190, 100),
                doc.addImage(elem.images, 'JPEG', 10, 160, 190, 100),
                doc.addPage(),
                doc.save('photo.pdf')
                )
            }
            if (item === '3') {
                return(
                doc.addImage(elem.images, 'JPEG', 10, 55, 190, 100),
                doc.addImage(elem.images, 'JPEG', 10, 160, 90, 100),
                doc.addImage(elem.images, 'JPEG', 110, 160, 90, 100),
                doc.addPage(),
                doc.save('photo.pdf')
                )
            }
            if (item === '4') {
                return(
                doc.addImage(elem.images, 'JPEG', 20, 55, 80, 100),
                doc.addImage(elem.images, 'JPEG', 110, 55, 80, 100),
                doc.addImage(elem.images, 'JPEG', 20, 160, 80, 100),
                doc.addImage(elem.images, 'JPEG', 110, 160, 80, 100),
                doc.addPage(),
                doc.save('photo.pdf')
                )
            }
          
        })
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
    const handleClickClose = () => {
        setOp(false);
    };


   

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
                                                //    console.log(elem.imgid,"elem.imgid")
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
                                                            {isImageActive ? <Checkbox
                                                                onChange={handleCheckChange}
                                                                name='chkBox'
                                                                inputProps={{ 'aria-label': 'Checkbox demo' }}
                                                                className='imageSelectionBox'
                                                                value={elem.imgid}
                                                            /> : ""}

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
                                            <Button className='uploadbtn' variant='contained' onClick={() => clickEventHandler()}>Export</Button>
                                            {isImageActive ? <Button className='uploadbtn' variant='contained' onClick={() => setOp(true)}>Next</Button> : ""}

                                        </Box>
                                }
                            </Box>
                        </Box>
                    </>
                </Box>
                <Dialog open={op} onClose={handleClickClose} sx={{ background: "linear-gradient(75deg, rgba(22, 28, 36, 0.48) 0%, rgba(22, 28, 36, 1) 100%)" }}>
                    <DialogContent>
                        <Grid container>
                            <Typography component='h2'>Total Selected Images : {checkedBoxes.length}</Typography>
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
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="1">1</MenuItem>
                                        <MenuItem value="2">2</MenuItem>
                                        <MenuItem value="3">3</MenuItem>
                                        <MenuItem value="4">4</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
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