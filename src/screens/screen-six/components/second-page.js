import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import {toggleBorder} from '../../../shared/styles/debugging-border';
import SeaImage from '../../../assets/About Us Assets/DSC00378@2x.png';
import ValueCard from '../../../shared/components/value-card/value-card';

function SecondPage() {
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
                        <Typography variant="h4" sx={{fontWeight: 500, color: 'white', position: 'absolute', left: '20%', top: '30%', fontSize: '3.5rem'}}>A Good Home Is Made,</Typography>
                        <Typography variant="h4" sx={{fontWeight: 500, color: 'white', position: 'absolute', left: '20%', top: '42%', fontSize: '3.5rem'}}>Not Bought</Typography>
                    </Stack>
            </Stack>
            <ValueCard data = {valueCardContent}/>
        </Stack>
    </React.Fragment>
    );
}

export default SecondPage;