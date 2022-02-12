import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import {toggleBorder} from '../../../shared/styles/debugging-border';
import {WhiteTheme} from '../../../shared/styles/themes/white-theme';
import {DarkGreenTheme} from '../../../shared/styles/themes/dark-green-theme';
import {ThemeProvider} from '@mui/material/styles';
import Button from '@mui/material/Button';

export default function FirstPage() {
    const isBorder = toggleBorder;
    return (
        <React.Fragment>
            <Stack direction="column" justifyContent="center" alignItems="center" sx={{border: isBorder ? '1px solid red' : 'none', borderBottom: '2px solid #0089ff99', height: 'fitContent', paddingY: '4rem'}}>
                <Stack sx={{border: isBorder ? '2px solid yellow' : 'none', height: 'fitContent', width: '30%', maxWidth: '350px'}}>
                    <Stack spacing={'1.5rem'} alignItems="center" sx={{border: isBorder ? '2px solid orange' : 'none', borderRadius: '10px', height: 'fitContent', backgroundColor: WhiteTheme.palette.primary.contrastText, padding: '2rem 2rem'}} >
                        <Typography variant="h5" display="block" sx={{color: 'white'}}>Enquire</Typography>
                            <ThemeProvider theme={DarkGreenTheme}>
                                <Stack sx={{border: isBorder ? 1 : 'none', backgroundColor: 'white', width: '100%', borderRadius: '10px', paddingY: '.5rem'}} spacing={'.5rem'}>
                                    <Typography sx={{paddingLeft: '1rem'}} color="primary" variant="caption">Your Name</Typography>
                                    <Stack style={{border: `.5px solid ${WhiteTheme.palette.primary.contrastText}`, width: '100%'}}></Stack>
                                    <Typography sx={{paddingLeft: '1rem'}} color="primary" variant="caption">Email</Typography>
                                    <Stack style={{border: `.5px solid ${WhiteTheme.palette.primary.contrastText}`, width: '100%'}}></Stack>
                                    <Typography sx={{paddingLeft: '1rem'}} color="primary" variant="caption">Phone Number</Typography>
                                </Stack>
                                <Stack sx={{border: isBorder ? 1 : 'none', backgroundColor: 'white', width: '100%', borderRadius: '10px', padding: '.5rem 0', height: '100px'}}>
                                    <Typography sx={{paddingX: '1rem'}} color="primary" variant="caption" display="block">Your message...</Typography>
                                </Stack>
                            </ThemeProvider>
                            <ThemeProvider theme={WhiteTheme}>
                                <Button variant="contained" sx={{px: 2, py: .5, borderRadius: 2, fontWeight: 400, textTransform: 'none', whiteSpace: 'nowrap', fontSize: '1rem'}}>
                                    Submit
                                </Button>
                            </ThemeProvider>
                    </Stack>
                </Stack>
            </Stack>
        </React.Fragment>
    )
}