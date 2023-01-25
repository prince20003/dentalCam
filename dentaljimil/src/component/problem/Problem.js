import { Button, TableBody, TextField,  } from '@mui/material';
import { Box } from '@mui/system'
import React, { useState } from 'react'
import Main from '../../Style/StyleProblem';

import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { pbdele, prob } from '../../Action';

function Problem() {
  const dispatch =useDispatch()
  const PR = useSelector((state) => state.Dental.PR)
 const [id,setId]=useState("")
    const [open, setOpen] = React.useState(false);
    const [openPR, setOpenPR] = React.useState(false);
  const[problem,setProblem]=useState('')
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleSave = () => {
    dispatch(prob(problem))
    setProblem('')
    setOpen(false);

  };
  const handleClose = () => {
    setOpen(false);

  };
  const handlePROpen = (id) => {
    setId(id)
    setOpenPR(true);}

  const handlePRClose = () => {
    setOpenPR(false);
  };

  const handlePRClosel = () => {
    
    
    dispatch(pbdele(id))
    setOpenPR(false);
    

  }
      
  return (
   <> <Main>
   <Box className='main'>
     
    <Box className='mainbo'>
    <Button className='Createbtn' onClick={handleClickOpen} variant="contained"><b>Add</b></Button>
    <Box className='mainbox'>

   <Table className='table' aria-label="simple table">
     <TableHead>
       <TableRow>
         <TableCell>Problem</TableCell>
         <TableCell >Action</TableCell>
         
       </TableRow>
     </TableHead>
     <TableBody>
       {PR.map((row) => (
         <TableRow
           key={row.name}
           sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
         >
           <TableCell component="th" scope="row">
             {row.data}
           </TableCell>
           <TableCell><svg onClick={()=>handlePROpen(row.id)} class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="DeleteIcon" style={{color:'red',cursor:'pointer'}}><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
</TableCell>
           
         </TableRow>
       ))} 
      </TableBody>
   </Table>
   
 </Box>
    </Box>
     </Box>
 </Main>
 <div>
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add</DialogTitle>
        <DialogContent>
          
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Problem Name"
            type="email"
            fullWidth
            variant="standard"
            onChange={(e)=>setProblem(e.target.value)}
            value={problem}
          />
        </DialogContent>
        <DialogActions>
            <Main>
          <Button className='Createbtn1' onClick={handleClose} variant="contained"><b>Cancel</b></Button>

          <Button className='Createbtn1'onClick={handleSave} variant="contained"><b>Save</b></Button>
          </Main>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openPR}
        onClose={handlePRClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
       
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
         Are you sure you want to clearall?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePRClose}>Cancel</Button>
          <Button onClick={handlePRClosel} autoFocus>
            Clear All
          </Button>
        </DialogActions>
      </Dialog>
    </div>
   </>
  )
}

export default Problem
