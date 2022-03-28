import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Button from '@mui/material/Button';
import {toggleBorder} from './../../../shared/styles/debugging-border';
import {ThemeProvider} from '@mui/material/styles';
import {WhiteTheme} from './../../../shared/styles/themes/white-theme'
import divImage from './../../../assets/Book a Meeting Asset/Mask Group 5@2x.png';
import Box from '@mui/material/Box';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailTextField from '../email-textfield/email-textfield';
import { makeStyles, createStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { footerColumn } from '../../utils/constants';

const isBorder = toggleBorder;
const useStyles = makeStyles((theme) =>
  createStyles({
    parent: {
        [theme.breakpoints.down('md')]: {
            height: 'fit-content'
        },
    },
    img: {
        [theme.breakpoints.down('md')]: {
            height: '1200px'
        },
    },
    fc: {
        [theme.breakpoints.down('md')]: {
            width: '100%',
            maxWidth: '600px',
            margin: 'auto',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            maxWidth: '300px',
            margin: 'auto',
        },
    },
    footerInfo: {
        [theme.breakpoints.down('md')]: {
            border: isBorder ? '1px solid black': 'none',
            width: '100%',
            alignItems: 'center',
            margin: 'auto',
            maxWidth: '500px'
        },
    },
    footerInfoCol: {
        [theme.breakpoints.down('md')]: {
            alignItems: 'center'
        },
    },
  }),
);

export default function FooterSecondary() {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const firstColumn = ['Rent a Room', 'Rent a House', 'Homeowners', 'Property Management'];
    const secondColumn = footerColumn;
    const thirdColumn = [ 'info@friendlyflats.co.nz', '0800 123 4567', 'Auckland, NZ'];
    return (
        <React.Fragment>
            <Stack className={classes.parent} sx={{border: isBorder ? '2px solid red' : 'none', position: 'relative', height: '55vh'}}>
                <Box component="img"
                        sx={{
                            height: '100%',
                            width: '100%',
                            objectFit: 'cover',
                            filter: 'brightness(65%)'
                        }}
                        alt="The house from the offer."
                        src={divImage}
                        className={classes.img}
                />
                <ThemeProvider theme={WhiteTheme}>
                    <Container disableGutters maxWidth="xlg" sx={{ border: isBorder ? 1: 'none', padding: matches ? '50px' : '2rem 0 0 0', position: 'absolute'}}>
                        <Stack
                            direction={matches ? "row" : "column"}
                            justifyContent="space-between"
                            alignItems="center"
                            sx={{ border: isBorder ? 1: 'none', height: '100%'}}
                            spacing={'1rem'}
                            className={classes.fc}
                        >
                            <Stack className={classes.fcTxt} spacing={ matches ? 0: '.5rem'}>
                                <Typography color="primary" variant={matches ? "h4" : "h5"} sx={{fontWeight: 600}}>Want To Find A Friendly Flat?</Typography>
                            </Stack>
                            <Stack direction={matchesMobile ? "column" : "row"} justifyContent="space-between" spacing={'1rem'} sx={{width: '100%'}}>
                                <EmailTextField/>
                                <Button variant="contained" size="large" sx={{px: 5, py: 1, borderRadius: 2, fontWeight: 600, textTransform: 'none', whiteSpace: 'nowrap', fontSize: '1.2rem'}}>
                                    Enquire
                                </Button>
                            </Stack>
                        </Stack>
                    </Container>
                    <div style={{borderBottom: '2px solid white', width: '100%', top: matches ? '45%' : '24%', position: 'absolute'}}></div>
                    <Container disableGutters maxWidth="xlg" sx={{ border: isBorder ? 1: 'none', padding: matches ? '50px' : 0, position: 'absolute', top: matches ? '50%' : '30%'}}>
                        <Stack
                        direction={matches ? "row" : "column"}
                        justifyContent="space-between"
                        sx={{ border: isBorder ? 1: 'none', height: '100%'}}
                        className={classes.footerInfo}
                        >   
                            <Stack>
                                <HomeOutlinedIcon color="primary" sx={{ fontSize: 140 }}/>
                                <Stack direction="row" spacing={'.5rem'} justifyContent="space-between" alignItems="center">
                                    <InstagramIcon sx={{fontSize: 40}} color="primary"/>
                                    <Typography variant='body1' sx={{fontWeight: 600, fontSize: 40}} color="primary">f</Typography>
                                    <Typography variant='body1' sx={{fontWeight: 600, fontSize: 40}} color="primary">in</Typography>
                                </Stack>
                            </Stack>
                            
                            <Stack spacing={2} className={classes.footerInfoCol}>
                                <Typography color="primary" variant="body1" component="div" sx={{fontWeight: 600, fontSize: '1.2rem'}}>SERVICES</Typography>
                                {
                                    firstColumn.map((item, i) => (
                                        <Typography color="primary"  key={i} variant="body1" component="div" sx={{}}>
                                            {item}
                                        </Typography>
                                    ))
                                }
                            </Stack>
                            <Stack spacing={2} className={classes.footerInfoCol}>
                                <Typography color="primary" variant="body1" component="div" sx={{fontWeight: 600, fontSize: '1.2rem'}}>RESOURCES</Typography>
                                {
                                    secondColumn.map((item, i) => (
                                        <Typography color="primary"  key={i} variant="body1" component={item.route ? Link : "div"} to={item.route} sx={{textDecoration: 'none'}}>
                                            {item.name}
                                        </Typography>
                                    ))
                                }
                            </Stack>
                            <Stack spacing={2}
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            className={classes.footerInfoCol}
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