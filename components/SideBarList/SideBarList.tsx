// imports from npm modules
import React from 'react';
import { List as MuiList } from '@mui/material';

// imports from modules out of component scope

// set up component props type
type SideBarListPropsType = {
  children: React.ReactNode;
};

// set up component
export const SideBarList = (props: SideBarListPropsType) => {
  // render component
  return <MuiList>{props.children}</MuiList>;
};
