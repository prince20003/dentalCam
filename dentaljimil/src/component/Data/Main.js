import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from './StyleMenu';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenubarLogout from './MenubarLogout';
// import { Button, TextField } from '@mui/material';
import {  NavLink, Outlet } from 'react-router-dom';
import Foot from '../Foot';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Contact from '../Contactus/Contact';
// import Problem from '../problem/Problem';
// import Clinic from './Clinic';
// import Cont from '../Contact/Cont';
const drawerWidth = 280;

function Main(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);



  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box className='main'>
      <Menu>
        <Box className='menu'>
          <img className='Menulogo' alt='' src='https://dentalcam.app/static/logo.png' />
          <h2 style={{ textAlign: 'center', margin: '0 0' }}><span style={{ fontFamily: 'Public Sans,sans-serif', background: 'linear-gradient(90deg, rgb(171, 48, 177) 0%, rgb(91, 114, 180) 70%)', WebkitBackgroundClip: 'text', color: 'transparent', fontSize: '18.6px' }}>DentalCam</span></h2>
          <NavLink to='/profile'className='adminbox'>
            <Typography sx={{ fontSize: '14px', fontFamily: 'Public Sans,sans-serif', fontWeight: '600' }}>Admin Admin</Typography>
            <Typography sx={{ fontSize: '12px', marginTop: '5px', color: 'gray', fontFamily: 'Public Sans,sans-serif' }}>View Profile</Typography>
          </NavLink>
        </Box>

        <List sx={{marginTop:'15px'}} >
         <NavLink to='/clinic' className="nav" >
         <ListItemButton className="abcd" >
            <ListItemIcon sx={{ padding: '8px 0px 8px 10px', }}>
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="iconify iconify--maki" width="50" height="22" viewBox="0 0 15 15" className='ff' >
                <path id="iconify-react-2" fill="currentColor" d="M7 1c-.6 0-1 .4-1 1v4H2c-.6 0-1 .4-1 1v1c0 .6.4 1 1 1h4v4c0 .6.4 1 1 1h1c.6 0 1-.4 1-1V9h4c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1H9V2c0-.6-.4-1-1-1H7z"></path></svg>
              <Typography className='adminboxicon'>Clinics</Typography>
            </ListItemIcon>   
          </ListItemButton>
         </NavLink>
          <NavLink to='/problem'className="nav">
          <ListItemButton className="abcd"> 
            <ListItemIcon sx={{ padding: '8px 0px 8px 10px', }} >
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="50" height="22" viewBox="0 0 24 24" className='ff'><g fill="currentColor"><path d="M14.5 10.33h6.67A.83.83 0 0 0 22 9.5A7.5 7.5 0 0 0 14.5 2a.83.83 0 0 0-.83.83V9.5a.83.83 0 0 0 .83.83zm.83-6.6a5.83 5.83 0 0 1 4.94 4.94h-4.94z"></path><path d="M21.08 12h-8.15a.91.91 0 0 1-.91-.91V2.92A.92.92 0 0 0 11 2a10 10 0 1 0 11 11a.92.92 0 0 0-.92-1z"></path></g></svg>
              <Typography className='adminboxicon'>Problems</Typography>
            </ListItemIcon>
          </ListItemButton>
          </NavLink>
         <NavLink to='/contactus'className="nav">
         <ListItemButton className="abcd">
            <ListItemIcon sx={{ padding: '8px 0px 8px 10px', }} >
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="iconify iconify--carbon" width="50" height="22" viewBox="0 0 32 32" className='ff'><path fill="currentColor" d="m20.33 21.48l2.24-2.24a2.19 2.19 0 0 1 2.34-.48l2.73 1.09a2.18 2.18 0 0 1 1.36 2v5A2.17 2.17 0 0 1 26.72 29C7.59 27.81 3.73 11.61 3 5.41A2.17 2.17 0 0 1 5.17 3H10a2.16 2.16 0 0 1 2 1.36l1.09 2.73a2.16 2.16 0 0 1-.47 2.34l-2.24 2.24s1.29 8.73 9.95 9.81Z"></path></svg>
               <Typography className='adminboxicon'>Contact Us</Typography>
            </ListItemIcon>
          </ListItemButton>
         </NavLink>
        </List>
      </Menu>



    </Box>
  );
 
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        {/* <CssBaseline /> */}
        <AppBar
          position="fixed"
          sx={{
            width: { lg: `calc(100% - ${drawerWidth}px)` },
            ml: { lg: `${drawerWidth}px` },
            backgroundColor: '#fff',
            boxShadow: '0',
            padding:'14px 12px 0 20px'
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { lg: 'none' },color:'black' }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{width:'100%',display:'flex',justifyContent:'flex-end',alignItems:'center',}}>
            <MenubarLogout/>

            </Box>
          </Toolbar>

        </AppBar>
        <Box
          component="nav"
          sx={{ width: { lg: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', lg: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', lg: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
       <Outlet/>
      </Box>
      <Foot/>
    </>

  );
}

Main.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Main;