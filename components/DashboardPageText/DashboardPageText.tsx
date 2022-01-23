// imports from npm modules
import React, { useContext } from 'react';
import { Box as MuiBox } from '@mui/material';

// imports from other modules out of component scope
import { ThemeContext } from '..';

// set up component props type
type DashboardPageTextPropsType = {
  children?: React.ReactNode;
  variant?: string;
  color?: string;
};

// set up component
export const DashboardPageText = (props: DashboardPageTextPropsType) => {
  // set up context
  const themeContext = useContext(ThemeContext);

  // set up class name
  let className = 'DashboardPageText';
  const isVariantHeading01 = props.variant === 'heading01';
  if (isVariantHeading01) {
    className += ' heading-01';
  }
  const isVariantHeading02 = props.variant === 'heading02';
  if (isVariantHeading02) {
    className += ' heading-02';
  }
  const isVariantHeading03 = props.variant === 'heading03';
  if (isVariantHeading03) {
    className += ' heading-03';
  }
  const isVariantHeading04 = props.variant === 'heading04';
  if (isVariantHeading04) {
    className += ' heading-04';
  }
  const isVariantHeading05 = props.variant === 'heading05';
  if (isVariantHeading05) {
    className += ' heading-05';
  }
  const isVariantSubheading03 = props.variant === 'subheading03';
  if (isVariantSubheading03) {
    className += ' subheading-03';
  }
  const isVariantSubheading04 = props.variant === 'subheading04';
  if (isVariantSubheading04) {
    className += ' subheading-04';
  }
  const isVariantSubheading05 = props.variant === 'subheading05';
  if (isVariantSubheading05) {
    className += ' subheading-05';
  }
  const isVariantBody01 = props.variant === 'body01';
  if (isVariantBody01) {
    className += ' body-01';
  }
  const isVariantBody02 = props.variant === 'body02';
  if (isVariantBody02) {
    className += ' body-02';
  }

  // set up color
  const defaultColor = 'grey';
  const color = props.color ?? defaultColor;

  // render component
  return (
    <MuiBox
      className={className}
      sx={{
        '&': {
          lineHeight: '1.5em',
        },
        '&.heading-01': {
          fontSize: '1rem',
          fontWeight: '700',
          color: themeContext.getColor({
            name: color,
            variant: '09',
          }),
        },
        '&.heading-02': {
          fontSize: '1.125rem',
          fontWeight: '700',
          color: themeContext.getColor({
            name: color,
            variant: '09',
          }),
        },
        '&.heading-03': {
          fontSize: '1.25rem',
          fontWeight: '700',
          color: themeContext.getColor({
            name: color,
            variant: '09',
          }),
        },
        '&.heading-04': {
          fontSize: '1.5rem',
          fontWeight: '700',
          color: themeContext.getColor({
            name: color,
            variant: '09',
          }),
        },
        '&.heading-05': {
          fontSize: '1.75rem',
          fontWeight: '700',
          color: themeContext.getColor({
            name: color,
            variant: '09',
          }),
        },
        '&.subheading-03': {
          fontSize: '1.125rem',
          fontWeight: '400',
          color: themeContext.getColor({
            name: color,
            variant: '06',
          }),
        },
        '&.subheading-04': {
          fontSize: '1.25rem',
          fontWeight: '400',
          color: themeContext.getColor({
            name: color,
            variant: '06',
          }),
        },
        '&.subheading-05': {
          fontSize: '1.5rem',
          fontWeight: '400',
          color: themeContext.getColor({
            name: color,
            variant: '06',
          }),
        },
        '&.body-01': {
          fontSize: '0.875rem',
          fontWeight: '400',
          color: themeContext.getColor({
            name: color,
            variant: '05',
          }),
        },
        '&.body-02': {
          fontSize: '1rem',
          fontWeight: '400',
          color: themeContext.getColor({
            name: color,
            variant: '05',
          }),
        },
      }}
    >
      {props.children}
    </MuiBox>
  );
};
