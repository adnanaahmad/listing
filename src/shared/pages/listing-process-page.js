import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import {toggleBorder} from '../styles/debugging-border';
import iconOne from '../../assets/Index Assets/Group 3@2x.png';
import iconTwo from '../../assets/Index Assets/Group 5@2x.png';
import iconThree from '../../assets/Index Assets/Group 4@2x.png'

function ListingProcessPage() {
    const isBorder = toggleBorder;
    let Cards = [
        {title : 'MEET THE TEAM', icon: iconOne, text: 'Come and meet our team! Get to know your property manager before getting down to business'},
        {title : 'SHOWCASE', icon: iconTwo, text: 'We offer appraisals at no cost to you Showcase your home to your dedicated property manager and they will get you set up with the perfect investment.'},
        {title : 'LIST PROPERTY', icon: iconThree, text: 'List your property on our site and we vow to find you the perfect tenants to suit your home. Leave it to us!'}
    ];
    return (
    <React.Fragment>
        <Stack direction="column" justifyContent="center" alignItems="center"sx={{ border: isBorder ? '1px solid red' : 'none', height: '78vh'}} spacing={'2rem'}>
            <Typography variant="body1" sx={{fontWeight: 500, fontSize: '40px'}}>Our Listing Process</Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ border: isBorder ? '1px solid green' : 'none', maxWidth: '70%',  height: '48%'}} spacing={'2rem'}>
            {
                Cards.map((card, i) => (
                    <Stack key={i} direction="column" justifyContent="center" alignItems="center" spacing={'1rem'} sx={{
                        border: isBorder ? 1 : 'none',
                        maxWidth: '30%',
                        borderTopRightRadius: '40px',
                        borderBottomLeftRadius: '40px',
                        boxShadow: 'rgb(203 146 108 / 35%) 0px 4px 12px',
                        paddingX: '.5rem'
                    }}>
                        <Box component="img"
                            sx={{
                                // height: '8rem',
                                width: '9rem',
                                objectFit: 'cover',
                            }}
                            alt="The house from the offer."
                            src={card.icon}
                        />
                        <Typography variant="body1" sx={{fontWeight: 500, fontSize: '1.8rem', textAlign: 'center'}}>{card.title}</Typography>
                        <Typography variant="body1" display="block" sx={{maxWidth: '550px', fontWeight: 400, fontSize: '1rem', textAlign: 'center'}}>
                            {card.text}
                        </Typography>
                    </Stack>
                )
            )}
            </Stack>
        </Stack>        
    </React.Fragment>
    );
}

export default ListingProcessPage;