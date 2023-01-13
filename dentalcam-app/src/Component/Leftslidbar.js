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
import Slidbarstyle from './Slidbarstyle';
import Header from './Header';
import { useNavigate, NavLink, Outlet } from 'react-router-dom';
import Footer from './Footer';

const drawerWidth = 280;

function LeftSlidbar(props) {

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
          <NavLink to='/clinics' style={{ textDecoration: 'none' }}>
            <ListItemButton className='listitem'>
              <ListItemIcon sx={{ padding: '0px 0px 0px 10px' }} >
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--maki listicon" width="50" height="22" viewBox="0 0 15 15">
                  <path id="iconify-react-2" fill="currentColor" d="M7 1c-.6 0-1 .4-1 1v4H2c-.6 0-1 .4-1 1v1c0 .6.4 1 1 1h4v4c0 .6.4 1 1 1h1c.6 0 1-.4 1-1V9h4c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1H9V2c0-.6-.4-1-1-1H7z"></path>
                </svg>
              </ListItemIcon>
              <ListItemText className='listext' sx={{ color: '#637381' }} >
                <span style={{ fontSize: '14px', fontFamily: 'Public Sans,sans-serif' }}>Clinics</span>
              </ListItemText>
            </ListItemButton >
          </NavLink>
          <NavLink to='/problem' style={{ textDecoration: 'none' }}>
            <ListItemButton className='listitem'>
              <ListItemIcon sx={{ padding: '0px 0px 0px 10px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="50" height="22" className='listicon' viewBox="0 0 24 24"><g fill="currentColor"><path d="M14.5 10.33h6.67A.83.83 0 0 0 22 9.5A7.5 7.5 0 0 0 14.5 2a.83.83 0 0 0-.83.83V9.5a.83.83 0 0 0 .83.83zm.83-6.6a5.83 5.83 0 0 1 4.94 4.94h-4.94z"></path><path d="M21.08 12h-8.15a.91.91 0 0 1-.91-.91V2.92A.92.92 0 0 0 11 2a10 10 0 1 0 11 11a.92.92 0 0 0-.92-1z"></path></g></svg>
              </ListItemIcon>
              <ListItemText className='listext' sx={{ color: '#637381' }}>
                <span style={{ fontSize: "14px", fontFamily: 'Public Sans,sans-serif' }}> Problems</span>
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

LeftSlidbar.propTypes = {
  window: PropTypes.func,
};

export default LeftSlidbar;