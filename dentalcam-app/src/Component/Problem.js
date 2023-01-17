import React,{useState} from 'react'
import Problemstyle from './Problemstyle'
import  {Button, Box, Grid, Table, TableHead, TableRow, TableCell, TableContainer, TableBody, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Typography } from '@mui/material'
import Butt from './Buttonstyle'
import { useDispatch, useSelector } from 'react-redux'
import { addProblem, deleteProblem } from '../actions'

function Problem() {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [op, setOp] = useState(false);
    const [problem,setProblem] = useState("")
    const [problemId,setProblemId] = useState("")
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleOpen = (ele) => {
      setOp(true);
      // problemId = ele.id
     setProblemId(ele.id)
    };
    const Problem = useSelector((state) => state.dentalreducers.problem)
    const handleClose = () => {
      setOpen(false);
      setProblem("")
    };
    const handleClickClose = () => {
      setOp(false);
    };
    const handleSave = () => {
      dispatch(addProblem(problem))
      setOpen(false);
      setProblem("")
    };
    const handleDelete = () => {
      setOp(false);
      dispatch(deleteProblem(problemId))
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
                {
                  Problem.map((elem) => {
                    return (
                      <TableBody sx={{cursor:'pointer'}}>
                        <TableRow key={elem.id}>
                          <TableCell>{elem.data}</TableCell>
                          <TableCell>{
                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root iconch" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="DeleteIcon" style={{color:'red',cursor:'pointer',textDecoration: 'none' }} onClick={() => handleOpen(elem)}><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
                           }</TableCell>
                        </TableRow>
                      </TableBody>
                    )
                  })
                }
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
            value={problem}
            onChange={(e)=>setProblem(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
            <Butt>
          <Button className='add' variant='contained' onClick={handleClose}>Cancel</Button>
          <Button className='add' variant='contained' sx={{marginLeft:'8px'}} onClick={handleSave}>Save</Button>
            </Butt>
        </DialogActions>
        </form>
      </Dialog>
      <Dialog open={op} onClose={handleClickClose} sx={{ background: "linear-gradient(75deg, rgba(22, 28, 36, 0.48) 0%, rgba(22, 28, 36, 1) 100%)" }}>
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
                <Button className='deletepop' variant='contained' fullWidth onClick={() => handleDelete()}>Yes</Button>
              </Butt>
              </Grid>
              <Grid item xs={6}>
              <Butt>
                <Button className='deletepop' variant='contained' fullWidth sx={{ marginLeft: '8px' }} onClick={handleClickClose}>No</Button>
              </Butt>
              </Grid>
            </Grid>
          </DialogContent>
      </Dialog>
    </>
  )
}

export default Problem