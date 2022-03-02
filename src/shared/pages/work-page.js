import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import {ThemeProvider, styled } from '@mui/material/styles';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import {toggleBorder} from '../styles/debugging-border';
import BranchImage from '../../assets/Index Assets/Mask Group 3@2x.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { makeStyles, createStyles } from '@mui/styles';

const SecondPageButton = styled(Button)(({ theme }) => ({
    color: 'primary',
    fontSize: '16px',
    fontWeight: 600,
    maxWidth: '150px',
    borderRadius: '40px'
  }));

const useStyles = makeStyles((theme) =>
  createStyles({
    parentDiv: {
        [theme.breakpoints.down('md')]: {
            height: 'fit-content',
            padding: '1rem'
        },
    },
    pageImg: {
        [theme.breakpoints.down('md')]: {
            borderRadius: '1rem',
            width: '70%',
            maxWidth: '400px'
        },  
    }
  }),
);

function WorkPage(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const isBorder = toggleBorder;
    return (
    <React.Fragment>
        <Stack direction={matches ? "row" : "column"} alignItems="center" justifyContent="space-between" spacing={'2rem'} sx={{ border: isBorder ? '1px solid red' : 'none', height: '100vh'}} className={classes.parentDiv}>
            <Box component="img"
                sx={{
                    height: '90%',
                    borderTopRightRadius: "40px",
                    borderBottomRightRadius: "40px",
                    width: '38%',
                    objectFit: 'cover'
                }}
                alt="The house from the offer."
                src={BranchImage}
                className={classes.pageImg}
            />
            <Stack sx={{ border: isBorder ? '1px solid green' : 'none'}} spacing={'2rem'}>
                <ThemeProvider theme={props.data.contentTheme}>
                    <Typography color="primary" variant="h4" sx={{fontWeight: 500}}>We Work With You</Typography>
                    <Typography color="primary" variant="h6" display="block" sx={{maxWidth: '550px', fontWeight: 400}}>
                        Every person has different wants, needs and budgets when it comes to housing in New Zealand.
                    </Typography>
                    <Typography color="primary" variant="h6" display="block" sx={{maxWidth: '550px', fontWeight: 400}}>
                        Whether you a looking to put your property up for rent, or finding a good flat that suits your needs, we know how important it is to get it right the first time. finding a good flat that suits your needs, we know how important it is to get it right the first time.
                    </Typography>
                </ThemeProvider>
                <ThemeProvider theme={props.data.buttonTheme}>
                    <SecondPageButton variant="contained">Learn More</SecondPageButton>
                </ThemeProvider>
            </Stack>
            {
                matches &&
                <Box sx={{ width: '5%', border: isBorder ? 1 : 'none', height: '100%'}}></Box>
            }
        </Stack>
    </React.Fragment>
    );
}

export default WorkPage;