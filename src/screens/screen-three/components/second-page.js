import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import {toggleBorder} from '../../../shared/styles/debugging-border'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import {LightGreenTheme} from '../../../shared/styles/themes/light-green-theme';
import {GreenTheme} from '../../../shared/styles/themes/green-theme';
import {ThemeProvider } from '@mui/material/styles';
import { width } from '@mui/system';

function MenuCard() {
    const filter = ['all locations', 'any price', 'any bed', 'any bath', 'parking'];
    return (
        <Card sx={{ minWidth: 275, width: '100%', minWidth: '800px'}} elevation={1}>
            <div style = {{padding: '15px 15px'}}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <ThemeProvider theme={GreenTheme}>
                    <Button variant="contained" startIcon={<MenuOutlinedIcon />}>
                        Filters
                    </Button>
                </ThemeProvider>
                <ThemeProvider theme={LightGreenTheme}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        {
                            filter.map((item, i) => (
                            <React.Fragment key={i}>
                                <Button sx={{fontWeight: 600, textTransform: 'none', fontSize: '1rem', fontFamily: 'inherit', whiteSpace: 'nowrap'}}>{item}</Button>
                                { i !== 4 &&
                                    <Typography color="primary" variant="body1">|</Typography>
                                }
                            </React.Fragment>  
                        ))}
                    </Stack>
                    <Button sx={{fontWeight: 600, fontSize: '1rem', fontFamily: 'inherit', whiteSpace: 'nowrap'}}>sort by</Button>
                </ThemeProvider>
            </Stack>
            </div>
        </Card>
    );
}

function SecondPage() {
    const isBorder = toggleBorder;
    const sortBy = ['Highest Price', 'Lowest Price', 'Earliest Move In', 'Recently Listed'];
    return (
    <React.Fragment>
        <Stack direction="column" alignItems="center" sx={{ border: isBorder ? '1px solid red' : 'none', height: '140vh'}}>
            <div style={{maxWidth: '1440px', width: '100%'}}>
                <Stack direction="row" justifyContent="center" sx={{width: '100%'}}>
                    <Box sx={{width: '10%', minWidth: '5%', border: isBorder ? '1px solid purple' : 'none',}}/>
                    <div style={{width: '80%', border: isBorder ? '1px solid orange' : 'none'}}>
                        <Typography variant="body1" sx={{fontWeight: 500, fontSize: '40px', fontFamily: 'inherit'}}>Friendly Flat Listings</Typography>
                        <MenuCard/>
                    </div>
                    <Stack direction="column" justifyContent="space-between" alignItems="center" spacing={1} sx={{width: '10%', border: isBorder ? '1px solid green' : 'none', marginTop: '95px'}}>
                        {
                            sortBy.map((item, i) => (
                                <Typography sx={{fontFamily: 'inherit', fontWeight: i == 1 ? 700 : 500, color: i==1 ? 'inherit' : '#a1a1a1', fontSize: '.8rem'}} key={i} variant="body1">{item}</Typography>
                            ))
                        }
                    </Stack>
                </Stack>
            </div>
        </Stack>        
    </React.Fragment>
    );
}

export default SecondPage;