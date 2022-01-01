// npm modules
import React from 'react';
import { Box } from '@mui/material';

// component
export const DashboardPageContainer = (props: any) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: 'grey.200',
        pt: 12,
        pl: 34,
        pr: 4,
      }}
    >
      {props.children}
    </Box>
  );
};
