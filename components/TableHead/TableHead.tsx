// imports from npm modules
import React, { useContext } from 'react';
import { TableHead as MuiTableHead } from '@mui/material';

// imports from modules out of component scope
import { ThemeContext } from '..';

// set up component props type
type TableHeadPropsType = {
  children?: React.ReactNode;
};

// set up component
export const TableHead = (props: TableHeadPropsType) => {
  const themeContext = useContext(ThemeContext);

  // render component
  return (
    <MuiTableHead
      className="TableHead"
      sx={{
        color: themeContext.primaryColor01,
        fontWeight: 700,
        overflow: 'hidden',
        fontSize: '0.875rem',
      }}
    >
      {props.children}
    </MuiTableHead>
  );
};
