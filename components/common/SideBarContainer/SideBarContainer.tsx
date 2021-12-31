import React from 'react';
import { Box, Drawer, Toolbar } from '@mui/material';

export const SideBarContainer = (props: any) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        '& .MuiDrawer-paper': {
          border: 1,
          borderColor: 'grey.300',
          zIndex: 1000,
        },
      }}
    >
      <Box
        sx={{
          width: props.width,
          backgroundColor: 'info.main',
          height: '100%',
          border: 0,
        }}
      >
        <Toolbar sx={{ backgroundColor: 'transparent' }} />
        {props.children}
      </Box>
    </Drawer>
  );
};

SideBarContainer.displayName = 'SideBarContainer';
