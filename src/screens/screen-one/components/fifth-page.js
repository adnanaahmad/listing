import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import BedIcon from '@mui/icons-material/Bed';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import {ThemeProvider, styled } from '@mui/material/styles';
import Button from '@mui/material/Button'
import {GreenTheme} from '../../../shared/styles/themes/green-theme'
import {toggleBorder} from '../../../shared/styles/debugging-border'

const isBorder = toggleBorder;
const ViewListingsButton = styled(Button)(({ theme }) => ({
    color: 'primary',
    fontSize: '16px',
    fontWeight: 600,
    maxWidth: '150px',
    borderRadius: '40px'
  }));

const classes = {
    paperContainer: {
        height: '200vh',
        backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/002/909/528/original/abstract-rendering-3d-shape-for-products-display-presentation-modern-white-and-gray-cube-step-pedestal-podium-empty-room-background-minimal-wall-scene-studio-room-concept-eps10-vector.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        border: isBorder ? '2px solid red' : 'none',
    },
    infoTab: {
        background: '#ea9760',
        color: 'white',
        borderRadius: '10px',
        padding: '8x 25px',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'
    }
};

function FifthPage() {
    return (
    <React.Fragment>
        <div style={classes.paperContainer}>
            {/* page 1 */}
            <div style={{height: '100vh', display: 'flex', justifyContent: 'center', border: isBorder ? '1px solid green' : 'none'}}>
                <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={'2rem'} sx={{ border: isBorder ? '1px solid purple' : 'none', width: '80%'}}>
                    <Stack sx={{ border: isBorder ? '1px solid green' : 'none'}} spacing={'2rem'}>
                        <Typography variant="h4" sx={{fontWeight: 500, fontSize: '3rem', display: 'block', width: '30rem'}}>We'll Find A Space That Suits You</Typography>
                        <Typography variant="h6" display="block" sx={{maxWidth: '550px', fontWeight: 400}}>
                        Every person has different wants, needs and budgets when it comes to housing in New Zealand.
                        </Typography>
                        <Typography variant="h6" display="block" sx={{maxWidth: '550px', fontWeight: 400}}>
                        Whether you a looking to put your property up for rent, or finding a good flat that suits your needs, we know how important it is to get it right the first time. finding a good flat that suits your needs, we know how important it is to get it right the first time.
                        </Typography>
                        <ThemeProvider theme={GreenTheme}>
                            <ViewListingsButton variant="contained">View Listings</ViewListingsButton>
                        </ThemeProvider>
                    </Stack>
                    <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={'2rem'} sx={{ border: isBorder ? 1 : 'none'}}>
                        <Stack direction="row" alignItems="center" style={classes.infoTab}>
                            <Typography variant="body1" sx={{fontSize: '3.5rem'}}>1</Typography>
                            <BathtubOutlinedIcon sx={{fontSize: '3.5rem'}}/>
                        </Stack>
                        <Stack direction="row" alignItems="center" style={classes.infoTab}>
                            <Typography variant="body1" sx={{fontSize: '3.5rem',}}>2</Typography>
                            <BedIcon sx={{fontSize: '3.5rem'}}/>
                        </Stack>
                        <Stack direction="row" alignItems="center" style={classes.infoTab}>
                            <Typography variant="body1" sx={{fontSize: '3.5rem',}}>$235</Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </div>
            {/* page 2 */}
            <div style={{height: '100vh', display: 'flex', justifyContent: 'center', border: isBorder ? '1px solid green' : 'none'}}>
                <Stack direction="column" alignItems="start" justifyContent="center" spacing={'3rem'} sx={{ border: isBorder ? '1px solid purple' : 'none', width: '80%'}}>
                    <Stack sx={{ border: isBorder ? '1px solid green' : 'none'}} spacing={'2rem'}>
                        <Typography variant="h4" sx={{fontWeight: 500, fontSize: '3rem', display: 'block'}}>Tenants To Trust</Typography>
                        <Typography variant="h6" display="block" sx={{maxWidth: '800px', fontWeight: 400}}>
                            We offer rigorous tenant selection processes, have access to the latest market data to assist in setting the right rent, and carry out regular inspections and rent reviews to make sure your rental property is meeting its potential.
                        </Typography>
                    </Stack>
                    <Stack sx={{ border: isBorder ? '1px solid yellow' : 'none'}} spacing={'2rem'}>
                        <Typography variant="h4" sx={{fontWeight: 500, fontSize: '3rem', display: 'block'}}>Friendly Expertise</Typography>
                        <Typography variant="h6" display="block" sx={{maxWidth: '800px', fontWeight: 400}}>
                            Make your time your own again, while we use our experience in managing over 17,000 rental properties to carry out all day-to-day property management and maintenance, from answering your tenants queries to overseeing maintenance quotes and managing tradespeople.                            </Typography>
                        <ThemeProvider theme={GreenTheme}>
                            <ViewListingsButton variant="contained">Learn More</ViewListingsButton>
                        </ThemeProvider>
                    </Stack>
                </Stack>
            </div>
        </div>
    </React.Fragment>
    );
}

export default FifthPage;