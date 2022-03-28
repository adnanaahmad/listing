import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import {toggleBorder} from './../../../shared/styles/debugging-border'
import { Link } from 'react-router-dom';

const Item = styled(Button)(({ theme }) => ({
  color: 'primary',
  fontSize: '1rem', 
  fontWeight: 600,
  textTransform: 'none', 
  width: '30%'
}));

export default function MenuBar(props) {
  const isBorder = toggleBorder;
  return (
    <React.Fragment>
        <Stack direction="row" spacing={'.5rem'} justifyContent="space-between" sx={{ border: isBorder ? 1 : 'none', width: '100%' }}>
        {
          props.data.map((item, i) => (
            <Item component={Link} to={item.route} key={i}>{item.name}</Item>
          ))
        }
        </Stack>
    </React.Fragment>
  );
}