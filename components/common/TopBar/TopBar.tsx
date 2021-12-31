// npm modules
import React, { useState } from 'react';

// in scope modules

// out of scope modules
import {
  TopBarContainer,
  TopBarList,
  TopBarListItem,
  TopBarMenu,
  TopBarMenuItem,
  TopBarBrand,
} from '..';

// component
export const TopBar = (props: any) => {
  // state
  const [topBarMenuAnchorElement, setMenuAnchorElement] = useState<any>();
  const [topBarMenuIsOpen, setMenuIsOpen] = useState<any>(true);
  const [topBarMenuItems, setMenuItems] = useState<any>([]);

  // event handlers
  const handleTopBarMenuClose = () => {
    setMenuIsOpen(false);
  };

  // render
  return (
    <TopBarContainer>
      <TopBarBrand></TopBarBrand>
      <TopBarList>
        {props.items.map((item: any) => {
          // event handlers
          const handleTopBarListItemClick = (event: any) => {
            const newMenuAnchorElement = event.currentTarget;
            const newMenuItems = item.items || [];
            const isNewMenuItemsEmpty = newMenuItems.length <= 0;

            if (!isNewMenuItemsEmpty) {
              setMenuAnchorElement(newMenuAnchorElement);
              setMenuItems(newMenuItems);
              setMenuIsOpen(true);
            }
          };

          // render
          return (
            <TopBarListItem key={item.id} onClick={handleTopBarListItemClick}>
              {item.text}
            </TopBarListItem>
          );
        })}
      </TopBarList>

      <TopBarMenu
        anchorElement={topBarMenuAnchorElement}
        isOpen={topBarMenuIsOpen}
        onClose={handleTopBarMenuClose}
      >
        {topBarMenuItems.map((topBarMenuItem: any) => {
          const handleTopBarMenuItemClick = () => {
            topBarMenuItem.onClick?.();
            setMenuIsOpen(false);
          };
          return (
            <TopBarMenuItem
              key={topBarMenuItem.id}
              onClick={handleTopBarMenuItemClick}
            >
              {topBarMenuItem.text}
            </TopBarMenuItem>
          );
        })}
      </TopBarMenu>
    </TopBarContainer>
  );
};
