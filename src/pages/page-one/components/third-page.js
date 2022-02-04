import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import {toggleBorder} from './../../../shared/styles/debugging-border';
import Icon from '@mui/material/Icon';

function ThirdPage() {
    const isBorder = toggleBorder;
    let Cards = [
        {title : 'MEET THE TEAM', icon: 'group', text: 'Come and meet our team! Get to know your property manager before getting down to business'},
        {title : 'SHOWCASE', icon: 'home', text: 'We offer appraisals at no cost to you Showcase your home to your dedicated property manager and they will get you set up with the perfect investment.'},
        {title : 'LIST PROPERTY', icon: 'summarize', text: 'List your property on our site and we vow to find you the perfect tenants to suit your home. Leave it to us!'}
    ];
    return (
    <React.Fragment>
        <Stack direction="column" justifyContent="center" alignItems="center"sx={{ border: isBorder ? '1px solid red' : 'none', height: '90vh'}} spacing={'2rem'}>
            <Typography variant="body1" sx={{fontWeight: 500, fontSize: '40px'}}>Our Listing Process</Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ border: isBorder ? '1px solid green' : 'none', maxWidth: '68%',  height: '45%'}} spacing={'2rem'}>
            {
                Cards.map((card, i) => (
                    <Stack direction="column" justifyContent="center" alignItems="center" sx={{
                        border: isBorder ? 1 : 'none',
                        maxWidth: '30%',
                        borderTopRightRadius: '40px',
                        borderBottomLeftRadius: '40px',
                        boxShadow: 'rgb(203 146 108 / 35%) 0px 4px 12px',
                        paddingX: '.5rem'
                    }}>
                        <Icon sx={{color: '#DB8D59', fontSize: '8rem'}}>{card.icon}</Icon>
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

export default ThirdPage;