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
import divImage from './../../../assets/Book a Meeting Asset/Mask Group 5@2x.png';
import Box from '@mui/material/Box';
import InstagramIcon from '@mui/icons-material/Instagram';

const isBorder = toggleBorder;

export default function FooterSecondary() {
    const firstColumn = ['Rent a Room', 'Rent a House', 'Homeowners', 'Property Management'];
    const secondColumn = ['FAQs', 'Privacy Policy', 'Terms and Conditions', 'Maintenance'];
    const thirdColumn = [ 'info@friendlyflats.co.nz', '0800 123 4567', 'Auckland, NZ'];
    return (
        <React.Fragment>
            <Stack sx={{border: isBorder ? '2px solid red' : 'none', position: 'relative', height: '55vh'}}>
                <Box component="img"
                        sx={{
                            height: '100%',
                            width: '100%',
                            objectFit: 'cover',
                            filter: 'brightness(65%)'
                        }}
                        alt="The house from the offer."
                        src={divImage}
                />
                <ThemeProvider theme={WhiteTheme}>
                    <Container disableGutters maxWidth="xlg" sx={{ border: isBorder ? 1: 'none', padding: '50px', position: 'absolute'}}>
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
                    <div style={{borderBottom: '2px solid white', width: '100%', top: '45%', position: 'absolute'}}></div>
                    <Container disableGutters maxWidth="xlg" sx={{ border: isBorder ? 1: 'none', padding: '50px', position: 'absolute', top: '50%'}}>
                        <Stack
                        direction="row"
                        justifyContent="space-between"
                        sx={{ border: isBorder ? 1: 'none', height: '100%'}}
                        >   
                            <Stack>
                                <HomeOutlinedIcon color="primary" sx={{ fontSize: 140 }}/>
                                <Stack direction="row" spacing={'.5rem'} justifyContent="space-between" alignItems="center">
                                    <InstagramIcon sx={{fontSize: 40}} color="primary"/>
                                    <Typography variant='body1' sx={{fontWeight: 600, fontSize: 40}} color="primary">f</Typography>
                                    <Typography variant='body1' sx={{fontWeight: 600, fontSize: 40}} color="primary">in</Typography>
                                </Stack>
                            </Stack>
                            
                            <Stack spacing={2}>
                                <Typography color="primary" variant="body1" component="div" sx={{fontWeight: 600, fontSize: '1.2rem'}}>SERVICES</Typography>
                                {
                                    firstColumn.map((item, i) => (
                                        <Typography color="primary"  key={i} variant="body1" component="div" sx={{}}>
                                            {item}
                                        </Typography>
                                    ))
                                }
                            </Stack>
                            <Stack spacing={2}>
                                <Typography color="primary" variant="body1" component="div" sx={{fontWeight: 600, fontSize: '1.2rem'}}>RESOURCES</Typography>
                                {
                                    secondColumn.map((item, i) => (
                                        <Typography color="primary"  key={i} variant="body1" component="div" sx={{}}>
                                            {item}
                                        </Typography>
                                    ))
                                }
                            </Stack>
                            <Stack spacing={2}
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            >
                                <Typography color="primary" variant="body1" component="div" sx={{fontWeight: 600, fontSize: '1.2rem'}}>CONTACT</Typography>
                            {
                                    thirdColumn.map((item, i) => (
                                        <Typography color="primary"  key={i} variant="body1" component="div" sx={{}}>
                                            {item}
                                        </Typography>
                                    ))
                                }
                            </Stack>
                        </Stack>
                    </Container>
                </ThemeProvider>    
            </Stack>
        </React.Fragment>
    );
}