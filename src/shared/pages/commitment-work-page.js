import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import {ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import {toggleBorder} from '../../shared/styles/debugging-border';

  const TypographyTheme = createTheme();

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
function CommitmentWorkPage(props) {
    const isBorder = toggleBorder;
    const Cards = [
        {
            title: "Our Commitment To You",
            image: props.data.imageOne,
            paraOne: "We're committed to making the process as simple as possible by providing you with full management of your listed property.",
            paraTwo: "When you get in touch with our headquarters in Auckland, we'll assign you an experienced property manager, to help you prepare your home, answer questions around landlord duties, and assist you in the beginning of your real estate journey."
        },
        {
            title: "How Our Properties Work",
            image: props.data.imageTwo,
            paraOne: "Once you are in contact with us, one of our friendly property managers will talk you through the process of listing your property. We offor you an appraisal at no cost as we know it's not easy to get your mind around the housing industry in Auckland.",
            paraTwo: "With a free appraisal completed by your dedicated property manager, we will discuss what you want as return on your investment property. It is your home and your choice of what you want us to do."
        }
    ]
    return (
    <React.Fragment>
        <Stack direction="column" alignItems="center" justifyContent="center" spacing={'2rem'} sx={{ border: isBorder ? '2px solid red' : 'none', height: '100vh'}}>
        {
            Cards.map((card, i) => (
                <Stack key={i} direction="row" justifyContent="space-between" spacing={'2rem'} sx={{ border: isBorder ? '2px solid orange' : 'none', width: '80%', height: 'fitContent'}}>
                    <Stack sx={{width: '50%', border: isBorder ? '1px solid green' : 'none',}}>
                        <Box component="img"
                            sx={{
                                height: '400px',
                                borderTopRightRadius: "40px",
                                borderBottomLeftRadius: "40px",
                                width: '100%',
                                objectFit: 'cover'
                            }}
                            alt="The house from the offer."
                            src={card.image}
                        />
                    </Stack>
                    <Stack direction="column" alignItems="center" sx={{ border: isBorder ? '1px solid green' : 'none', width: '50%'}} spacing={'3rem'}>
                        <Typography variant="h4" sx={{fontWeight: 500, color: props.data.theme ? props.data.theme.palette.primary.main : 'black' }}>{card.title}</Typography>
                        <ThemeProvider theme={TypographyTheme}>
                            <Typography variant="body1" display="block" sx={{color: props.data.theme ? props.data.theme.palette.primary.main : 'black' }}>
                                {card.paraOne}
                            </Typography>
                            <Typography variant="body1" display="block" sx={{color: props.data.theme ? props.data.theme.palette.primary.main : 'black' }}>
                                {card.paraTwo}
                            </Typography>
                        </ThemeProvider>
                    </Stack>
                </Stack>                
            ))
        }

        </Stack>
    </React.Fragment>
    );
}

export default CommitmentWorkPage;