import * as React from 'react';
import MenuBar from '../../../shared/components/menu-bar/menu-bar';
import { Stack } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import {ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import {BrownTheme} from '../../../shared/styles/themes/brown-theme';
import {toggleBorder} from '../../../shared/styles/debugging-border'

function FirstPage(props) {
  const isBorder = toggleBorder;
  return (
    <React.Fragment>
      <Stack direction="column" justifyContent="space-between" sx={{ border: isBorder ? '1px solid red' : 'none', height: 'fitContent'}}>
        <ThemeProvider theme={BrownTheme}>
          <Stack justifyContent="space-between" sx={{ border: isBorder ? '1px solid green' : 'none', width: '60%', paddingTop: '20px'}}>
            <Stack direction="row" alignItems="center" sx={{ border: isBorder ? '1px solid purple' : 'none'}}>
              <HomeOutlinedIcon sx={{ fontSize: '4rem', color: 'rgb(155 85 30)', marginRight: '5%'}}/>
              <MenuBar data = {['House Owners', 'Flatmates', 'Maintainance', 'Property Management'] }/>
            </Stack>
          </Stack>
        </ThemeProvider>
        <Box component="img"
          sx={{
            height: '95%',
            border: isBorder ? '2px solid red' : 'none',
            width: '30%',
            objectFit: 'cover',
            borderBottomRightRadius: '50px',
            borderBottomLeftRadius: '50px',
          }}
          alt="The house from the offer."
          src={""}
        />
      </Stack>
    </React.Fragment>
  );
}

export default FirstPage;