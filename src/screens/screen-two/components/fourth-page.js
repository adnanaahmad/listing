import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import {ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import {toggleBorder} from '../../../shared/styles/debugging-border'
import {WhiteTheme} from '../../../shared/styles/themes/white-theme'

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
const classes = {
    paperContainer: {
        height: '400px',
        width: '100%',
        backgroundImage: 'url("https://thumbs.dreamstime.com/b/abstract-technology-background-minimal-architecture-design-white-industrial-wallpaper-d-illustration-178461060.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        border: isBorder ? '2px solid red' : 'none',
        display: 'flex',
        justifyContent: 'end'
    }
};
function FourthPage() {
    const Card = {
        title: "Your Properties Taken Care Of",
        image: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_522854574_360091.jpg",
        paraOne: "Every person has different wants, needs and budgets when it comes to housing in New Zealand.",
        paraTwo: "Whether you a looking to put your property up for rent, or finding a good flat that suits your needs, we know how important it is to get it right the first time.",
    };
    return (
    <React.Fragment>
        <ThemeProvider theme={TypographyTheme}>
            <Stack direction="column" alignItems="center" justifyContent="space-between" spacing={'2rem'} sx={{ border: isBorder ? '2px solid red' : 'none', height: '100vh'}}>
                    <Box sx={{height: '5%', width: '100%', border: isBorder ? '2px solid pink' : 'none'}}/>
                    <Stack direction="row" justifyContent="space-around" spacing={'2rem'} sx={{ border: isBorder ? '2px solid orange' : 'none', width: '80%', height: 'fitContent'}}>
                        <Stack direction="column" justifyContent="center" alignItems="center" sx={{ border: isBorder ? '1px solid green' : 'none', width: '50%'}} spacing={'1rem'}>
                            <Typography variant="h4" sx={{fontWeight: 500}}>{Card.title}</Typography>
                            <Typography variant="body1" display="block">
                                {Card.paraOne}
                            </Typography>
                            <Typography variant="body1" display="block">
                                {Card.paraTwo}
                            </Typography>                        
                        </Stack>
                        <Stack sx={{width: '30%', border: isBorder ? '1px solid green' : 'none',}}>
                            <Box component="img"
                                sx={{
                                    height: '500px',
                                    borderRadius: "40px",
                                    width: '100%',
                                    objectFit: 'cover'
                                }}
                                alt="The house from the offer."
                                src={Card.image}
                            />
                        </Stack>
                    </Stack>
                    <div style={classes.paperContainer}>
                        <ThemeProvider theme={WhiteTheme}>
                            <Stack direction="column" alignItems="center" justifyContent="center" sx={{backgroundColor: WhiteTheme.palette.primary.contrastText, height: '40%', width: '50%', borderRadius: '30px', padding: '10px', marginX: 'auto', marginTop: 'auto'}}>
                                    <Typography sx={{fontSize: '1.2rem'}} color="primary" variant="body1" display="block">
                                        As a landlord, wo know that you want to minimise your risk and maximise your rental returns.
                                    </Typography>
                                    <Typography sx={{fontSize: '1.2rem'}} color="primary" variant="body1" display="block">
                                        You need total trust in the people who are managing your investment.
                                    </Typography>
                                    <Typography sx={{fontSize: '1.2rem'}} color="primary" variant="body1" display="block">
                                        Here at Friendly Flats, we put your priorities first.
                                    </Typography>
                                </Stack>
                        </ThemeProvider>
                    </div>             
            </Stack>
        </ThemeProvider>
    </React.Fragment>
    );
}

export default FourthPage;