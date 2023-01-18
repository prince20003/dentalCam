import React from 'react'
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Countrystyle from '../Style/Coutrystyle';

function Country() {
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
                <Tooltip title="Language">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}>
                        <img src="https://www.dentalcam.app/static/media/ic_flag_en.9a67c937.svg" width="40px" height='28px' alt="flag" />
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
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                <Countrystyle>
                    <MenuItem className='menu'>
                        <ListItemIcon>
                            <img alt="flag" src="https://www.dentalcam.app/static/media/ic_flag_en.9a67c937.svg" className='flag'   />
                            <Typography variant='span' className='en' sx={{color:'black'}}>English</Typography>
                        </ListItemIcon>
                    </MenuItem>
                    <MenuItem className='menu'>
                        <img alt="flag" src="https://www.dentalcam.app/static/media/ic_flag_fr.7b5666a7.svg" className='flag'  />
                        <Typography variant='span' className='en'>Spanish</Typography>
                    </MenuItem>
                    <MenuItem className='menu'>
                        <img alt="flag" src="https://www.dentalcam.app/static/media/ic_flag_es.svg.3094e877.svg" className='flag'  />
                        <Typography variant='span' className='en'>Italian</Typography>
                    </MenuItem>
                </Countrystyle>
            </Menu>

        </>
    )
}

export default Country