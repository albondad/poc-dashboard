// imports from npm modules
import React from 'react';
import Mui, { Grid as MuiGrid } from '@mui/material';

// set up component props type
type GridItemPropsType = {
  children?: React.ReactNode;
  widthOnSmallScreens?: Mui.GridSize;
  justify?: string;
  align?: string;
};

// set up component
export const GridItem = (props: GridItemPropsType) => {
  // set up class names
  let className = 'GridItem';
  const isPropsJustifyRight = props.justify === 'right';
  if (isPropsJustifyRight) {
    className += ' is-justify-right';
  }

  const isPropsJustifyCenter = props.justify === 'center';
  if (isPropsJustifyCenter) {
    className += ' is-justify-center';
  }

  const isPropsAlignCenter = props.align === 'center';
  if (isPropsAlignCenter) {
    className += ' is-align-center';
  }

  const isPropsAlignBottom = props.align === 'bottom';
  if (isPropsAlignBottom) {
    className += ' is-align-bottom';
  }

  // render component
  return (
    <MuiGrid
      item={true}
      className={className}
      xs={props.widthOnSmallScreens}
      sx={{
        display: 'flex',
        flexDirection: 'column',

        '&.is-justify-right': {
          alignItems: 'flex-end',
        },

        '&.is-justify-center': {
          alignItems: 'center',
        },

        '&.is-align-bottom': {
          justifyContent: 'flex-end',
        },

        '&.is-align-center': {
          justifyContent: 'center',
        },
      }}
    >
      {props.children}
    </MuiGrid>
  );
};
