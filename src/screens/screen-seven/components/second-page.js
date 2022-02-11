import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import {toggleBorder} from '../../../shared/styles/debugging-border';
import BedIcon from '@mui/icons-material/Bed';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import {WhiteTheme} from '../../../shared/styles/themes/white-theme';
import {DarkGreenTheme} from '../../../shared/styles/themes/dark-green-theme';
import {ThemeProvider} from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import mapsImage from '../../../assets/All Listings Assets/maps.png';

export default function SecondPage() {
    const isBorder = toggleBorder;
    const paragrpahs = [
        'Comfortable City Centre Apartment', 
        'Partially furnished 5th floor apartment. Very light and bright with views of sky tower, Close to K road and all its amenities, cafes and restaurants. Close to motorway links. Full bathroom and laundry in apartment.', 
        'Move in costs include two weeks rent and two weeks bond. Pet friendly apartments or not?  How many rooms are available in each aparmtnet? are there two for friends or just one? Will you put them all in one listing or one listing each?', 
        'state what bills are included. be very clear. this is what happens. Thus electricity will be included in the rent but water and internet is not included. make it clear how many extra bills will come along with the website.', 
        'Close to Auckland University, AUT, Auckland International, K Road'
    ]
    return (
        <React.Fragment>
            <Stack spacing={'5rem'} direction="column" justifyContent="center" alignItems="center" sx={{border: isBorder ? 'px solid red' : 'none', height: 'fitContent', paddingY: '4rem'}}>
                <Stack direction="column" justifyContent="space-between" alignItems="center" 
                spacing={'4rem'}
                sx={{
                    border: isBorder ? 1 : 'none',
                    width: '80%',
                    maxWidth: '1440px',
                    height: '100%'
                }}>
                    {/* first component */}
                    <Stack direction="row" justifyContent="space-between" sx={{border: isBorder ? '1px solid blue' : 'none', width: '100%'}}>
                        <Stack sx={{border: isBorder ? '1px solid red' : 'none'}} spacing={'4rem'}>
                            <Stack spacing={'.5rem'}>
                                <Typography variant="h3" sx={{fontWeight: 500}}>Lovely 3 Bedroom Apartment</Typography>
                                <Typography variant="h3" sx={{fontWeight: 500, fontSize: '2.5rem'}}>230 Queen Street</Typography>
                            </Stack>
                            <Stack direction="row" alignItems="flex-end">
                                <BedIcon sx={{fontSize: '3rem'}}/>
                                <Typography variant="body1" sx={{fontSize: '1.8rem', marginRight: '1rem'}}>2 Beds</Typography>
                                <BathtubOutlinedIcon  sx={{fontSize: '3rem'}}/>
                                <Typography variant="body1" sx={{fontSize: '1.8rem'}}>1 Bath</Typography>
                            </Stack>
                        </Stack>
                        <Stack alignItems="flex-end" spacing={'.5rem'} sx={{border: isBorder ? '1px solid red' : 'none'}}>
                            <Typography variant="h3" sx={{fontWeight: 500}}>$230</Typography>
                            <Typography variant="h3" sx={{fontWeight: 500, fontSize: '2rem'}}>per week</Typography>
                        </Stack>
                    </Stack>
                    {/* second component */}
                    <Stack direction="row" sx={{borderTop: 2, borderBottom: 2, width: '100%', paddingY: '.7rem'}}>
                        <Stack direction="row" spacing={'1rem'} alignItems="center" sx={{border: isBorder ? 1 : 'none',}}>
                            <Typography variant="body1" sx={{fontSize: '1.2rem'}}>Available</Typography>
                            <Typography variant="body1" sx={{fontSize: '1.8rem'}}>|</Typography>
                            <Typography variant="body1" sx={{fontSize: '1.2rem'}}>Mon, 08 Mar 2021</Typography>
                        </Stack>
                        <Stack direction="row" spacing={'1rem'} alignItems="center" sx={{border: isBorder ? 1 : 'none', marginLeft: 'auto'}}>
                            <Typography variant="body1" sx={{fontSize: '1.2rem'}}>Property ID#</Typography>
                            <Typography variant="body1" sx={{fontSize: '1.8rem'}}>|</Typography>
                            <Typography variant="body1" sx={{fontSize: '1.2rem'}}>HCJ703</Typography>
                        </Stack>
                    </Stack>
                    {/* third component */}
                    <Stack direction="row" justifyContent="flex-end" sx={{border: isBorder ? 1 : 'none', width: '100%', height: 'fitContent'}}>
                        <Stack direction="column" justifyContent="center" alignItems="flex-start" sx={{ border: isBorder ? '1px solid green' : 'none', width: '100%', maxWidth: '400px', marginX: 'auto'}} spacing={'2rem'}>                        
                            {
                                paragrpahs.map((item, y) => (                                
                                    <Typography key={y} variant="body1" display="block">
                                        {item}
                                    </Typography> 
                                ))
                            }
                        </Stack>
                        <Stack sx={{border: isBorder ? '2px solid yellow' : 'none', height: 'fitContent', width: '30%', maxWidth: '350px'}}>
                            <Stack spacing={'1rem'} alignItems="center" sx={{border: isBorder ? '2px solid orange' : 'none', borderRadius: '10px', height: 'fitContent', backgroundColor: WhiteTheme.palette.primary.contrastText, padding: '1rem 2rem'}} >
                                <Typography variant="h5" display="block" sx={{color: 'white'}}>Enquire</Typography>
                                    <ThemeProvider theme={DarkGreenTheme}>
                                        <Stack sx={{border: isBorder ? 1 : 'none', backgroundColor: 'white', width: '100%', borderRadius: '10px', paddingY: '.5rem'}} spacing={'.5rem'}>
                                            <Typography sx={{paddingLeft: '1rem'}} color="primary" variant="caption">Your Name</Typography>
                                            <Stack style={{border: `.5px solid ${WhiteTheme.palette.primary.contrastText}`, width: '100%'}}></Stack>
                                            <Typography sx={{paddingLeft: '1rem'}} color="primary" variant="caption">Email</Typography>
                                            <Stack style={{border: `.5px solid ${WhiteTheme.palette.primary.contrastText}`, width: '100%'}}></Stack>
                                            <Typography sx={{paddingLeft: '1rem'}} color="primary" variant="caption">Phone Number</Typography>
                                        </Stack>
                                        <Stack sx={{border: isBorder ? 1 : 'none', backgroundColor: 'white', width: '100%', borderRadius: '10px', padding: '.5rem 0', height: '80px'}}>
                                            <Typography sx={{paddingX: '1rem'}} color="primary" variant="caption" display="block">Ask a question or request a viewing...</Typography>
                                        </Stack>
                                    </ThemeProvider>
                                    <ThemeProvider theme={WhiteTheme}>
                                        <Button variant="contained" sx={{px: 2, py: .5, borderRadius: 2, fontWeight: 400, textTransform: 'none', whiteSpace: 'nowrap', fontSize: '1rem'}}>
                                            Submit
                                        </Button>
                                </ThemeProvider>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
                <Box component="img"
                sx={{
                  height: '450px',
                  width: '100%',
                  objectFit: 'cover',
                }}
                alt="The house from the offer."
                src={mapsImage}
              />
            </Stack>
        </React.Fragment>
    )
}