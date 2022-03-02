import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Button from '@mui/material/Button';
import {toggleBorder} from './../../../shared/styles/debugging-border';
import {ThemeProvider} from '@mui/material/styles';
import {WhiteTheme} from './../../../shared/styles/themes/white-theme'
import divImage from './../../../assets/All Listings Assets/mareks-steins-ankYj7GOgjw-unsplash@2x.png';
import EmailTextField from '../email-textfield/email-textfield';
import { makeStyles, createStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const isBorder = toggleBorder;
const styleObject = {
    paperContainer: {
        height: '100%',
        backgroundImage: `url(${divImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        border: isBorder ? '2px solid red' : 'none',
    }
};

const useStyles = makeStyles((theme) =>
  createStyles({
    footerParent: {
        [theme.breakpoints.down('md')]: {
            display: 'flex',
            flexDirection: 'column'
        },
    },
    footerInfo: {
        [theme.breakpoints.down('md')]: {
            border: isBorder ? '1px solid black': 'none',
            width: 'fit-content',
            alignItems: 'center'
        },
    },
    footerInfoCol: {
        [theme.breakpoints.down('md')]: {
            alignItems: 'center'
        },
    },
  }),
);

export default function FooterPrimary() {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const firstColumn = ['Services', 'Landlords', 'Tenants', 'Management'];
    const secondColumn = ['RESOURCES', 'FAQs', 'Management', 'Privacy Policy'];
    const thirdColumn = ['CONTACT', 'hk@friendlyflats.co.nz', '0800 123 4567', 'Auckland City'];
    return (
        <React.Fragment>
            <div style={styleObject.paperContainer}>
                <ThemeProvider theme={WhiteTheme}>
                    <Container disableGutters maxWidth="xlg" sx={{ border: isBorder ? 1: 'none', height: '100%', padding: '50px'}}>
                        <Stack
                            direction={matches ? "row" : "column"}
                            justifyContent="space-between"
                            alignItems="center"
                            sx={{ border: isBorder ? 1: 'none', height: '100%'}}
                            spacing={'1rem'}
                        >
                            <Stack>
                                <Typography color="primary" variant="h4" sx={{fontWeight: 600}}>Want To Find</Typography>
                                <Typography color="primary" variant="h4" sx={{fontWeight: 600}}>A Friendly Flat?</Typography>
                            </Stack>
                            <Stack direction="row" justifyContent="space-between" spacing={'1rem'} sx={{width: '100%'}}>
                                <EmailTextField/>
                                <Button variant="contained" size="large" sx={{px: 5, py: 1, borderRadius: 2, fontWeight: 600, textTransform: 'none', whiteSpace: 'nowrap', fontSize: '1.2rem'}}>
                                    Book A Meeting
                                </Button>
                            </Stack>
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
                    className={classes.footerParent}
                >
                    <HomeOutlinedIcon sx={{ fontSize: 200 }}/>
                    <Stack                    
                    direction={matches ? "row" : "column"}
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{width: '100%'}}
                    className={classes.footerInfo}
                    spacing = {matches ? '1rem' : '2rem'}
                    >
                        <Stack spacing={2} className={classes.footerInfoCol}>
                            {
                                firstColumn.map((item, i) => (
                                    <Typography key={i} variant="h5" component="div" sx={{fontWeight: 700}}>
                                        {item}
                                    </Typography>
                                ))
                            }
                        </Stack>
                        <Stack spacing={2} className={classes.footerInfoCol}>
                            {
                                secondColumn.map((item, i) => (
                                    <Typography key={i} variant="h5" component="div" sx={{fontWeight: 700}}>
                                        {item}
                                    </Typography>
                                ))
                            }
                        </Stack>
                        <Stack spacing={2} className={classes.footerInfoCol}>
                        {
                                thirdColumn.map((item, i) => (
                                    <Typography key={i} variant="h5" component="div" sx={{fontWeight: 700}}>
                                        {item}
                                    </Typography>
                                ))
                            }
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </React.Fragment>
    );
}