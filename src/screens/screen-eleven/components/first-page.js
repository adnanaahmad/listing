import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import {toggleBorder} from '../../../shared/styles/debugging-border';
import {WhiteTheme} from '../../../shared/styles/themes/white-theme';
import {DarkGreenTheme} from '../../../shared/styles/themes/dark-green-theme';
import {ThemeProvider} from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const styleObject = {
    "& ::-webkit-input-placeholder": {
        color: WhiteTheme.palette.primary.contrastText + '!important',
        opacity: '.8 !important',
        fontSize: '.8rem'
    },
    ".MuiOutlinedInput-input": {
        padding: '0 1rem'
    },
    ".MuiOutlinedInput-notchedOutline": {
        border: '0 !important'
    },
    ".MuiOutlinedInput-root": {
        padding: 0
    }
}

export default function FirstPage() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const isBorder = toggleBorder;
    return (
        <React.Fragment>
            <Stack direction="column" justifyContent="center" alignItems="center" sx={{border: isBorder ? '1px solid red' : 'none', borderBottom: '2px solid #0089ff99', height: 'fitContent', paddingY: '4rem'}}>
                <Stack sx={{border: isBorder ? '2px solid yellow' : 'none', height: 'fitContent', width: matches ? '30%' : '100%', maxWidth: '350px'}}>
                    <Stack spacing={'1.5rem'} alignItems="center" sx={{border: isBorder ? '2px solid orange' : 'none', borderRadius: '10px', height: 'fitContent', backgroundColor: WhiteTheme.palette.primary.contrastText, padding: '2rem 2rem'}} >
                        <Typography variant="h5" display="block" sx={{color: 'white'}}>Enquire</Typography>
                            <ThemeProvider theme={DarkGreenTheme}>
                                <Stack sx={{border: isBorder ? 1 : 'none', backgroundColor: 'white', width: '100%', borderRadius: '10px', paddingY: '.5rem'}} spacing={'.5rem'}>
                                    <TextField id={'name'} variant="outlined" placeholder={'Your Name'} sx={styleObject} />
                                    <Stack style={{border: `.5px solid ${WhiteTheme.palette.primary.contrastText}`, width: '100%'}}></Stack>
                                    <TextField id={'email'} variant="outlined" placeholder={'Email'} sx={styleObject} />
                                    <Stack style={{border: `.5px solid ${WhiteTheme.palette.primary.contrastText}`, width: '100%'}}></Stack>
                                    <TextField id={'number'} variant="outlined" placeholder={'Phone Number'} sx={styleObject} />
                                </Stack>
                                <Stack sx={{border: isBorder ? 1 : 'none', backgroundColor: 'white', width: '100%', borderRadius: '10px', padding: '.5rem 0', height: '100%', minHeight: '100px'}}>
                                    <TextField
                                    id="outlined-multiline-flexible"
                                    multiline
                                    maxRows={4}
                                    placeholder='Your message...'
                                    sx={styleObject}
                                    />
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