// imports from npm modules
import React, { useContext } from 'react';
import { Box as MuiBox } from '@mui/material';

// imports from other modules out of component scope
import { ThemeContext } from '..';

// set up component props type
type ModalContainerPropsType = {
  children?: React.ReactNode;
  isVisible?: boolean;
};

// set up component
export const ModalContainer = (props: ModalContainerPropsType) => {
  // set up context
  const themeContext = useContext(ThemeContext);

  const defaultIsVisible = false;
  const isVisible = props.isVisible ?? defaultIsVisible;

  // render component
  let returnValue = null;

  if (isVisible) {
    returnValue = (
      <MuiBox
        className="ModalContainer"
        sx={{
          height: '100vh',
          position: 'fixed',
          width: '100vw',
          top: 0,
          left: 0,
          zIndex: '2000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* backdrop */}
        <MuiBox
          sx={{
            backgroundColor: themeContext.getColor({
              name: 'background',
              variant: '09',
            }),
            height: '100vh',
            width: '100vw',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: '100',
            opacity: 0.5,
          }}
        ></MuiBox>

        {/* main box */}
        <MuiBox
          sx={{
            backgroundColor: themeContext.getColor({
              name: 'background',
              variant: '01',
            }),
            borderRadius: themeContext.getBorderRadius(),
            ml: 'auto',
            mr: 'auto',
            mt: '4rem',
            width: '50%',
            position: 'absolute',
            top: 0,
            zIndex: '200',
          }}
        >
          {props.children}
        </MuiBox>
      </MuiBox>
    );
  }

  return returnValue;
};
