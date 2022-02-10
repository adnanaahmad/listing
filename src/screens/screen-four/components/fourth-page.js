import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import {ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import {toggleBorder} from '../../../shared/styles/debugging-border'
import BulbImage from '../../../assets/All Listings Assets/bulb.png'

const TypographyTheme = createTheme();
const isBorder = toggleBorder;

TypographyTheme.typography.body1 = {
    fontSize: '1.2rem',
    maxWidth: '600px',
    '@media (min-width:600px)': {
        fontSize: '1rem',
        maxWidth: '600px',
    },
    [TypographyTheme.breakpoints.up('xl')]: {
        fontSize: '1.5rem',
        maxWidth: '600px',
    },
    [TypographyTheme.breakpoints.up('lg')]: {
        fontSize: '1.3rem',
        maxWidth: '600px',
    },
};

function ContentCard  (props) {
    return(
        <Stack direction="column" justifyContent="center" alignItems="flex-start" sx={{ border: isBorder ? '1px solid green' : 'none', width: '100%', maxWidth: '600px'}} spacing={'2rem'}>
            <ThemeProvider theme={TypographyTheme}>
                <Typography variant="h4" sx={{fontWeight: 500}}>{props.data.title}</Typography>
                {
                    (props.data.paragraph).map((item, i) => (
                        <Typography key={i} variant="body1" display="block">
                            {item}
                        </Typography> 
                    ))
                }
            </ThemeProvider>                  
        </Stack>
    )
}


function FourthPage() {
    
    const SecondComponentCard = 
        {
            title: 'Professional Maintenance',
            paragraph: [
                'Professional Service, Quality Output. We only work with registered service providers, not with cowboys. They are professional and always on-time. With their top-notch skills, you can expect quality output in a reasonable time frame. They also tidy up before they leave so tenants do not need to worry about the mess.',
                'Quick and efficient, Friendly Flats is always prompt to respond to requests. We act on the problem as early as possible.',
                'While you, as the tenants, hold the responsibility and thus bear the cost of any damage to your home of choice, we will quickly take remedial action, and have it fixed up and ready to inhabit in no time.',
                'You can count on us!'
            ]
        }
    const FirstComponentCard = [
        {
            title: 'Our Provided Services',
            paragraph: ['With the help of our professional cleaners, you can cross off this daunting task from your to-do list. We will make sure to vacuum/wash the floors, deep clean the bathroom, get rid of the dust in ceilings and clean the kitchen and bedrooms']
        },
        {
            title: 'Regular Cleaning',
            paragraph: ['With your busy schedule, sometimes you have no energy left to do household chores. If you are looking for assistance with your routine cleaning on a regular basis, then consider using our services. Our cleaners are trustworthy professionals who can service your place daily, weekly, or monthly']
        },
    ]
    const ServicesList = ['Residential cleaning', 'Carpet cleaning', 'Plumbing and gasfitting', 'Electrical', 'Handyman services'];

    return (
    <React.Fragment>
        <Stack direction="column" spacing={'5rem'} sx={{ border: isBorder ? '1px solid red' : 'none', height: '140vh', paddingTop: '6rem'}}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={'4rem'} sx={{border: isBorder ? '1px solid yellow' : 'none', maxWidth: '1440px', paddingRight: '30px'}}>
                <Stack sx={{border: isBorder ? '1px solid blue' : 'none', width: '50%', margin: 'auto'}}>
                    <Stack sx={{border: isBorder ? '1px solid pink' : 'none', margin: 'auto'}}>
                        <Typography sx={{width: 'fitContent', fontSize:'1.2rem'}}>List of property maintenance services </Typography>
                        <Typography sx={{width: 'fitContent', fontSize:'1.2rem', marginBottom: '2rem'}}>Friendly Flats provides: </Typography>
                        {
                            ServicesList.map((item, i) => (
                                <Typography sx={{width: 'fitContent', fontSize:'1.2rem'}} key={i}>{item}</Typography>
                            ))
                        }
                    </Stack>
                </Stack>
                <Stack sx={{border: isBorder ? '1px solid purple' : 'none'}} spacing={'2rem'}>
                    {
                        FirstComponentCard.map((card, i) => (
                            <ContentCard key={i} data = {card}/>
                        ))
                    }
                </Stack>
            </Stack>
            <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={'4rem'} sx={{ border: isBorder ? '1px solid orange' : 'none', height: '60%', maxWidth: '1440px', paddingRight: '30px'}}>
                <Box component="img"
                    sx={{
                        height: '100%',
                        borderTopRightRadius: "40px",
                        width: '50%',
                        objectFit: 'cover'
                    }}
                    alt="The house from the offer."
                    src={BulbImage}
                    />
                <ContentCard data = {SecondComponentCard}/>
            </Stack>
        </Stack>
    </React.Fragment>
    );
}

export default FourthPage;