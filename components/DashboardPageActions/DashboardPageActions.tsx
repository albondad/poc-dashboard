// imports from npm modules
import React from 'react';
import { Box as MuiBox } from '@mui/material';

// set up component props type
type DashboardPageActionsPropsType = {
  children?: React.ReactNode;
  hasBoxShadow?: boolean;
};

// set up component
export const DashboardPageActions = (props: DashboardPageActionsPropsType) => {
  // render component
  return (
    <MuiBox
      className="DashboardPageActions"
      sx={{
        display: 'inline-flex',
        gap: '0.75rem',
      }}
    >
      {props.children}
    </MuiBox>
  );
};
