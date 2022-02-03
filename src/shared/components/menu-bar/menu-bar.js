import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Button)(({ theme }) => ({
  color: 'primary',
  fontSize: '1rem', 
  fontWeight: 600,
  textTransform: 'none', 
  width: '30%'
}));

export default function MenuBar() {
  return (
    <React.Fragment>
        <Stack direction="row" spacing={'.5rem'} justifyContent="space-between" sx={{ border: 1, width: '100%' }}>
            <Item>House Owners</Item>
            <Item>Flatmates</Item>
            <Item>Maintainance</Item>
            <Item>Property Management</Item>
            <Item>FAQs</Item>
        </Stack>
    </React.Fragment>
  );
}