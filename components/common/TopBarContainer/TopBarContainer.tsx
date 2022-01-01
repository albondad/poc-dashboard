import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

// component
export const TopBarContainer = (props: any) => {
  // render
  return (
    <AppBar
      sx={{
        backgroundColor: 'info.main',
        boxShadow: 0,
        borderBottom: 1,
        borderColor: 'grey.400',
      }}
    >
      <Toolbar
        sx={(theme) => ({
          '&': {
            px: 4,
          },
          [theme.breakpoints.up('sm')]: { px: 4 },
        })}
      >
        {props.children}
      </Toolbar>
    </AppBar>
  );
};
