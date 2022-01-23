// npm modules
import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

// other modules
import '../styles/globals.css';
import { ReduxProvider, store } from '../redux';
import {
  SideBarContainer,
  SideBarList,
  SideBarItem,
  ThemeContextProvider,
  TopBarContainer,
  SvgMaterialIconsMapsHomeWorkIcon,
  SvgMaterialIconsChevronRightIcon,
  SideBarIcon,
} from '../components';

// set up component
const App = ({ Component: Page, pageProps }: AppProps) => {
  // set up hooks
  const router = useRouter();

  // render
  return (
    <ReduxProvider store={store}>
      <ThemeContextProvider>
        <SideBarContainer>
          {/* <SideBarList>
            <SideBarItem>
              <SideBarIcon>
                <SvgMaterialIconsMapsHomeWorkIcon />
              </SideBarIcon>
              Home
              <SideBarIcon justify="right">
                <SvgMaterialIconsChevronRightIcon />
              </SideBarIcon>
            </SideBarItem>
            <SideBarItem>
              <SideBarIcon>
                <SvgMaterialIconsMapsHomeWorkIcon />
              </SideBarIcon>
              Users
            </SideBarItem>
            <SideBarItem>
              <SideBarIcon>
                <SvgMaterialIconsMapsHomeWorkIcon />
              </SideBarIcon>
              Analytics
            </SideBarItem> 
          </SideBarList>*/}
        </SideBarContainer>
        <TopBarContainer />
      </ThemeContextProvider>
      <Page {...pageProps} />
    </ReduxProvider>
  );
};

export default App;
