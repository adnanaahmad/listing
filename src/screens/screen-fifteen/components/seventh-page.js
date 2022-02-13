import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import {ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import {toggleBorder} from '../../../shared/styles/debugging-border';
import LeftLeaf from '../../../assets/Property Management Assets/brownLeaf.png';
import {BrownTheme} from '../../../shared/styles/themes/brown-theme';

function SeventhPage() {
  const isBorder = toggleBorder;
  const content = [
      {
        title: 'Can I rent a friendly flats property from overseas?',
        para: 'Yes you can! You can apply for it online, and our property managers will get back to you with flat viewing options and any information you require.'
      }, 
      {
        title: 'Can I use my contract as a proof of address?',
        para: 'A friendly flats contract can be used as official proof of address, should you need. A copy of your contract will be emailed to you in due course, for you to sign and return. If contract is lost, you are welcome to request a copy from us at any time.'
      }, 
      {
        title: 'How long are the contracts for?',
        para: 'Our minimum stay is usually 12 weeks, however you are welcome to have longer contracts. If you intend to stay less than 12 weeks please contact us to discuss your needs, we will work with you to find a solution.'
      },
      {
        title: 'Can I smoke inside the building?',
        para: 'No you cannot, smoking inside any Friendly Flat house, or building is not allowed.'
      }
  ]
  return (
    <React.Fragment>
        <Stack spacing={'2rem'} direction="row" justifyContent="center" alignItems="center" sx={{ border: isBorder ? '1px solid red' : 'none', height: 'fitContent', width: '100%', paddingY: 10}}>
            <ThemeProvider theme={BrownTheme}>
                <Stack direction="column" justifyContent="center" sx= {{border: isBorder ? '2px solid orange' : 'none', width: '50%', maxWidth: '1024px', backgroundColor: 'white', padding: '2rem 4rem', boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'}}>
                    <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{height: 'fitContent', border: isBorder ? '2px solid red' : 'none', marginBottom: '3rem', width: '100%'}}>
                        <Box component="img"
                            sx={{
                                height: '60px',
                                width: '60px',
                                objectFit: 'cover',
                            }}
                            alt="The house from the offer."
                            src={LeftLeaf}
                        />
                        <Typography color="primary" variant='h3' sx={{fontWeight: 500}}>FAQs</Typography>
                        <Box component="img"
                            sx={{
                                height: '60px',
                                width: '60px',
                                objectFit: 'cover',
                                transform: 'scaleX(-1)'
                            }}
                            alt="The house from the offer."
                            src={LeftLeaf}
                        />
                    </Stack>
                    {
                        content.map((item, i) => (
                            <Stack key={i} spacing={'1rem'} sx={{width: '100%', border: isBorder ? '1px solid green' : 'none', marginBottom: '3rem'}}>
                                <Stack sx={{width: '100%', background: BrownTheme.palette.primary.main, paddingY: 1, borderRadius: '10px'}}>
                                    <Typography sx={{color: 'white', marginLeft: 3, fontWeight: 500}}>{item.title}</Typography>
                                </Stack>                       
                                <Typography color="primary">{item.para}</Typography>
                            </Stack>
                        ))
                    }
                </Stack>
            </ThemeProvider>
        </Stack>
    </React.Fragment>
  );
}

export default SeventhPage;