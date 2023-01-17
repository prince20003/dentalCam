import React from 'react'
import Menu from './StyleMenu'
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, Button, TableBody, TextField } from '@mui/material';
import { useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { view } from '../../Action';

function Clinic() {
  const list = useSelector((state) => state.Dental.list)
  const dispatch = useDispatch()

console.log(list);
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
            <TableCell >Expiry Date</TableCell>
            <TableCell >Plan</TableCell>
          <TableCell >Active</TableCell>
            <TableCell >Action</TableCell>
          </TableRow>
        </TableHead>
          {list.map((row) => (
                    <TableBody className='table'>

            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.data.Clinicname}
              </TableCell>
              <TableCell >{row.data.Email}</TableCell>
              <TableCell >{row.data.date}</TableCell>
              <TableCell >{row.data.plan}</TableCell>
              <TableCell ></TableCell>
              <TableCell >
                <Button onClick={() => dispatch(view(row.id,row.data))}>
                <a href='/view'><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="VisibilityIcon" style={{color:'#0B3379',cursor:'pointer'}}><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></svg>
                </a></Button>
                    <a alt='' href='/Update' style={{marginRight:'20px'}}><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="EditIcon" style={{color:'#0B3379',cursor:'pointer'}}><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg></a>
                    <a style={{marginRight:'20px'}}><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="DeleteIcon" style={{color:'red',cursor:'pointer'}}><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg></a>
              </TableCell>
            </TableRow>
            </TableBody>

          ))} 
      </Table>
          </Box>
        </Box>
        </Menu>
    </>
  )
}

export default Clinic
