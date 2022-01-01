// npm modules
import React from 'react';
import { Box } from '@mui/material';

// component
export const DashboardPageHeader = (props: any) => {
  return <Box sx={{ display: 'flex' }}>{props.children}</Box>;
};
