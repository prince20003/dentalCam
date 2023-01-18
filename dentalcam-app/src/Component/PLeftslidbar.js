import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Header from './Header';
import { useNavigate, NavLink, Outlet } from 'react-router-dom';
import Footer from './Footer';
import Slidbarstyle from '../Style/Slidbarstyle';

const drawerWidth = 280;

function PLeftslidbar(props) {

  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProfile = () => {
    navigate('/profile')
  }

  const drawer = (
    <div >
      {/* <Toolbar /> */}
      <Slidbarstyle>
        <Box className='blogo'>
          <img src="https://dentalcam.app/static/logo.png" alt="logo" className='logo' />
          <h3 style={{ textAlign: "center", margin: '0px' }}>
            <span className='title'>
              DentalCam
            </span>
          </h3>
        </Box>
        <Box className='admin' sx={{ cursor: 'pointer' }} onClick={handleProfile}>
          <Box className='ad'>
            <Typography sx={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', width: '120px' }}>Admin Admin Admin Admin Admin Admin AdminAdminAdmin</Typography>
            <Typography className='profile'>View Profile</Typography>
          </Box>
        </Box>
        <List className='act'>
          <NavLink to='/patients' style={{ textDecoration: 'none' }}>
            <ListItemButton className='listitem'>
              <ListItemIcon sx={{ padding: '0px 0px 0px 10px' }} >
              <svg xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" role="img" className='listicon'  width="50" height="22"  viewBox="0 0 24 24"><g id="iconify-react-21"><g id="iconify-react-22"><path id="iconify-react-23" fill="currentColor" d="M9 11a4 4 0 1 0-4-4a4 4 0 0 0 4 4Zm8 2a3 3 0 1 0-3-3a3 3 0 0 0 3 3Zm4 7a1 1 0 0 0 1-1a5 5 0 0 0-8.06-3.95A7 7 0 0 0 2 20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1"></path></g></g></svg>
              </ListItemIcon>
              <ListItemText className='listext' sx={{ color: '#637381' }} >
                <span style={{ fontSize: '14px', fontFamily: 'Public Sans,sans-serif' }}>Patients</span>
              </ListItemText>
            </ListItemButton >
          </NavLink>
          <NavLink state to='/staffs' style={{ textDecoration: 'none' }}>
            <ListItemButton className='listitem'>
              <ListItemIcon sx={{ padding: '0px 0px 0px 10px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img"  className='listicon' width="50" height="22" viewBox="0 0 36 36"><path fill="currentColor" d="M31.25 7.4a43.79 43.79 0 0 1-6.62-2.35a45 45 0 0 1-6.08-3.21L18 1.5l-.54.35a45 45 0 0 1-6.08 3.21A43.79 43.79 0 0 1 4.75 7.4L4 7.59v8.34c0 13.39 13.53 18.4 13.66 18.45l.34.12l.34-.12c.14 0 13.66-5.05 13.66-18.45V7.59Zm-4.57 6.65L15.51 24.9l-6.32-6.33a1.4 1.4 0 0 1 2-2L15.54 21l9.19-9a1.4 1.4 0 1 1 2 2Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>              </ListItemIcon>
              <ListItemText className='listext' sx={{ color: '#637381' }}>
                <span style={{ fontSize: "14px", fontFamily: 'Public Sans,sans-serif' }}> Staff</span>
              </ListItemText>
            </ListItemButton>
          </NavLink>
          <NavLink to='/contactus' style={{ textDecoration: 'none' }}>
            <ListItemButton className='listitem' >
              <ListItemIcon sx={{ padding: '0px 0px 0px 10px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--carbon listicon" width="50" height="22" viewBox="0 0 32 32"><path fill="currentColor" d="m20.33 21.48l2.24-2.24a2.19 2.19 0 0 1 2.34-.48l2.73 1.09a2.18 2.18 0 0 1 1.36 2v5A2.17 2.17 0 0 1 26.72 29C7.59 27.81 3.73 11.61 3 5.41A2.17 2.17 0 0 1 5.17 3H10a2.16 2.16 0 0 1 2 1.36l1.09 2.73a2.16 2.16 0 0 1-.47 2.34l-2.24 2.24s1.29 8.73 9.95 9.81Z"></path></svg>
              </ListItemIcon>
              <ListItemText className='listext' sx={{ color: '#637381' }}>
                <span style={{ fontSize: '14px', fontFamily: 'Public Sans,sans-serif' }}> Contact Us</span>
              </ListItemText>
            </ListItemButton>
          </NavLink>
        </List>
      </Slidbarstyle>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>

      <Box sx={{ display: 'flex' }}>
        <AppBar
          position="fixed"
          sx={{
            width: { lg: `calc(100% - ${drawerWidth}px)` },
            ml: { lg: `${drawerWidth}px` },
            backgroundColor: '#fff',
            boxShadow: '0',
            padding: '14px 12px 0px 20px'
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { lg: 'none' }, color: 'black' }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', alignItem: 'center' }}>
              <Header sx={{ position: 'fixed' }} />
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
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}

PLeftslidbar.propTypes = {
  window: PropTypes.func,
};

export default PLeftslidbar;