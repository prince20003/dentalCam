import { Box, Button, Table, TableBody, TableCell, TableHead, TablePagination, TableRow, TextField } from '@mui/material'
import React from 'react'
import Slidbarstyle from '../Style/Slidbarstyle'
import Butt from '../Style/Buttonstyle'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { staffdele } from '../actions'
import { useState } from 'react'

function Staff() {
  let sd = []
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleCreate = () => {
      navigate('/staffs/create')
    }
    const [search, setSearch] = useState("") 
    const s = useSelector((state)=>state.dentalreducers.Staff)
    const useri = useSelector((state)=>state.dentalreducers.userinfo)

    if(sd.length === 0){
      for(let k=0; k<s.length ; k++ ){
        if(s[k].id===useri[0].id){
          sd.push(s[k])
        }
      }
    }
  

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
   const date = new Date()
   const dd = date.getDate();
   const mm = date.getMonth()+1;
   const year = date.getFullYear();
   const created = dd + "-" + mm + "-" + year 
   

  return (
    <>
      <Slidbarstyle>
        <Box className='data'>
          <Box>
            <Box className='search'>
              <TextField variant='outlined' label='Search' size='small' className='sea'  onChange={(e) => setSearch(e.target.value)}  />
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
                    <TableCell>Active</TableCell>
                    <TableCell>Created At</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                {
                   sd.filter(val => {
                    if (search === "") {
                      return val
                    }
                    else if (val.staffDATA.firstname.toLowerCase().includes(search.toLowerCase()) ||
                    val.staffDATA.lastname.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return val
                    }
                  }).map((elem)=>(
                  <TableBody>
                    <TableRow key={elem.staffDATA.firstname}>
                      <TableCell>{elem.staffDATA.firstname}</TableCell>
                      <TableCell>{elem.staffDATA.lastname}</TableCell>
                      <TableCell>{}</TableCell>
                      <TableCell>{created}</TableCell>
                      <TableCell>{
                            <>
                              {/* <Link to='/patients/view' state={elem} style={{marginRight:'20px'}}> <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="CollectionsIcon" style={{color:'#0B3379'}}><path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4 2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"></path></svg></Link> */}
                              <Link to='/staffs/update' state={elem}><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root iconch" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="EditIcon"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg></Link>
                              <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root iconch" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="DeleteIcon" style={{ color: 'red', cursor: 'pointer', textDecoration: 'none' }} onClick={() => dispatch(staffdele(elem.sid))} ><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
                            </>
                          }</TableCell>
                    </TableRow>
                  </TableBody>
                ))
              }
              </Table>
               

              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={sd.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Box>
          </Box>
        </Box>
        {/* <Outlet /> */}
      </Slidbarstyle>
    </>
  )
}

export default Staff