import * as React from 'react';
import MenuBar from '../components/menu-bar/menu-bar'
import { Stack, Typography } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import {ThemeProvider, styled } from '@mui/material/styles';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import {toggleBorder} from '../styles/debugging-border'

const FirstPageButton = styled(Button)(({ theme }) => ({
  color: 'primary',
  border: '3px solid', 
  borderRadius: '50px', 
  fontSize: '22px', 
  textTransform: 'none', 
  width: '30%'
}));

function WelcomePageVariantTwo(props) {
  const isBorder = toggleBorder;
  return (
    <React.Fragment>
        <ThemeProvider theme={props.data.menuTheme}>
            <Stack spacing={'1rem'} direction="row" justifyContent="space-between" sx={{ border: isBorder ? '1px solid red' : 'none', height: '100vh', width: '90%', marginX: 'auto'}}>       
                <Stack justifyContent="space-between" sx={{ border: isBorder ? '1px solid green' : 'none', width: '58%', paddingTop: '20px'}}>
                    <Stack direction="row" alignItems="center" sx={{ border: isBorder ? '1px solid purple' : 'none'}}>
                    <HomeOutlinedIcon color="primary" sx={{ fontSize: '4rem'}}/>
                    <MenuBar data = {props.data.menu}/>
                    </Stack>
                    <Box sx={{height: '15%', border: isBorder ? 1 : 'none'}}>
                    </Box>
                    <Stack justifyContent="center" alignItems="flex-start" sx={{border: isBorder ? '1px solid red' : 'none', height: '100%'}}>
                    <Stack justifyContent="space-between" sx={{border: isBorder ? 1 : 'none', minWidth: '70%', height: 'fitContent'}} spacing={'2.5rem'}>
                        <div>
                            <ThemeProvider theme={props.data.headingTheme}>
                                <Typography variant="h2" color="primary">{props.data.titleOne}</Typography>
                                <Typography variant="h1" color="primary" sx={{fontWeight: 600}}>{props.data.titleTwo}</Typography>
                            </ThemeProvider>
                        </div>
                        { props.data.showButtonGroup &&
                        <Stack direction="row" spacing={2} sx={{ border: isBorder ? 1 : 'none'}}>
                        <FirstPageButton>Rent a Room</FirstPageButton> 
                        <FirstPageButton>Rent a House</FirstPageButton> 
                        <FirstPageButton>List a Property</FirstPageButton>       
                        </Stack>
                        }
                        <ThemeProvider theme={props.data.headingTheme}>
                            <Typography variant="body1" color="primary" display="block" sx={{maxWidth: '550px', fontWeight: 500}}>
                            {props.data.description}
                            </Typography>
                        </ThemeProvider>
                    </Stack>
                    </Stack>
                </Stack>
        
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
                <Stack sx={{ border: isBorder ? '1px solid orange' : 'none', paddingTop: '20px'}}>
                    <Button sx={{borderRadius: '20px', padding: '.5rem 1rem'}} color="primary" variant="contained">Enquire</Button>
                </Stack>
            </Stack>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default WelcomePageVariantTwo;