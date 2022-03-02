import * as React from 'react';
import MenuBar from '../components/menu-bar/menu-bar'
import { Stack, Typography } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import {ThemeProvider, styled } from '@mui/material/styles';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import {BrownTheme} from '../styles/themes/brown-theme'
import {toggleBorder} from '../styles/debugging-border'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';


const FirstPageButton = styled(Button)(({ theme }) => ({
  color: 'primary',
  border: '2px solid', 
  borderRadius: '50px', 
  fontSize: '1.2rem', 
  textTransform: 'none', 
  whiteSpace: 'nowrap',
  width: 'fit-content'
}));

function WelcomePageVariantOne(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const isBorder = toggleBorder;
  return (
    <React.Fragment>
      {
        matches && 
        <Stack direction="row" justifyContent="space-between" sx={{ border: isBorder ? '1px solid red' : 'none', height: '100vh', width: '90%', marginX: 'auto'}}>
          <ThemeProvider theme={BrownTheme}>
            <Stack justifyContent="space-between" sx={{ border: isBorder ? '1px solid green' : 'none', width: '60%', paddingTop: '20px'}}>
              <Stack direction="row" alignItems="center" sx={{ border: isBorder ? '1px solid purple' : 'none'}}>
                <HomeOutlinedIcon sx={{ fontSize: '4rem', color: 'rgb(155 85 30)', marginRight: '5%'}}/>
                <MenuBar data = {props.data.menu}/>
              </Stack>
              <Box sx={{height: '15%', border: isBorder ? 1 : 'none'}}>
              </Box>
              <Stack justifyContent="center" alignItems="flex-start" sx={{border: isBorder ? '1px solid red' : 'none', height: '100%'}}>
                <Stack justifyContent="space-between" sx={{border: isBorder ? 1 : 'none', minWidth: '70%', height: 'fitContent'}} spacing={'2.5rem'}>
                  <div>
                    <Typography variant="h2" color="primary">{props.data.titleOne}</Typography>
                    <Typography variant="h1" color="primary" sx={{fontWeight: 600}}>{props.data.titleTwo}</Typography>
                  </div>
                  { props.data.showButtonGroup &&
                  <Stack direction="row" spacing={2} sx={{ border: isBorder ? 1 : 'none'}}>
                    <FirstPageButton>Rent a Room</FirstPageButton> 
                    <FirstPageButton>Rent a House</FirstPageButton> 
                    <FirstPageButton>List a Property</FirstPageButton>       
                  </Stack>
                  }
                  <Typography variant="h6" color="primary" display="block" sx={{maxWidth: '550px', fontWeight: 400}}>
                    {props.data.description}
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
            src={props.data.image}
          />
        </Stack>
      }
      {
        !matches &&
        <Stack spacing={'4rem'} direction="column" sx={{ border: isBorder ? '3px solid red' : 'none', height: 'fitContent', marginX: 'auto', paddingX: matchesMobile ? '.5rem' : '2rem', paddingBottom: '4rem'}}>
          <Stack spacing={'1rem'} direction="row" justifyContent="space-between" sx={{ border: isBorder ? '1px solid purple' : 'none'}}>
            <ThemeProvider theme={BrownTheme}>
              <HomeOutlinedIcon sx={{ fontSize: matchesMobile ? '3rem' : '5rem', color: 'rgb(155 85 30)'}}/>
            </ThemeProvider>
            <Box component="img"
              sx={{
                height: matchesMobile ? '40vh' : '80vh',
                minWidth: '150px',
                border: isBorder ? '2px solid red' : 'none',
                objectFit: 'cover',
                borderBottomRightRadius: matchesMobile ? '30px' : '50px',
                borderBottomLeftRadius: matchesMobile ? '30px' : '50px',
              }}
              alt="The house from the offer."
              src={props.data.image}
            />
            <ThemeProvider theme={BrownTheme}>
              <IconButton 
              color="primary" 
              sx={{height: 'fit-content'}}
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              >
                <MenuIcon sx={{ fontSize: matchesMobile ? '2rem' : '4rem'}}/>
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
                color="primary" 
              >
                {
                  props.data.menu.map((item, i) => (
                    <MenuItem key={i} color="primary" onClick={handleClose}>{item}</MenuItem>
                  ))
                }
              </Menu>
            </ThemeProvider>
          </Stack>
          <ThemeProvider theme={BrownTheme}>
            <Stack justifyContent="center" alignItems="center" sx={{border: isBorder ? '1px solid yellow' : 'none', height: 'fitContent'}}>
              <Stack justifyContent="space-between" sx={{border: isBorder ? 1 : 'none', minWidth: '70%', height: 'fitContent'}} spacing={'2.5rem'}>
                <div>
                  <Typography variant={ matchesMobile ? "h3" : "h2"} color="primary" sx={{textAlign: 'center'}}>{props.data.titleOne}</Typography>
                  <Typography variant={matchesMobile ? "h2" : "h1"} color="primary" sx={{fontWeight: 600, textAlign: 'center'}}>{props.data.titleTwo}</Typography>
                </div>
                { props.data.showButtonGroup &&
                <Stack alignItems="center" spacing={2} sx={{ border: isBorder ? 1 : 'none'}}>
                  <FirstPageButton>Rent a Room</FirstPageButton> 
                  <FirstPageButton>Rent a House</FirstPageButton> 
                  <FirstPageButton>List a Property</FirstPageButton>       
                </Stack>
                }
                <Typography variant="h6" color="primary" display="block" sx={{maxWidth: '550px', fontWeight: 400, textAlign: 'center'}}>
                  {props.data.description}
                </Typography>
              </Stack>
            </Stack>
          </ThemeProvider>
        </Stack>
      }
    </React.Fragment>
  );
}

export default WelcomePageVariantOne;