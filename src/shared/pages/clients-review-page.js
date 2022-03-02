import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import {toggleBorder} from '../styles/debugging-border';
import {ThemeProvider} from '@mui/material/styles';
import {GreenTheme} from '../styles/themes/green-theme'
import Box from '@mui/material/Box';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import clientImage from '../../assets/All Listings Assets/client.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function ClientsReviewPage() {
    const isBorder = toggleBorder;
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    return (
    <React.Fragment>
        <Stack direction="column" justifyContent="center" alignItems="center" sx={{ border: isBorder ? '1px solid red' : 'none', minHeight: '100vh', height: 'fit-content'}}>
            <Stack direction="column" justifyContent="center" alignItems="center" sx={{ border: isBorder ? '1px solid maroon' : 'none', height: '75%', paddingX: '1rem'}} spacing={'2rem'}>
                <Typography variant="h3" sx={{textAlign: 'center'}}>Hear From Our Clients</Typography>
                <Stack direction={matches ? "row" : "column"} alignItems="center" justifyContent="space-between" spacing={'2rem'} sx={{ border: isBorder ? '1px solid orange' : 'none', width: '90%', height: '80%'}}>
                    <Box component="img"
                        sx={{
                            maxHeight: matches ?'500px' : '300px',
                            objectFit: 'cover',
                            borderRadius: '40px'
                        }}
                        alt="The house from the offer."
                        src={clientImage}
                    />
                    <Stack direction="column" justifyContent="space-between" alignItems="flex-start" sx={{ border: isBorder ? '1px solid green' : 'none', width: matches ?'40%' : '100%'}} spacing={'1rem'}>
                        <Typography variant="h5" sx={{fontWeight: 500}}>Matthew VanSant</Typography>
                        <Typography variant="body1" display="block" sx={{maxWidth: '600px'}}>
                            Friendly flats are a pretty cool bunch of people who got me the right apartment for my price range, I guess I can writ anything here as its just a template so think refrigerators are pretty cool, capt they need to be big enough to fit containers on the shelves it containers cannot fit then its useless, buy a new fridge
                        </Typography>
                        <Stack direction="row" alignItems="center" justifyContent="center" spacing={'.5rem'} sx={{ border: isBorder ? 1 : 'none', width: '100%'}}>
                            <ThemeProvider theme={GreenTheme}>
                                <CircleOutlinedIcon color="primary" sx={{fontSize: 'small'}}/>
                                <CircleIcon color="primary" sx={{fontSize: 'small'}}/>
                                <CircleOutlinedIcon color="primary" sx={{fontSize: 'small'}}/>
                                <CircleOutlinedIcon color="primary" sx={{fontSize: 'small'}}/>
                                <CircleOutlinedIcon color="primary" sx={{fontSize: 'small'}}/>
                            </ThemeProvider>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>        
    </React.Fragment>
    );
}

export default ClientsReviewPage;