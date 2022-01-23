// imports from npm modules
import React, { Fragment, useState } from 'react';
import type { NextPage } from 'next';
import { ButtonGroup } from '@mui/material';

// imports from other modules
import {
  BreadCrumbsContainer,
  ButtonContainer,
  ButtonIcon,
  ButtonText,
  DashboardPageActions,
  DashboardPageBox,
  DashboardPageContainer,
  DashboardPageDivider,
  ModalContainer,
  DashboardPageSection,
  DashboardPageText,
  GridContainer,
  GridItem,
  SvgMaterialIconsExpandMoreIcon,
  SvgMaterialIconsTableChartIcon,
  SvgMaterailIconsFilterAltOutlineIcon,
  SvgMaterialIconsAddSharpIcon,
  SvgMaterailIconsGridViewSharpIcon,
  SvgMaterailIconsTableRowsSharpIcon,
  SvgMaterailIconsViewColumnSharpIcon,
  FormFieldInput,
  TableContainer,
  TableRow,
  TableHead,
  TableBody,
  Chip,
  TableCell,
} from '../components';

const Home: NextPage = () => {
  // set up state
  const [levelsState] = useState([
    {
      id: '1',
      name: 'Room 101',
      hasActiveAlarms: true,
    },
    {
      id: '2',
      name: 'Room 102',
      hasActiveAlarms: false,
    },
    {
      id: '3',
      name: 'Room 103',
      hasActiveAlarms: false,
    },
    {
      id: '4',
      name: 'Room 104',
      hasActiveAlarms: true,
    },
    {
      id: '5',
      name: 'Room 105',
      hasActiveAlarms: false,
    },
    {
      id: '6',
      name: 'Room 107',
      hasActiveAlarms: false,
    },
    {
      id: '7',
      name: 'Room 107',
      hasActiveAlarms: false,
    },
  ]);
  const [levelsDisplayModeState, setLevelsDisplayModeState] = useState('grid');

  // set up event handlers
  const handleLevelDisplayModeButtonClick = () => {
    if (isLevelDisplayModeStateGrid) {
      setLevelsDisplayModeState('table');
    } else if (isLevelDisplayModeStateTable) {
      setLevelsDisplayModeState('grid');
    } else if (isLevelDisplayModeStateRows) {
      setLevelsDisplayModeState('grid');
    }
    console.log('test');
  };

  // set up variables
  const isLevelDisplayModeStateGrid = levelsDisplayModeState === 'grid';
  const isLevelDisplayModeStateTable = levelsDisplayModeState === 'table';
  const isLevelDisplayModeStateRows = levelsDisplayModeState === 'row';

  // render component
  return (
    <Fragment>
      <DashboardPageContainer>
        <DashboardPageSection>
          <DashboardPageText variant="heading04">Home</DashboardPageText>
          <BreadCrumbsContainer>
            <DashboardPageText variant="Sample Domain">
              Demo Domain
            </DashboardPageText>

            <DashboardPageText variant="Room 100">
              Demo Building
            </DashboardPageText>
          </BreadCrumbsContainer>
        </DashboardPageSection>

        <DashboardPageDivider />

        <DashboardPageBox>
          <GridContainer>
            <GridItem align="bottom" widthOnSmallScreens={6}>
              <DashboardPageText variant="heading05">Levels</DashboardPageText>
              <DashboardPageText variant="subheading03">
                View your rooms, buildings, areas and other types of levels.
              </DashboardPageText>
            </GridItem>
            <GridItem widthOnSmallScreens={6} justify="right">
              <DashboardPageActions>
                {/* search levels field */}
                <FormFieldInput label="Search Levels" />

                {/* filter icon button */}
                <ButtonContainer isSquare={true}>
                  <ButtonIcon>
                    <SvgMaterailIconsFilterAltOutlineIcon />
                  </ButtonIcon>
                </ButtonContainer>

                {/* levels display mode icon button */}
                <ButtonContainer
                  isSquare={true}
                  onClick={handleLevelDisplayModeButtonClick}
                >
                  <ButtonIcon>
                    <SvgMaterailIconsGridViewSharpIcon
                      isVisible={isLevelDisplayModeStateGrid}
                    />
                    <SvgMaterailIconsTableRowsSharpIcon
                      isVisible={isLevelDisplayModeStateTable}
                    />
                    <SvgMaterailIconsViewColumnSharpIcon
                      isVisible={isLevelDisplayModeStateRows}
                    />
                  </ButtonIcon>
                </ButtonContainer>

                <ButtonContainer isSquare={true}>
                  <ButtonIcon>
                    <SvgMaterialIconsAddSharpIcon />
                  </ButtonIcon>
                </ButtonContainer>
                <ButtonContainer isSquare={true}>
                  <ButtonIcon>
                    <SvgMaterialIconsExpandMoreIcon />
                  </ButtonIcon>
                </ButtonContainer>
              </DashboardPageActions>
            </GridItem>
          </GridContainer>

          <DashboardPageDivider />

          {/* grid section*/}
          <GridContainer isVisible={isLevelDisplayModeStateGrid}>
            {levelsState.map((levelsStateElement, index) => {
              const randomBoolean = Math.random() < 0.5;
              const hasActiveAlarms = randomBoolean;
              let chipChildren = 'Has No Active Alarms';
              let chipColor = 'success';
              if (hasActiveAlarms) {
                chipChildren = 'Has Active Alarms';
                chipColor = 'error';
              }

              return (
                <GridItem key={index} widthOnSmallScreens={3}>
                  <DashboardPageBox hasBoxShadow={false}>
                    <DashboardPageText variant="heading05">
                      {levelsStateElement.name}
                    </DashboardPageText>
                    <DashboardPageDivider spacing="0.5rem" />
                    <Chip color={chipColor}>{chipChildren}</Chip>
                  </DashboardPageBox>
                </GridItem>
              );
            })}
          </GridContainer>

          <DashboardPageDivider />

          {/* table section*/}
          <TableContainer isVisible={isLevelDisplayModeStateTable}>
            <TableHead>
              <TableRow>
                <TableCell>Level Name</TableCell>
                <TableCell>Level Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {levelsState.map((levelsStateElement, index) => {
                const randomBoolean = Math.random() < 0.5;
                const hasActiveAlarms = randomBoolean;
                let chipChildren = 'Has No Active Alarms';
                let chipColor = 'success';
                if (hasActiveAlarms) {
                  chipChildren = 'Has Active Alarms';
                  chipColor = 'error';
                }

                return (
                  <TableRow key={index}>
                    <TableCell>{levelsStateElement.name}</TableCell>
                    <TableCell>
                      <Chip color={chipColor}>{chipChildren}</Chip>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </TableContainer>
        </DashboardPageBox>

        <DashboardPageDivider />
      </DashboardPageContainer>
    </Fragment>
  );
};

export default Home;
