// npm modules
import React from 'react';
import { Box, Typography } from '@mui/material';

// component
export const TopBarBrand = (props: any) => {
  // render
  return (
    <Box>
      <Typography
        sx={{
          fontSize: '1.5rem',
          fontWeight: '700',
          color: 'info.contrastText',
        }}
      >
        BODHI
      </Typography>
    </Box>
  );
};
