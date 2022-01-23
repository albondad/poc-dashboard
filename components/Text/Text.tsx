// imports from npm modules
import React, { useContext } from 'react';
import { Box as MuiBox } from '@mui/material';

// imports from modules out of component scope
import { ThemeContext } from '../ThemeContext';

// set up component props type
type TextPropsType = {
  children: React.ReactNode;
  color?: string;
  isHighlighted?: boolean;
  isTransparent?: boolean;
  isVisible?: boolean;
  lineHeight?: string;
  size?: string;
  weight?: string;
  align?: string;
};

// set up component
export const Text = (props: TextPropsType) => {
  // set up context
  const themeContext = useContext(ThemeContext);

  // set up "isVisible"
  const defaultIsVisible = true;
  const isVisible = props.isVisible ?? defaultIsVisible;

  // set up color
  const defaultColor = 'primary';
  const color = props.color ?? defaultColor;

  // set up font size
  const defaultFontSize = '1rem';
  const fontSize = props.size ?? defaultFontSize;

  // set up font weight
  const defaultFontWeight = '400';
  const fontWeight = props.weight ?? defaultFontWeight;

  // set up class names
  let className = 'Text';

  const defaultIsTransparent = false;
  const isTransparent = props.isTransparent ?? defaultIsTransparent;
  if (isTransparent) {
    className += ' is-transparent-true';
  }

  const defaultIsHighlighted = false;
  const isHighlighted = props.isHighlighted ?? defaultIsHighlighted;
  if (isHighlighted) {
    className += ' is-highlighted-true';
  }

  // render component
  let returnValue = null;

  if (isVisible) {
    returnValue = (
      <MuiBox
        className={className}
        sx={{
          '&': {
            display: 'inline-block',
            color: themeContext.getColor({
              name: color,
              variant: '05',
            }),
            fontSize: fontSize,
            fontWeight: fontWeight,
            textAlign: props.align,
          },

          '&.is-highlighted-true': {
            position: 'relative',
            padding: '0.5rem 1rem',
            boxSizing: 'border-box',
          },

          '&.is-highlighted-true::before': {
            backgroundColor: themeContext.getColor({
              name: color,
              variant: '05',
            }),
            borderRadius: themeContext.getBorderRadius(),
            content: '" "',
            display: 'block',
            height: '100%',
            left: 0,
            opacity: '0.1',
            position: 'absolute',
            top: 0,
            width: '100%',
            zIndex: '0',
          },

          '&.is-transparent-true': {
            opacity: 0.5,
          },
        }}
      >
        {props.children}
      </MuiBox>
    );
  }

  if (!isVisible) {
    returnValue = null;
  }

  return returnValue;
};
