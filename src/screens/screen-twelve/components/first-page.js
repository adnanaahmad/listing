import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import {toggleBorder} from '../../../shared/styles/debugging-border';
import {WhiteTheme} from '../../../shared/styles/themes/white-theme';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import {ThemeProvider} from '@mui/material/styles';
import Button from '@mui/material/Button';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function FirstPage() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const Buttons = ['Location', 'Rent per week', 'Bedrooms', 'Bathrooms', 'Property Type'];
    const isBorder = toggleBorder;
    return (
        <React.Fragment>
            <Stack direction="column" justifyContent="center" alignItems="center" sx={{border: isBorder ? '1px solid red' : 'none', borderBottom: '2px solid #0089ff99', height: 'fitContent', paddingY: '4rem'}}>
                <Stack sx={{border: isBorder ? '2px solid yellow' : 'none', height: 'fitContent', width: matches ? '30%' : '100%', maxWidth: '350px'}}>
                    <Stack spacing={'1.5rem'} alignItems="flex-start" sx={{border: isBorder ? '2px solid orange' : 'none', borderRadius: '10px', height: 'fitContent', backgroundColor: WhiteTheme.palette.primary.contrastText, padding: '1rem 1rem 2rem 1rem'}} >
                        <Stack spacing={'.5rem'} direction="row" justifyContent="flex-start" alignItems="center">
                            <MenuOutlinedIcon sx={{color: 'white'}}/>
                            <Typography variant="caption" display="block" sx={{fontWeight: 500, color: 'white'}}>Filters</Typography>
                        </Stack>
                        <ThemeProvider theme={WhiteTheme}>
                            {
                                Buttons.map((item, i) => (
                                    <Button key={i} variant="contained" sx={{paddingLeft: 1.5, paddingRight: .5, py: .8, borderRadius: 2, fontWeight: 400, textTransform: 'none', whiteSpace: 'nowrap', fontSize: '1rem', width: '100%'}}>
                                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{width: '100%'}}>
                                            <Typography variant="caption" display="block" sx={{fontWeight: 500, color: 'black'}}>{item}</Typography>                               
                                            <ArrowForwardOutlinedIcon sx={{color: '#787d62'}}/>                                    
                                        </Stack>
                                    </Button>
                                ))
                            }
                        
                        <Stack spacing={'1rem'} direction="row" justifyContent="space-between" alignItems="center" sx={{width: '100%'}}>
                            <Button variant="contained" sx={{paddingLeft: 1.5, paddingRight: .5, py: .8, borderRadius: 2, fontWeight: 400, textTransform: 'none', whiteSpace: 'nowrap', fontSize: '1rem', flex: 1}}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{width: '100%'}}>
                                    <Typography variant="caption" display="block" sx={{fontWeight: 500, color: 'black'}}>Pets OK</Typography>                               
                                    <CircleOutlinedIcon sx={{color: '#787d62'}}/>                                    
                                </Stack>
                            </Button>
                            <Button variant="contained" sx={{paddingLeft: 1.5, paddingRight: .5, py: .8, borderRadius: 2, fontWeight: 400, textTransform: 'none', whiteSpace: 'nowrap', fontSize: '1rem', flex: 1}}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{width: '100%'}}>
                                    <Typography variant="caption" display="block" sx={{fontWeight: 500, color: 'black'}}>Available</Typography>                               
                                    <CircleOutlinedIcon sx={{color: '#787d62'}}/>                                    
                                </Stack>
                            </Button>
                        </Stack>
                        </ThemeProvider>
                    </Stack>
                </Stack>
            </Stack>
        </React.Fragment>
    )
}