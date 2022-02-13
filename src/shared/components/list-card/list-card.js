import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import {toggleBorder} from '../../styles/debugging-border';
import BedIcon from '@mui/icons-material/Bed';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import { ThemeProvider } from '@emotion/react';

const isBorder = toggleBorder;
export default function ListCard(props) {
    return (
        <Stack direction="column" justifyContent="space-between" alignItems="center" sx={{
            border: isBorder ? 1 : 'none',
            width: '30%',
            borderTopRightRadius: '40px',
            borderBottomLeftRadius: '40px',                                
            padding: '.7rem',
            backgroundColor: 'white',
            boxShadow: props.boxShadow ? 'rgb(203 146 108 / 35%) 0px 4px 12px' : 'none',
        }}>
            <Box component="img"
                sx={{
                    height: '80%',
                    borderTopRightRadius: '40px',
                    borderBottomLeftRadius: '40px', 
                    width: '100%',
                    objectFit: 'cover'
                }}
                alt="The house from the offer."
                src={props.data.image}
            />
            <ThemeProvider theme={props.theme}>
                <Stack sx={{border: isBorder ? '1px solid blue' : 'none', width: '100%', marginTop: '1rem'}} spacing={'1rem'}>
                    <Stack sx={{border: isBorder ? '1px solid red' : 'none'}} direction="row" justifyContent="flex-end" alignItems="flex-end">
                        <Typography color="primary" variant="body1" sx={{fontWeight: 500, fontSize: '1.3rem', lineHeight: 1}}>{props.data.price}</Typography>
                        <Typography color="primary" variant="body1" sx={{fontSize: '.6rem',}}>Per Week</Typography>
                    </Stack>
                    <Stack sx={{border: isBorder ? '1px solid red' : 'none'}} direction="row" justifyContent="space-between" alignItems="center">
                        <Typography color="primary" variant="body1" sx={{fontSize: '.9rem',}}>{props.data.address}</Typography>
                        <Stack direction="row" alignItems="center">
                            <BedIcon color="primary"/>
                            <Typography color="primary" variant="body1" sx={{fontSize: '.9rem', marginRight: '1rem', fontWeight: 500}}>{props.data.bed}</Typography>
                            <BathtubOutlinedIcon color="primary"/>
                            <Typography color="primary" variant="body1" sx={{fontSize: '.9rem', fontWeight: 500}}>{props.data.bath}</Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </ThemeProvider>
        </Stack>
    )
}