import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import {ThemeProvider, styled } from '@mui/material/styles';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import {WhiteTheme} from './../../../shared/styles/themes/white-theme'
import {toggleBorder} from './../../../shared/styles/debugging-border'

const SixthButton = styled(Button)(({ theme }) => ({
    color: 'primary',
    fontSize: '16px',
    fontWeight: 600,
    maxWidth: '150px',
    borderRadius: '40px'
  }));

function SixthPage() {
    const isBorder = toggleBorder;
    return (
    <React.Fragment>
        <Stack direction="row" alignItems="center" justifyContent="center" spacing={'2rem'} sx={{ border: isBorder ? '1px solid red' : 'none', height: '82vh', backgroundColor: WhiteTheme.palette.primary.contrastText}}>
            <Stack direction="row" alignItems="stretch" justifyContent="space-between" spacing={'2rem'} sx={{ border: isBorder ? '1px solid yellow' : 'none', width: '80%', height: '80%'}}>
                <ThemeProvider theme={WhiteTheme}>
                    <Box 
                        sx={{ 
                            border: isBorder ? '1px solid red' : 'none', 
                            backgroundColor: WhiteTheme.palette.primary.main, 
                            padding: '1rem 2rem', 
                            maxWidth: '50%',
                            borderTopRightRadius: "40px",
                            borderBottomLeftRadius: "40px",
                        }}
                    >
                        <Box component="img"
                            sx={{
                                height: '100%',
                                borderTopRightRadius: "40px",
                                borderBottomLeftRadius: "40px",
                                width: '100%',
                                objectFit: 'cover'
                            }}
                            alt="The house from the offer."
                            src="https://images.unsplash.com/photo-1520942702018-0862200e6873?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
                        />
                    </Box>
                    {/* <Box sx={{width: '5%'}}/> */}
                    <Stack sx={{ border: isBorder ? '1px solid green' : 'none'}} spacing={'1rem'}>
                        <Typography color="primary" variant="h4" sx={{fontWeight: 500, fontSize: '2rem'}}>We Work With You</Typography>
                        <Typography color="primary" variant="h6" display="block" sx={{maxWidth: '600px', fontWeight: 400, fontSize: '1rem'}}>
                            Friendly Flats is a Property Management Agency based in New Zealand, created by a manager who wanted to make a good difference in a difficult economy. The team at friendly flats works for and with the people.
                        </Typography>
                        <Typography color="primary" variant="h6" display="block" sx={{maxWidth: '600px', fontWeight: 400, fontSize: '1rem'}}>
                            Focused on creating an environment where clients feel comfortable coming to us with their queries, we take the time to understand your situation and work alongside your needs.
                        </Typography>
                        <Typography color="primary" variant="h6" display="block" sx={{maxWidth: '600px', fontWeight: 400, fontSize: '1rem'}}>
                            The team at Friendly Flats have done their years of travel, with many more to come, and after seeing so many cultures and living styles across the globe, New Zealand really has become home to us.
                        </Typography>
                        <Typography color="primary" variant="h6" display="block" sx={{maxWidth: '600px', fontWeight: 400, fontSize: '1rem'}}>
                            Our goal is to make it feel like a home to you too.
                        </Typography>
                        <SixthButton variant="contained">Learn More</SixthButton>
                    </Stack>
                    {/* <Box sx={{width: '5%'}}/> */}
                </ThemeProvider>
            </Stack>
        </Stack>
    </React.Fragment>
    );
}

export default SixthPage;