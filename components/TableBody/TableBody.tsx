// imports from npm modules
import React, { useContext } from 'react';
import { TableBody as MuiTableBody } from '@mui/material';

// imports from modules out of component scope
import { ThemeContext } from '..';

// set up component props type
type TableBodyPropsType = {
  children?: React.ReactNode;
};

// set up component
export const TableBody = (props: TableBodyPropsType) => {
  const themeContext = useContext(ThemeContext);

  // render component
  return (
    <MuiTableBody className="TableBody" sx={{ fontSize: '1rem' }}>
      {props.children}
    </MuiTableBody>
  );
};
