import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import {toggleBorder} from '../../../shared/styles/debugging-border';
import BedIcon from '@mui/icons-material/Bed';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import homeImageOne from '../../../assets/Homeowners Assets/Mask Group 4@2x.png'
import homeImageTwo from '../../../assets/All Listings Assets/francesca-tosolini-DmOhItSo49k-unsplash@2x.png'

function FourthPage() {
    const isBorder = toggleBorder;
    let Cards = [
        {price : '$450', address: '230 Queen Street', bed: 2, bath: 1, image: homeImageOne},
        {price : '$300', address: '120 Shortlant Street', bed: 5, bath: 2, image: homeImageTwo},
        {price : '$500', address: '4 Alma Street', bed: 3, bath: 1, image: homeImageOne},
        {price : '$230', address: '4 Ewan Street', bed: 2, bath: 1, image: homeImageTwo}
    ];
    return (
        <React.Fragment>
            <Stack direction="column" justifyContent="center" alignItems="flex-end" sx={{ border: isBorder ? '1px solid red' : 'none', height: '78vh', backgroundColor: '#36400F'}} spacing={'2rem'}>
                <Stack sx={{border: isBorder ? 1 : 'none', height: '70%', width: '92%'}} spacing={'2rem'}>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography variant="body1" sx={{fontWeight: 500, fontSize: '40px', color: 'white'}}>Recently Listed Properties</Typography>
                        <Stack direction="row" alignItems="center" spacing={'2rem'} sx={{marginRight: '10%'}}>
                            <Typography variant="body1" sx={{fontWeight: 500, fontSize: '20px', color: 'white'}}>Find More Listings</Typography>
                            <ArrowForwardIcon sx={{color: 'white'}}/>
                        </Stack>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between" sx={{ border: isBorder ? '1px solid red' : 'none', maxWidth: '100%',  height: '80%'}} spacing={'2rem'}>
                    {
                        Cards.map((card, i) => (
                            <Stack key={i} direction="column" justifyContent="space-between" alignItems="center" sx={{
                                border: isBorder ? 1 : 'none',
                                width: '30%',
                                borderTopRightRadius: '40px',
                                borderBottomLeftRadius: '40px',                                
                                padding: '.7rem',
                                backgroundColor: 'white',
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
                                    src={card.image}
                                />
                                <Stack sx={{border: isBorder ? '1px solid blue' : 'none', width: '100%', marginTop: '1rem'}} spacing={'1rem'}>
                                    <Stack sx={{border: isBorder ? '1px solid red' : 'none'}} direction="row" justifyContent="flex-end" alignItems="flex-end">
                                        <Typography variant="body1" sx={{fontWeight: 500, fontSize: '1.3rem', lineHeight: 1}}>{card.price}</Typography>
                                        <Typography variant="body1" sx={{fontSize: '.6rem',}}>Per Week</Typography>
                                    </Stack>
                                    <Stack sx={{border: isBorder ? '1px solid red' : 'none'}} direction="row" justifyContent="space-between" alignItems="center">
                                        <Typography variant="body1" sx={{fontSize: '.9rem',}}>{card.address}</Typography>
                                        <Stack direction="row" alignItems="center">
                                            <BedIcon/>
                                            <Typography variant="body1" sx={{fontSize: '.9rem', marginRight: '1rem', fontWeight: 500}}>{card.bed}</Typography>
                                            <BathtubOutlinedIcon/>
                                            <Typography variant="body1" sx={{fontSize: '.9rem', fontWeight: 500}}>{card.bath}</Typography>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Stack>
                        )
                    )}
                    </Stack>
                </Stack>
            </Stack>        
        </React.Fragment>
        );
}

export default FourthPage;