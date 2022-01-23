// imports from npm modules
import React, { useContext } from 'react';
import { Box as MuiBox } from '@mui/material';

// set up component props type
type DashboardPageSectionPropsType = {
  children: React.ReactNode;
};

// imports from modules out of component scope
import { ThemeContext } from '../ThemeContext';

// set up component
export const DashboardPageSection = (props: DashboardPageSectionPropsType) => {
  // set up context
  const themeContext = useContext(ThemeContext);

  // render component
  return (
    <MuiBox
      className="DashboardPageSection"
      sx={{
        '&': {
          marginTop: '1rem',
          padding: '3rem',
          backgroundColor: themeContext.getColor({
            name: 'background',
            variant: '01',
          }),
          borderRadius: themeContext.getBorderRadius(),
        },
      }}
    >
      {props.children}
    </MuiBox>
  );
};
