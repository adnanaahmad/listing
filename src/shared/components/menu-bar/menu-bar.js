import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'rgb(155 85 30)',
  boxShadow: 'none',
  cursor: 'pointer',
  fontWeight: 600,
  fontSize: 'medium'
}));

export default function MenuBar() {
  return (
    <React.Fragment>
        <Stack direction="row" spacing={2} sx={{ border: 1 }}>
            <Item>House Owners</Item>
            <Item>Flatmates</Item>
            <Item>Maintainance</Item>
            <Item>Property Management</Item>
            <Item>FAQs</Item>
        </Stack>
    </React.Fragment>
  );
}