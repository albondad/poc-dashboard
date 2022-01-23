// imports from npm modules
import React, { useContext } from 'react';
import { Drawer as MuiDrawer, Box as MuiBox } from '@mui/material';

// imports from other modules out of component scope
import { ThemeContext } from '..';

// set up component props type
type SideBarContainerPropsType = {
  children?: React.ReactNode;
};

// set up component
export const SideBarContainer = (props: SideBarContainerPropsType) => {
  // set up context
  const themeContext = useContext(ThemeContext);

  // render component
  return (
    <MuiDrawer
      sx={{
        zIndex: themeContext.sideBarZIndex,
        '& > .MuiPaper-root': {
          backgroundColor: themeContext.primaryColor05,
        },
      }}
      variant="permanent"
    >
      <MuiBox
        sx={{
          width: themeContext.sideBarWidth,
          marginTop: themeContext.topBarHeight,
        }}
      >
        {props.children}
      </MuiBox>
    </MuiDrawer>
  );
};
