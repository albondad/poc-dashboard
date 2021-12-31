import React from 'react';
import { ListItemIcon } from '@mui/material';

export const SideBarListItemIcon = (props: any) => {
  return (
    <ListItemIcon sx={{ minWidth: 0, mr: 1, color: 'info.contrastText' }}>
      {props.children}
    </ListItemIcon>
  );
};
