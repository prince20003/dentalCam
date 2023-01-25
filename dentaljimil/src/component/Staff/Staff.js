import React, { useState } from 'react'
import Menu from '../../Style/StyleMenu'
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, Button, TableBody, TextField } from '@mui/material';
import {  Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { dele, staffdele } from '../../Action';

function Staff() {
  let pc =[];
  const [search, setSearch] = useState("");
  const dispatch = useDispatch()
const s = useSelector((state) => state.Dental.staff)
const info = useSelector((state) => state.Dental.info)

 if(pc.length === 0){for(let k=0;k<s.length;k++){

  if(s[k].id === info[0].id){
    pc.push(s[k])

  }
}}


  const navigate = useNavigate()
  const create = () => {
    navigate('/staff/create')
  }
  return (
    <>
      <Menu>
        <Box className='datatable' >
          <Box className='table'>
            <TextField className='datatablesearch' variant='outlined' label='Search' size='small' onChange={(e) => setSearch(e.target.value)}></TextField>
            <Button className='Createbtn' onClick={create} variant="contained"><b>Create</b></Button>

          </Box>
          <Box>
            <Table className='table' aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>First Name</TableCell>
                  <TableCell >Last Name</TableCell>
                  <TableCell >Active</TableCell>
                  <TableCell >Created At</TableCell>
                  <TableCell >Action</TableCell>
                </TableRow>
              </TableHead>                  
              <TableBody className='table'>

              {pc.filter(val => {
                if (search === "") {
                  console.log(val);

                  return val
                } else if (val.sdata.Firstname.toLowerCase().includes(search.toLowerCase()) ||
                  val.sdata.Lastname.toLowerCase().includes(search.toLowerCase()) 
                ) {
                  return val
                }
              }).map((row) => ( 

                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.sdata.Firstname}
                      </TableCell>

                      <TableCell >{row.sdata.Lastname}</TableCell>
                      <TableCell ></TableCell>
                      <TableCell ></TableCell>
                      <TableCell >
                       
                        <Link to='/Updatestaff' state={row} style={{ marginRight: '20px' }}><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="EditIcon" style={{ color: '#0B3379', cursor: 'pointer' }}><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg></Link>
                        <svg onClick={() => dispatch(staffdele(row.sid))} className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="DeleteIcon" style={{ color: 'red', cursor: 'pointer' }}><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
                      </TableCell>
                    </TableRow>

                ))}
                                  </TableBody>

            </Table>
          </Box>
        </Box>
      </Menu>
    </>
  )
}

export default Staff

