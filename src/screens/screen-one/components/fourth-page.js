import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import {toggleBorder} from '../../../shared/styles/debugging-border';
import BedIcon from '@mui/icons-material/Bed';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function FourthPage() {
    const isBorder = toggleBorder;
    let Cards = [
        {price : '$450', address: '230 Queen Street', bed: 2, bath: 1, image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8&w=1000&q=80'},
        {price : '$300', address: '120 Shortlant Street', bed: 5, bath: 2, image: 'http://cdn.home-designing.com/wp-content/uploads/2020/11/black-and-grey-living-room-575x325.jpg'},
        {price : '$500', address: '4 Alma Street', bed: 3, bath: 1, image: 'https://media.istockphoto.com/photos/luxury-modern-bedroom-interior-at-night-picture-id1318363878?b=1&k=20&m=1318363878&s=170667a&w=0&h=N8ZrWT759EQeCpSmLsh2j08HBPEtMDBr-h1r6d4CDQk='},
        {price : '$230', address: '4 Ewan Street', bed: 2, bath: 1, image: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2016/6/16/0/FOD16_assemblageSTUDIO_Tresarca_1.jpg.rend.hgtvcom.1280.720.suffix/1466101947835.jpeg'},
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
                                        height: '100%',
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