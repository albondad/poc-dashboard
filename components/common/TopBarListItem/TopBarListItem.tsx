// npm modules
import React from 'react';
import { Button, Typography } from '@mui/material';

// component
export const TopBarListItem = (props: any) => {
  // render
  return (
    <Button
      color="info"
      sx={{ '&:hover': { backgroundColor: 'info.dark' } }}
      onClick={props.onClick}
    >
      <Typography sx={{ color: 'info.contrastText', textTransform: 'none' }}>
        {props.children}
      </Typography>
    </Button>
  );
};
