// imports from npm modules
import React, { useContext } from 'react';
import { Chip as MuiChip } from '@mui/material';

// imports from modules out of component scope
import { ThemeContext } from '../ThemeContext';

// set up component props type
type ChipPropsType = {
  children: React.ReactNode;
  isVisible?: boolean;
  color?: string;
};

// set up component
export const Chip = (props: ChipPropsType) => {
  // set up context
  const themeContext = useContext(ThemeContext);

  // set up color
  const defaultColor = 'primary';
  const color = props.color ?? defaultColor;

  // set up visibility
  const defaultIsVisible = true;
  const isVisible = props.isVisible ?? defaultIsVisible;

  // render component
  let returnValue = null;

  if (isVisible) {
    returnValue = (
      <MuiChip
        className="Chip"
        label={props.children}
        sx={{
          borderRadius: themeContext.getBorderRadius(),
          fontSize: '0.875rem',
          fontWeight: 700,
          backgroundColor: themeContext.getColor({
            name: color,
            variant: '01',
          }),
          color: themeContext.getColor({
            name: color,
            variant: '05',
          }),
        }}
      />
    );
  }

  if (!isVisible) {
    returnValue = null;
  }

  return returnValue;
};
