// imports from npm modules
import React, { useContext } from 'react';
import { Button as MuiButton } from '@mui/material';

// imports from modules out of component scope
import { ThemeContext } from '../ThemeContext';

// set up component props type
type ButtonContainerPropsType = {
  children?: React.ReactNode;
  isSquare?: boolean;
  variant?: string;
  color?: string;
  marginLeft?: string;
  isCompact?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

// set up component
export const ButtonContainer = (props: ButtonContainerPropsType) => {
  // set up context
  const themeContext = useContext(ThemeContext);

  // set up class names
  let className = 'ButtonContainer';

  const defaultIsCompact = false;
  const isCompact = props.isCompact ?? defaultIsCompact;
  if (isCompact) {
    className += ' is-compact-true';
  }

  const isPropsIsSquareTrue = props.isSquare === true;
  if (isPropsIsSquareTrue) {
    className += ' is-square-true';
  }

  const defaultVariant = 'solid';
  const variant = props.variant ?? defaultVariant;

  const isVariantSolid = variant === 'solid';
  if (isVariantSolid) {
    className += ' variant-solid';
  }

  const isVariantOutlined = variant === 'outlined';
  if (isVariantOutlined) {
    className += ' variant-outlined';
  }

  const isVariantText = variant === 'text';
  if (isVariantText) {
    className += ' variant-text';
  }

  // set up color
  const defaultColor = 'primary';
  const color = props.color ?? defaultColor;

  // render component
  return (
    <MuiButton
      className={className}
      component="div"
      sx={{
        '&': {
          borderRadius: themeContext.borderRadius,
          boxSizing: 'border-box',
          color: themeContext.primaryColor01,
          display: 'flex',
          gap: '0.5rem',
          height: '3rem',
          lineHeight: '1.5em',
          minWidth: 'unset',
          pl: '1.5rem',
          pr: '1.5rem',
          textTransform: 'none',
          ml: props.marginLeft,
        },

        '&.is-square-true': {
          width: '3rem',
          padding: '0rem',
        },

        '&.is-compact-true': {
          width: '2rem',
          height: '2rem',
        },

        '&.variant-solid': {
          backgroundColor: themeContext.getColor({
            name: color,
            variant: '05',
          }),
          borderWidth: '1px',
          fill: themeContext.getColor({
            name: color,
            variant: '01',
          }),
          fontSize: '0.875rem',
          fontWeight: 700,
        },

        '&.variant-solid:hover': {
          backgroundColor: themeContext.getColor({
            name: color,
            variant: '04',
          }),
          color: themeContext.getColor({
            name: color,
            variant: '01',
          }),
        },

        '&.variant-outlined': {
          borderColor: themeContext.getColor({
            name: color,
            variant: '05',
          }),
          borderStyle: 'solid',
          borderWidth: '1px',
          color: themeContext.getColor({
            name: color,
            variant: '05',
          }),
          fill: themeContext.getColor({
            name: color,
            variant: '05',
          }),
          fontSize: '0.875rem',
          fontWeight: 700,
        },

        '&.variant-outlined:hover': {
          backgroundColor: themeContext.getColor({
            name: color,
            variant: '04',
          }),
          fill: themeContext.getColor({
            name: color,
            variant: '01',
          }),
          color: themeContext.getColor({
            name: color,
            variant: '01',
          }),
        },

        '&.variant-text': {
          fill: themeContext.getColor({
            name: color,
            variant: '05',
          }),
          fontSize: '0.875rem',
          fontWeight: 700,
        },

        '&.variant-text:hover': {
          backgroundColor: themeContext.getColor({
            name: color,
            variant: '05',
          }),
          fill: themeContext.getColor({
            name: color,
            variant: '01',
          }),
          color: themeContext.getColor({
            name: color,
            variant: '01',
          }),
        },
      }}
      onClick={(event: any) => props?.onClick?.(event)}
    >
      {props.children}
    </MuiButton>
  );
};
