import * as React from 'react';
import MenuBar from '../components/menu-bar/menu-bar'
import { Stack, Typography } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import {ThemeProvider, styled } from '@mui/material/styles';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import {BrownTheme} from '../styles/themes/brown-theme'
import {toggleBorder} from '../styles/debugging-border'

const FirstPageButton = styled(Button)(({ theme }) => ({
  color: 'primary',
  border: '3px solid', 
  borderRadius: '50px', 
  fontSize: '22px', 
  textTransform: 'none', 
  width: '30%'
}));

function WelcomePageVariantOne() {
  const isBorder = toggleBorder;
  return (
    <React.Fragment>
      <Stack direction="row" justifyContent="space-between" sx={{ border: isBorder ? '1px solid red' : 'none', height: '100vh',}}>
        <ThemeProvider theme={BrownTheme}>
          <Stack justifyContent="space-between" sx={{ border: isBorder ? '1px solid green' : 'none', width: '60%', paddingLeft: '10px', paddingTop: '20px'}}>
            <Stack direction="row" alignItems="center" sx={{ border: isBorder ? '1px solid purple' : 'none'}}>
              <HomeOutlinedIcon sx={{ fontSize: '4rem', color: 'rgb(155 85 30)', marginRight: '5%'}}/>
              <MenuBar/>
            </Stack>
            <Box sx={{height: '15%', border: isBorder ? 1 : 'none'}}>
            </Box>
            <Stack justifyContent="center" alignItems="flex-start" sx={{border: isBorder ? '1px solid red' : 'none', height: '100%'}}>
              <Stack justifyContent="space-between" sx={{border: isBorder ? 1 : 'none', minWidth: '70%', height: '50%'}} spacing={'1rem'}>
                <div>
                  <Typography variant="h2" color="primary">New Zealand</Typography>
                  <Typography variant="h1" color="primary" sx={{fontWeight: 600}}>Friendly Flats</Typography>
                </div>
                <Stack direction="row" spacing={2} sx={{ border: isBorder ? 1 : 'none'}}>
                  <FirstPageButton>Rent a Room</FirstPageButton> 
                  <FirstPageButton>Rent a House</FirstPageButton> 
                  <FirstPageButton>List a Property</FirstPageButton>       
                </Stack>
                <Typography variant="h6" color="primary" display="block" sx={{maxWidth: '550px', fontWeight: 400}}>
                  Once you are in contact with us, one of our friendly property
                  managers will talk you through the process of listing your property.
                  We offer you an appraisal a
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </ThemeProvider>
        <Box component="img"
          sx={{
            height: '95%',
            border: isBorder ? '2px solid red' : 'none',
            width: '30%',
            objectFit: 'cover',
            borderBottomRightRadius: '50px',
            borderBottomLeftRadius: '50px',
          }}
          alt="The house from the offer."
          src="https://images.pexels.com/photos/1906795/pexels-photo-1906795.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <Box sx={{ width: '5%', border: isBorder ? 1 : 'none'}}></Box>
      </Stack>
    </React.Fragment>
  );
}

export default WelcomePageVariantOne;