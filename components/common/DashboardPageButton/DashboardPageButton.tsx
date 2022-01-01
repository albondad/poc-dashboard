// npm modules
import React from 'react';
import { Button } from '@mui/material';

// component
export const DashboardPageButton = (props: any) => {
  return (
    <Button
      color="info"
      variant="contained"
      sx={{
        '&': {
          textTransform: 'none',
          fontWeight: 700,
          boxShadow: 0,
          border: 1,
          borderColor: 'grey.400',
        },
        '&:hover': {
          boxShadow: 0,
        },
      }}
    >
      {props.children}
    </Button>
  );
};
