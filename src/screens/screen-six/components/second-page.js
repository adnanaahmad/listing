import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import {toggleBorder} from '../../../shared/styles/debugging-border';
import SeaImage from '../../../assets/About Us Assets/DSC00378@2x.png';
import ValueCard from '../../../shared/components/value-card/value-card';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function SecondPage() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const isBorder = toggleBorder;
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
                        <Typography variant={matches ? "h2" : "h3"} sx={{fontWeight: 500, color: 'white', position: 'absolute', left: matches ? '20%' : '10%', top: '30%', maxWidth: matches ? '700px' : '500px'}}>A Good Home Is Made, Not Bought</Typography>
                    </Stack>
            </Stack>
            <ValueCard data = {valueCardContent}/>
        </Stack>
    </React.Fragment>
    );
}

export default SecondPage;