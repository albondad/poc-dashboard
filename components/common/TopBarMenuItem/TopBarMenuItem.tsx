// node modules
import React from 'react';
import { MenuItem } from '@mui/material';

// component
export const TopBarMenuItem = (props: any) => {
  // render
  return <MenuItem onClick={props.onClick}>{props.children}</MenuItem>;
};
