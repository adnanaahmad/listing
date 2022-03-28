import * as React from 'react';
import MenuBar from '../components/menu-bar/menu-bar';
import { Button, Stack } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import {ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import {toggleBorder} from '../styles/debugging-border';
import sofaImage from '../../assets/Homeowners Assets/sofa.png';
import doorImage from '../../assets/Homeowners Assets/Mask Group 4@2x.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MenuButton from '../components/menu-button/menu-button';

const isBorder = toggleBorder;

function WelcomePageVariantThree(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));
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
      <Stack direction="column" justifyContent="space-between" sx={{ border: isBorder ? '1px solid red' : 'none', height: matches ? '100vh' : 'fit-content', width: '100%'}}>
        <ThemeProvider theme={props.data.theme}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ border: isBorder ? '1px solid orange' : 'none', width: '90%', margin: 'auto'}}>
            <Stack direction="row" alignItems="center" sx={{ border: isBorder ? '1px solid purple' : 'none', width: matches ? '70%' : '100%', maxWidth: '900px', justifyContent: 'space-between'}}>
              <HomeOutlinedIcon color="primary" sx={{ fontSize: matches ? '4rem' : matchesMobile ? '3rem' : '5rem'}}/>
              {
                matches &&
                <MenuBar data = {props.data.menu }/>
              }
              {
                !matches &&
                <MenuButton data = {{menu: props.data.menu, menuTheme: props.data.theme}}/>
              }
            </Stack>
            {
              matches &&
              <Button variant='contained' size='large' sx={{height: 'fit-content', borderRadius: '2rem', textTransform: 'none', opacity: props.data.showButton ? 1 : 0}}>Enquire</Button>
            }
          </Stack>
        </ThemeProvider>
        <Stack direction="row" alignItems="flex-end" sx={{ border: isBorder ? '1px solid green' : 'none', height: '85%'}}>
          {
            coverPhotos.map((item, i) => (
              <Box key={i} component="img"
                sx={{
                  height: matchesMobile ? '35vh' : matches ? '100%': '70vh',
                  border: isBorder ? '1px solid pink' : 'none',
                  width: '33.333%',
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