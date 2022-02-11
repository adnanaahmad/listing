import * as React from 'react';
import MenuBar from '../../../shared/components/menu-bar/menu-bar';
import { Stack } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import {ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import {BrownTheme} from '../../../shared/styles/themes/brown-theme';
import {toggleBorder} from '../../../shared/styles/debugging-border';
import sofaImage from '../../../assets/Homeowners Assets/sofa.png';
import doorImage from '../../../assets/Homeowners Assets/Mask Group 4@2x.png';

function FirstPage(props) {
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
      <Stack direction="column" justifyContent="space-between" sx={{ border: isBorder ? '1px solid red' : 'none', height: '100vh'}}>
        <ThemeProvider theme={BrownTheme}>
          <Stack justifyContent="space-between" sx={{ border: isBorder ? '1px solid green' : 'none', width: '75%', marginY: 'auto', maxWidth: '1440px'}}>
            <Stack direction="row" alignItems="center" sx={{ border: isBorder ? '1px solid purple' : 'none'}}>
              <HomeOutlinedIcon sx={{ fontSize: '4rem', color: 'rgb(155 85 30)', marginRight: '5%', marginLeft: '10%'}}/>
              <MenuBar data = {['House Owners', 'Flatmates', 'Maintainance', 'Property Management'] }/>
            </Stack>
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

export default FirstPage;