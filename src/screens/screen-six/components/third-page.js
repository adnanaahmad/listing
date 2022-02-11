import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import {ThemeProvider } from '@mui/material/styles';
import {toggleBorder} from '../../../shared/styles/debugging-border';
import {BrownTheme} from '../../../shared/styles/themes/brown-theme';
import houseImage from '../../../assets/About Us Assets/house.png';

const isBorder = toggleBorder;

function ContentCard  (props) {
    return(
        <Stack direction="column" justifyContent="center" alignItems="flex-start" sx={{ border: isBorder ? '1px solid green' : 'none', width: '100%', maxWidth: '600px'}} spacing={'1rem'}>
            <ThemeProvider theme={BrownTheme}>
                <Typography color="primary" variant="body1" sx={{fontWeight: 500, fontSize: '3rem'}}>{props.data.title}</Typography>          
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


function ThirdPage() {   
    const Card = 
        {
            title: 'Our Vision',
            paragraph: [
                'Friendly Flats is a Property Management Agency based in New Zealand, created by a manager who wanted to make a good difference in a difficult economy. The team at friendly flats works for and with the people.',
                'Focused on creating an environment where clients feel comfortable coming to us with their queries, we take the time to understand your situation and work alongside your needs.', 
                'The team at Friendly Flats have done their years of travel, with many more to come, and after seeing so many cultures and living styles across the globe, New Zealand really has become home to us.', 
                'Our goal is to make it feel like a home to you too.', 
                'Auckland central has always seen a surge in the number of people trying to find a place. A lot of them are just looking for a room in a house. A place where they can feel safe, secure, and have a friendly atmosphere. We have also gained the owners trust over the years to maintain their homes at a high standard with a guaranteed return on their investment. We started with only a few houses to help the tenants to find a place, however, even in these Covid times the demands for the tenants are continuously high, and we are looking to get more houses to meet this demand helping more of our tenants. We have gained the owners trust over the years to maintain their homes at a high standard and guaranteed returns on their investment.', 
                'The idea of Friendly Flats has been created to help a lot of those people who have been struggling to find a suitable room in an apartment or a house with least possible paperwork and hassle-free living. With the same idea, we also extend our expertise and help to people who are already a family, group of friends or someone who needs an own space.', 
                'We consider ourselves as a helpful platform where owners get the desired return on their investments and the tenants secure a comfortable place.',
            ]
        }

    return (
    <React.Fragment>
        <Stack sx={{ border: isBorder ? '1px solid red' : 'none', height: 'fitContent', paddingY: '4rem'}}>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ border: isBorder ? '1px solid orange' : 'none', height: 'fitContent', paddingRight: '3rem'}}
            >
                <Box component="img"
                    sx={{
                        height: '100%',
                        maxWidth: '700px',
                        borderTopRightRadius: "40px",
                        width: '50%',
                        objectFit: 'cover',
                        marginRight: '3rem'
                    }}
                    alt="The house from the offer."
                    src={houseImage}
                />
                <Stack direction="column" sx={{ border: isBorder ? '1px solid orange' : 'none', maxWidth: '1024px', marginLeft: 'auto', marginRight: 'auto'}}>      
                    <ContentCard data = {Card}/>
                </Stack>
            </Stack>
        </Stack>
    </React.Fragment>
    );
}

export default ThirdPage;