import * as React from 'react';
import MenuBar from './../../shared/components/menu-bar/menu-bar'
import FooterPrimary from './../../shared/components/footer-primary/footer-primary'
import { Stack, Typography } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import {ThemeProvider, styled } from '@mui/material/styles';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import {BrownTheme} from './../../shared/styles/themes/brown-theme'

const FirstPageButton = styled(Button)(({ theme }) => ({
  color: 'primary',
  border: '3px solid', 
  borderRadius: '50px', 
  fontSize: '22px', 
  textTransform: 'none', 
  width: '30%'
}));

function PageOne() {
  return (
    <React.Fragment>
      <Stack direction="row" justifyContent="space-between" sx={{ border: '1px solid red'}}>
        <ThemeProvider theme={BrownTheme}>
          <Stack justifyContent="space-between" sx={{ border: '1px solid green', width: '60%', paddingLeft: '10px', paddingTop: '20px'}}>
            <Stack direction="row" alignItems="center" spacing={2} sx={{ border: '1px solid purple'}}>
              <HomeOutlinedIcon sx={{ fontSize: 65, color: 'rgb(155 85 30)'}}/>
              <MenuBar/>
            </Stack>
            <Stack spacing={8} sx={{border: 1, paddingBottom: '50px'}}>
              <div>
                <Typography variant="h2" color="primary">New Zealand</Typography>
                <Typography variant="h1" color="primary" sx={{fontWeight: 600}}>Friendly Flats</Typography>
              </div>
              <Stack direction="row" spacing={2} sx={{ border: 1}}>
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
        </ThemeProvider>
        <Box component="img"
          sx={{
            height: '100vh',
            border: '2px solid red',
            width: '30%',
            objectFit: 'cover'
          }}
          alt="The house from the offer."
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
        />
        <Box sx={{ width: '5%', border: 1}}>
          <Typography>sss</Typography>
        </Box>
      </Stack>
      <FooterPrimary/>
    </React.Fragment>
  );
}

export default PageOne;