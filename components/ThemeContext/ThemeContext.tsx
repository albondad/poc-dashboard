// imports from npm modules
import React from 'react';

// set up theme type
type ThemeType = any;
type ThemeGetColorDataType = {
  name: string;
  variant: string;
};

// set up default value
const themeContextDefaultValue: ThemeType = {
  borderWidth: '1px',
  borderRadius: '4px',
  boxShadow: '0px 2px 8px rgba(102, 105, 113, 0.1)',
  fontFamily: 'Arial',
  sideBarWidth: '15rem',
  sideBarZIndex: 1100,
  topBarHeight: '4rem',
  topBarZIndex: 1200,
  primaryColor01: '#E5E5E5',
  primaryColor02: '',
  primaryColor03: '',
  primaryColor04: '#4C4C4C',
  primaryColor05: '#000000',
  primaryColor06: '',
  primaryColor07: '',
  primaryColor08: '',
  primaryColor09: '',
  backgroundColor01: '#FAFAFA',
  backgroundColor02: '#F0F0F0',
  backgroundColor03: '#E6E6E6',
  backgroundColor04: '',
  backgroundColor05: '',
  backgroundColor06: '',
  backgroundColor07: '',
  backgroundColor08: '',
  backgroundColor09: '#141414',
  grayColor01: '',
  grayColor02: '',
  grayColor03: '#E6E6E6',
  grayColor04: '#DBDBDB',
  grayColor05: '#cccccc',
  grayColor06: '#8F8F8F',
  grayColor07: '#666666',
  grayColor08: '',
  grayColor09: '#141414',
  errorColor01: '#FEE5EE',
  errorColor02: '',
  errorColor03: '#',
  errorColor04: '#',
  errorColor05: '#F50057',
  errorColor06: '#',
  errorColor07: '#',
  errorColor08: '',
  errorColor09: '#',
  successColor01: '#E5F5F3',
  successColor02: '',
  successColor03: '#',
  successColor04: '#',
  successColor05: '#009688',
  successColor06: '#',
  successColor07: '#',
  successColor08: '',
  successColor09: '#',
  getBorderRadius: function () {
    return this.borderRadius;
  },
  getColor: function (data: ThemeGetColorDataType) {
    const colorName = data.name;
    const colorVariant = data.variant;
    const color = this?.[`${colorName}Color${colorVariant}`];
    console.log('[remove me] color', color);
    return color;
  },
};

// set up theme context
export const ThemeContext = React.createContext(themeContextDefaultValue);

// set up theme context provider props
type ThemeContextProviderPropsType = {
  theme?: ThemeType;
  children: React.ReactNode;
};

// set up theme context provider
export const ThemeContextProvider = (props: ThemeContextProviderPropsType) => {
  const value: ThemeType = props.theme || themeContextDefaultValue;

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};
