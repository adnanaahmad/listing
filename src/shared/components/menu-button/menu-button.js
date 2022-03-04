import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import {ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function MenuButton(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const theme = useTheme();
    const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <React.Fragment>
        <ThemeProvider theme={props.data.menuTheme}>
                <IconButton 
                color="primary" 
                sx={{height: 'fit-content'}}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                >
                    <MenuIcon sx={{ fontSize: matchesMobile ? '2rem' : '4rem'}}/>
                </IconButton>
                <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
                color="primary" 
                >
                    {
                        props.data.menu.map((item, i) => (
                            <MenuItem key={i} color="primary" onClick={handleClose}>{item}</MenuItem>
                        ))
                    }
                </Menu>
        </ThemeProvider>
    </React.Fragment>
  );
}

export default MenuButton;