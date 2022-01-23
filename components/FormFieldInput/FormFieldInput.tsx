// imports from npm modules
import React, { useContext } from 'react';
import { TextField as MuiTextField } from '@mui/material';

// imports from modules out of component scope
import { ThemeContext } from '..';

// set up component props type
type FormFieldInputPropsType = {
  children?: React.ReactNode;
  placeholder?: string;
  label?: string;
  isFullWidth?: boolean;
};

// set up component
export const FormFieldInput = (props: FormFieldInputPropsType) => {
  const themeContext = useContext(ThemeContext);

  // set up class names
  let className = 'FormFieldInput';

  const defaultIsFullWidth = false;
  const isFullWidth = props.isFullWidth ?? defaultIsFullWidth;
  if (isFullWidth) {
    className = ' is-full-width-true';
  }

  // render component
  return (
    <MuiTextField
      InputLabelProps={{ shrink: true }}
      className={className}
      placeholder={props.placeholder}
      label={props.label}
      sx={{
        '&': {
          color: 'inherit',
          paddingTop: '1rem',
          fontSize: 'inherit',
          pt: '0',
        },

        '&.is-full-width-true': {
          width: '100%',
        },

        '& > .MuiInputBase-root > input': {
          height: '3rem',
          boxSizing: 'border-box',
          fontSize: '0.875rem',
          lineHeight: '1.5em',
        },
      }}
    >
      {props.children}
    </MuiTextField>
  );
};
