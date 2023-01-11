import React from 'react'
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import {  Button, List, ListItemButton } from '@mui/material';


function Termlang() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
  return (
    <>
     <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                    <Tooltip title="Languages">
                        <Button
                           variant='outlined'
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2,padding:'8px 15px',borderColor:'rgb(11,51,121)', borderRadius:'8px' }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                        <span style={{fontWeight:'700',color:'rgb(11,51,121)',fontFamily:'Public Sans,sans-serif',textTransform:'capitalize',paddingRight:'10px'}}>English</span>  <img alt='' style={{ height: '28px', width: '40px' }} src='https://dentalcam.app/static/media/ic_flag_en.9a67c937.svg' />
                        </Button>
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
                            width: '198px',
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
                    <List>
                        <ListItemButton >
                            <img alt='' style={{ height: '24px', width: "24px", borderRadius: '12px', objectFit: 'cover', margin: '0px 20px 0  10px' }} src='https://dentalcam.app/static/media/ic_flag_en.9a67c937.svg' />
                            <Typography>English</Typography>
                        </ListItemButton>
                        <ListItemButton>
                            <img alt='' style={{ height: '24px', width: "24px", borderRadius: '12px', objectFit: 'cover', margin: '0px 20px 0  10px' }} src='https://dentalcam.app/static/media/ic_flag_es.svg.3094e877.svg' />
                            <Typography>Italian</Typography>
                        </ListItemButton>
                    </List>
                </Menu>
    
    </>
  )
}

export default Termlang