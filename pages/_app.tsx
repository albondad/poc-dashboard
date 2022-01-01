// npm modules
import React from 'react';
import type { AppProps } from 'next/app';
import { colors, createTheme, ThemeProvider } from '@mui/material';
import {
  Speed as SpeedIcon,
  PeopleOutline as PeopleOutlineIcon,
  LockOpen as LockOpenIcon,
  SettingsOutlined as SettingsOutlinedIcon,
  PowerOutlined as PowerOutlinedIcon,
  GroupWorkOutlined as GroupWorkOutlinedIcon,
} from '@mui/icons-material';

// other modules
import { SideBar, TopBar } from '../components/common';
import '../styles/globals.css';

// theme
const theme = createTheme({
  palette: {
    info: {
      main: colors.grey[100],
      light: colors.grey[50],
      dark: colors.grey[300],
      contrastText: colors.grey[900],
    },
  },
});

// component
const App = ({ Component: Page, pageProps }: AppProps) => {
  // render
  return (
    <ThemeProvider theme={theme}>
      {/* top bar */}
      <TopBar
        items={[
          {
            id: 'notifications',
            text: 'Notifications',
          },
          {
            id: 'tickets',
            text: 'Tickets',
          },
          {
            id: 'changeDomain',
            text: 'Change Domain',
          },
          {
            id: 'username',
            text: 'Username',
            items: [
              {
                id: 'profile',
                text: 'Profile',
              },
              {
                id: 'logout',
                text: 'Sign Out',
              },
            ],
          },
        ]}
      />
      {/* side bar */}
      <SideBar
        items={[
          {
            id: '1',
            text: 'Home',
            icon: <SpeedIcon />,
          },
          {
            id: 'groups',
            text: 'Groups',
            icon: <GroupWorkOutlinedIcon />,
          },
          {
            id: 'connectors',
            text: 'Connectors',
            icon: <PowerOutlinedIcon />,
          },
          {
            id: 'users',
            text: 'Users',
            icon: <PeopleOutlineIcon />,
          },
          {
            id: 'securityGroups',
            text: 'Security Groups',
            icon: <LockOpenIcon />,
          },
          {
            id: 'settings',
            text: 'Settings',
            icon: <SettingsOutlinedIcon />,
          },
        ]}
      />

      <Page {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
