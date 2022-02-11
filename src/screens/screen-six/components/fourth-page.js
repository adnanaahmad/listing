import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import {toggleBorder} from '../../../shared/styles/debugging-border';
import {WhiteTheme} from '../../../shared/styles/themes/white-theme';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


const isBorder = toggleBorder;

function ContentCard  (props) {
    return(
        <Stack direction="column" justifyContent="center"
            sx = {{ 
                border: isBorder ? '1px solid yellow' : 'none', 
                width: '100%', 
                maxWidth: '600px',
                height: '100%',
            }}
        >
            <Typography variant="body1" sx={{fontWeight: 500, fontSize: '2.5rem', color: 'white'}}>{props.data.title}</Typography> 
            <Typography sx={{color: 'white', marginBottom: '2rem'}}variant="body1" display="block">{props.data.subTitle}</Typography>        
            {
                (props.data.paragraph).map((item, i) => (
                    <Stack direction="row" alignItems="center" spacing={'1rem'}>
                        <FiberManualRecordIcon sx={{color: 'white', fontSize: '.3rem'}}/>
                        <Typography sx={{color: 'white'}} key={i} variant="body1" display="block">
                            {item}
                        </Typography> 
                    </Stack>
                ))
            }
        </Stack>
    )
}


function FourthPage() {   
    const Cards = [
        {
            title: 'Homeowners',
            subTitle: 'We take care of each property in a very detailed manner and here are a few examples of what makes us different.',
            paragraph: [
                'Guaranteed return on their investments',
                'Routine inspections at our cost', 
                'Weekly cleaning to their property at our cost',
                'Our commitment to take on the maintenance job',
            ]
        },
        {
            title: 'Tenants',
            subTitle: 'There are several reasons why we always high demand of tenants looking for a place.',
            paragraph: [
                'We do not charge any service fee/letting fee.',
                'Easiest, Simplest, Fastest way to move-in or move-out', 
                'Complimentary weekly cleaning to all our Friendly Flats', 
                'Maintenance is solved at the earliest time of convenience', 
                'Negotiable length of stay',
            ]
        }
    ]

    return (
    <React.Fragment>
        <Stack sx={{ border: isBorder ? '1px solid red' : 'none', height: 'fitContent', paddingY: '6rem'}}>
            <Stack
                direction="row"
                alignItems="stretch"
                justifyContent="space-between"
                sx={{ border: isBorder ? '1px solid orange' : 'none', height: 'fitContent'}}
                spacing={'4rem'}
            >
                <Stack 
                    direction="column" 
                    alignItems="center"
                    sx={{ 
                        border: isBorder ? '1px solid orange' : 'none', 
                        width: '45%',
                        backgroundColor: WhiteTheme.palette.primary.contrastText,
                        borderTopRightRadius: '40px',
                        borderBottomRightRadius: '40px',
                        padding: '2rem 4rem',
                    }}
                 >      
                    <ContentCard id = {1} data = {Cards[0]}/>
                </Stack>
                <Stack 
                    direction="column" 
                    alignItems="center"
                    sx={{ 
                        border: isBorder ? '1px solid orange' : 'none', 
                        width: '45%', 
                        backgroundColor: WhiteTheme.palette.primary.contrastText,
                        borderTopLeftRadius: '40px',
                        borderBottomLeftRadius:'40px',
                        padding: '2rem 4rem',
                    }}
                >      
                    <ContentCard id = {2} data = {Cards[1]}/>
                </Stack>
            </Stack>
        </Stack>
    </React.Fragment>
    );
}

export default FourthPage;