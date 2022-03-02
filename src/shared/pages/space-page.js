import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import BedIcon from '@mui/icons-material/Bed';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import {ThemeProvider, styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import {toggleBorder} from '../styles/debugging-border';
import divImage from '../../assets/Index Assets/Mask Group 9@2x.png';
import Box from '@mui/material/Box';
import { makeStyles, createStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const isBorder = toggleBorder;
const ViewListingsButton = styled(Button)(({ theme }) => ({
    color: 'primary',
    fontSize: '16px',
    fontWeight: 600,
    maxWidth: '150px',
    borderRadius: '40px'
  }));

const styleObject = {
    infoTab: {
        background: '#ea9760',
        color: 'white',
        borderRadius: '10px',
        padding: '8x 25px',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'
    }
};
const useStyles = makeStyles((theme) =>
  createStyles({
    pageOne: {
        [theme.breakpoints.down('md')]: {
            // display: 'flex',
            // flexDirection: 'column'
        },
    },
  }),
);
function SpacePage(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
    <React.Fragment>
        <Stack sx={{border: isBorder ? '2px solid red' : 'none', minHeight: '180vh', height: 'fitContent', position: 'relative'}}>
            <Box component="img"
                sx={{
                    height: '70%',
                    maxHeight: '100vh',
                    objectFit: 'contain',
                    marginLeft: matchesMobile ? '0' : 'auto'
                }}
                alt="The house from the offer."
                src={divImage}
            />
            <Stack>
                {/* page 1 */}
                <div style={{minHeight: '70vh', height: 'fitContent', width: '100%', display: 'flex', justifyContent: 'center', border: isBorder ? '1px solid green' : 'none', position: 'absolute', top: 0}}>
                    <Stack className={classes.pageOne} direction={matches ? "row" : "column"} alignItems="center" justifyContent="space-around" spacing={'2rem'} sx={{ border: isBorder ? '1px solid purple' : 'none', width: '80%', paddingTop: '2rem'}}>
                        <Stack sx={{ border: isBorder ? '1px solid green' : 'none'}} spacing={'2rem'}>
                            <ThemeProvider theme={props.data.theme}>
                                <Typography color="primary" variant="h4" sx={{fontWeight: 500, fontSize: '3rem', display: 'block', maxWidth: '30rem'}}>We'll Find A Space That Suits You</Typography>
                                <Typography color="primary" variant="body1" display="block" sx={{maxWidth: '550px', fontWeight: 500}}>
                                Every person has different wants, needs and budgets when it comes to housing in New Zealand.
                                </Typography>
                                <Typography color="primary" variant="body1" display="block" sx={{maxWidth: '550px', fontWeight: 500}}>
                                Whether you a looking to put your property up for rent, or finding a good flat that suits your needs, we know how important it is to get it right the first time. finding a good flat that suits your needs, we know how important it is to get it right the first time.
                                </Typography>
                            </ThemeProvider>
                            <ThemeProvider theme={props.data.buttonTheme}>
                                <ViewListingsButton variant="contained">View Listings</ViewListingsButton>
                            </ThemeProvider>
                        </Stack>
                        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={'1rem'} sx={{ border: isBorder ? 1 : 'none'}}>
                            <Stack direction="row" alignItems="center" style={styleObject.infoTab}>
                                <Typography variant="body1" sx={{fontSize: '3rem'}}>1</Typography>
                                <BathtubOutlinedIcon sx={{fontSize: '3rem'}}/>
                            </Stack>
                            <Stack direction="row" alignItems="center" style={styleObject.infoTab}>
                                <Typography variant="body1" sx={{fontSize: '3rem',}}>2</Typography>
                                <BedIcon sx={{fontSize: '3rem'}}/>
                            </Stack>
                            <Stack direction="row" alignItems="center" style={styleObject.infoTab}>
                                <Typography variant="body1" sx={{fontSize: '3rem',}}>$235</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </div>
                {/* page 2 */}
                <div style={{minHeight: '70vh', height: 'fitContent', width: '100%', display: 'flex', justifyContent: 'center', border: isBorder ? '1px solid green' : 'none', position: 'absolute', top: '50%'}}>
                    <ThemeProvider theme={props.data.theme}>
                        <Stack direction="column" alignItems="start" justifyContent="center" spacing={'3rem'} sx={{ border: isBorder ? '1px solid purple' : 'none', width: '80%', paddingBottom: '2rem'}}>
                            <Stack sx={{ border: isBorder ? '1px solid green' : 'none'}} spacing={'2rem'}>
                                <Typography color="primary" variant="h4" sx={{fontWeight: 500, fontSize: '3rem', display: 'block'}}>Tenants To Trust</Typography>
                                <Typography color="primary" variant="body1" display="block" sx={{maxWidth: '800px', fontWeight: 500}}>
                                    We offer rigorous tenant selection processes, have access to the latest market data to assist in setting the right rent, and carry out regular inspections and rent reviews to make sure your rental property is meeting its potential.
                                </Typography>
                            </Stack>
                            <Stack sx={{ border: isBorder ? '1px solid yellow' : 'none'}} spacing={'2rem'}>
                                <Typography color="primary" variant="h4" sx={{fontWeight: 500, fontSize: '3rem', display: 'block'}}>Friendly Expertise</Typography>
                                <Typography color="primary" variant="body1" display="block" sx={{maxWidth: '800px', fontWeight: 500}}>
                                    Make your time your own again, while we use our experience in managing over 17,000 rental properties to carry out all day-to-day property management and maintenance, from answering your tenants queries to overseeing maintenance quotes and managing tradespeople.
                                </Typography>
                                <ThemeProvider theme={props.data.buttonTheme}>
                                    <ViewListingsButton variant="contained">Learn More</ViewListingsButton>
                                </ThemeProvider>
                            </Stack>
                        </Stack>
                    </ThemeProvider>
                </div>
            </Stack>
        </Stack>
    </React.Fragment>
    );
}

export default SpacePage;