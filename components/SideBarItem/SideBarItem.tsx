// imports from npm modules
import React, { useContext } from 'react';
import { ListItem as MuiListItem } from '@mui/material';

// imports from other modules out of component scope
import { ThemeContext } from '..';

// set up component props type
type SideBarItemPropsType = {
  children: React.ReactNode;
};

// set up component
export const SideBarItem = (props: SideBarItemPropsType) => {
  // set up context
  const themeContext = useContext(ThemeContext);

  // render component
  return (
    <MuiListItem
      button
      sx={{
        color: themeContext.primaryColor01,
        display: 'flex',
        fontSize: '1rem',
        gap: '1rem',
        padding: '1rem 2rem',
      }}
    >
      {props.children}
    </MuiListItem>
  );
};
