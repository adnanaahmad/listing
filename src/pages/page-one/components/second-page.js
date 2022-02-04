import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import {ThemeProvider, styled } from '@mui/material/styles';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import {GreenTheme} from './../../../shared/styles/themes/green-theme'
import {toggleBorder} from './../../../shared/styles/debugging-border'

const SecondPageButton = styled(Button)(({ theme }) => ({
    color: 'primary',
    fontSize: '16px',
    fontWeight: 600,
    maxWidth: '150px',
    borderRadius: '40px'
  }));

function SecondPage() {
    const isBorder = toggleBorder;
    return (
    <React.Fragment>
        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={'2rem'} sx={{ border: isBorder ? '1px solid red' : 'none', height: '100vh'}}>
        <Box component="img"
            sx={{
                height: '96%',
                borderTopRightRadius: "40px",
                borderBottomRightRadius: "40px",
                width: '38%',
                objectFit: 'cover'
            }}
            alt="The house from the offer."
            src="https://images.unsplash.com/photo-1492541853549-a99003b3284b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            />
            <Stack sx={{ border: isBorder ? '1px solid green' : 'none'}} spacing={'2rem'}>
                <Typography variant="h4" sx={{fontWeight: 500}}>We Work With You</Typography>
                <Typography variant="h6" display="block" sx={{maxWidth: '550px', fontWeight: 400}}>
                    Every person has different wants, needs and budgets when it comes to housing in New Zealand.
                </Typography>
                <Typography variant="h6" display="block" sx={{maxWidth: '550px', fontWeight: 400}}>
                    Whether you a looking to put your property up for rent, or finding a good flat that suits your needs, we know how important it is to get it right the first time. finding a good flat that suits your needs, we know how important it is to get it right the first time.
                </Typography>
                <ThemeProvider theme={GreenTheme}>
                    <SecondPageButton variant="contained">Learn More</SecondPageButton>
                </ThemeProvider>
            </Stack>
            <Box sx={{ width: '5%', border: isBorder ? 1 : 'none', height: '100%'}}></Box>
        </Stack>
    </React.Fragment>
    );
}

export default SecondPage;