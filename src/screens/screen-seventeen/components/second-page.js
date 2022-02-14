import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import {ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import {toggleBorder} from '../../../shared/styles/debugging-border';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {BrownTheme} from '../../../shared/styles/themes/brown-theme';
import {DarkGreenTheme} from '../../../shared/styles/themes/dark-green-theme';
import buildingImage from '../../../assets/Property Management Assets/liam-shaw-B89PCUuEGEU-unsplash@2x.png';

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
    const themeMap = {
        brown: BrownTheme.palette.primary.main,
        white: 'white'
    }
    return(
        <Stack direction="column" justifyContent="center" alignItems="flex-start" sx={{ border: isBorder ? '1px solid green' : 'none', width: '100%', maxWidth: '500px'}} spacing={'2rem'}>
            <ThemeProvider theme={TypographyTheme}>
                <Typography variant="h4" sx={{fontWeight: 500, color: themeMap[props.theme], maxWidth: '400px'}}>{props.data.title}</Typography>
                {
                    (props.data.paragraph).map((item, i) => (
                        <Typography key={i} variant="subtitle1" display="block" sx={{color: themeMap[props.theme], fontWeight: 500}}>
                            {item}
                        </Typography> 
                    ))
                }
            </ThemeProvider>                  
        </Stack>
    )
}


function SecondPage() {
    
    const SecondComponentCard = 
        {
            title: 'Regular Property Inspections',
            paragraph: [
                'Even with the best tenants, we maintain our regular property inspections. While, with our thorough tenant selection process, the chances of finding "fault" may be small, the inspection visits put our property owners at ease and give us the chance to engage with both parties.',
                'The tenants feel that they have a friendly, independent person that they can trust to be listened to and they have the opportunity to raise any potential concerns.'
            ]
        }
    const FirstComponentCard = [
        {
            title: 'Offering Stable Tenants And Fixed Income',
            paragraph: ['At Friendly Flats, not only do we look after your property, we also offer stable tenants and a fixed income for the duration of your time with us. Let us know your priorities, and we can offer a fixed income for as long as 5 years.']
        },
        {
            title: 'Adding Value To The Property',
            paragraph: [
                `We've seen examples of owners maximising return by making small changes and on the other side of the ledger, we've seen landlords make changes that in the end result in further costs.`,
                `As your property management company, we see it as our duty to communicate opportunities where we see them. Sometimes these opportunities result in immediate gains, for example where we get the opportunity to sell a tenanted property results in a higher sales price or where a change in layout can result in attracting more rent or better tenants.`
            ]
        },
    ]
    const ServicesList = ['Property Advertisement', 'Finding Your Ideal Tenants', 'Maintenance And Cleaning', 'Overseeing Tenancy Agreements', 'Property Investment Advice'];
      
    return (
    <React.Fragment>
        <Stack sx={{ border: isBorder ? '2px solid red' : 'none', height: '200vh', position: 'relative', marginY: '4rem'}}>
            <Box component="img"
            sx={{
                height: '100%',
                borderTopRightRadius: "40px",
                width: '50%',
                objectFit: 'cover',
                // height: 70%;
                // object-fit: contain;
                // margin-left: auto;
            }}
            alt="The house from the offer."
            src={buildingImage}
            />
            <Stack>
                <Stack direction="column" justifyContent="space-between" sx={{ border: isBorder ? '2px solid yellow' : 'none', height: '100%', position: 'absolute', top: 0, width: '100%'}}>
                    <Stack spacing={'2rem'} direction="row" justifyContent="center" alignItems="center" sx={{ paddingX: '4rem', backgroundColor: DarkGreenTheme.palette.primary.main, height: '300px', boxShadow: 'rgb(0 0 0 / 19%) 0px 10px 20px, rgb(0 0 0 / 23%) 0px 6px 6px'}}>
                        <Typography variant='h3' sx={{width: 'fitContent', maxWidth: '500px', color: 'white'}}>
                            Looking After Your Property As Ours
                        </Typography>
                        <Typography variant='body1' sx={{width: 'fitContent', maxWidth: '600px', color: 'white', fontWeight: 500}}>
                            When we manage a New Zealand property on behalf of our landlords, the primary objective is to ensure that the property will grow in value. Friendly Flat property managers make sure to select tenants that will treat your property with respect and care.
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" justifyContent="center" sx={{border: isBorder ? '2px solid orange' : 'none',}}>
                        <div style={{width: '20%'}}></div>
                        <Stack sx={{border: isBorder ? '1px solid purple' : 'none'}} spacing={'2rem'}>
                            {
                                FirstComponentCard.map((card, i) => (
                                    <ContentCard key={i} theme={'brown'} data = {card}/>
                                ))
                            }
                        </Stack>
                    </Stack>
                    <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={'4rem'} sx={{ border: isBorder ? '1px solid blue' : 'none', maxWidth: '1440px', paddingRight: '30px'}}>
                        <div style={{background: DarkGreenTheme.palette.primary.main, padding: '5rem 2rem', borderTopRightRadius: '30px', borderBottomRightRadius: '30px', width: '54%', display: 'flex', justifyContent: 'center', boxShadow: 'rgb(0 0 0 / 19%) 0px 10px 20px, rgb(0 0 0 / 23%) 0px 6px 6px'}}>
                            <ContentCard theme={'white'} data = {SecondComponentCard}/>
                        </div>
                        <Stack spacing={'1.5rem'}>
                            <ThemeProvider theme={DarkGreenTheme}>
                            {
                                ServicesList.map((item, i) => (
                                    <Stack spacing={'2rem'} direction="row" alignItems="center" key={i}>
                                        <FiberManualRecordIcon color="primary"/>
                                        <Typography variant='h5' color="primary">{item}</Typography>
                                    </Stack>
                                ))
                            }
                            </ThemeProvider>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>

    </React.Fragment>
    );
}

export default SecondPage;