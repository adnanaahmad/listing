import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

export default function FooterPrimary() {
  return (
    <React.Fragment>
        <Container disableGutters maxWidth="xlg" sx={{ border: 1, minHeight: '70px', padding: '50px'}}>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ border: 1, height: '100%'}}
            >
                <Stack>
                    <Typography variant="h4" sx={{fontWeight: 600}}>Want To Find</Typography>
                    <Typography variant="h4" sx={{fontWeight: 600}}>A Friendly Flat?</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" sx={{ border: 1, borderRadius: 2, minWidth: '50%', py: 1, px: 4}}>
                    <SearchIcon fontSize='large'/>
                    <Typography variant="h5">Your Email</Typography>
                </Stack>
                <Button variant="contained" sx={{px: 5, py: 1, borderRadius: 2}}>
                    <Typography variant="h6" sx={{fontWeight: 600, textTransform: 'none', whiteSpace: 'nowrap'}}>Book A Meeting</Typography>
                </Button>
            </Stack>
        </Container>
        <Container disableGutters maxWidth="xlg" sx={{ border: 1, minHeight: '100px', padding: '50px'}}>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ border: 1, height: '100%'}}
            >
                <HomeOutlinedIcon sx={{ fontSize: 200 }}/>
                <Stack spacing={2}>
                    <Typography variant="h5" component="div" sx={{fontWeight: 700}}>
                        Services
                    </Typography>
                    <Typography variant="h5" component="div" sx={{fontWeight: 700}}>
                        Landlords
                    </Typography>
                    <Typography variant="h5" component="div" sx={{fontWeight: 700}}>
                        Tenants
                    </Typography>
                    <Typography variant="h5" component="div" sx={{fontWeight: 700}}>
                        Management
                    </Typography>
                </Stack>
                <Stack spacing={2}>
                    <Typography variant="h5" component="div" sx={{fontWeight: 700}}>
                        RESOURCES
                    </Typography>
                    <Typography variant="h5" component="div" sx={{fontWeight: 700}}>
                        FAQs
                    </Typography>
                    <Typography variant="h5" component="div" sx={{fontWeight: 700}}>
                        Management
                    </Typography>
                    <Typography variant="h5" component="div" sx={{fontWeight: 700}}>
                        Privacy Policy
                    </Typography>
                </Stack>
                <Stack spacing={2}>
                    <Typography variant="h5" component="div" sx={{fontWeight: 700}}>
                        CONTACT
                    </Typography>
                    <Typography variant="h5" component="div" sx={{fontWeight: 700}}>
                        hk@friendlyflats.co.nz
                    </Typography>
                    <Typography variant="h5" component="div" sx={{fontWeight: 700}}>
                        0800 123 4567
                    </Typography>
                    <Typography variant="h5" component="div" sx={{fontWeight: 700}}>
                        Auckland City
                    </Typography>
                </Stack>
            </Stack>
        </Container>
    </React.Fragment>
  );
}