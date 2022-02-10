import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import {ThemeProvider, createTheme } from '@mui/material/styles';
import {toggleBorder} from '../../../shared/styles/debugging-border';
import {BrownTheme} from '../../../shared/styles/themes/brown-theme';

const isBorder = toggleBorder;

function ContentCard  (props) {
    return(
        <Stack direction="column" justifyContent="center" alignItems="flex-start" sx={{ border: isBorder ? '1px solid green' : 'none', width: '100%', maxWidth: '700px'}} spacing={'1rem'}>
            <ThemeProvider theme={BrownTheme}>
                <Typography color="primary" variant="body1" sx={{fontWeight: 400, fontSize: '1.8rem'}}>{props.data.title}</Typography>
            </ThemeProvider>
            {
                (props.data.paragraph).map((item, i) => (
                    <Typography key={i} variant="body1" display="block">
                        {item}
                    </Typography> 
                ))
            }
        </Stack>
    )
}


function SecondPage() {   
    const Cards = [
        {
            title: 'Collection Of Information',
            paragraph: [
                'Friendly Flats collects statistical information, this includes',
                'Information that you provide us in the course of using the Friendly Flats service, such as your name, residential address, email address, and telephone number.',
                'We are required to collect personal information in order to:', 
                'act', 
                'To collect payment for your use of the services provided To troubleshoot problems with the website and the services provided', 
                'To detect andyillegal use of the website and the services provided To send you marketing notices service updates and promotional offers For administration, planning and applicationmanagement',
                'To develop, monitor, and improve services and',
                'Any other purpose disclosed to you at the time of information collection',
                'information that we indirectly obtain from you, such as information about the hardware and software you use when accessing the Friendly Flats service your IP address, the pages you access on this website, and websites that you visit pri to accessing Friendly Hats and',
                'We may also use "cookies" to track your use of this website. A "cookle" is a file that our webserver may send to your computer when you access this website. This file is then stored on your computer. Friendly Flats may use cookies and certain other passive information collection technologies to make your use of this website easier by allowing Friendly Flats to provide better service, customise websites based on consumer preferences, compile statistics, analyse trends, and otherwise administer and improve this website. Certain features of www dyflats.com website may not work without use of passive information collection technologies.',
                'Access To Information'
            ]
        },
        {
            title: 'Access To Information',
            paragraph: [
                'You are entitled to request all personal information held by Friendly Flats at any given time. To do so you need to contact Friendly Flats at info@friendlyflats.co.nz. Where you are entitled to that information Friendly Flats will ensure it is provided in the manner you requested it. If it is not practical or possible to do so, Friendly Flats will provide the information in another suitable form such as via email or post.',
                'If Friendly Flats decides that it cannot provide you with certain information, it will outline the reasons for its decision in writing and the mechanisms available to complain about the refusal.',
            ]        
        },
        {
            title: 'Storage Of Information',
            paragraph: [
                'We can store your information physically or electronically ourselves, or with others contracted to hold the information for us in New Zealand and overseas. We will act reasonably to ensure that your information is protected from unauthorised use or disclosure.',
                'Applications submitted to friendly flats, be that house-owner listings or tenant rental applications, will be stored in our system for the duration of our services with you, and longer if required.',
            ]
        },
        {
            title: 'Contact Information And Policy Updates',
            paragraph: [
                'If you have questions or complains about our privacy policy, please email us at info@friendlyflats.co.nz',
                'Private Policy is available on the Consol website. Friendly Flats retains the right to change this privacy policy from time to time. All updated versions of this policy will be posted and kept up to date on the website.',
            ]        
        },
    ]

    return (
    <React.Fragment>
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={'5rem'} sx={{ border: isBorder ? '1px solid red' : 'none', height: 'fitContent', paddingY: '6rem'}}
        >
            <Stack direction="column" justifyContent="space-between" spacing={'4rem'} sx={{ border: isBorder ? '1px solid orange' : 'none', maxWidth: '1440px'}}>
                
                {
                    Cards.map((card, i) => (
                        <ContentCard key={i} data = {card}/>
                    ))
                }
            </Stack>
        </Stack>
    </React.Fragment>
    );
}

export default SecondPage;