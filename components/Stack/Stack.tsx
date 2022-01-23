// imports from npm modules
import React, { useContext } from 'react';
import { Stack as MuiStack } from '@mui/material';

// imports from other modules out of component scope
import { ThemeContext } from '..';

// set up types
type StackPropsType = {
  children?: React.ReactNode;
  direction?: string;
  spacing?: string;
  marginLeft?: string;
  justifyContent?: string;
};
type MuiStackDirectionType =
  | 'row'
  | 'column'
  | 'row-reverse'
  | 'column-reverse';

// set up component
export const Stack = (props: StackPropsType) => {
  // set up class names
  let className = 'Stack';
  const defaultJustifyContent = 'start';
  const justifyContent = props.justifyContent ?? defaultJustifyContent;
  const isJustifyContentRight = justifyContent === 'right';
  if (isJustifyContentRight) {
    className += ' justify-content-right';
  }

  // set up mui stack direction
  let muiStackDirection: MuiStackDirectionType = 'row';
  const defaultDirection = 'vertical';
  const direction = props.direction ?? defaultDirection;
  const isDirectionHorizontal = direction === 'horizontal';
  if (isDirectionHorizontal) {
    muiStackDirection = 'row';
  }

  // set up context
  const themeContext = useContext(ThemeContext);

  // render component
  return (
    <MuiStack
      className={className}
      spacing={props.spacing}
      direction={muiStackDirection}
      sx={{
        ml: props.marginLeft,

        '&.justify-content-right': {
          justifyContent: 'flex-end',
        },
      }}
    >
      {props.children}
    </MuiStack>
  );
};
