
import React from 'react'

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonIcon from '@mui/icons-material/Person';
import { Button } from '@mui/material';
import MenuLang from './MenuLang';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Action';
function MainLogout() {
    const navigate = useNavigate()
  const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const info = useSelector((state) => state.Dental.info)

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };   

const logou =()=>{

     dispatch(logout())
     navigate('/login')
}
    return (
        <>

            <MenuLang />
            <React.Fragment>
                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>

                    <Tooltip title="Account settings">
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 0.7 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <Avatar sx={{ width: 40, height: 40, color: '#0B3379', backgroundColor: '#C4CDD5' }} />
                        </IconButton>
                    </Tooltip>
                </Box>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            width: '220px',
                            height: 'auto',
                            borderRadius: '8px',
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 21,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >


                      { info.map((row)=>(
                        <> 
            <Typography sx={{margin:'12px 0 0 0',padding:'0 20px', fontSize: '16px', fontFamily: 'Public Sans,sans-serif', fontWeight: '600'}}>{row.data.Username}</Typography>
            <Typography sx={{margin:'0px 0',padding:'0 20px', fontSize: '12px', fontFamily: 'Public Sans,sans-serif', fontWeight: '600'}}>{row.data.Email}</Typography>
            </>   ))}
                    <Divider sx={{ margin: '8px 0' }} />
                    <NavLink to='/profile' style={{ color: 'black', textDecoration: 'none' }}>
                        <MenuItem sx={{ fontSize: '14px', fontFamily: 'Public Sans,sans-serif', fontWeight: '500', padding: '8px 20px' }}>
                            <ListItemIcon>
                                <PersonIcon fontSize="small" sx={{ color: 'black' }} />
                            </ListItemIcon>
                            Profile
                        </MenuItem>
                    </NavLink>
                    <Box sx={{ padding: '12px 16px 16px    ' }}>
                        <Button onClick={logou} variant="outlined" sx={{ color: '#0000EE', border: '1px solid rgba(145, 158, 171, 0.32)', borderRadius: '8px', textTransform: 'capitalize', fontSize: '14px', fontFamily: 'Public Sans,sans-serif', fontWeight: '700', width: '186px' }}>Logout</Button>
                    
                    </Box>
                </Menu>
            </React.Fragment>
        </>
    )
}

export default MainLogout                   
