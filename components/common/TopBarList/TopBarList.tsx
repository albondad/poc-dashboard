import React from 'react';
import { Stack } from '@mui/material';

// component
export const TopBarList = (props: any) => {
  // render
  return (
    <Stack direction="row" spacing={2} sx={{ ml: 'auto' }}>
      {props.children}
    </Stack>
  );
};
