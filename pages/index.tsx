import React from 'react';
import type { NextPage } from 'next';
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
import {
  DashboardPageContainer,
  DashboardPageHeader,
  DashboardPageHeading,
  DashboardPageActions,
  DashboardPageButton,
  SideBar,
  TopBar,
} from '../components/common';

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

const Home: NextPage = () => {
  const sideBarWidth = '15rem';
  const dashboardPaddingLeft = `calc(${sideBarWidth} + 2rem)`;
  const dashboardPaddingTop = `calc(4rem)`;

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
        width={sideBarWidth}
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
        onWidthChange={(data: any) => {
          console.log(data.width);
        }}
      />

      <DashboardPageContainer>
        <DashboardPageHeader>
          <DashboardPageHeading>Dashboard</DashboardPageHeading>
          <DashboardPageActions>
            <DashboardPageButton>Edit</DashboardPageButton>
            <DashboardPageButton>Add Asset</DashboardPageButton>
          </DashboardPageActions>
        </DashboardPageHeader>
      </DashboardPageContainer>
    </ThemeProvider>
  );
};

export default Home;

// DashboardPage
// DashboardPageContainer
// DashboardPageHeader
// DashboardPageHeaderHeading
// DashboardPageHeaderActions
// DashboardPageHeaderButton
// DashboardPageHeaderBreadcrumbs
