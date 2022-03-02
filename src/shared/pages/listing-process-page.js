import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import {toggleBorder} from '../styles/debugging-border';
import {BrownTheme} from '../styles/themes/brown-theme';
import {DarkGreenTheme} from '../styles/themes/dark-green-theme';
import { makeStyles, createStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const isBorder = toggleBorder;

const useStyles = makeStyles((theme) =>
  createStyles({
    leaf: {
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
    cardsParent: {
        [theme.breakpoints.down('md')]: {
            alignItems: 'center',
        },
    },
    page: {
        [theme.breakpoints.down('md')]: {
            height: 'fit-content',
            padding: '2rem 0'
        },
    },
    heading: {
        [theme.breakpoints.down('md')]: {
            textAlign: 'center'
        },
    }
  }),
);

function LeafImageBox(props) {
    const classes = useStyles();
    return(
        <Stack justifyContent="center" x={{border: isBorder ? '1px solid green' : 'none',}}>
            <Box component="img"
                sx={{
                    height: '8rem',
                    width: '8rem',
                    objectFit: 'cover',
                    transform: props.rightImage ? 'scaleX(-1)' : 'scaleX(1)',
                    opacity: props.opacity
                }}
                alt="The house from the offer."
                src={props.leafImage}
                className={classes.leaf}
            />
        </Stack>
    )
}

function ListingProcessPage(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const themeObject = {
        brown: BrownTheme.palette.primary.main,
        black: 'black',
        green: DarkGreenTheme.palette.primary.main
    }
    return (
    <React.Fragment>
        <Stack className={classes.page} direction="column" justifyContent="center" alignItems="center"sx={{ border: isBorder ? '1px solid red' : 'none', height: '78vh'}} spacing={'2rem'}>
            <Typography variant="body1" sx={{fontWeight: 500, fontSize: '40px', color: themeObject[props.data.titleTheme]}} className={classes.heading}>
                {props.data.title}
            </Typography>
            <Stack className={classes.cardsParent} direction={matches ? "row" : "column"} justifyContent="space-between" sx={{ border: isBorder ? '1px solid green' : 'none',  height: 'fitContent', maxWidth: '1224px', width: '100%'}} spacing={'2rem'}>
                <LeafImageBox opacity={props.data.leafOpacity} leafImage = {props.data.leafImage} rightImage={false}/>
                {
                    props.data.cards.map((card, i) => (
                        <Stack key={i} direction="column" justifyContent="center" alignItems="center" spacing={'1rem'} sx={{
                            border: isBorder ? 1 : 'none',
                            maxWidth: matches ? '30%' : '60%',
                            borderTopRightRadius: '40px',
                            borderBottomLeftRadius: '40px',
                            boxShadow: props.data.boxShadow,
                            paddingX: '.5rem',
                            height: 'fitContent',
                            paddingY: '2rem'
                        }}>
                            <Box component="img"
                                sx={{
                                    // height: '8rem',
                                    width: '9rem',
                                    objectFit: 'cover',
                                }}
                                alt="The house from the offer."
                                src={card.icon}
                            />
                            <Typography variant="body1" sx={{fontWeight: 500, fontSize: '1.8rem', textAlign: 'center', color: themeObject[props.data.cardTheme]}}>
                                {card.title}
                            </Typography>
                            <Typography variant="body1" display="block" sx={{maxWidth: '550px', fontWeight: 400, fontSize: '1rem', textAlign: 'center', color: themeObject[props.data.cardTheme]}}>
                                {card.text}
                            </Typography>
                        </Stack>
                    )
                )}
                <LeafImageBox opacity={props.data.leafOpacity} leafImage = {props.data.leafImage} rightImage={true}/>
            </Stack>
        </Stack>  
    </React.Fragment>
    );
}

export default ListingProcessPage;