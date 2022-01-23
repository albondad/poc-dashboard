// imports from npm modules
import React, { useContext } from 'react';
import { Box as MuiBox } from '@mui/material';

// imports from other modules out of component scope
import { ThemeContext } from '..';

// set up component props type
type ButtonText = {
  children?: React.ReactNode;
};

// set up component
export const ButtonText = (props: ButtonText) => {
  // set up context
  const themeContext = useContext(ThemeContext);

  // render component
  return (
    <MuiBox
      className="ButtonText"
      sx={{
        fill: themeContext.primaryColor01,
        fontSize: '0.875rem',
        lineHeight: '1.5em',
      }}
    >
      {props.children}
    </MuiBox>
  );
};
