import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import {toggleBorder} from '../styles/debugging-border';
import BedIcon from '@mui/icons-material/Bed';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import {WhiteTheme} from '../styles/themes/white-theme';
import {DarkGreenTheme} from '../styles/themes/dark-green-theme';
import {BrownTheme} from '../styles/themes/brown-theme';
import {ThemeProvider} from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import mapsImage from '../../assets/All Listings Assets/maps.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import axios from "axios";
import { baseURL, apiRoute } from '../utils/constants';
import { useFormik } from 'formik';

const styleObject = {
    "& ::-webkit-input-placeholder": {
        color: WhiteTheme.palette.primary.contrastText + '!important',
        opacity: '.8 !important',
        fontSize: '.8rem'
    },
    ".MuiOutlinedInput-input": {
        padding: '0 1rem'
    },
    ".MuiOutlinedInput-notchedOutline": {
        border: '0 !important'
    },
    ".MuiOutlinedInput-root": {
        padding: 0
    }
}

export default function ListingDetailPage(props) {
    const isBorder = toggleBorder;
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
            enquiry_type: "enquiry"
        },
        onSubmit: (form) => {
            axios.post(baseURL + apiRoute.enquiry, {enquiry : form}).then(res => console.log(res.data)).catch(err => console.log(err));
        },
    });
    const listingDetail = props.data.listingDetail;

    return (
        <React.Fragment>
            <Stack spacing={'5rem'} direction="column" justifyContent="center" alignItems="center" sx={{border: isBorder ? 'px solid red' : 'none', height: 'fitContent', paddingY: '4rem'}}>
                <Stack direction="column" justifyContent="space-between" alignItems="center" 
                spacing={'4rem'}
                sx={{
                    border: isBorder ? 1 : 'none',
                    width: '80%',
                    maxWidth: '1440px',
                    height: '100%'
                }}>
                    <ThemeProvider theme={props.data.theme}>        
                        {/* first component */}
                        <Stack direction={matches ? "row" : "column"} justifyContent="space-between" alignItems={'flex-start'} sx={{border: isBorder ? '1px solid blue' : 'none', width: '100%'}} spacing={'1rem'}>
                            <Stack sx={{border: isBorder ? '1px solid red' : 'none'}} spacing={'4rem'}>
                                <Stack spacing={'.5rem'}>
                                    <Typography color="primary" variant="h3" sx={{fontWeight: 500}}>Lovely 3 Bedroom Apartment</Typography>
                                    <Typography color="primary" variant="h3" sx={{fontWeight: 500, fontSize: '2.5rem'}}>{listingDetail.address}</Typography>
                                </Stack>
                                <Stack direction="row" alignItems="flex-end">
                                    <BedIcon sx={{fontSize: '3rem'}}/>
                                    <Typography color="primary" variant="body1" sx={{fontSize: '1.8rem', marginRight: '1rem'}}>{listingDetail.bed} Beds</Typography>
                                    <BathtubOutlinedIcon  sx={{fontSize: '3rem'}}/>
                                    <Typography color="primary" variant="body1" sx={{fontSize: '1.8rem'}}>{listingDetail.bath} Bath</Typography>
                                </Stack>
                            </Stack>
                            <Stack alignItems="flex-end" spacing={'.5rem'} sx={{border: isBorder ? '1px solid red' : 'none'}}>
                                <Typography color="primary" variant="h3" sx={{fontWeight: 500}}>${listingDetail.rent}</Typography>
                                <Typography color="primary" variant="h3" sx={{fontWeight: 500, fontSize: '2rem'}}>per week</Typography>
                            </Stack>
                        </Stack>
                        {/* second component */}
                        <Stack spacing={'1rem'} direction={matches ? "row" : "column"} alignItems="flex-start" sx={{borderTop: 2, borderBottom: 2, width: '100%', paddingY: '.7rem'}}>
                            <Stack direction="row" spacing={'1rem'} alignItems="center" sx={{border: isBorder ? 1 : 'none',}}>
                                <Typography color="primary" variant="body1" sx={{fontSize: '1.2rem'}}>Available</Typography>
                                <Typography variant="body1" sx={{fontSize: '1.8rem'}}>|</Typography>
                                <Typography color="primary" variant="body1" sx={{fontSize: '1.2rem'}}>Mon, 08 Mar 2021</Typography>
                            </Stack>
                            <Stack direction="row" spacing={'1rem'} alignItems="center" sx={{border: isBorder ? 1 : 'none', marginLeft: matches ? 'auto' : 0}}>
                                <Typography color="primary" variant="body1" sx={{fontSize: '1.2rem'}}>Property ID#</Typography>
                                <Typography variant="body1" sx={{fontSize: '1.8rem'}}>|</Typography>
                                <Typography color="primary" variant="body1" sx={{fontSize: '1.2rem'}}>{listingDetail.id}</Typography>
                            </Stack>
                        </Stack>
                    </ThemeProvider>
                    {/* third component */}
                    <Stack spacing={matches ? 0 : '1rem'} direction={matches ? "row" : "column"} justifyContent="flex-end" alignItems={matches ? 'flex-start' : 'center'} sx={{border: isBorder ? 1 : 'none', width: '100%', height: 'fitContent'}}>
                        <ThemeProvider theme={props.data.theme}>
                            <Stack direction="column" justifyContent="center" alignItems="flex-start" sx={{ border: isBorder ? '1px solid green' : 'none', width: '100%', maxWidth: '400px', marginX: 'auto'}} spacing={'2rem'}>                                                        
                                <Typography color="primary" variant="body1" display="block">
                                    {listingDetail.description}
                                </Typography> 
                            </Stack>
                        </ThemeProvider>
                        <Stack sx={{border: isBorder ? '2px solid yellow' : 'none', height: 'fitContent', width: matches ? '35%' : '100%', maxWidth: '350px'}}>
                            <Stack component={'form'} spacing={'1rem'} alignItems="center" sx={{border: isBorder ? '2px solid orange' : 'none', borderRadius: '10px', height: 'fitContent', backgroundColor: WhiteTheme.palette.primary.contrastText, padding: matchesMobile ? '1rem' : '1rem 2rem'}} >
                                <Typography variant="h5" display="block" sx={{color: 'white'}}>Enquire</Typography>
                                    <ThemeProvider theme={DarkGreenTheme}>
                                        <Stack sx={{border: isBorder ? 1 : 'none', backgroundColor: 'white', width: '100%', borderRadius: '10px', paddingY: '.5rem'}} spacing={'.5rem'}>
                                            <TextField variant="outlined" placeholder={'Your Name'} sx={styleObject} 
                                            id="name"
                                            name="name"
                                            value={formik.values.name}
                                            onChange={formik.handleChange}
                                            error={formik.touched.name && Boolean(formik.errors.name)}
                                            type="text"
                                            />
                                            <Stack style={{border: `.5px solid ${WhiteTheme.palette.primary.contrastText}`, width: '100%'}}></Stack>
                                            <TextField variant="outlined" placeholder={'Email'} sx={styleObject} 
                                            id="email"
                                            name="email"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            error={formik.touched.email && Boolean(formik.errors.email)}
                                            type="email"
                                            />
                                            <Stack style={{border: `.5px solid ${WhiteTheme.palette.primary.contrastText}`, width: '100%'}}></Stack>
                                            <TextField variant="outlined" placeholder={'Phone Number'} sx={styleObject} 
                                            id="phone"
                                            name="phone"
                                            value={formik.values.phone}
                                            onChange={formik.handleChange}
                                            error={formik.touched.phone && Boolean(formik.errors.phone)}
                                            type="number"
                                            />
                                        </Stack>
                                        {
                                            props.data.showButtonGroup &&
                                            <Stack spacing={'1rem'} direction="row" justifyContent="space-between" sx={{width: '100%'}}>
                                                <ThemeProvider theme={BrownTheme}>
                                                    <Button variant='contained' sx={{whiteSpace: 'nowrap', fontSize: '.8rem', textTransform: 'none', borderRadius: 2}}>Book a viewing</Button>
                                                </ThemeProvider>
                                                <ThemeProvider theme={WhiteTheme}>
                                                    <Button variant='contained' sx={{whiteSpace: 'nowrap', fontSize: '.8rem', textTransform: 'none', borderRadius: 2}} color="primary">Ask a question</Button>
                                                </ThemeProvider>
                                            </Stack>
                                        }
                                        <Stack sx={{border: isBorder ? 1 : 'none', backgroundColor: 'white', width: '100%', borderRadius: '10px', padding: '.5rem 0', height: '100%', minHeight: '80px'}}>
                                            <TextField
                                            multiline
                                            maxRows={3}
                                            placeholder='Ask a question or request a viewing...'
                                            sx={styleObject}
                                            id="message"
                                            name="message"
                                            value={formik.values.message}
                                            onChange={formik.handleChange}
                                            error={formik.touched.message && Boolean(formik.errors.message)}
                                            type="text"
                                            />
                                        </Stack>
                                    </ThemeProvider>
                                    <ThemeProvider theme={WhiteTheme}>
                                        <Button variant="contained" onClick={formik.handleSubmit} sx={{px: 2, py: .5, borderRadius: 2, fontWeight: 400, textTransform: 'none', whiteSpace: 'nowrap', fontSize: '1rem'}}>
                                            Submit
                                        </Button>
                                </ThemeProvider>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
                <Box component="img"
                sx={{
                  height: '450px',
                  width: '100%',
                  objectFit: 'cover',
                }}
                alt="The house from the offer."
                src={mapsImage}
              />
            </Stack>
        </React.Fragment>
    )
}