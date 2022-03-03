import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import {ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {GreenTheme} from '../styles/themes/green-theme';
import {toggleBorder} from '../styles/debugging-border';
import BedIcon from '@mui/icons-material/Bed';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import Container from '@mui/material/Container';
import {WhiteTheme} from '../styles/themes/white-theme';
import divImage from '../../assets/All Listings Assets/mareks-steins-ankYj7GOgjw-unsplash@2x.png';
import sofaImage from '../../assets/All Listings Assets/francesca-tosolini-DmOhItSo49k-unsplash@2x.png';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { makeStyles, createStyles } from '@mui/styles';

const TypographyTheme = createTheme();
const isBorder = toggleBorder;

TypographyTheme.typography.body1 = {
    fontSize: '1.2rem',
    maxWidth: '600px',
    '@media (min-width:600px)': {
        fontSize: '1rem',
        maxWidth: '600px',
    },
    [TypographyTheme.breakpoints.up('xl')]: {
        fontSize: '1.5rem',
        maxWidth: '600px',
    },
    [TypographyTheme.breakpoints.up('lg')]: {
        fontSize: '1.3rem',
        maxWidth: '600px',
    },
};
const styleObject = {
    infoTab: {
        background: '#ea9760',
        color: 'white',
        borderRadius: '15px',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
        position: 'absolute'
    },
    paperContainer: {
        height: '300px',
        backgroundImage: `url(${divImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        border: isBorder ? '2px solid yellow' : 'none',
        width: '100%'
    }
};

const useStyles = makeStyles((theme) =>
  createStyles({
    parent: {
        [theme.breakpoints.down('md')]: {
            height: 'fit-content',
            padding: '2rem 0'
        },
    },
    firstComponent: {
        [theme.breakpoints.down('md')]: {
            alignItems: 'center',
        },
    },
    fcImg: {
        [theme.breakpoints.down('md')]: {
            maxHeight: '300px',
            borderRadius: '1rem'
        },
    },
    childTxt: {
        [theme.breakpoints.down('md')]: {
            width: '100%',
            maxWidth: '300px'
        },
    },
    childImg: {
        [theme.breakpoints.down('md')]: {
            width: '100%',
            maxWidth: '300px'
        },
    }
  }),
);

function Footer() {
    return (
        <div style={styleObject.paperContainer}>
            <ThemeProvider theme={WhiteTheme}>
                <Container disableGutters maxWidth="xlg" sx={{ border: isBorder ? 1: 'none', height: '100%', paddingY: '50px'}}>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ border: isBorder ? 1: 'none', height: '100%', width: '100%', margin: 'auto'}}
                        spacing={'1rem'}
                    >
                        <Typography color="primary" variant="h4" sx={{fontWeight: 600, fontFamily: 'inherit'}}>PRICE GUARENTEE</Typography>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                          sx={{border: isBorder ? '2px solid yellow' : 'none', width: '100%'}}
                        >
                            <div style = {{borderBottom:'4px solid #ea9760', width: '48%', height: '2rem'}}></div>
                            <HomeOutlinedIcon sx={{color: '#ea9760', fontSize: '4rem'}} />
                            <div style = {{borderBottom:'4px solid #ea9760', width: '48%', height: '2rem'}}></div>
                        </Stack>
                        <Stack
                          direction="column"
                          justifyContent="center"
                          alignItems="center"
                          sx={{width: '100%'}}
                        >
                            <Typography color="primary" variant="body1" sx={{fontWeight: 600, fontFamily: 'inherit', textAlign: 'center'}}>We're committed to offering NZ's most affordable rentals.</Typography>
                            <Typography color="primary" variant="body1" sx={{fontWeight: 600, fontFamily: 'inherit', textAlign: 'center'}}>If you find a business who you think provides a better service, let us know.</Typography>
                            <Typography color="primary" variant="body1" sx={{fontWeight: 600, fontFamily: 'inherit', textAlign: 'center'}}>We are not just friendly, but flexible too!</Typography>
                        </Stack>
                    </Stack>
                </Container>
            </ThemeProvider>
        </div>
    );
}

function SecondSpacePage(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const Card = {
        title: "We'll Find You A Space That Suits You Best",
        image: sofaImage,
        paraOne: "Every person has different wants, needs and budgets when it comes to housing in New Zealand.",
        paraTwo: "Whether you a looking to put your property up for rent, or finding a good flat that suits your needs, we know how important it is to get it right the first time.",
    };
    return (
    <React.Fragment>
        <Stack className={classes.parent} direction="column" alignItems="center" justifyContent={props.data.showBottomBar ? 'space-between' : 'center'} spacing={'2rem'} sx={{ border: isBorder ? '2px solid red' : 'none', height: '120vh'}}>
            <Stack className={classes.firstComponent} direction={matches ? "row" : "column-reverse"} justifyContent="space-around" spacing={'2rem'} sx={{ border: isBorder ? '2px solid orange' : 'none', width: '70%', height: 'fitContent', maxWidth: '1440px'}}>
                <Stack className={classes.childTxt} direction="column" justifyContent="center" alignItems="flex-start" sx={{ border: isBorder ? '1px solid green' : 'none', width: '50%', maxWidth: '400px'}} spacing={'2rem'}>
                    <ThemeProvider theme={props.data.theme}>
                        <Typography color="primary" variant="h4" sx={{fontWeight: 500}}>{Card.title}</Typography>
                        <Typography color="primary" variant="body1" display="block">
                            {Card.paraOne}
                        </Typography>
                        <Typography color="primary" variant="body1" display="block">
                            {Card.paraTwo}
                        </Typography>  
                    </ThemeProvider>
                    {
                        props.data.showButton &&
                        <ThemeProvider theme={GreenTheme}>
                            <Button variant="contained" sx={{borderRadius: '30px', paddingX: '25px'}}>
                                View more
                            </Button>
                        </ThemeProvider>      
                    }              
                </Stack>
                <Stack className={classes.childImg} sx={{width: '35%', border: isBorder ? '1px solid green' : 'none', position: 'relative'}}>
                    <Box component="img"
                        sx={{
                            height: '600px',
                            borderTopRightRadius: "40px",
                            borderTopLeftRadius: "40px",
                            width: '100%',
                            objectFit: 'cover'
                        }}
                        alt="The house from the offer."
                        src={Card.image}
                        className={classes.fcImg}
                    />
                    <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ border: isBorder ? 1 : 'none'}}>
                        <Stack direction="row" alignItems="center" style={styleObject.infoTab} sx={{paddingX: 2.5, paddingY: .5, top: matches ? '80%' : '60%', left: '-13px'}}>
                            <Typography variant="body1" sx={{fontSize: '2rem'}}>1</Typography>
                            <BathtubOutlinedIcon sx={{fontSize: '2rem'}}/>
                        </Stack>
                        <Stack direction="row" alignItems="center" style={styleObject.infoTab} sx={{paddingX: 2.5, paddingY: .5, left: '-13px'}}>
                            <Typography variant="body1" sx={{fontSize: '2rem',}}>2</Typography>
                            <BedIcon sx={{fontSize: '2rem'}}/>
                        </Stack>
                        <Stack direction="row" alignItems="center" style={styleObject.infoTab} sx={{paddingX: 2.5, paddingY: .5, right: '-13px'}}>
                            <Typography variant="body1" sx={{fontSize: '2rem',}}>$235</Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            {
                props.data.showBottomBar &&
                <Footer/>  
            }      
        </Stack>
    </React.Fragment>
    );
}

export default SecondSpacePage;