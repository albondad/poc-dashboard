// npm modules
import React from 'react';
import { Typography } from '@mui/material';

// component
export const DashboardPageHeading = (props: any) => {
  return (
    <Typography variant="h5" sx={{ fontWeight: '700' }}>
      {props.children}
    </Typography>
  );
};
