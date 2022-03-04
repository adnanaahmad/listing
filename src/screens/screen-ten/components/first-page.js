import * as React from 'react';
import MenuBar from '../../../shared/components/menu-bar/menu-bar';
import { Stack, Typography } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import {ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import {toggleBorder} from '../../../shared/styles/debugging-border';
import BookMeetingImage from '../../../assets/Book a Meeting Asset/Mask Group 5@2x.png';
import LeftLeaf from '../../../assets/Index Assets/Path 19@2x.png';
import TextField from '@mui/material/TextField';
import {BrownTheme} from '../../../shared/styles/themes/brown-theme';
import {DarkGreenTheme} from '../../../shared/styles/themes/dark-green-theme';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import MenuButton from '../../../shared/components/menu-button/menu-button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { makeStyles, createStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    formParent: {
        [theme.breakpoints.down('md')]: {
            //padding: '1rem'
        },
    },
    footerInfo: {
        [theme.breakpoints.down('md')]: {
            width: 'fit-content',
            alignItems: 'center'
        },
    },
    footerInfoCol: {
        [theme.breakpoints.down('md')]: {
            alignItems: 'center'
        },
    },
  }),
);
function FirstPage(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isBorder = toggleBorder;
  return (
    <React.Fragment>
        <Stack spacing={'2rem'} direction="column" sx={{ border: isBorder ? '1px solid red' : 'none', height: '140vh', width: '100%'}}>
            {/* menu */}
            <ThemeProvider theme={props.data.menuTheme}>
                <Stack spacing={'1rem'} direction="row" justifyContent="space-between" sx={{ border: isBorder ? '1px solid orange' : 'none', height: 'fitContent', width: '90%', marginX: 'auto'}}>       
                    <Stack justifyContent="space-between" sx={{ border: isBorder ? '1px solid green' : 'none', width: matches ? '58%': '100%', paddingTop: '20px'}}>
                        <Stack direction="row" alignItems="center" justifyContent={matches ? 'flex-start' : 'space-between'} sx={{ border: isBorder ? '1px solid purple' : 'none'}}>
                            <HomeOutlinedIcon color="primary" sx={{fontSize: matchesMobile ? '3rem' : '5rem'}}/>
                            {
                                matches &&
                                <MenuBar data = {props.data.menu}/>
                            }
                            {
                                !matches &&
                                <MenuButton data = {props.data}/>
                            }
                        </Stack>
                    </Stack>
                    {
                        matches &&
                        <React.Fragment>
                            <Box sx={{ border: isBorder ? '1px solid red' : 'none', width: '30%'}}/>
                            <Stack sx={{ border: isBorder ? '1px solid orange' : 'none', margin: 'auto'}}>
                                <Button sx={{borderRadius: '20px', padding: '.5rem 1rem'}} color="primary" variant="contained">Enquire</Button>
                            </Stack>
                        </React.Fragment>
                    }
                </Stack>
            </ThemeProvider>
            {/* form */}
            <Stack sx={{ border: isBorder ? '1px solid yellow' : 'none', height: '90%', width: '100%', position: 'relative'}}>
                <Box component="img"
                        sx={{
                            height: '100%',
                            width: '100%',
                            objectFit: 'cover',
                            filter: 'brightness(65%)'
                        }}
                        alt="The house from the offer."
                        src={BookMeetingImage}
                />
                <div style={{position: 'absolute', top: '50%',left: '50%', transform: 'translate(-50%, -50%)', width: matches ? '60%' : '100%', maxWidth: matches ? '1024px': '600px'}} className={classes.formParent}>
                    
                    <ThemeProvider theme={BrownTheme}>
                        <Stack direction="row" justifyContent="center" sx= {{border: isBorder ? '2px solid orange' : 'none', width: '100%'}}>
                            <Stack sx= {{backgroundColor: 'white', width: '100%', padding: matchesMobile ? '2rem .25rem' : matches ? '2rem 4rem' : '2rem 1rem'}}>
                                <Stack direction="row" alignItems="center" justifyContent="space-evenly" sx={{height: 'fitContent', border: isBorder ? '2px solid red' : 'none', marginBottom: '3rem'}}>
                                    <Box component="img"
                                        sx={{
                                            height: '60px',
                                            width: '60px',
                                            objectFit: 'cover',
                                        }}
                                        alt="The house from the offer."
                                        src={LeftLeaf}
                                    />
                                    <Typography color="primary" variant={matchesMobile ? 'h5' : 'h3'} textAlign={'center'}>Book A Meeting</Typography>
                                    <Box component="img"
                                        sx={{
                                            height: '60px',
                                            width: '60px',
                                            objectFit: 'cover',
                                            transform: 'scaleX(-1)'
                                        }}
                                        alt="The house from the offer."
                                        src={LeftLeaf}
                                    />
                                </Stack>
                                <div style={{borderBottom: '1.5px solid ' + DarkGreenTheme.palette.primary.main, width: '100%', marginBottom: '3rem'}}></div>
                                <Typography variant='body1' sx={{color: '#999999', fontWeight: 500}}>Name *</Typography>
                                <Stack spacing={'1rem'} sx={{border: isBorder ? '2px solid orange' : 'none', marginBottom: '2rem'}} direction="row" justifyContent="space-between">
                                    <div style={{}}>
                                        <TextField color="primary" placeholder="First Name" size="small" 
                                            sx={{
                                                "& ::-webkit-input-placeholder": {
                                                    color: BrownTheme.palette.primary.main + '!important'
                                                }
                                            }}
                                        />
                                    </div>
                                    <div style={{width: '70%'}}>
                                        <TextField fullWidth color="primary" placeholder="Last Name" size="small"
                                            sx={{
                                                "& ::-webkit-input-placeholder": {
                                                    color: BrownTheme.palette.primary.main + '!important'
                                                }
                                            }}
                                        />
                                    </div>
                                </Stack>
                                <Typography variant='body1' sx={{color: '#999999', fontWeight: 500}}>Email *</Typography>
                                <div style={{width: '100%', marginBottom: '2rem'}}>
                                    <TextField fullWidth color="primary" size="small"
                                        sx={{
                                            "& ::-webkit-input-placeholder": {
                                                color: BrownTheme.palette.primary.main + '!important'
                                            }
                                        }}
                                    />
                                </div>
                                <Typography variant='body1' sx={{color: '#999999', fontWeight: 500}}>Date</Typography>
                                <Stack spacing={'1rem'} sx={{border: isBorder ? '2px solid orange' : 'none', marginBottom: '2rem', width: '250px'}} direction="row">
                                    <div style={{}}>
                                        <TextField color="primary" placeholder="DD" size="small" 
                                            sx={{
                                                "& ::-webkit-input-placeholder": {
                                                    color: BrownTheme.palette.primary.main + '!important'
                                                }
                                            }}
                                        />
                                    </div>
                                    <div style={{}}>
                                        <TextField color="primary" placeholder="MM" size="small"
                                            sx={{
                                                "& ::-webkit-input-placeholder": {
                                                    color: BrownTheme.palette.primary.main + '!important'
                                                }
                                            }}
                                        />
                                    </div>
                                    <div style={{width: '110%'}}>
                                        <TextField fullWidth color="primary" placeholder="YY" size="small"
                                            sx={{
                                                "& ::-webkit-input-placeholder": {
                                                    color: BrownTheme.palette.primary.main + '!important'
                                                }
                                            }}
                                        />
                                    </div>
                                </Stack>
                                <Typography variant='body1' sx={{color: '#999999', fontWeight: 500}}>Time</Typography>
                                <Stack direction="row" alignItems="center" spacing={'.25rem'} sx={{border: isBorder ? '2px solid orange' : 'none', marginBottom: '2rem', width: '150px'}}>
                                    <TextField fullWidth color="primary" placeholder="Choose" size="small"
                                        sx={{
                                            "& ::-webkit-input-placeholder": {
                                                color: BrownTheme.palette.primary.main + '!important'
                                            }
                                        }}
                                    />
                                    <KeyboardArrowDownOutlinedIcon sx={{color: BrownTheme.palette.primary.main}}/>
                                </Stack>
                                <Typography variant='body1' sx={{color: '#999999', fontWeight: 500}}>Property Manager *</Typography>
                                <Stack direction="row" alignItems="center" spacing={'.25rem'} sx={{border: isBorder ? '2px solid orange' : 'none', marginBottom: '2rem', width: '250px'}}>
                                    <TextField fullWidth color="primary" placeholder="Choose" size="small"
                                        sx={{
                                            "& ::-webkit-input-placeholder": {
                                                color: BrownTheme.palette.primary.main + '!important'
                                            }
                                        }}
                                    />
                                    <KeyboardArrowDownOutlinedIcon sx={{color: BrownTheme.palette.primary.main}}/>
                                </Stack>
                                <Typography variant='body1' sx={{color: '#999999', fontWeight: 500}}>What would you like to talk about? *</Typography>
                                <div style={{width: '100%', marginBottom: '3rem'}}>
                                    <TextField fullWidth color="primary" size="small"
                                        multiline
                                        rows={4}
                                        placeholder="E.g I would like advice about listing an apartment in Grey Lynn, Auckland."
                                        sx={{
                                            "& ::-webkit-input-placeholder": {
                                                color: BrownTheme.palette.primary.main + '!important'
                                            }
                                        }}
                                    />
                                </div>
                                <div style={{borderBottom: '1.5px solid ' + DarkGreenTheme.palette.primary.main, width: '100%', marginBottom: '3rem'}}></div>
                                <Stack direction="row" justifyContent="center" sx={{width: 'fitContent'}}>
                                    <ThemeProvider theme={DarkGreenTheme}>
                                        <Button variant='contained' color="primary" size="large" sx={{padding: '.5rem 2rem', borderRadius: '30px', fontSize: '1.2rem', textTransform: 'none'}}>Book</Button>
                                    </ThemeProvider>
                                </Stack>
                            </Stack>
                        </Stack>
                    </ThemeProvider>
                </div>
            </Stack>
        </Stack>
    </React.Fragment>
  );
}

export default FirstPage;