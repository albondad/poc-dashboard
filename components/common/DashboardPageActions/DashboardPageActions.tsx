// npm modules
import React from 'react';
import { Stack } from '@mui/material';

// component
export const DashboardPageActions = (props: any) => {
  return (
    <Stack direction="row" spacing={2} sx={{ ml: 'auto' }}>
      {props.children}
    </Stack>
  );
};
