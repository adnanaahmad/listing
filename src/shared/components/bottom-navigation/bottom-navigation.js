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
import { useLocation } from 'react-router-dom';
import { screens as screen } from '../../utils/constants';

export default function FixedBottomNavigation() {
    const history = useHistory();
    const location = useLocation();

    function handleClick(direction) {
        let pageNumber = null;
        Object.entries(screen).forEach(([key, value]) => {
            if (value === location.pathname) {
                pageNumber = Number(key);
            }
        });
        if (!pageNumber) return;
        direction === 'forward' ? pageNumber++ : pageNumber--;
        pageNumber === 0 ? pageNumber = 20 : pageNumber &= pageNumber;
        pageNumber === 21 ? pageNumber = 1 : pageNumber &= pageNumber;
        history.push(screen[pageNumber]);
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
