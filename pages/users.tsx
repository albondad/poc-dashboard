// imports from npm modules
import React, { Fragment, useState } from 'react';
import type { NextPage } from 'next';

// imports from other modules
import {
  ButtonContainer,
  ButtonIcon,
  ButtonText,
  ModalContainer,
  BreadCrumbsContainer,
  DashboardPageActions,
  DashboardPageBox,
  DashboardPageContainer,
  Divider,
  DashboardPageDivider,
  Text,
  Stack,
  DashboardPageSection,
  DashboardPageText,
  FormFieldInput,
  ModalSection,
  GridContainer,
  GridItem,
  SvgMaterailIconsAutorenewSharpIcon,
  SvgMaterailIconsFilterAltOutlineIcon,
  SvgMaterialIconsAddSharpIcon,
  SvgMaterialIconsChevronRightSharpIcon,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '../components';

const Home: NextPage = () => {
  // set up state
  const [usersState, setUsersState] = useState([
    {
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      phoneNumber: '1-111-111-1111',
      securityGroups: 'Master, Admin',
    },
    {
      name: 'Jane Doe',
      email: 'janedoe@gmail.com',
      phoneNumber: '2-222-222-2222',
      securityGroups: 'Admin',
    },
    {
      name: 'Bob Doe',
      email: 'bobdoe@gmail.com',
      phoneNumber: '3-333-333-3333',
      securityGroups: 'Master',
    },
    {
      name: 'Robert Doe',
      email: 'robertdoe@gmail.com',
      phoneNumber: '4-444-444-4444',
      securityGroups: 'Demo, Guest',
    },
    {
      name: 'Joe Doe',
      email: 'joedoe@gmail.com',
      phoneNumber: '4-444-444-4444',
      securityGroups: 'Master',
    },
    {
      name: 'Henry Doe',
      email: 'henrydoe@gmail.com',
      phoneNumber: '5-555-555-5555',
      securityGroups: 'Admin, Guest',
    },
    {
      name: 'Larry Doe',
      email: 'larrydoe@gmail.com',
      phoneNumber: '6-666-666-6666',
      securityGroups: 'Master',
    },
    {
      name: 'Bil Doe',
      email: 'billdoe@gmail.com',
      phoneNumber: '7-777-777-7777',
      securityGroups: 'Demo',
    },
  ]);

  const [domainsState, setDomainsState] = useState([
    {
      name: `John Doe's Domain`,
      securityGroups: 'Master, Admin',
    },
    {
      name: `Jane Doe's Domain`,
      securityGroups: 'Master, Admin',
    },
    {
      name: `Robert Doe's Domain`,
      securityGroups: 'Master, Admin',
    },
  ]);

  const [isModalVisibleState, setIsModalVisibleState] = useState(false);

  // set up event handlers
  const handleAddButtonClick = () => {
    setIsModalVisibleState(true);
  };

  const handleModalCancelButtonClick = () => {
    setIsModalVisibleState(false);
  };

  const handleUserActionClick = () => {
    setIsModalVisibleState(true);
  };

  return (
    <Fragment>
      <DashboardPageContainer>
        {/* header section */}
        <Text align="center" size="2rem" weight="700">
          Users
        </Text>

        <DashboardPageDivider spacing="0.5rem" />

        <BreadCrumbsContainer>
          <Text align="center" size="1.5rem">
            Bodhi
          </Text>
          <Text align="center" size="1.5rem">
            Users
          </Text>
        </BreadCrumbsContainer>

        <DashboardPageDivider spacing="2rem" />

        {/* table section */}
        <DashboardPageSection>
          <GridContainer>
            <GridItem widthOnSmallScreens={6}></GridItem>
            <GridItem align="bottom" widthOnSmallScreens={6} justify="right">
              <DashboardPageActions>
                <FormFieldInput label="Search" placeholder="Search..." />
                {/* filter button */}
                <ButtonContainer isSquare={true} variant="outlined">
                  <ButtonIcon>
                    <SvgMaterailIconsFilterAltOutlineIcon />
                  </ButtonIcon>
                </ButtonContainer>
                {/* refresh button */}
                <ButtonContainer isSquare={true} variant="outlined">
                  <ButtonIcon>
                    <SvgMaterailIconsAutorenewSharpIcon />
                  </ButtonIcon>
                </ButtonContainer>
                {/* add button */}
                <ButtonContainer isSquare={true} onClick={handleAddButtonClick}>
                  <ButtonIcon>
                    <SvgMaterialIconsAddSharpIcon />
                  </ButtonIcon>
                </ButtonContainer>
              </DashboardPageActions>
            </GridItem>
          </GridContainer>
          <DashboardPageDivider />
          <TableContainer>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Security Groups</TableCell>
                <TableCell>Status</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usersState.map((usersStateElement, index) => {
                // set up user status
                const randomBoolean = Math.random() < 0.5;
                const isOnline = randomBoolean;
                let textColor = 'error';
                let textChildren = 'offline';
                if (isOnline) {
                  textColor = 'success';
                  textChildren = 'online';
                }

                // render components
                return (
                  <TableRow key={index}>
                    <TableCell>{usersStateElement.name}</TableCell>
                    <TableCell>{usersStateElement.email}</TableCell>
                    <TableCell>{usersStateElement.phoneNumber}</TableCell>
                    <TableCell>{usersStateElement.securityGroups}</TableCell>
                    <TableCell>
                      <Text
                        isHighlighted={true}
                        align="center"
                        color={textColor}
                      >
                        {textChildren}
                      </Text>
                    </TableCell>
                    <TableCell justifyContent="right">
                      <ButtonContainer
                        marginLeft="auto"
                        isSquare={true}
                        isCompact={true}
                        variant="text"
                        onClick={handleUserActionClick}
                      >
                        <ButtonIcon>
                          <SvgMaterialIconsChevronRightSharpIcon />
                        </ButtonIcon>
                      </ButtonContainer>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </TableContainer>
        </DashboardPageSection>

        <DashboardPageDivider />
      </DashboardPageContainer>

      {/* modal */}
      <ModalContainer isVisible={isModalVisibleState}>
        {/* header section */}
        <ModalSection>
          <Text size="1.5rem" weight="700">
            John Doe
          </Text>
        </ModalSection>

        {/* main  section */}
        <ModalSection>
          <Text size="1rem" weight="700">
            User Details
          </Text>
          <Divider />
          <FormFieldInput label="name" isFullWidth={true} />
          <Divider />
          <FormFieldInput label="Email" isFullWidth={true} />
          <Divider />
          <FormFieldInput label="Phone Number" isFullWidth={true} />
          <Divider spacing="4rem" />

          <Text size="1rem" weight="700">
            User Domains
          </Text>
          <Divider />
          <TableContainer>
            <TableHead>
              <TableRow>
                <TableCell>Domains</TableCell>
                <TableCell>Security Groups</TableCell>
                <TableCell>Status</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {domainsState.map((domainsStateElement, index) => {
                // set up user status
                const randomBoolean = Math.random() < 0.5;
                const hasActiveAlarms = randomBoolean;
                let textColor = 'error';
                let textChildren = 'has errors';
                if (hasActiveAlarms) {
                  textColor = 'success';
                  textChildren = 'no errors';
                }

                // render components
                return (
                  <TableRow key={index}>
                    <TableCell>{domainsStateElement.name}</TableCell>
                    <TableCell>{domainsStateElement.securityGroups}</TableCell>
                    <TableCell>
                      <Text
                        isHighlighted={true}
                        align="center"
                        color={textColor}
                      >
                        {textChildren}
                      </Text>
                    </TableCell>
                    <TableCell justifyContent="right">
                      <ButtonContainer
                        marginLeft="auto"
                        isSquare={true}
                        isCompact={true}
                        variant="text"
                      >
                        <ButtonIcon>
                          <SvgMaterialIconsChevronRightSharpIcon />
                        </ButtonIcon>
                      </ButtonContainer>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </TableContainer>
        </ModalSection>

        {/* footer section */}
        <ModalSection>
          <Stack spacing="1rem" direction="horizontal" justifyContent="right">
            <ButtonContainer
              variant="outlined"
              onClick={handleModalCancelButtonClick}
            >
              <ButtonText>Cancel</ButtonText>
            </ButtonContainer>
            <ButtonContainer>
              <ButtonText>Save</ButtonText>
            </ButtonContainer>
          </Stack>
        </ModalSection>
      </ModalContainer>
    </Fragment>
  );
};

export default Home;
