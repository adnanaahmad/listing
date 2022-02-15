import * as React from 'react';
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import {toggleBorder} from '../../../shared/styles/debugging-border'
import personImage from '../../../assets/Maintenance Assets/happy.png';


function ThirdPage() {
    const isBorder = toggleBorder;
    return (
    <React.Fragment>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ border: isBorder ? '1px solid red' : 'none', height: '100%', position: 'relative'}}>
            <Box component="img"
                sx={{
                    height: '95%',
                    width: '100%',
                    objectFit: 'cover'
                }}
                alt="The house from the offer."
                src={personImage}
                />
        </Stack>
    </React.Fragment>
    );
}

export default ThirdPage;