// imports from npm modules
import React, { useContext } from 'react';
import { Box as MuiBox } from '@mui/material';

// imports from other modules out of component scope
import { ThemeContext } from '..';

// set up component props type
type DashboardPageBoxPropsType = {
  children?: React.ReactNode;
  hasBoxShadow?: boolean;
};

// set up component
export const DashboardPageBox = (props: DashboardPageBoxPropsType) => {
  // set up context
  const themeContext = useContext(ThemeContext);

  // set up class names
  let className = 'DashboardPageBox';

  const hasBoxShadow = props.hasBoxShadow ?? true;
  if (hasBoxShadow) {
    className += ' has-box-shadow';
  }

  // render component
  return (
    <MuiBox
      className={className}
      sx={{
        '&': {
          backgroundColor: themeContext.backgroundColor01,
          borderColor: themeContext.grayColor03,
          borderWidth: '1px',
          borderStyle: 'none',
          borderRadius: themeContext.borderRadius,
          padding: '2rem',
        },

        '&.has-box-shadow': {
          // boxShadow: themeContext.boxShadow,
        },

        '& &': {
          // backgroundColor: themeContext.backgroundColor02,
          borderColor: themeContext.getColor({ name: 'gray', variant: 500 }),
          borderStyle: 'solid',
          borderWidth: '1px',
        },
      }}
    >
      {props.children}
    </MuiBox>
  );
};
