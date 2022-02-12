import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import {toggleBorder} from '../../../shared/styles/debugging-border';
import {WhiteTheme} from '../../../shared/styles/themes/white-theme';
import {DarkGreenTheme} from '../../../shared/styles/themes/dark-green-theme';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import {ThemeProvider} from '@mui/material/styles';
import Button from '@mui/material/Button';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FirstPage() {
    const Buttons = ['Location', 'Rent per week', 'Bedrooms', 'Bathrooms', 'Property Type'];
    const locations = ['Auckland CBD', 'Parnell', 'Eden Terrace', 'Mount Eden', 'Ponsonby', 'Grey Lynn', 'Herne Bay', 'Mount Albert', 'Mission Bay'];
    const filters = ['All', 'Apartment', 'House', 'Townhouse', 'Unit'];

    const isBorder = toggleBorder;
    return (
        <React.Fragment>
            <Stack spacing={'2rem'} direction="row" justifyContent="center" alignItems="center" sx={{border: isBorder ? '1px solid red' : 'none', height: 'fitContent', padding: '4rem 0 2rem 0'}}>
                <Stack sx={{border: isBorder ? '2px solid yellow' : 'none', height: 'fitContent', width: '30%', maxWidth: '350px'}}>
                    <Stack spacing={'1.5rem'} alignItems="flex-start" sx={{border: isBorder ? '2px solid orange' : 'none', borderRadius: '10px', height: 'fitContent', backgroundColor: WhiteTheme.palette.primary.contrastText, padding: '1rem 1rem 2rem 1rem'}} >
                        <Stack spacing={'.5rem'} direction="row" justifyContent="flex-start" alignItems="center">
                            <MenuOutlinedIcon sx={{color: 'white'}}/>
                            <Typography variant="caption" display="block" sx={{fontWeight: 500, color: 'white'}}>Filters</Typography>
                        </Stack>
                        <ThemeProvider theme={WhiteTheme}>
                            {
                                Buttons.map((item, i) => (
                                    <div key={i} style={{background: 'white', width: '100%', padding: '.5rem 0', borderRadius: '10px'}}>
                                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{width: '100%'}}>
                                            <Typography variant="subtitle2" display="block" sx={{fontWeight: 500, color: 'black', marginLeft: '.6rem'}}>{item}</Typography>                               
                                            <ArrowForwardOutlinedIcon sx={{color: '#787d62', marginRight:'.15rem'}}/>                                    
                                        </Stack>
                                        <ThemeProvider theme={DarkGreenTheme}>
                                            <Stack direction="row" justifyContent="space-between">
                                                <Stack sx={{border: isBorder ? '1px solid red' : 'none', flex:1}}>
                                                    <Typography variant="caption" display="block" sx={{fontWeight: 500, color: 'black', marginLeft: '.6rem'}}>From</Typography>
                                                    <FormControl sx={{mx: 1, minWidth: 80 }}>
                                                        <Select
                                                        fullWidth
                                                        placeholder='Any'
                                                        size="small"
                                                        >
                                                        <MenuItem>10000</MenuItem>
                                                        <MenuItem>20000</MenuItem>
                                                        <MenuItem>30000</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Stack>
                                                <Typography variant="h5" display="block" sx={{fontWeight: 400, color: 'black', marginTop: '8%'}}>-</Typography>
                                                <Stack sx={{border: isBorder ? '1px solid red' : 'none', flex:1}}>
                                                    <Typography variant="caption" display="block" sx={{fontWeight: 500, color: 'black', marginLeft: '.6rem'}}>To</Typography>
                                                    <FormControl sx={{ mx: 1, minWidth: 80 }}>
                                                        <Select
                                                        fullWidth
                                                        placeholder='Any'
                                                        size="small"
                                                        >
                                                        <MenuItem>10000</MenuItem>
                                                        <MenuItem>20000</MenuItem>
                                                        <MenuItem>30000</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Stack>
                                            </Stack>
                                        </ThemeProvider>
                                    </div>
                                ))
                            }
                        
                        <Stack spacing={'1rem'} direction="row" justifyContent="space-between" alignItems="center" sx={{width: '100%'}}>
                            <Button variant="contained" sx={{paddingLeft: 1.5, paddingRight: .5, py: 2, borderRadius: 2, fontWeight: 400, textTransform: 'none', whiteSpace: 'nowrap', fontSize: '1rem', flex: 1}}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{width: '100%'}}>
                                    <Typography variant="subtitle2" display="block" sx={{fontWeight: 500, color: 'black'}}>Pets OK</Typography>                               
                                    <CircleOutlinedIcon sx={{color: '#787d62'}}/>                                    
                                </Stack>
                            </Button>
                            <Button variant="contained" sx={{paddingLeft: 1.5, paddingRight: .5, py: 2, borderRadius: 2, fontWeight: 400, textTransform: 'none', whiteSpace: 'nowrap', fontSize: '1rem', flex: 1}}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{width: '100%'}}>
                                    <Typography variant="subtitle2" display="block" sx={{fontWeight: 500, color: 'black'}}>Available</Typography>                               
                                    <CircleOutlinedIcon sx={{color: '#787d62'}}/>                                    
                                </Stack>
                            </Button>
                        </Stack>
                        <Stack direction="row" justifyContent="center" alignItems="center" sx={{width: '100%'}}>
                            <Button variant="contained" sx={{color: 'black', padding: '.5rem 2rem', borderRadius: 2, fontWeight: 400, textTransform: 'none', whiteSpace: 'nowrap', fontSize: '1rem'}}>
                                Clear 
                            </Button>
                        </Stack>
                        </ThemeProvider>
                    </Stack>
                </Stack>
                <Stack spacing={'4rem'} direction="column" justifyContent="space-evenly" sx={{border: isBorder ? '2px solid orange' : 'none', width: '30%', maxWidth: '350px', height: '100%'}}>
                    <Stack direction="column" sx={{border: '1px solid ' + WhiteTheme.palette.primary.contrastText, width: '200px',  borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px', padding: '1rem', borderRight:'none'}}>
                        {
                            locations.map((item, i) => (
                                <Typography key={i} variant="subtitle2" display="block" sx={{fontWeight: 500, color: 'black'}}>{item}</Typography>
                            ))
                        }
                    </Stack>
                    <Stack direction="column" sx={{border: '1px solid ' + WhiteTheme.palette.primary.contrastText, width: '200px', borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px', padding: '1rem', borderRight:'none'}}>
                        {
                            filters.map((item, i) => (
                                <Typography key={i} variant="subtitle2" display="block" sx={{fontWeight: 500, color: 'black'}}>{item}</Typography>
                            ))
                        }
                    </Stack>
                </Stack>
            </Stack>
        </React.Fragment>
    )
}