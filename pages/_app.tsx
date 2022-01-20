// npm modules
import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

// other modules
import '../styles/globals.css';
import { ReduxProvider, store } from '../redux';

// set up component
const App = ({ Component: Page, pageProps }: AppProps) => {
  // set up state
  const [isAuth, setIsAuth] = useState(false);

  // set up hooks
  const router = useRouter();

  // render
  return (
    <ReduxProvider store={store}>
      <Page {...pageProps} />
    </ReduxProvider>
  );
};

export default App;
