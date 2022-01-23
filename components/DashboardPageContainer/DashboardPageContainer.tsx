// imports from npm modules
import React, { useContext } from 'react';
import { Box as MuiBox } from '@mui/material';

// imports from other modules out of component scope
import { ThemeContext } from '..';

// set up component props type
type DashboardPageContainerPropsType = {
  children: React.ReactNode;
};

// set up component
export const DashboardPageContainer = (
  props: DashboardPageContainerPropsType
) => {
  // set up context
  const themeContext = useContext(ThemeContext);

  // render component
  return (
    <MuiBox
      className="DashboardPageContainer"
      sx={{
        backgroundColor: themeContext.getColor({
          name: 'background',
          variant: '03',
        }),
        height: '100vh',
        overflowY: 'auto',
        paddingBottom: '4rem',
        paddingLeft: `calc(${themeContext.sideBarWidth} + 4rem)`,
        paddingRight: '4rem',
        paddingTop: `calc(${themeContext.topBarHeight} + 4rem)`,
      }}
    >
      {props.children}
    </MuiBox>
  );
};
