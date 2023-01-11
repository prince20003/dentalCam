import React from 'react'
import Menu from './StyleMenu'
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Clinic() {
  const navigate = useNavigate()
  const create =()=>{
    navigate('/clinic/create')
   }
  return (
    <>
       <Menu>
        <Box className='datatable' >
          <Box className='table'>
          <TextField className='datatablesearch' variant='outlined' label='Search' size='small'></TextField>
          <Button className='Createbtn' onClick={create} variant="contained"><b>Create</b></Button>

          </Box>
          <Box>
      <Table className='table' aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Clinic Name</TableCell>
            <TableCell >Email</TableCell>
            <TableCell align="right">Plan</TableCell>
            <TableCell align="right">Expiry Date</TableCell>
            <TableCell align="right">Active</TableCell>
            <TableCell align="right">Action</TableCell>
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
        </Menu>
    </>
  )
}

export default Clinic
