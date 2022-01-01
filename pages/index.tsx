import React from 'react';
import type { NextPage } from 'next';

// other modules
import {
  DashboardPageContainer,
  DashboardPageHeader,
  DashboardPageHeading,
  DashboardPageActions,
  DashboardPageButton,
} from '../components/common';

const Home: NextPage = () => {
  return (
    <DashboardPageContainer>
      <DashboardPageHeader>
        <DashboardPageHeading>Dashboard</DashboardPageHeading>
        <DashboardPageActions>
          <DashboardPageButton>Edit</DashboardPageButton>
          <DashboardPageButton>Add Asset</DashboardPageButton>
        </DashboardPageActions>
      </DashboardPageHeader>
    </DashboardPageContainer>
  );
};

export default Home;
