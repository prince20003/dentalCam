import { Button, TextField,  } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'
import Main from './StyleProblem';

import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function Problem() {
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

      
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
     {/* <TableBody>
       {rows.map((row) => (
         <TableRow
           key={row.name}
           sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
         >
           <TableCell component="th" scope="row">
             {row.name}
           </TableCell>
           <TableCell align="right">{row.calories}</TableCell>
           <TableCell align="right">{row.fat}</TableCell>
           <TableCell align="right">{row.carbs}</TableCell>
           <TableCell align="right">{row.protein}</TableCell>
         </TableRow>
       ))} 
      </TableBody> */}
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
          />
        </DialogContent>
        <DialogActions>
            <Main>
          <Button className='Createbtn1' onClick={handleClose} variant="contained"><b>Cancel</b></Button>

          <Button className='Createbtn1'onClick={handleClose} variant="contained"><b>Save</b></Button>
          </Main>
        </DialogActions>
      </Dialog>
    </div>
   </>
  )
}

export default Problem
