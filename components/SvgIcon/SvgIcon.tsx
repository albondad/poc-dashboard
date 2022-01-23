// imports from npm modules
import React, { useContext } from 'react';

// set up component props type
export type SvgIconPropsType = {
  children?: React.ReactNode;
  isVisible?: boolean;
};

// set up component
export const SvgIcon = (props: SvgIconPropsType) => {
  // render component
  let returnValue = null;
  const isVisible = props.isVisible ?? true;

  if (isVisible) {
    returnValue = (
      <svg
        width="inherit"
        height="inherit"
        viewBox="0 0 64 64"
        fill="inherit"
        xmlns="http://www.w3.org/2000/svg"
      >
        {props.children}
      </svg>
    );
  }

  return returnValue;
};
