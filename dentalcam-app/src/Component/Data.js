import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Slidbarstyle from './Slidbarstyle'
import Butt from './Buttonstyle'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../actions'

function Data() {
  const [id,setId] = useState("")
  const list = useSelector((state) => state.dentalreducers.list)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCreate = () => {
    navigate('/clinics/create')
  }
  const [open, setOpen] = useState(false);
  const handleClickOpen = (ele) => {
    setOpen(true);
    // console.log(ele.id)
     const id = ele.id
     setId(ele.id)
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = () => {
    setOpen(false);
    dispatch(deleteUser(id))
    console.log(id)
  };
  return (
    <>
      <Slidbarstyle>
        <Box className='data'>
          <Box>
            <Box className='search'>
              <TextField variant='outlined' label='Search' size='small' className='sea' />
              <Butt>
                <Button className='loginb' variant="contained" onClick={handleCreate} >Create</Button>
              </Butt>
            </Box>
            <p style={{ marginBottom: "10px", marginTop: "10px" }}></p>
            <Box>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Clinic Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Plan</TableCell>
                    <TableCell>Expiry Date</TableCell>
                    <TableCell>Active</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                {
                  list.map((elem) => {
                    return (
                      <TableBody sx={{ cursor: 'pointer' }}>
                        <TableRow key={elem.id}>
                          <TableCell>{elem.data.clinicname}</TableCell>
                          <TableCell>{elem.data.email}</TableCell>
                          <TableCell>{elem.data.plan}</TableCell>
                          <TableCell>{elem.data.date}</TableCell>
                          <TableCell>{elem.id}</TableCell>
                          <TableCell>{
                            <>
                              <NavLink to='/clinics/view'> <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root iconch" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="VisibilityIcon"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></svg></NavLink>
                              <NavLink to='/clinics/update'><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root iconch" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="EditIcon"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg></NavLink>
                              <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root iconch" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="DeleteIcon" style={{ color: 'red', cursor: 'pointer', textDecoration: 'none' }} onClick={() => handleClickOpen(elem)}><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
                            </>
                          }</TableCell>
                        </TableRow>
                      </TableBody>
                    )
                  })
                }
              </Table>
            </Box>
          </Box>
        </Box>
        {/* <Outlet /> */}
        <Dialog open={open} onClose={handleClose} sx={{ background: "linear-gradient(75deg, rgba(22, 28, 36, 0.48) 0%, rgba(22, 28, 36, 1) 100%)" }}>
          <DialogContent>
            <Grid container  sx={{ justifyContent: 'center' }}>
              <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" style={{
                color: '#0B3379', fill: 'currentcolor',
                 display: 'inline-block',    fontSize: '2.1875rem', width:'1em', height:'1em'
              }} focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="ErrorIcon"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
            </Grid>
          </DialogContent>
          <DialogContent>
            <Typography component='p' sx={{color:'#637381',fontWeight:'700',fontFamily:'Public Sans,sans-serif'}}>Are you sure to delete Clinic?</Typography>
          </DialogContent>
          <DialogContent>
            <Grid container spacing={1}>
              <Grid item xs={6}>
              <Butt>
                <Button className='deletepop' variant='contained' fullWidth onClick={() => handleSave()}>Yes</Button>
              </Butt>
              </Grid>
              <Grid item xs={6}>
              <Butt>
                <Button className='deletepop' variant='contained' fullWidth sx={{ marginLeft: '8px' }} onClick={handleClose}>No</Button>
              </Butt>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </Slidbarstyle>
    </>
  )
}

export default Data