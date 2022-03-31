import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import {toggleBorder} from '../styles/debugging-border'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import {ThemeProvider } from '@mui/material/styles';
//import homeImageOne from '../../assets/Homeowners Assets/Mask Group 4@2x.png';
//import homeImageTwo from '../../assets/All Listings Assets/francesca-tosolini-DmOhItSo49k-unsplash@2x.png';
import ListCard from '../components/list-card/list-card';
import {WhiteTheme} from '../styles/themes/white-theme';
import divImage from '../../assets/All Listings Assets/mareks-steins-ankYj7GOgjw-unsplash@2x.png';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { makeStyles, createStyles } from '@mui/styles';
import axios from "axios";
import { baseURL, httpMethod, apiRoute } from '../utils/constants';

const isBorder = toggleBorder;
const styleObject = {
    paperContainer: {
        height: '220px',
        backgroundImage: `url(${divImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        border: isBorder ? '2px solid yellow' : 'none',
        width: '100%'
    }
};

const useStyles = makeStyles((theme) =>
  createStyles({
    cardsParent: {
        [theme.breakpoints.down('md')]: {
            alignItems: 'center',
        },
    },
    footerButton: {
        [theme.breakpoints.down('md')]: {
            padding: '.5rem 1rem',
            fontSize: '.9rem'
        },
    }
  }),
);

function MenuCard(props) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const filter = ['all locations', 'any price', 'any bed', 'any bath', 'parking'];
    return (
        <Card sx={{width: '100%', minWidth: '100px'}} elevation={1}>
            <div style = {{padding: '15px 15px'}}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <ThemeProvider theme={props.theme}>
                    <Button variant="contained" startIcon={<MenuOutlinedIcon />}>
                        Filters
                    </Button>
                </ThemeProvider>
                <ThemeProvider theme={props.theme}>
                    {
                        matches &&
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
                    }
                    <Button sx={{fontWeight: 600, fontSize: '1rem', fontFamily: 'inherit', whiteSpace: 'nowrap'}}>sort by</Button>
                </ThemeProvider>
            </Stack>
            </div>
        </Card>
    );
}

function Footer() {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <div style={styleObject.paperContainer}>
            <ThemeProvider theme={WhiteTheme}>
                <Container disableGutters maxWidth="xlg" sx={{ border: isBorder ? 1: 'none', height: '100%', padding: '50px'}}>
                    <Stack
                        direction={matches ? "row" : "column"}
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{ border: isBorder ? 1: 'none', height: '100%', width: matches ? '60%' : '100%', margin: 'auto'}}
                        spacing={'1rem'}
                    >
                        {
                            matches &&
                            <Stack>
                                <Typography color="primary" variant="h4" sx={{fontWeight: 600, fontFamily: 'inherit'}}>Need To Chat</Typography>
                                <Typography color="primary" variant="h4" sx={{fontWeight: 600, fontFamily: 'inherit'}}>About Budget?</Typography>
                            </Stack>
                        }
                        {
                            !matches &&
                            <Typography color="primary" variant="h5" sx={{fontWeight: 600, fontFamily: 'inherit'}}>Need To Chat About Budget?</Typography>
                        }
                        <Button variant="contained" sx={{px: 5, py: 1, borderRadius: 2, fontWeight: 600, textTransform: 'none', whiteSpace: 'nowrap', fontSize: '1.2rem'}}
                            className={classes.footerButton}
                        >
                            Book A Meeting
                        </Button>
                    </Stack>
                </Container>
            </ThemeProvider>
        </div>
    );
}

function FlatListingPage(props) {
    const useEffect = React.useEffect;
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const sortBy = ['Highest Price', 'Lowest Price', 'Earliest Move In', 'Recently Listed'];
    // let Cards = [
    //    {price : '$450', address: '230 Queen Street', bed: 2, bath: 1, image: homeImageOne},
    //     {price : '$300', address: '120 Shortlant Street', bed: 5, bath: 2, image: homeImageTwo},
    //     {price : '$500', address: '4 Alma Street', bed: 3, bath: 1, image: homeImageOne},
    // ];
    const [cards, setCards] = React.useState([]);
    
    useEffect(() => {
        const getListings = axios.create({
            baseURL: baseURL + apiRoute.getRooms,
            method: httpMethod.get,
        });
        getListings().then( res => {
            const rooms = res.data.rooms;
            rooms.forEach(room => {
                setCards( C => [...C, {
                    price: room.rent,
                    address: room.house.address.house_number +' '+room.house.address.street,
                    bed: room.house.number_of_kitchen,
                    bath: room.house.number_of_washrooms,
                    image: room.house.images[0].thumb,
                    id: room.id
                }]);
            })
        }).catch(err => {
            console.log(err);
        });
    }, []);
    return (
    <React.Fragment>
        <Stack spacing={15} direction="column" justifyContent="space-between" alignItems="center" sx={{ border: isBorder ? '1px solid red' : 'none', height: matches ? '255vh' : 'fit-content'}}>
            <Stack spacing={3} style={{maxWidth: '1440px', width: '100%', border: isBorder ? '2px solid yellow' : 'none',}}>
                <Stack direction="row" justifyContent="center" sx={{width: '100%'}}>
                    {
                        matches &&
                        <Box sx={{width: '10%', minWidth: '5%', border: isBorder ? '1px solid purple' : 'none',}}/>
                    }
                    <div style={{width: '80%', border: isBorder ? '1px solid orange' : 'none'}}>
                        <ThemeProvider theme={props.data.headingTheme}>
                            <Typography color="primary" variant="body1" sx={{fontWeight: 500, fontSize: '40px', fontFamily: 'inherit'}}>Friendly Flat Listings</Typography>
                        </ThemeProvider>
                        <MenuCard theme={props.data.menuBarTheme}/>
                    </div>
                    {
                        matches &&
                        <ThemeProvider theme={props.data.filterTheme}>
                            <Stack direction="column" justifyContent="space-between" alignItems="center" spacing={1} sx={{width: '10%', border: isBorder ? '1px solid green' : 'none', marginTop: '95px'}}>
                                {
                                    sortBy.map((item, i) => (
                                        <Typography color="primary" sx={{fontFamily: 'inherit', fontWeight: i === 1 ? 700 : 500, opacity: i===1 ? 1 : .5, fontSize: '.75rem'}} key={i} variant="body1">{item}</Typography>
                                    ))
                                }
                            </Stack>
                        </ThemeProvider>
                    }
                </Stack>
                <Stack direction="column" alignItems="center" style={{width: matchesMobile ? '100%' : '80%', border: isBorder ? '2px solid orange' : 'none', marginLeft: 'auto', marginRight: 'auto', height: '100%'}}>
                    <Stack spacing={'6rem'} justifyContent="space-between" style={{width: '90%', border: isBorder ? '2px solid purple' : 'none', height: '100%'}}>
                        <ThemeProvider theme={props.data.filterTheme}>
                            <Typography color="primary" variant="body1" sx={{fontWeight: 500, fontSize: '1.1rem', fontFamily: 'inherit'}}>Showing 1 - 48 Of 100 Properties</Typography>
                        </ThemeProvider>
                        <Stack className={classes.cardsParent} direction={ matches ? "row" : "column"} justifyContent="space-between" sx={{ border: isBorder ? '1px solid red' : 'none', maxWidth: '100%',  height: matches ? '400px' : 'fit-content'}} spacing={'2rem'}>
                            {
                                matches &&
                                cards.map((card, i) => (
                                    <ListCard key={i} boxShadow = {true} theme={props.data.cardTheme} data = {card}/>
                                )
                            )}
                            {
                                !matches &&
                                cards.map((card, i) => (
                                    <ListCard key={i} boxShadow = {true} theme={props.data.cardTheme} data = {card}
                                        styles={{imageHeight: '200px', cardMargin: 'auto', cardWidth: '250px'}}
                                    />
                                )
                            )}
                        </Stack>
                    </Stack>                    
                </Stack>
            </Stack>
            <ThemeProvider theme={props.data.menuBarTheme}>
                <Button variant="contained" sx={{borderRadius: '30px', paddingX: '25px'}}>
                    View more
                </Button>
            </ThemeProvider>
            <Footer/>
        </Stack>        
    </React.Fragment>
    );
}

export default FlatListingPage;