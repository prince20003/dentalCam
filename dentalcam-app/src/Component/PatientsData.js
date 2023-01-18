import { Box, Button, Table, TableCell, TableHead, TableRow, TextField } from '@mui/material'
import React from 'react'
import Slidbarstyle from '../Style/Slidbarstyle'
import Butt from '../Style/Buttonstyle'
import {  useNavigate } from 'react-router-dom'

function PatientsData() {
//   const list = useSelector((state) => state.dentalreducers.list)
  const navigate = useNavigate();
  const handleCreate = () => {
    navigate('/patients/create')
  }

//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

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
              <Table className='tab'>
                <TableHead>
                  <TableRow>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Date Of Birth</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
              </Table>
              {/* <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={list.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              /> */}
            </Box>
          </Box>
        </Box>
        {/* <Outlet /> */}
      </Slidbarstyle>
    </>
  )
}

export default PatientsData