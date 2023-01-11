import React from 'react'
import Problemstyle from './Problemstyle'
import  {Button, Box, Grid, Table, TableHead, TableRow, TableCell, TableContainer, TableBody, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@mui/material'
import Butt from './Buttonstyle'

function Problem() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <>
      <Problemstyle>
      <Box className='mainp'>
        <Grid container>
            <Butt>
                <Button className='add' variant='contained' onClick={handleClickOpen}>Add</Button>
            </Butt>
        </Grid>
        <p style={{marginBottom: '10px', marginTop: '10px'}}></p>
        <TableContainer >
        <Table aria-label="simple table" className='tablew'>
        <TableHead>
          <TableRow >
            <TableCell sx={{fontWeight:'550',fontFamily:'Public Sans,sans-serif'}}>Problem</TableCell>
            <TableCell sx={{fontWeight:'550',fontFamily:'Public Sans,sans-serif'}}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>

            </TableRow>
        </TableBody>
        </Table>
        </TableContainer>
      </Box>
      </Problemstyle>
      <Dialog open={open} onClose={handleClose} sx={{background: "linear-gradient(75deg, rgba(22, 28, 36, 0.48) 0%, rgba(22, 28, 36, 1) 100%)"}}>
        <DialogTitle>Add</DialogTitle>
        <form autoComplete='off'>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Problem Name"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
            <Butt>
          <Button className='add' variant='contained' onClick={handleClose}>Cancel</Button>
          <Button className='add' variant='contained' sx={{marginLeft:'8px'}} onClick={handleClose}>Save</Button>
            </Butt>
        </DialogActions>
        </form>
      </Dialog>
    </>
  )
}

export default Problem