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

    const location = useLocation();
    console.log(location, "location")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [op, setOp] = useState(false);
    const [item, setItem] = useState('');
    const [currentDate, setCurrentDate] = useState("")
    const [isImageActive, setIsImageActive] = useState(false);
    const [checked, setChecked] = React.useState(false);
    const [photovar, setPhotovar] = useState([])
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
    const handleCheckChange = (event) => {
        setChecked(event.target.checked);
        displayimg.map((el) => {
            if (el.imgid === event.target.defaultValue) {
                setPhotovar([...photovar, el])
            }
        })
    };



    const handleexpo = () => {
        const ImageSet = {
            1: [{ x: 15, y: 35, w: 180, z: 150 }],
            2: [
                { x: 10, y: 55, w: 190, z: 100 },
                { x: 10, y: 160, w: 190, z: 100 }
            ],
            3: [
                { x: 10, y: 55, w: 190, z: 100 },
                { x: 10, y: 160, w: 90, z: 100 },
                { x: 110, y: 160, w: 90, z: 100 }
            ],
            4: [
                { x: 20, y: 55, w: 80, z: 100 },
                { x: 110, y: 55, w: 80, z: 100 },
                { x: 20, y: 160, w: 80, z: 100 },
                { x: 110, y: 160, w: 80, z: 100 }
            ]
        };
        var doc = new jsPDF();

        const noOfPages = Math.ceil(photovar.length / ImageSet[item].length)
        console.log(noOfPages, "noOfPage")
        let j = 0;
        for (let ph = 1; ph <= noOfPages; ph += 1) {
            doc.setFontSize(10);
            doc.text(10, 10, `${('FirstName')}:${location.state.patientDAta.firstname}`)
            doc.text(10, 15, `${('LastName')}:${location.state.patientDAta.lastname}`)
            doc.text(10,20, `${('Created Date')}:${currentDate}`)
            doc.setLineWidth(0.5);
            doc.line(10,30,200,30);
            for (let i = 0; i < ImageSet[item].length; i += 1) {
                if (j in photovar) {
                    doc.addImage(
                        photovar[j].images,
                        'JPEG',
                        ImageSet[item][i].x,
                        ImageSet[item][i].y,
                        ImageSet[item][i].w,
                        ImageSet[item][i].z,
                    );
                    j += 1;
                }
            }
            if (ph !== noOfPages) {
                doc.addPage();
            }
        }
        doc.save('photo.pdf')
    }
    // var doc = new jsPDF('landscape', 'px', 'a4', 'false');
    // console.log(photovar, "expo")
    // console.log(photovar.length,"lenght")

    // photovar.map((elem) => {
    //     if (item === '1') {
    //         return(
    //         doc.addImage(elem.images, 'JPEG', 15, 35, 180, 150),
    //         doc.addPage(),
    //         doc.save('photo.pdf')
    //         )
    //     }
    // })

    // for (let p = 0; p < photovar.length; p++) {
    //     console.log(photovar[p],"pimg")
    // if (item === '2') {
    //         // return (
    //         //     // doc.addImage(photovar[p].images, 'JPEG', 10, 55, 190, 100),
    //         //     // doc.addImage(photovar[p + 1].images, 'JPEG', 10, 160, 190, 100),
    //         //     // doc.addPage(),
    //         //     // doc.save('photo.pdf')
    //         // )
    //     }
    // }

    // if (item === '3') {
    //     for (let p = 0; p < photovar.length; p++) {
    //         return (
    //             doc.addImage(photovar[p].images, 'JPEG', 10, 55, 190, 100),
    //             doc.addImage(photovar[p].images, 'JPEG', 10, 160, 90, 100),
    //             doc.addImage(photovar[p].images, 'JPEG', 110, 160, 90, 100),
    //             doc.addPage(),
    //             doc.save('photo.pdf')
    //             )
    //         }
    // }
    // if (item === '4') {
    //     for (let p = 0; p < photovar.length; p++) {
    //         return (
    //             doc.addImage(photovar[p].images, 'JPEG', 20, 55, 80, 100),
    //             doc.addImage(photovar[p].images, 'JPEG', 110, 55, 80, 100),
    //             doc.addImage(photovar[p].images, 'JPEG', 20, 160, 80, 100),
    //             doc.addImage(photovar[p].images, 'JPEG', 110, 160, 80, 100),
    //             doc.addPage(),
    //             doc.save('photo.pdf')
    //         )
    //     }
    // }




    //     photovar.map((elem, index) => {
    //         //     console.log(elem,"elem",index);
    //         //     console.log( 'JPEG',  ImageSet[1][index=== 0 || 1 ? 1 : index].x, ImageSet[1][index=== 0 || 1 ? 1 : index].y, ImageSet[1][index=== 0 || 1 ? 1 : index].w, ImageSet[1][index=== 0 || 1 ? 1 : index].z)

    //         //    doc.addImage(photovar[index].images,'JPEG',ImageSet[1][index=== 0 || 1 ? 1 : index].x, ImageSet[1][index=== 0 || 1 ? 1 : index].y, ImageSet[1][index=== 0 || 1 ? 1 : index].w, ImageSet[1][index=== 0 || 1 ? 1 : index].z)
    //         //    doc.save('photo.pdf')

    //         if (item === '1') {
    //             return (
    //                 doc.addImage(elem.images, 'JPEG', ImageSet[0].x, ImageSet[0].y, ImageSet[0].w, ImageSet[0].z),
    //                 doc.addPage(),
    //                 doc.save('photo.pdf')
    //             )
    //         }
    //         if (item === '2') {
    //             return (
    //                 doc.addImage(elem.images, 'JPEG', ),
    //                 doc.addPage(),
    //                 doc.save('photo.pdf')
    //                 )
    //         }
    //         if (item === '3') {
    //         return (
    //             doc.addImage(elem.images, 'JPEG', 10, 55, 190, 100),
    //             doc.addImage(elem.images, 'JPEG', 10, 160, 90, 100),
    //             doc.addImage(elem.images, 'JPEG', 110, 160, 90, 100),
    //             doc.addPage(),
    //             doc.save('photo.pdf')
    //         )
    //     }
    //     if (item === '4') {
    //         return (
    //             doc.addImage(elem.images, 'JPEG', 20, 55, 80, 100),
    //             doc.addImage(elem.images, 'JPEG', 110, 55, 80, 100),
    //             doc.addImage(elem.images, 'JPEG', 20, 160, 80, 100),
    //             doc.addImage(elem.images, 'JPEG', 110, 160, 80, 100),
    //             doc.addPage(),
    //             doc.save('photo.pdf')
    //         )
    //     }

    // })

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
                <Dialog open={op} onClose={handleClickClose} sx={{ background: "linear-gradient(75deg, rgba(22, 28, 36, 0.48) 0%, rgba(22, 28, 36, 1) 100%)"}}>
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
                        <TextField type='date' fullWidth value={currentDate} onChange={(e)=>setCurrentDate(e.target.value)}/>
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