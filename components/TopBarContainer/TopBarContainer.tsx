// imports from npm modules
import React, { useContext } from 'react';
import { AppBar as MuiAppBar, Toolbar as MuiToolbar } from '@mui/material';

// imports from other modules out of component scope
import { ThemeContext } from '..';

// set up component props type
type TopBarContainerPropsType = {
  children?: React.ReactNode;
};

// set up component
export const TopBarContainer = (props: TopBarContainerPropsType) => {
  // set up context
  const themeContext = useContext(ThemeContext);

  // render component
  return (
    <MuiAppBar
      className="TopBarContainer"
      sx={{
        boxShadow: themeContext.boxShadow,
        height: themeContext.topBarHeight,
        zIndex: themeContext.topBarZIndex,
      }}
    >
      <MuiToolbar
        sx={{
          backgroundColor: themeContext.backgroundColor01,
        }}
      >
        {props.children}
      </MuiToolbar>
    </MuiAppBar>
  );
};
