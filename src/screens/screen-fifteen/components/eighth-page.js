import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import {toggleBorder} from '../../../shared/styles/debugging-border';
import {ThemeProvider} from '@mui/material/styles';
import {GreenTheme} from '../../../shared/styles/themes/green-theme';
import {BrownTheme} from '../../../shared/styles/themes/brown-theme';
import Box from '@mui/material/Box';
import CircleIcon from '@mui/icons-material/Circle';
import clientImage from '../../../assets/Property Management Assets/client.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function EighthPage() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const isBorder = toggleBorder;
    return (
    <React.Fragment>
        <Stack direction="column" justifyContent="center" alignItems="center" sx={{ border: isBorder ? '1px solid red' : 'none', height: matches ? '100vh' : 'fit-content', padding: matches? 0 : '2rem 1rem' }}>
            <ThemeProvider theme={BrownTheme}>
                <Stack direction="column" justifyContent="center" alignItems="center" sx={{ border: isBorder ? '1px solid maroon' : 'none', height: '75%'}} spacing={'2rem'}>
                    <Typography variant="h4" color="primary" textAlign={'center'} sx={{fontWeight: 500}}>Hear From Our Clients</Typography>
                    <Stack direction={matches ? "row" : "column"} alignItems="center" justifyContent="space-between" spacing={'2rem'} sx={{ border: isBorder ? '1px solid orange' : 'none', width: '90%', height: '80%'}}>
                        <Box component="img"
                            sx={{
                                maxHeight: matches ? '500px' : '250px',
                                borderTopRightRadius: "40px",
                                borderBottomLeftRadius: "40px",
                                maxWidth: matches ? '500px' : '300px',
                                objectFit: 'cover',
                                borderRadius: '40px'
                            }}
                            alt="The house from the offer."
                            src={clientImage}
                        />
                        <Stack direction="column" justifyContent="space-between" alignItems="flex-start" sx={{ border: isBorder ? '1px solid green' : 'none', width: matches ? '40%' : '100%'}} spacing={'2rem'}>
                            <Typography color="primary" variant="h5" sx={{fontWeight: 500}}>Eli Glover</Typography>
                            <Typography color="primary" variant="body1" display="block" sx={{maxWidth: '600px', fontWeight: 500}}>
                                The people at friendly flat really helping my best friend and I when trying to find a place in the city. Moving to Auckland for studies was daunting and the prices way past our budget. Our manager took our price range and matched us with a great apartment in the city, perfect for first-timers.                            </Typography>
                            <Stack direction="row" alignItems="center" justifyContent="center" spacing={'.5rem'} sx={{ border: isBorder ? 1 : 'none', width: '100%'}}>
                                <ThemeProvider theme={GreenTheme}>
                                    <CircleIcon color="primary" sx={{fontSize: 'small'}}/>
                                    {
                                        [1,2,3,4,5].map((item, i) => (
                                            <CircleIcon key={i} color="primary" sx={{fontSize: 'small', opacity: .3}}/>
                                        ))
                                    }
                                </ThemeProvider>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </ThemeProvider>
        </Stack>        
    </React.Fragment>
    );
}

export default EighthPage;