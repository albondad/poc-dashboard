import React from 'react';
import { ListItemText } from '@mui/material';

export const SideBarListItemText = (props: any) => {
  return (
    <ListItemText sx={{ color: 'info.contrastText' }}>
      {props.children}
    </ListItemText>
  );
};
