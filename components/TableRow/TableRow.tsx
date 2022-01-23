// imports from npm modules
import React, { useContext } from 'react';
import { TableRow as MuiTableRow } from '@mui/material';

// imports from modules out of component scope
import { ThemeContext } from '..';

// set up component props type
type TableRowPropsType = {
  children?: React.ReactNode;
};

// set up component
export const TableRow = (props: TableRowPropsType) => {
  const themeContext = useContext(ThemeContext);

  // render component
  return (
    <MuiTableRow
      className="TableRow"
      sx={{
        color: 'inherit',
        paddingTop: '1rem',
        fontSize: 'inherit',
        '.TableBody > &': {
          paddingTop: '1rem',
          paddingBottom: '1rem',
        },
      }}
    >
      {props.children}
    </MuiTableRow>
  );
};
