import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import {toggleBorder} from '../styles/debugging-border';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import homeImageOne from '../../assets/Homeowners Assets/Mask Group 4@2x.png'
import homeImageTwo from '../../assets/All Listings Assets/francesca-tosolini-DmOhItSo49k-unsplash@2x.png'
import ListCard from '../components/list-card/list-card';
import { makeStyles, createStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    parentDiv: {
        [theme.breakpoints.down('md')]: {
            width: '100%'
        },
    },
    moreDiv: {
        [theme.breakpoints.down('md')]: {
            marginRight: '0'
        },
    },
  }),
);

function RecentlyListedPage(props) {
    const classes = useStyles();
    const isBorder = toggleBorder;
    let Cards = [
        {price : '$450', address: '230 Queen Street', bed: 2, bath: 1, image: homeImageOne},
        {price : '$300', address: '120 Shortlant Street', bed: 5, bath: 2, image: homeImageTwo},
        {price : '$500', address: '4 Alma Street', bed: 3, bath: 1, image: homeImageOne},
        {price : '$230', address: '4 Ewan Street', bed: 2, bath: 1, image: homeImageTwo}
    ];
    return (
        <React.Fragment>
            <Stack direction="column" justifyContent="center" alignItems="flex-end" sx={{ border: isBorder ? '1px solid red' : 'none', height: '78vh', backgroundColor: '#36400F'}} spacing={'2rem'}>
                <Stack className={classes.parentDiv} direction="column" justifyContent="space-between" sx={{border: isBorder ? 1 : 'none', height: '70%', width: '92%'}} spacing={'2rem'}>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography variant="body1" sx={{fontWeight: 500, fontSize: '40px', color: 'white'}}>Recently Listed Properties</Typography>
                        <Stack className={classes.moreDiv} direction="row" alignItems="center" spacing={'2rem'} sx={{marginRight: '10%'}}>
                            <Typography variant="body1" sx={{fontWeight: 500, fontSize: '20px', color: 'white'}}>Find More Listings</Typography>
                            <ArrowForwardIcon sx={{color: 'white'}}/>
                        </Stack>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between" sx={{ border: isBorder ? '1px solid red' : 'none', maxWidth: '100%',  height: '80%'}} spacing={'2rem'}>
                    {
                        Cards.map((card, i) => (
                            <ListCard boxShadow={false} key={i} theme={props.data.theme} data = {card} />
                        )
                    )}
                    </Stack>
                </Stack>
            </Stack>        
        </React.Fragment>
        );
}

export default RecentlyListedPage;