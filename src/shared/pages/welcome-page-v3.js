import * as React from 'react';
import MenuBar from '../components/menu-bar/menu-bar';
import { Button, Stack } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import {ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import {toggleBorder} from '../styles/debugging-border';
import sofaImage from '../../assets/Homeowners Assets/sofa.png';
import doorImage from '../../assets/Homeowners Assets/Mask Group 4@2x.png';

function WelcomePageVariantThree(props) {
  const isBorder = toggleBorder;
  const coverPhotos = [
    {
      image: doorImage,
      width: '42.5%'
    },
    {
      image: sofaImage,
      width: '42.5%'
    },
    {
      image: doorImage,
      width: '15%'
    }
  ];
  return (
    <React.Fragment>
      <Stack direction="column" justifyContent="space-between" sx={{ border: isBorder ? '1px solid red' : 'none', height: '100vh', width: '100%'}}>
        <ThemeProvider theme={props.data.theme}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ border: isBorder ? '1px solid orange' : 'none', width: '90%', margin: 'auto'}}>
            <Stack direction="row" alignItems="center" sx={{ border: isBorder ? '1px solid purple' : 'none', width: '70%', maxWidth: '900px'}}>
              <HomeOutlinedIcon color="primary" sx={{ fontSize: '4rem'}}/>
              <MenuBar data = {['House Owners', 'Flatmates', 'Maintainance', 'Property Management'] }/>
            </Stack>
            <Button variant='contained' size='large' sx={{height: 'fit-content', borderRadius: '2rem', textTransform: 'none', opacity: props.data.showButton ? 1 : 0}}>Enquire</Button>
          </Stack>
        </ThemeProvider>
        <Stack direction="row" alignItems="flex-end" sx={{ border: isBorder ? '1px solid green' : 'none', height: '85%'}}>
          {
            coverPhotos.map((item, i) => (
              <Box key={i} component="img"
                sx={{
                  height: '100%',
                  border: isBorder ? '2px solid pink' : 'none',
                  width: item.width,
                  objectFit: 'cover',
                }}
                alt="The house from the offer."
                src={item.image}
              />
            ))
          }
        </Stack>
      </Stack>
    </React.Fragment>
  );
}

export default WelcomePageVariantThree;