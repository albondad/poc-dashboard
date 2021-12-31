// npm modules
import React, { Fragment } from 'react';
import { Menu } from '@mui/material';

// component
export const TopBarMenu = (props: any) => {
  const isPropsAnchorElementTruthy = !!props.anchorElement;

  // render
  if (isPropsAnchorElementTruthy) {
    return (
      <Menu
        anchorEl={props.anchorElement}
        open={props.isOpen}
        onClose={props.onClose}
      >
        {props.children}
      </Menu>
    );
  } else {
    return null;
  }
};
