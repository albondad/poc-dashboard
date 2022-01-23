// imports from npm modules
import React, { useContext } from 'react';
import { Box as MuiBox } from '@mui/material';

// imports from other modules out of component scope
import { ThemeContext } from '..';

// set up component props type
type ModalSectionPropsType = {
  children?: React.ReactNode;
  isVisible?: boolean;
};

// set up component
export const ModalSection = (props: ModalSectionPropsType) => {
  // set up context
  const themeContext = useContext(ThemeContext);

  // render component
  return (
    <MuiBox
      sx={{
        '&': { padding: '2rem' },
        '& + &': {
          borderTopStyle: 'solid',
          borderTopWidth: '1px',
          borderTopColor: themeContext.getColor({
            name: 'gray',
            variant: '05',
          }),
        },
      }}
    >
      {props.children}
    </MuiBox>
  );
};
