import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import {ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import {toggleBorder} from '../../shared/styles/debugging-border';
import {WhiteTheme} from '../../shared/styles/themes/white-theme';
import plantImage from '../../assets/Homeowners Assets/DSC02111@2x.png';
import houseImage from '../../assets/About Us Assets/three.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { makeStyles, createStyles } from '@mui/styles';

const TypographyTheme = createTheme();
const isBorder = toggleBorder;

TypographyTheme.typography.body1 = {
    fontSize: '1rem',
    '@media (min-width:600px)': {
        fontSize: '.9rem',
    },
    [TypographyTheme.breakpoints.up('xl')]: {
        fontSize: '1.2rem',
    },
    [TypographyTheme.breakpoints.up('lg')]: {
        fontSize: '1rem',
    },
};

const useStyles = makeStyles((theme) =>
  createStyles({
    parent: {
        [theme.breakpoints.down('md')]: {
            height: 'fit-content',
            padding: '2rem 0'
        },
    },
    footer: {
        [theme.breakpoints.down('md')]: {
            width: '90%',
        },
    },
    footerInfo: {
        [theme.breakpoints.down('md')]: {
            whiteSpace: 'inherit'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '.7rem'
        },
    },
    firstComponent: {
        [theme.breakpoints.down('md')]: {
            width: '100%',
            alignItems: 'center',
            height: 'fit-content',
            padding: 0
        },
    },
    childImg: {
        [theme.breakpoints.down('md')]: {
            width: '100%',
            maxWidth: '300px',
            maxHeight: '220px'
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            maxWidth: '200px',
        },
    },
    childTxt: {
        [theme.breakpoints.down('md')]: {
            width: '100%',
            maxWidth: '400px'
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            maxWidth: '300px'
        },
    },
    img: {
        [theme.breakpoints.down('md')]: {
            maxHeight: '220px',
            borderRadius: '1rem'
        },
        [theme.breakpoints.down('sm')]: {
            borderRadius: '.5rem',
            maxHeight: '150px'
        },
    }
  }),
);

function PropertiesTcoPage(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const Card = {
        title: "Your Properties Taken Care Of",
        image: plantImage,
        paraOne: "Every person has different wants, needs and budgets when it comes to housing in New Zealand.",
        paraTwo: "Whether you a looking to put your property up for rent, or finding a good flat that suits your needs, we know how important it is to get it right the first time.",
    };
    const bottomContent = [
        'As a landlord, wo know that you want to minimise your risk and maximise your rental returns.', 
        'You need total trust in the people who are managing your investment.', 
        'Here at Friendly Flats, we put your priorities first.'
    ]
    return (
    <React.Fragment>
        <ThemeProvider theme={TypographyTheme}>
            <Stack className={classes.parent} direction="column" alignItems="center" justifyContent="space-around" spacing={'2rem'} sx={{ border: isBorder ? '2px solid red' : 'none', height: '100vh'}}>
                    <Stack direction="row" justifyContent="center" sx={{width: '100%', border: isBorder ? '2px solid pink' : 'none', height: '50%', maxHeight: '500px'}}>
                        <Stack className={classes.firstComponent} direction={ matches ? "row" : "column-reverse"} justifyContent="space-around" spacing={'2rem'} sx={{ border: isBorder ? '2px solid orange' : 'none', width: '80%', maxWidth: '1024px', height: 'fitContent',}}>
                            <Stack className={classes.childTxt} spacing={'2rem'} direction="column" justifyContent="center" alignItems="flex-start" sx={{ border: isBorder ? '1px solid green' : 'none', width: '40%'}}>
                                <Typography variant="h4" sx={{fontWeight: 500, maxWidth: '300px'}}>{Card.title}</Typography>
                                <Typography variant="body1" display="block">
                                    {Card.paraOne}
                                </Typography>
                                <Typography variant="body1" display="block">
                                    {Card.paraTwo}
                                </Typography>                        
                            </Stack>
                            <Stack className={classes.childImg} sx={{width: '40%', border: isBorder ? '1px solid green' : 'none',}}>
                                <Box component="img"
                                    sx={{
                                        height: '100%',
                                        borderRadius: "40px",
                                        width: '100%',
                                        objectFit: 'cover'
                                    }}
                                    alt="The house from the offer."
                                    src={Card.image}
                                    className={classes.img}
                                />
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack direction="row" justifyContent="center" sx={{border: isBorder ? '2px solid red' : 'none', width: '100%'}}>
                        {
                            matches && props.data &&
                            <Stack sx={{border: isBorder ? '1px solid green' : 'none',}}>
                                <Box component="img"
                                    sx={{
                                        height: '100%',
                                        borderRadius: "40px",
                                        width: '100%',
                                        objectFit: 'cover'
                                    }}
                                    alt="The house from the offer."
                                    src={houseImage}
                                />
                            </Stack> 
                        }                      
                        <Stack className={classes.footer} direction="column" justifyContent="center" alignItems="stretch" sx={{backgroundColor: WhiteTheme.palette.primary.contrastText, borderRadius: '30px', padding: '10px', height: '50%', minHeight: '100px', marginTop: 'auto', width: '60%', maxWidth: '1024px'}}>
                            {
                                bottomContent.map((item, i) => (
                                    <Typography className={classes.footerInfo} key={i} sx={{whiteSpace: 'nowrap', color: 'white', textAlign: 'center', width: '100%'}} variant="body1" display="block">
                                        {item}
                                    </Typography>
                                ))
                            }
                        </Stack>
                        {
                            matches && props.data &&
                            <Stack sx={{border: isBorder ? '1px solid green' : 'none',}}>
                                <Box component="img"
                                    sx={{
                                        height: '100%',
                                        borderRadius: "40px",
                                        width: '100%',
                                        objectFit: 'cover',
                                        transform: 'scaleX(-1)'
                                    }}
                                    alt="The house from the offer."
                                    src={houseImage}
                                />
                            </Stack>
                        }                  
                    </Stack>             
            </Stack>
        </ThemeProvider>
    </React.Fragment>
    );
}

export default PropertiesTcoPage;