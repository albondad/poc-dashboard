// imports from npm modules
import React from 'react';
import { Grid as MuiGrid } from '@mui/material';

// set up component props type
type GridContainerPropsType = {
  children: React.ReactNode;
  isVisible?: boolean;
};

// set up component
export const GridContainer = (props: GridContainerPropsType) => {
  // set up visibility
  const isVisible = props.isVisible ?? true;

  // render component
  let returnValue = null;

  if (isVisible) {
    returnValue = (
      <MuiGrid container={true} className="GridContainer" spacing="2rem">
        {props.children}
      </MuiGrid>
    );
  }

  if (!isVisible) {
    returnValue = null;
  }

  return returnValue;
};
