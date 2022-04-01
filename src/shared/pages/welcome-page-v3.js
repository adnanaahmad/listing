import * as React from 'react';
import MenuBar from '../components/menu-bar/menu-bar';
import { Button, Stack } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import {ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import {toggleBorder} from '../styles/debugging-border';
//import sofaImage from '../../assets/Homeowners Assets/sofa.png';
//import doorImage from '../../assets/Homeowners Assets/Mask Group 4@2x.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MenuButton from '../components/menu-button/menu-button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

const isBorder = toggleBorder;

function WelcomePageVariantThree(props) {
  const theme = useTheme();
  const useEffect = React.useEffect;
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [coverPhotos, setCoverPhotos] = React.useState([]);
  useEffect(() => {
    function buildCover () {
      const images = props.data.listingDetail.images || [];
      if (images.length === 1) {
        return [{image: images[0].url, width: '100%'}];
      } else if (images.length === 2) {
        return [{image: images[0].url, width: '50%'}, {image: images[1].url, width: '50%'}];
      } else if (images.length > 2) {
        return [{image: images[0].url, width: '33.333%'}, {image: images[1].url, width: '33.333%'}, {image: images[2].url, width: '33.333%'}];
      } else {
        return [{image: '', width: '100%'}];
      }
    }
    setCoverPhotos(() => [...buildCover()]);
  }, [props.data.listingDetail])
  return (
    <React.Fragment>
      <Stack direction="column" justifyContent="space-between" sx={{ border: isBorder ? '1px solid red' : 'none', height: matches ? '100vh' : 'fit-content', width: '100%'}}>
        <ThemeProvider theme={props.data.theme}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ border: isBorder ? '1px solid orange' : 'none', width: '90%', margin: 'auto'}}>
            <Stack direction="row" alignItems="center" sx={{ border: isBorder ? '1px solid purple' : 'none', width: matches ? '70%' : '100%', maxWidth: '900px', justifyContent: 'space-between'}}>
              <IconButton color="primary" component={Link} to={'1'}>
                  <HomeOutlinedIcon sx={{ fontSize: matches ? '4rem' : matchesMobile ? '3rem' : '5rem'}}/>
                </IconButton>
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