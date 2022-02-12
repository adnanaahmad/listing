import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import {ThemeProvider } from '@mui/material/styles';
import {toggleBorder} from '../../shared/styles/debugging-border';
import {BrownTheme} from '../../shared/styles/themes/brown-theme';

const isBorder = toggleBorder;

function ContentCard  (props) {
    return(
        <Stack direction="column" justifyContent="center" alignItems="flex-start" sx={{ border: isBorder ? '1px solid green' : 'none', width: '100%', maxWidth: '700px'}} spacing={'1rem'}>
            <ThemeProvider theme={BrownTheme}>
                <Typography color="primary" variant="body1" sx={{fontWeight: 400, fontSize: '1.8rem'}}>{props.data.title}</Typography>
            </ThemeProvider>
            {
                (props.data.paragraph).map((item, i) => (
                    <Typography key={i} variant="body1" display="block">
                        {item}
                    </Typography> 
                ))
            }
        </Stack>
    )
}


function PolicyTermsPage(props) {   
    return (
    <React.Fragment>
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={'5rem'} sx={{ border: isBorder ? '1px solid red' : 'none', height: 'fitContent', paddingY: '6rem'}}
        >
            <Stack direction="column" justifyContent="space-between" spacing={'4rem'} sx={{ border: isBorder ? '1px solid orange' : 'none', maxWidth: '1440px'}}>
                
                {
                    props.data.map((card, i) => (
                        <ContentCard key={i} data = {card}/>
                    ))
                }
            </Stack>
        </Stack>
    </React.Fragment>
    );
}

export default PolicyTermsPage;