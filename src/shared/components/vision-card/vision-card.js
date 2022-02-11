import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import {ThemeProvider } from '@mui/material/styles';
import {toggleBorder} from '../../../shared/styles/debugging-border';
import {BrownTheme} from '../../../shared/styles/themes/brown-theme';

export default function VisionCard(props) {
    const isBorder = toggleBorder;
    return(
        <Stack direction="column" sx={{ border: isBorder ? '1px solid orange' : 'none', maxWidth: '1024px', marginLeft: 'auto', marginRight: 'auto'}}>      
            <Stack direction="column" justifyContent="center" alignItems="flex-start" sx={{ border: isBorder ? '1px solid green' : 'none', width: '100%', maxWidth: '600px'}} spacing={'1rem'}>
                <ThemeProvider theme={BrownTheme}>
                    <Typography color="primary" variant="body1" sx={{fontWeight: 500, fontSize: '3rem'}}>{props.data.title}</Typography>          
                    {
                        (props.data.paragraph).map((item, i) => (
                            <Typography color="primary" key={i} variant="body1" display="block">
                                {item}
                            </Typography> 
                        ))
                    }
                </ThemeProvider>
            </Stack>
        </Stack>
    )
}