// imports from npm modules
import React, { useContext } from 'react';
import { TableCell as MuiTableCell } from '@mui/material';

// imports from modules out of component scope
import { ThemeContext } from '..';

// set up component props type
type TableCellPropsType = {
  children?: React.ReactNode;
  justifyContent?: 'left' | 'center' | 'right';
};

// set up component
export const TableCell = (props: TableCellPropsType) => {
  const themeContext = useContext(ThemeContext);

  // render component
  return (
    <MuiTableCell
      align={props.justifyContent}
      className="TableCell"
      sx={{
        color: 'inherit',
        fontSize: 'inherit',
        fontWeight: 'inherit',
        marginTop: '1rem',

        '.TableHead > .TableRow > &': {
          fontSize: '0.875rem',
          color: themeContext.grayColor09,
          paddingBottom: '1rem',
          paddingTop: '1rem',
        },

        '.TableBody > .TableRow > &': {
          color: themeContext.grayColor09,
          fontSize: '1rem',
          borderBottomColor: themeContext.grayColor03,
          paddingBottom: '1rem',
          paddingTop: '1rem',
        },
      }}
    >
      {props.children}
    </MuiTableCell>
  );
};
