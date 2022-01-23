// imports from npm modules
import React, { useContext } from 'react';
import { Box as MuiBox } from '@mui/material';

// imports from other modules out of component scope
import { ThemeContext } from '..';

// set up component props type
type SideBarIconPropsType = {
  children: React.ReactNode;
  justify?: string;
};

// set up component
export const SideBarIcon = (props: SideBarIconPropsType) => {
  // set up context
  const themeContext = useContext(ThemeContext);

  // set up class name
  let className = 'SideBarIcon';
  const isJustifyRight = props.justify === 'right';
  if (isJustifyRight) {
    className += ' is-justify-right';
  }

  // render component
  return (
    <MuiBox
      className={className}
      sx={{
        '&': {
          fill: themeContext.primaryColor01,
          width: '1rem',
          height: '1rem',
        },

        '&.is-justify-right': {
          marginLeft: 'auto',
        },
      }}
    >
      {props.children}
    </MuiBox>
  );
};
