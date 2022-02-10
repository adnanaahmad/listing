import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import {toggleBorder} from '../../../shared/styles/debugging-border';
import SeaImage from '../../../assets/About Us Assets/DSC00378@2x.png';
import {BrownTheme} from '../../../shared/styles/themes/brown-theme';
import {WhiteTheme} from '../../../shared/styles/themes/white-theme';
import {ThemeProvider } from '@mui/material/styles';

const isBorder = toggleBorder;
function ValueCard(props) {
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

function SecondPage() {
    const valueCardContent = {
        title: 'Our Values',
        subTitle: 'We believe there are three key ingredients to our business',
        cards: [
            {
                title: 'Be Clear',
                paragraph: 
                [
                    'Making sure our managers and clients have an understanding.',
                    'Knowing your limitations and state your budget and needs.'
                ]
            },
            {
                title: 'Be Present',
                paragraph: 
                [
                    'Become a part of conversations that reflect our values.',
                    'Listen to our customers actively and interact often.'
                ]
            },
            {
                title: 'Be Honest',
                paragraph: 
                [
                    'No hidden information while viewing or listing properties.',
                    'Trust us to look after you throughout the whole process'
                ]
            }
        ]
    };
    
    return (
    <React.Fragment>
        <Stack spacing={'7rem'} sx={{ border: isBorder ? '1px solid red' : 'none', height: 'fitContent'}}>
            <Stack direction="row" sx={{ border: isBorder ? '2px solid yellow' : 'none', height: 'fitContent', position: 'relative'}}>
                <Box component="img"
                    sx={{
                        height: '55vh',
                        width: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(85%)'
                    }}
                    alt="The house from the offer."
                    src={SeaImage}
                    />
                    <Stack sx={{ border: isBorder ? '1px solid green' : 'none'}}>
                        <Typography variant="h4" sx={{fontWeight: 500, color: 'white', position: 'absolute', right: '60%', top: '30%', fontSize: '3.5rem', maxWidth: 800}}>A Good Home Is Made,</Typography>
                        <Typography variant="h4" sx={{fontWeight: 500, color: 'white', position: 'absolute', right: '60%', top: '42%', fontSize: '3.5rem', maxWidth: 600}}>Not Bought</Typography>
                    </Stack>
            </Stack>
            <ValueCard data = {valueCardContent}/>
        </Stack>
    </React.Fragment>
    );
}

export default SecondPage;