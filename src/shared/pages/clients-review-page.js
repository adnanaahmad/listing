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
    const clientsReview = [
        {name : 'Matthew VanSant', image: clientImage, review: 'Friendly flats are a pretty cool bunch of people who got me the right apartment for my price range, I guess I can writ anything here as its just a template so think refrigerators are pretty cool, capt they need to be big enough to fit containers on the shelves it containers cannot fit then its useless, buy a new fridge'},
        {name: 'Haas Gene', image: 'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', review: 'Google extended its three years of OS and security updates to five. In the US, the Pixel 6 is available both through Google and all major carriers'},
        {name: 'John Green', image: 'https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000', review: `Even the Pixel's crown jewel -- its cameras -- got upgraded lenses and hardware that's more premium. Now that Google has improved everything in, on and around the Pixel`}
    ];
    return (
    <React.Fragment>
        <Stack direction="column" justifyContent="center" alignItems="center" sx={{ border: isBorder ? '1px solid red' : 'none', minHeight: '100vh', height: 'fit-content'}}>
            <Stack direction="column" justifyContent="center" alignItems="center" sx={{ border: isBorder ? '1px solid maroon' : 'none', height: '75%', paddingX: '1rem'}} spacing={'2rem'}>
                <Typography variant="h3" sx={{textAlign: 'center', marginBottom: 5}}>Hear From Our Clients</Typography>
                <Carousel sx={{height: 'fitContent', width: '100%', minHeight: '600px', minWidth: matches ? '800px' : '100%'}}
                indicators={true}
                navButtonsAlwaysVisible={false}
                autoPlay = {false}
                indicatorIconButtonProps={{
                    style: {
                        padding: '5px',
                    }
                }}
                indicatorContainerProps = {{
                    style: {
                        position: 'absolute',
                        bottom: -5
                    }
                }}
                >
                        {
                            clientsReview.map((node, index) => (
                                <Stack key={index} direction={matches ? "row" : "column"} alignItems="center" justifyContent="space-between" spacing={'2rem'} sx={{ border: isBorder ? '1px solid orange' : 'none', width: 'fit-content', height: 'fit-content'}}>
                                    <Box component="img"
                                        sx={{
                                            maxHeight: matches ?'500px' : '300px',
                                            maxWidth: matches ? '500px' : '250px',
                                            objectFit: 'cover',
                                            borderRadius: '40px'
                                        }}
                                        alt="The house from the offer."
                                        src={node.image}
                                    />
                                    <Stack direction="column" justifyContent="space-between" alignItems="flex-start" sx={{ border: isBorder ? '1px solid green' : 'none', width: matches ?'40%' : '100%'}} spacing={'1rem'}>
                                        <Typography variant="h5" sx={{fontWeight: 500}}>{node.name}</Typography>
                                        <Typography variant="body1" display="block" sx={{maxWidth: '600px'}}>
                                            {node.review}
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