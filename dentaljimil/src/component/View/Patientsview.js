import React, { useState } from 'react'
import { Box, Button, Checkbox, Container, Dialog, DialogContent, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableRow, TextField, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useLocation, useNavigate, } from 'react-router-dom';
import Main from '../../Style/StylePatientsview';
import Divider from '@mui/material/Divider';
import { useDispatch, useSelector } from 'react-redux';
import { imgdele, uplodeimg } from '../../Action';
import jsPDF from 'jspdf';


function Patientsview() {
    let ck = ""
    const vp = useLocation()
    const dispatch = useDispatch()
    const listim = useSelector((state) => state.Dental.patientsdata)
    const [data, setData] = useState({
        Firstname: vp.state.pdata.Firstname,
        Lastname: vp.state.pdata.Lastname,
        Dateofbirth: vp.state.pdata.Dateofbirth,
    })
    const navigate = useNavigate();
    const [op, setOp] = useState(false);
    const [item, setItem] = useState('');
    const [currentDate, setCurrentDate] = useState("")
    const [isImageActive, setIsImageActive] = useState(false);
    const [checked, setChecked] = React.useState(false);
    const [photovar, setPhotovar] = useState([])
    const listimg = useSelector((state) => state.Dental.patientsdata)
    const clickEventHandler = () => {
      
        setIsImageActive(true);
    }
    const handleChange = (event) => {
        setItem(event.target.value);
    };
    const handleCheckChange = (event) => {
        setChecked(event.target.checked);
        

        displayimg.map((el) => {
            if (el.imgid === event.target.defaultValue) {
                setPhotovar([...photovar, el])
            }
        })
    };

    let checkedBoxes = document.querySelectorAll('input[name=chkBox]:checked');
    let displayimg = ""
    for (let u = 0; u < listimg.length; u++) {
        if (listimg[u].pid === vp.state.pid) {
            displayimg = listimg[u].photos
        }
    }
    const setImgDetail1 = (e) => {
        const reder = new FileReader();
        reder.addEventListener("load", () => {
            dispatch(uplodeimg(reder.result, vp.state.pid))
        })
        reder.readAsDataURL(e[0])
    }



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
            doc.text(10, 10, `${('FirstName')}:${vp.state.pdata.Firstname}`)
            doc.text(10, 15, `${('LastName')}:${vp.state.pdata.Lastname}`)
            doc.text(10, 20, `${('Created Date')}:${currentDate}`)
            doc.setLineWidth(0.5);
            doc.line(10, 30, 200, 30);
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
    const Img = (e) => {
        const reder = new FileReader()

        reder.addEventListener("load", () => {

            console.log(reder.result);
            dispatch(uplodeimg(reder.result, vp.state.pid))
        })
        reder.readAsDataURL(e[0])

    }
    let imgdata = ""
    for (let i = 0; i < listim.length; i++) {
        console.log(listim[i].photos, "forloop");
        if (listim[i].pid === vp.state.pid) {
            imgdata = listim[i].photos

        }
    }
    const imgdelete = (elem) => {
        console.log("ffff");
        dispatch(imgdele(elem, imgdata, vp.state.pid))
    }

    const handleBack = () => {
        navigate('/patients')
    }


    const handleClickClose = () => {
        setOp(false);
    };


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
                                                            <Button className='imgdele' >
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
                        <TextField type='date' fullWidth value={currentDate} onChange={(e) => setCurrentDate(e.target.value)} />
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
                                <Button className='uploadbtn' variant='contained' onClick={() => handleexpo()}>Export</Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button className='uploadbtn' variant='contained' fullWidth sx={{ marginLeft: '8px' }} onClick={handleClickClose}>Cancel</Button>
                            </Grid>
                        </Grid>
                    </DialogContent>
                </Dialog>

            </Main >
        </>
    )
}

export default Patientsview
