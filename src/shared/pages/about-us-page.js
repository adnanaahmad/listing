import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import {ThemeProvider, styled, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import {WhiteTheme} from '../styles/themes/white-theme';
import {toggleBorder} from '../styles/debugging-border';
import BeachImage from '../../assets/Index Assets/DSC00380@2x.png';

const SixthButton = styled(Button)(({ theme }) => ({
    color: 'primary',
    fontSize: '16px',
    fontWeight: 600,
    maxWidth: '150px',
    borderRadius: '40px'
  }));
  const TypographyTheme = createTheme();

  TypographyTheme.typography.body1 = {
    fontSize: '1.2rem',
    color: WhiteTheme.palette.primary.main,
    maxWidth: '600px',
    '@media (min-width:600px)': {
      fontSize: '1rem',
      color: WhiteTheme.palette.primary.main,
      maxWidth: '600px',
    },
    [TypographyTheme.breakpoints.up('xl')]: {
      fontSize: '1.5rem',
      color: WhiteTheme.palette.primary.main,
      maxWidth: '600px',
    },
    [TypographyTheme.breakpoints.up('lg')]: {
        fontSize: '1.3rem',
        color: WhiteTheme.palette.primary.main,
        maxWidth: '600px',
      },
  };
function AboutUsPage() {
    const isBorder = toggleBorder;
    return (
    <React.Fragment>
        <Stack direction="row" alignItems="center" justifyContent="center" spacing={'2rem'} sx={{ border: isBorder ? '1px solid red' : 'none', height: '86vh', backgroundColor: WhiteTheme.palette.primary.contrastText}}>
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
                            src={BeachImage}
                        />
                    </Box>
                    {/* <Box sx={{width: '5%'}}/> */}
                    <Stack direction="column" justifyContent="space-between" alignItems="flex-start" sx={{ border: isBorder ? '1px solid green' : 'none'}} spacing={'1rem'}>
                        <Typography color="primary" variant="h4" sx={{fontWeight: 500}}>About Us</Typography>
                        <ThemeProvider theme={TypographyTheme}>
                            <Typography color="primary" variant="body1" display="block">
                                Friendly Flats is a Property Management Agency based in New Zealand, created by a manager who wanted to make a good difference in a difficult economy. The team at friendly flats works for and with the people.
                            </Typography>
                            <Typography color="primary" variant="body1" display="block">
                                Focused on creating an environment where clients feel comfortable coming to us with their queries, we take the time to understand your situation and work alongside your needs.
                            </Typography>
                            <Typography color="primary" variant="body1" display="block">
                                The team at Friendly Flats have done their years of travel, with many more to come, and after seeing so many cultures and living styles across the globe, New Zealand really has become home to us.
                            </Typography>
                            <Typography color="primary" variant="body1" display="block">
                                Our goal is to make it feel like a home to you too.
                            </Typography>
                        </ThemeProvider>
                        <SixthButton variant="contained">Learn More</SixthButton>
                    </Stack>
                    {/* <Box sx={{width: '5%'}}/> */}
                </ThemeProvider>
            </Stack>
        </Stack>
    </React.Fragment>
    );
}

export default AboutUsPage;