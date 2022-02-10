import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import {toggleBorder} from '../../../shared/styles/debugging-border'
import personImage from '../../../assets/All Listings Assets/laugh.jpg'


function ThirdPage() {
    const isBorder = toggleBorder;
    return (
    <React.Fragment>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ border: isBorder ? '1px solid red' : 'none', height: '100vh', position: 'relative'}}>
            <Box component="img"
                sx={{
                    height: '95%',
                    width: '100%',
                    objectFit: 'cover'
                }}
                alt="The house from the offer."
                src={personImage}
                />
                <Stack sx={{ border: isBorder ? '1px solid green' : 'none'}}>
                    <Typography variant="h4" sx={{fontWeight: 500, color: 'white', position: 'absolute', left: '8%', top: '40%', fontSize: '4rem', maxWidth: 500}}>A Clean Home Is A Happy Home !</Typography>
                </Stack>
        </Stack>
    </React.Fragment>
    );
}

export default ThirdPage;