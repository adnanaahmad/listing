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
import homeImageOne from '../../../assets/Homeowners Assets/Mask Group 4@2x.png';
import homeImageTwo from '../../../assets/All Listings Assets/francesca-tosolini-DmOhItSo49k-unsplash@2x.png';
import ListCard from '../../../shared/components/list-card/list-card';
import {WhiteTheme} from '../../../shared/styles/themes/white-theme';
import {LightTheme} from '../../../shared/styles/themes/light-theme';
import divImage from '../../../assets/All Listings Assets/mareks-steins-ankYj7GOgjw-unsplash@2x.png';
import Container from '@mui/material/Container';

const isBorder = toggleBorder;
const classes = {
    paperContainer: {
        height: '220px',
        backgroundImage: `url(${divImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        border: isBorder ? '2px solid yellow' : 'none',
        width: '100%'
    }
};

function MenuCard() {
    const filter = ['all locations', 'any price', 'any bed', 'any bath', 'parking'];
    return (
        <Card sx={{width: '100%', minWidth: '800px'}} elevation={1}>
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

function Footer() {
    return (
        <div style={classes.paperContainer}>
            <ThemeProvider theme={WhiteTheme}>
                <Container disableGutters maxWidth="xlg" sx={{ border: isBorder ? 1: 'none', height: '100%', padding: '50px'}}>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{ border: isBorder ? 1: 'none', height: '100%', width: '60%', margin: 'auto'}}
                        spacing={'1rem'}
                    >
                        <Stack>
                            <Typography color="primary" variant="h4" sx={{fontWeight: 600, fontFamily: 'inherit'}}>Need To Chat</Typography>
                            <Typography color="primary" variant="h4" sx={{fontWeight: 600, fontFamily: 'inherit'}}>About Budget?</Typography>
                        </Stack>
                        <Button variant="contained" size="large" sx={{px: 5, py: 1, borderRadius: 2, fontWeight: 600, textTransform: 'none', whiteSpace: 'nowrap', fontSize: '1.2rem'}}>
                            Book A Meeting
                        </Button>
                    </Stack>
                </Container>
            </ThemeProvider>
        </div>
    );
}

function SecondPage() {
    const sortBy = ['Highest Price', 'Lowest Price', 'Earliest Move In', 'Recently Listed'];
    let Cards = [
        {price : '$450', address: '230 Queen Street', bed: 2, bath: 1, image: homeImageOne},
        {price : '$300', address: '120 Shortlant Street', bed: 5, bath: 2, image: homeImageTwo},
        {price : '$500', address: '4 Alma Street', bed: 3, bath: 1, image: homeImageOne},
    ];
    return (
    <React.Fragment>
        <Stack spacing={15} direction="column" justifyContent="space-between" alignItems="center" sx={{ border: isBorder ? '1px solid red' : 'none', height: '218vh'}}>
            <Stack spacing={3} style={{maxWidth: '1440px', width: '100%', border: isBorder ? '2px solid yellow' : 'none',}}>
                <Stack direction="row" justifyContent="center" sx={{width: '100%'}}>
                    <Box sx={{width: '10%', minWidth: '5%', border: isBorder ? '1px solid purple' : 'none',}}/>
                    <div style={{width: '80%', border: isBorder ? '1px solid orange' : 'none'}}>
                        <Typography variant="body1" sx={{fontWeight: 500, fontSize: '40px', fontFamily: 'inherit', color: '#36400F'}}>Friendly Flat Listings</Typography>
                        <MenuCard/>
                    </div>
                    <Stack direction="column" justifyContent="space-between" alignItems="center" spacing={1} sx={{width: '10%', border: isBorder ? '1px solid green' : 'none', marginTop: '95px'}}>
                        {
                            sortBy.map((item, i) => (
                                <Typography sx={{fontFamily: 'inherit', fontWeight: i === 1 ? 700 : 500, color: i===1 ? 'inherit' : '#a1a1a1', fontSize: '.8rem'}} key={i} variant="body1">{item}</Typography>
                            ))
                        }
                    </Stack>
                </Stack>
                <Stack direction="column" alignItems="center" style={{width: '80%', border: isBorder ? '2px solid orange' : 'none', marginLeft: 'auto', marginRight: 'auto', height: '100%'}}>
                    <Stack spacing={'6rem'} justifyContent="space-between" style={{width: '90%', border: isBorder ? '2px solid purple' : 'none', height: '100%'}}>
                        <Typography variant="body1" sx={{fontWeight: 500, fontSize: '1.1rem', fontFamily: 'inherit'}}>Showing 1 - 48 Of 100 Properties</Typography>
                        {
                            [1,2,3].map((item, y) => (
                                <Stack key={y} direction="row" justifyContent="space-between" sx={{ border: isBorder ? '1px solid red' : 'none', maxWidth: '100%',  height: '400px'}} spacing={'2rem'}>
                                    {
                                        Cards.map((card, i) => (
                                            <ListCard key={i} boxShadow = {true} theme={LightTheme} data = {card} />
                                        )
                                    )}
                                </Stack>
                            ))
                        }
                    </Stack>                    
                </Stack>
            </Stack>
            <ThemeProvider theme={GreenTheme}>
                <Button variant="contained" sx={{borderRadius: '30px', paddingX: '25px'}}>
                    View more
                </Button>
            </ThemeProvider>
            <Footer/>
        </Stack>        
    </React.Fragment>
    );
}

export default SecondPage;