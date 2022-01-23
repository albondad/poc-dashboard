// imports from npm modules
import React, { useContext } from 'react';
import { Box as MuiBox } from '@mui/material';

// imports from other modules out of component scope
import { ThemeContext } from '..';

// set up component props type
type ButtonIcon = {
  children?: React.ReactNode;
};

// set up component
export const ButtonIcon = (props: ButtonIcon) => {
  // set up context
  const themeContext = useContext(ThemeContext);

  // render component
  return (
    <MuiBox
      className="ButtonIcon"
      sx={{
        fill: 'inherit',
        height: '1.5rem',
        width: '1.5rem',
      }}
    >
      {props.children}
    </MuiBox>
  );
};
