import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import {toggleBorder} from './../../../shared/styles/debugging-border';
import {ThemeProvider} from '@mui/material/styles';
import {GreenTheme} from './../../../shared/styles/themes/green-theme'
import Box from '@mui/material/Box';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';

function SeventhPage() {
    const isBorder = toggleBorder;
    // let Cards = [
    //     {title : 'MEET THE TEAM', icon: 'group', text: 'Come and meet our team! Get to know your property manager before getting down to business'},
    //     {title : 'SHOWCASE', icon: 'home', text: 'We offer appraisals at no cost to you Showcase your home to your dedicated property manager and they will get you set up with the perfect investment.'},
    //     {title : 'LIST PROPERTY', icon: 'summarize', text: 'List your property on our site and we vow to find you the perfect tenants to suit your home. Leave it to us!'}
    // ];
    return (
    <React.Fragment>
        <Stack direction="column" justifyContent="center" alignItems="center" sx={{ border: isBorder ? '1px solid red' : 'none', height: '100vh'}}>
            <Stack direction="column" justifyContent="center" alignItems="center" sx={{ border: isBorder ? '1px solid maroon' : 'none', height: '75%'}} spacing={'2rem'}>
                <Typography variant="h3">Hear From Our Clients</Typography>
                <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={'2rem'} sx={{ border: isBorder ? '1px solid orange' : 'none', width: '70%', height: '80%'}}>
                    <Box component="img"
                        sx={{
                            height: '80%',
                            borderTopRightRadius: "40px",
                            borderBottomLeftRadius: "40px",
                            width: '50%',
                            objectFit: 'cover',
                            borderRadius: '40px'
                        }}
                        alt="The house from the offer."
                        src="https://images.unsplash.com/photo-1520942702018-0862200e6873?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
                    />
                    <Stack direction="column" justifyContent="space-between" alignItems="flex-start" sx={{ border: isBorder ? '1px solid green' : 'none', width: '40%'}} spacing={'1rem'}>
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

export default SeventhPage;