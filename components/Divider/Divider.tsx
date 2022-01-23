// imports from npm modules
import React, { useContext } from 'react';
import { Box as MuiBox } from '@mui/material';

// imports from other modules out of component scope
import { ThemeContext } from '..';

// set up component props type
type DividerPropsType = {
  spacing?: string;
};

// set up component
export const Divider = (props: DividerPropsType) => {
  // set up context
  const themeContext = useContext(ThemeContext);

  // set up spacing
  const defaultSpacing = '2rem';
  const spacing = props.spacing ?? defaultSpacing;

  // render component
  return (
    <MuiBox
      className="Divider"
      sx={{
        marginBottom: `calc(${spacing} / 2)`,
        marginTop: `calc(${spacing} / 2)`,
      }}
    />
  );
};
