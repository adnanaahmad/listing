import * as React from 'react';
import MenuBar from '../components/menu-bar/menu-bar'
import { Stack, Typography } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import {ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import {toggleBorder} from '../styles/debugging-border';
import MenuButton from '../components/menu-button/menu-button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


function WelcomePageVariantTwo(props) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isBorder = toggleBorder;
  return (
    <React.Fragment>
        {
            matches &&
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
                            {
                                props.data.descriptionTwo &&
                                <ThemeProvider theme={props.data.headingTheme}>
                                    <Typography variant="h6" color="primary" sx={{fontWeight: 500}}>{props.data.descriptionTwo}</Typography>
                                </ThemeProvider>
                            }
                            { props.data.showButtonGroup &&
                            <Stack direction="row" spacing={3} sx={{ border: isBorder ? 1 : 'none'}}>
                                {
                                    props.data.buttonGroup.map((item, i) => (
                                        <Button variant='contained' key={i} sx={{fontSize:'1.2rem', borderRadius: '25px', padding: '.5rem 1rem', textTransform: 'none', whiteSpace: 'nowrap' }}>{item}</Button> 
                                    ))
                                }                                
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
                        width: '29%',
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
        }
        {
            !matches &&
            <ThemeProvider theme={props.data.menuTheme}>
                <Stack spacing={'1rem'} justifyContent="space-between" sx={{ border: isBorder ? '1px solid red' : 'none', height: 'fitContent', paddingX: matchesMobile ? '.5rem' : '2rem', marginX: 'auto', paddingBottom: '4rem'}}>       
                    <Stack justifyContent="space-between" sx={{ border: isBorder ? '1px solid green' : 'none',}}>
                        <Stack direction="row" alignItems="flex-start" justifyContent={'space-between'} sx={{ border: isBorder ? '1px solid purple' : 'none'}}>
                            <HomeOutlinedIcon color="primary" sx={{ fontSize: matchesMobile ? '3rem' : '5rem'}}/>
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
                            <MenuButton data={props.data} />
                        </Stack>
                    </Stack>          
                    <Stack justifyContent="center" alignItems="center" sx={{border: isBorder ? '1px solid red' : 'none', height: '100%'}}>
                        <Stack justifyContent="space-between" alignItems={'center'} sx={{border: isBorder ? 1 : 'none', minWidth: '70%', maxWidth: '500px', height: 'fitContent'}} spacing={'2.5rem'}>
                            <div>
                                <ThemeProvider theme={props.data.headingTheme}>
                                    <Typography variant={ matchesMobile ? "h3" : "h2"} color="primary">{props.data.titleOne}</Typography>
                                    <Typography variant={matchesMobile ? "h2" : "h1"} color="primary" sx={{fontWeight: 600}}>{props.data.titleTwo}</Typography>
                                </ThemeProvider>
                            </div>
                            {
                                props.data.descriptionTwo &&
                                <ThemeProvider theme={props.data.headingTheme}>
                                    <Typography variant="h6" color="primary" sx={{fontWeight: 500}}>{props.data.descriptionTwo}</Typography>
                                </ThemeProvider>
                            }
                            { props.data.showButtonGroup &&
                            <Stack direction="column" alignItems={'center'} spacing={3} sx={{ border: isBorder ? 1 : 'none'}}>
                                {
                                    props.data.buttonGroup.map((item, i) => (
                                        <Button variant='contained' key={i} sx={{fontSize:'1.2rem', borderRadius: '25px', padding: '.5rem 1rem', textTransform: 'none', whiteSpace: 'nowrap', width: 'fit-content' }}>{item}</Button> 
                                    ))
                                }                                
                            </Stack>
                            }
                            <ThemeProvider theme={props.data.headingTheme}>
                                <Typography variant="body1" color="primary" display="block" sx={{maxWidth: '500px', fontWeight: 500}}>
                                {props.data.description}
                                </Typography>
                            </ThemeProvider>
                            <Button sx={{borderRadius: '20px', padding: '.5rem 1rem', width: 'fit-content'}} color="primary" variant="contained">Enquire</Button>
                        </Stack>
                    </Stack>
                </Stack>
            </ThemeProvider>
        }
    </React.Fragment>
  );
}

export default WelcomePageVariantTwo;