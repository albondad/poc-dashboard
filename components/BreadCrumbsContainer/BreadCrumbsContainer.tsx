// imports from npm modules
import React, { Fragment, useContext } from 'react';
import { Box as MuiBox } from '@mui/material';

// imports from other modules out of component scope
import { SvgMaterialIconsChevronRightIcon } from '..';

// set up component props type
type BreadCrumbsContainer = {
  children?: React.ReactNode;
};

// set up component
export const BreadCrumbsContainer = (props: BreadCrumbsContainer) => {
  // set up children
  const children = React.Children.toArray(props.children);

  // render component
  return (
    <MuiBox
      className="BreadCrumbsContainer"
      sx={{
        display: 'flex',
        gap: '0.25rem',
        fontSize: '1rem',
      }}
    >
      {children.map((child, index) => {
        let returnValue: React.ReactNode = (
          <Fragment>
            {child}
            <MuiBox sx={{ width: '1rem' }}>
              <SvgMaterialIconsChevronRightIcon />
            </MuiBox>
          </Fragment>
        );

        const isLastChild: boolean = index === children.length - 1;
        if (isLastChild) {
          returnValue = child;
        }

        return returnValue;
      })}
    </MuiBox>
  );
};
