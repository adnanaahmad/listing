import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import {toggleBorder} from '../styles/debugging-border';
import Box from '@mui/material/Box';
import clientImage from '../../assets/All Listings Assets/client.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Carousel from 'react-material-ui-carousel';

function ClientsReviewPage() {
    const isBorder = toggleBorder;
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    return (
    <React.Fragment>
        <Stack direction="column" justifyContent="center" alignItems="center" sx={{ border: isBorder ? '1px solid red' : 'none', minHeight: '100vh', height: 'fit-content'}}>
            <Stack direction="column" justifyContent="center" alignItems="center" sx={{ border: isBorder ? '1px solid maroon' : 'none', height: '75%', paddingX: '1rem'}} spacing={'2rem'}>
                <Typography variant="h3" sx={{textAlign: 'center'}}>Hear From Our Clients</Typography>
                <Carousel sx={{height: 'fitContent', width: '100%', minHeight: '600px', minWidth: matches ? '800px' : '100%'}}
                indicators={true}
                navButtonsAlwaysVisible={false}
                autoPlay = {false}
                indicatorIconButtonProps={{
                    style: {
                        padding: '5px',
                        // color: GreenTheme.palette.primary.main,
                        marginTop: '400px'
                    }
                }}
                >
                        {
                            [1,2,3].map((node, index) => (
                                <Stack key={index} direction={matches ? "row" : "column"} alignItems="center" justifyContent="space-between" spacing={'2rem'} sx={{ border: isBorder ? '1px solid orange' : 'none', width: 'fit-content', height: 'fit-content'}}>
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
                                    </Stack>
                                </Stack>
                            ))
                        }

                </Carousel>
            </Stack>
        </Stack>        
    </React.Fragment>
    );
}

export default ClientsReviewPage;