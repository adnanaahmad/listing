import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import {ThemeProvider} from '@mui/material/styles';
import Box from '@mui/material/Box';
import {toggleBorder} from '../styles/debugging-border';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { makeStyles, createStyles } from '@mui/styles';

const isBorder = toggleBorder;
const useStyles = makeStyles((theme) =>
createStyles({
    parent: {
        [theme.breakpoints.down('md')]: {
            height: 'fit-content',
            padding: '2rem 1rem'
        },
    },
    stackOne: {
        [theme.breakpoints.down('md')]: {
            width: '100%',
            maxWidth: '500px'
        },
    },
    stackTwo: {
        [theme.breakpoints.down('md')]: {
            width: '100%',
            maxWidth: '500px'
        },
    },
    img: {
        [theme.breakpoints.down('sm')]: {
            width: '70%',
        },
    }
}),
);

function ContentCard(props) {
    return(
        <Stack direction="column" justifyContent="center" alignItems="flex-start" sx={{ border: isBorder ? '1px solid green' : 'none', width: '100%', maxWidth: '600px'}} spacing={'2rem'}>
            <ThemeProvider theme={props.theme}>
                <Typography color="primary" variant="h4" sx={{fontWeight: 500}}>{props.data.title}</Typography>
                {
                    (props.data.paragraph).map((item, i) => (
                        <Typography color="primary" key={i} variant="body1" display="block">
                            {item}
                        </Typography> 
                    ))
                }
            </ThemeProvider>
        </Stack>
    )
}


function MaintenancePage(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
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
        <Stack className={classes.parent} direction="column" spacing={'5rem'} sx={{ border: isBorder ? '1px solid red' : 'none', height: '140vh', paddingTop: '6rem'}}>
            <Stack direction={ matches ? "row" : "column"} alignItems="center" justifyContent="space-between" spacing={'4rem'} sx={{border: isBorder ? '1px solid yellow' : 'none', maxWidth: '1440px', paddingRight: matches ? '30px' : 0}}>
                <Stack className={classes.stackOne} sx={{border: isBorder ? '1px solid blue' : 'none', width: '50%', margin: 'auto'}}>
                    <Stack sx={{border: isBorder ? '1px solid pink' : 'none', margin: 'auto'}}>
                        {
                            props.data.screen === 'four' &&
                            <React.Fragment>
                                <Typography sx={{width: 'fitContent', fontSize:'1.2rem'}}>List of property maintenance services </Typography>
                                <Typography sx={{width: 'fitContent', fontSize:'1.2rem', marginBottom: '2rem'}}>Friendly Flats provides: </Typography>
                            </React.Fragment>
                        }
                        {
                            ServicesList.map((item, i) => (
                                <Stack direction="row" alignItems={'center'} key={i}>
                                    <ThemeProvider theme={props.data.listTheme}>
                                        {
                                            props.data.screen !== 'four' &&
                                            <FiberManualRecordIcon color="primary" sx={{fontSize:'1rem', marginRight: '1rem'}}/>
                                        }                                        
                                        <Typography color="primary" sx={{width: 'fitContent', fontSize:'1.2rem'}}>{item}</Typography>   
                                    </ThemeProvider>
                                </Stack>
                            ))
                        }
                    </Stack>
                </Stack>
                <Stack className={classes.stackTwo} sx={{border: isBorder ? '2px solid purple' : 'none'}} spacing={'2rem'}>
                    {
                        FirstComponentCard.map((card, i) => (
                            <ContentCard key={i} data = {card} theme={props.data.theme} />
                        ))
                    }
                </Stack>
            </Stack>
            <Stack direction={matches ? "row" : "column"} alignItems="center" justifyContent="space-between" spacing={'4rem'} sx={{ border: isBorder ? '1px solid orange' : 'none', height: matches ? '60%' : 'fit-content', maxWidth: '1440px', paddingRight: matches ? '30px' : 0}}>
                <Box component="img"
                    sx={{
                        height: '100%',
                        borderTopRightRadius: matches ? "40px" : 0,
                        width: '50%',
                        objectFit: 'cover'
                    }}
                    alt="The house from the offer."
                    src={props.data.image}
                    className={classes.img}
                    />
                <ContentCard data = {SecondComponentCard} theme={props.data.theme} />
            </Stack>
        </Stack>
    </React.Fragment>
    );
}

export default MaintenancePage;