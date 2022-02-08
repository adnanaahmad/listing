import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import {toggleBorder} from './../../../shared/styles/debugging-border';
import {ThemeProvider} from '@mui/material/styles';
import {WhiteTheme} from './../../../shared/styles/themes/white-theme'
import divImage from './../../../assets/All Listings Assets/mareks-steins-ankYj7GOgjw-unsplash@2x.png'

const isBorder = toggleBorder;
const classes = {
    paperContainer: {
        height: '100%',
        backgroundImage: `url(${divImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        border: isBorder ? '2px solid red' : 'none',
    }
};

export default function FooterPrimary() {
    const firstColumn = ['Services', 'Landlords', 'Tenants', 'Management'];
    const secondColumn = ['RESOURCES', 'FAQs', 'Management', 'Privacy Policy'];
    const thirdColumn = ['CONTACT', 'hk@friendlyflats.co.nz', '0800 123 4567', 'Auckland City'];
    return (
        <React.Fragment>
            <div style={classes.paperContainer}>
                <ThemeProvider theme={WhiteTheme}>
                    <Container disableGutters maxWidth="xlg" sx={{ border: isBorder ? 1: 'none', height: '100%', padding: '50px'}}>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            sx={{ border: isBorder ? 1: 'none', height: '100%'}}
                            spacing={'1rem'}
                        >
                            <Stack>
                                <Typography color="primary" variant="h4" sx={{fontWeight: 600}}>Want To Find</Typography>
                                <Typography color="primary" variant="h4" sx={{fontWeight: 600}}>A Friendly Flat?</Typography>
                            </Stack>
                            <Stack color="primary" direction="row" alignItems="center" sx={{ border: 1, borderColor: WhiteTheme.palette.primary.main, borderRadius: 2, minWidth: '50%', py: 1, px: 4}}>
                                <SearchIcon color="primary" fontSize='large'/>
                                <Typography color="primary" variant="h5">Your Email</Typography>
                            </Stack>
                            <Button variant="contained" size="large" sx={{px: 5, py: 1, borderRadius: 2, fontWeight: 600, textTransform: 'none', whiteSpace: 'nowrap', fontSize: '1.2rem'}}>
                                Book A Meeting
                            </Button>
                        </Stack>
                    </Container>
                </ThemeProvider>
            </div>
            <Container disableGutters maxWidth="xlg" sx={{ border: isBorder ? 1: 'none', minHeight: '100px', padding: '50px'}}>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ border: isBorder ? 1: 'none', height: '100%'}}
                >
                    <HomeOutlinedIcon sx={{ fontSize: 200 }}/>
                    <Stack spacing={2}>
                        {
                            firstColumn.map((item, i) => (
                                <Typography key={i} variant="h5" component="div" sx={{fontWeight: 700}}>
                                    {item}
                                </Typography>
                            ))
                        }
                    </Stack>
                    <Stack spacing={2}>
                        {
                            secondColumn.map((item, i) => (
                                <Typography key={i} variant="h5" component="div" sx={{fontWeight: 700}}>
                                    {item}
                                </Typography>
                            ))
                        }
                    </Stack>
                    <Stack spacing={2}>
                       {
                            thirdColumn.map((item, i) => (
                                <Typography key={i} variant="h5" component="div" sx={{fontWeight: 700}}>
                                    {item}
                                </Typography>
                            ))
                        }
                    </Stack>
                </Stack>
            </Container>
        </React.Fragment>
    );
}