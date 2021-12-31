import React, { Fragment, useState } from 'react';
import type { NextPage } from 'next';
import {
  Box,
  Button,
  colors,
  createTheme,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@mui/material';
import {
  Speed as SpeedIcon,
  Add as AddIcon,
  MoreVert as MoverVertIcon,
  PeopleOutline as PeopleOutlineIcon,
  LockOpen as LockOpenIcon,
  SettingsOutlined as SettingsOutlinedIcon,
  PowerOutlined as PowerOutlinedIcon,
  GroupWorkOutlined as GroupWorkOutlinedIcon,
} from '@mui/icons-material';

// other modules
import { SideBar, TopBar } from '../components/common';

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

      {/* box */}
      <Box
        sx={{
          backgroundColor: colors.grey[200],
          height: '100vh',
          pl: dashboardPaddingLeft,
          pt: dashboardPaddingTop,
          pr: 4,
        }}
      ></Box>
    </ThemeProvider>
  );
};

export default Home;

// dashboard container
// dashboard header
// dashboard page
// dashboard page header
// side bar
