import React from 'react';
import { List } from '@mui/material';

export const SideBarList = (props: any) => {
  return <List sx={{ pb: 0, pt: 0 }}>{props.children}</List>;
};
