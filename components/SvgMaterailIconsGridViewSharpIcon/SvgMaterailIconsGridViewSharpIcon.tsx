// imports from npm modules
import React from 'react';

// imports from other modules out of component scope
import { SvgIcon, SvgIconPropsType } from '../SvgIcon';

// set up component
export const SvgMaterailIconsGridViewSharpIcon = (props: SvgIconPropsType) => {
  // render component
  return (
    <SvgIcon {...props}>
      <path d="M29.3333 8H8V29.3333H29.3333V8Z" />
      <path d="M29.3333 34.667H8V56.0003H29.3333V34.667Z" />
      <path d="M56 8H34.6666V29.3333H56V8Z" />
      <path d="M56 34.667H34.6666V56.0003H56V34.667Z" />
    </SvgIcon>
  );
};
