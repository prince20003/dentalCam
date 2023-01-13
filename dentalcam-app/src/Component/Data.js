import { Box, Button, Table, TableCell, TableHead, TableRow, TextField } from '@mui/material'
import React from 'react'
import Slidbarstyle from './Slidbarstyle'
import Butt from './Buttonstyle'
import { Outlet, useNavigate } from 'react-router-dom'

function Data() {
  const navigate = useNavigate();
  const handleCreate = () => {
    navigate('/clinics/create')
  }
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

              </Table>
            </Box>
          </Box>
        </Box>
      </Slidbarstyle>
      <Outlet />

    </>
  )
}

export default Data