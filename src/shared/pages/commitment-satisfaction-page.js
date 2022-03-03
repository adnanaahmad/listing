import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import {ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import {toggleBorder} from '../styles/debugging-border';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { makeStyles, createStyles } from '@mui/styles';

const isBorder = toggleBorder;
const useStyles = makeStyles((theme) =>
createStyles({
    parent: {
        [theme.breakpoints.down('md')]: {
            height: 'fit-content',
            padding: '2rem 1rem'
        },
    },
    stack: {
        [theme.breakpoints.down('md')]: {
            width: '100%',
            maxWidth: '500px'
        },
    },
    imgDiv: {
        [theme.breakpoints.down('md')]: {
            width: '70%'
        },
    },
    txtDiv: {
        [theme.breakpoints.down('md')]: {
            width: '100%'
        },
    },
    childImg: {
        [theme.breakpoints.down('md')]: {
            maxHeight: '400px'
        },
        [theme.breakpoints.down('sm')]: {
            maxHeight: '200px'
        },
    },
}),
);

function ImageCard(props) {
    const classes = useStyles();
    return (
        <Stack className={classes.imgDiv} sx={{width: '40%', border: isBorder ? '1px solid green' : 'none', position: 'relative'}}>
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
                className={classes.childImg}
            />
        </Stack>
    )
} 

function ContentCard(props) {
    const classes = useStyles();
    return (
        <Stack className={classes.txtDiv} direction="column" justifyContent="center" alignItems="flex-start" sx={{ border: isBorder ? '1px solid green' : 'none', width: '50%', maxWidth: '400px'}} spacing={'2rem'}>
            <ThemeProvider theme={props.theme}>
                <Typography color="primary" variant="h4" sx={{fontWeight: 500}}>{props.data.title}</Typography>
                <Typography color="primary" variant="body1" display="block">
                    {props.data.paraOne}
                </Typography> 
            </ThemeProvider>                  
        </Stack>
    )
}

function CommitmentSatisfactionPage(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
        <React.Fragment>
            <Stack className={classes.parent} direction="column" alignItems="center" justifyContent="space-around" spacing={'2rem'} sx={{ border: isBorder ? '2px solid red' : 'none', height: '100vh'}}>
                
                {
                    props.data.cards.map((card, i) => (
                        <React.Fragment key={i}>
                            {
                                i === 0 && 
                                <Stack className={classes.stack} direction={ matches ? "row" : "column"} alignItems="center" justifyContent="space-around" spacing={'2rem'} sx={{ border: isBorder ? '2px solid orange' : 'none', width: '70%', height: 'fitContent', maxWidth: '1440px'}}>
                                    <ImageCard data = {card}/>
                                    <ContentCard theme={props.data.theme} data = {card} />                              
                                </Stack> 
                            }
                            {
                                i === 1 &&
                                <Stack className={classes.stack} direction={ matches ? "row" : "column-reverse"} alignItems="center" justifyContent="space-around" spacing={'2rem'} sx={{ border: isBorder ? '2px solid orange' : 'none', width: '70%', height: 'fitContent', maxWidth: '1440px'}}>
                                    <ContentCard theme={props.data.theme} data = {card} />
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

export default CommitmentSatisfactionPage;