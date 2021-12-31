import React from 'react';
import { ListItem, ListItemButton } from '@mui/material';

export const SideBarListItem = (props: any) => {
  return (
    <ListItem sx={{ p: 0 }}>
      <ListItemButton sx={{ pl: 4 }}>{props.children}</ListItemButton>
    </ListItem>
  );
};
