import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import Paper from '@mui/material/Paper';
import {DarkTheme} from '../../styles/themes/dark-theme';
import {ThemeProvider} from '@mui/material/styles';
import { useHistory } from "react-router-dom";

export default function FixedBottomNavigation() {
    const history = useHistory();

    function handleClick(direction) {
        let pageNumber = Number((window.location.href).split('/').at(-1));
        direction === 'forward' ? pageNumber++ : pageNumber--;
        history.push(`/${pageNumber.toString()}`);
    }
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box sx={{ pb: 7 }}>
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                    <BottomNavigation
                    showLabels
                    >
                        <BottomNavigationAction onClick={() => handleClick('backward')} label="Previous Page" icon={<ArrowBackIosNewOutlinedIcon />} />
                        <BottomNavigationAction onClick={() => handleClick('forward')} label="Next Page" icon={<ArrowForwardIosOutlinedIcon />} />
                    </BottomNavigation>
                </Paper>
            </Box>
        </ThemeProvider>
    );
}
