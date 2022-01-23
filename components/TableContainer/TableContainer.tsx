// imports from npm modules
import React, { useContext } from 'react';
import {
  TableContainer as MuiTableContainer,
  Table as MuiTable,
} from '@mui/material';

// imports from modules out of component scope
import { ThemeContext } from '..';

// set up component props type
type TableContainerPropsType = {
  children?: React.ReactNode;
  isVisible?: boolean;
};

// set up component
export const TableContainer = (props: TableContainerPropsType) => {
  // set up context
  const themeContext = useContext(ThemeContext);

  // render component
  let returnValue = null;

  const isVisible = props.isVisible ?? true;
  if (isVisible) {
    returnValue = (
      <MuiTableContainer
        className="TableContainer"
        sx={{ borderRadius: themeContext.borderRadius }}
      >
        <MuiTable>{props.children}</MuiTable>
      </MuiTableContainer>
    );
  }

  if (!isVisible) {
    returnValue = null;
  }

  return returnValue;
};
