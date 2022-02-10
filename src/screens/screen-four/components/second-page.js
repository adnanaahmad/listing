import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import {ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import {toggleBorder} from '../../../shared/styles/debugging-border';
import flowerImage from '../../../assets/Maintenance Assets/DSC02898@2x.png';

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

function ImageCard(props) {
    return (
        <Stack sx={{width: '40%', border: isBorder ? '1px solid green' : 'none', position: 'relative'}}>
            <Box component="img"
                sx={{
                    height: '300px',
                    borderTopRightRadius: "40px",
                    borderBottomLeftRadius: "40px",
                    width: '100%',
                    objectFit: 'cover'
                }}
                alt="The house from the offer."
                src={props.data.image}
            />
        </Stack>
    )
} 

function ContentCard(props) {
    return (
        <Stack direction="column" justifyContent="center" alignItems="flex-start" sx={{ border: isBorder ? '1px solid green' : 'none', width: '50%', maxWidth: '400px'}} spacing={'2rem'}>
            <ThemeProvider theme={TypographyTheme}>
                <Typography variant="h4" sx={{fontWeight: 500}}>{props.data.title}</Typography>
                <Typography variant="body1" display="block">
                    {props.data.paraOne}
                </Typography> 
            </ThemeProvider>                  
        </Stack>
    )
}

function SecondPage() {
    const Cards = [
        {
            title: "Committed To All Of You",
            image: flowerImage,
            paraOne: "We're committed to making the moving and living process as hassle free as possible, and to do that we provide fantastic management and maintenance of your home or flat.",
        },
        {
            title: "Client Satisfaction",
            image: flowerImage,
            paraOne: "To put it briefly, our mission is fulfilled when we see our tenants and homeowners satisfied with smiles on their faces. We believe in providing excellent and quality maintenance services to all our customers. We aim at becoming a company with team work that will encourage all the people to grow and prosper.",
        },
    ];

  return (
        <React.Fragment>
            <Stack direction="column" alignItems="center" justifyContent="space-around" spacing={'2rem'} sx={{ border: isBorder ? '2px solid red' : 'none', height: '100vh'}}>
                
                {
                    Cards.map((card, i) => (
                        <React.Fragment key={i}>
                            {
                                i === 0 && 
                                <Stack direction="row" justifyContent="space-around" spacing={'2rem'} sx={{ border: isBorder ? '2px solid orange' : 'none', width: '70%', height: 'fitContent', maxWidth: '1440px'}}>
                                    <ImageCard data = {card}/>
                                    <ContentCard data = {card} />                              
                                </Stack> 
                            }
                            {
                                i === 1 &&
                                <Stack direction="row" justifyContent="space-around" spacing={'2rem'} sx={{ border: isBorder ? '2px solid orange' : 'none', width: '70%', height: 'fitContent', maxWidth: '1440px'}}>
                                    <ContentCard data = {card} />
                                    <ImageCard data = {card}/>
                                </Stack> 
                            }
                        </React.Fragment>
                    ))
                }     
            </Stack>
        </React.Fragment>
    );
}

export default SecondPage;