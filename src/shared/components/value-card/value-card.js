import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import {BrownTheme} from '../../../shared/styles/themes/brown-theme';
import {WhiteTheme} from '../../../shared/styles/themes/white-theme';
import {ThemeProvider } from '@mui/material/styles';
import {toggleBorder} from '../../../shared/styles/debugging-border';

export default function ValueCard(props) {
    const isBorder = toggleBorder;
    return (
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ border: isBorder ? '1px solid green' : 'none', height: 'fitContent'}}
        >
            <Stack spacing={'4rem'} sx={{ border: isBorder ? '2px solid pink' : 'none', width: '80%', maxWidth: '1024px'}}>
                <Stack spacing={'2rem'} alignItems="center" sx={{ border: isBorder ? 1 : 'none'}}>
                    <ThemeProvider theme={BrownTheme}>
                        <Typography variant="h3" display="block" color="primary">
                            {props.data.title}
                        </Typography>
                        <Typography variant="body1" display="block" color="primary">
                            {props.data.subTitle}
                        </Typography> 
                    </ThemeProvider>
                </Stack>
                <Stack direction="row" justifyContent="space-between" spacing={'4rem'} sx={{ border: isBorder ? '1px solid orange' : 'none'}}>
                    
                    {
                        props.data.cards.map((card, i) => (
                            <React.Fragment key={i}>
                                <Stack direction="column" justifyContent="center" alignItems="flex-start" sx={{ border: isBorder ? '1px solid green' : 'none', width: '100%', maxWidth: '700px'}} spacing={'1rem'}>                            
                                    <div style={{backgroundColor: WhiteTheme.palette.primary.contrastText, padding: '12px 0', width: '100%', borderTopRightRadius: '30px', borderBottomLeftRadius: '30px', boxShadow: 'rgb(203 146 108 / 65%) 0px 4px 12px'}}>
                                        <Typography variant="body1" sx={{fontWeight: 500, fontSize: '1.8rem', color: 'white', textAlign: 'center'}}>
                                            {card.title}
                                        </Typography>  
                                    </div>                          
                                    {
                                        (card.paragraph).map((item, y) => (
                                            <ThemeProvider key={y} theme={BrownTheme}>
                                                <Typography variant="body1" display="block" color="primary">
                                                    {item}
                                                </Typography> 
                                            </ThemeProvider>
                                        ))
                                    }
                                </Stack>
                            </React.Fragment>
                        ))
                    }
                </Stack>
            </Stack>
        </Stack>
    )
}