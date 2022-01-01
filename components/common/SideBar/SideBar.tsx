// npm modules
import React from 'react';

// out of scope modules
import {
  SideBarContainer,
  SideBarList,
  SideBarListItem,
  SideBarListItemIcon,
  SideBarListItemText,
} from '..';

export const SideBar = (props: any) => {
  return (
    <SideBarContainer>
      {/* list */}
      <SideBarList>
        {props.items.map((item: any) => {
          return (
            <SideBarListItem key={item.id}>
              <SideBarListItemIcon>{item.icon}</SideBarListItemIcon>
              <SideBarListItemText>{item.text}</SideBarListItemText>
            </SideBarListItem>
          );
        })}
      </SideBarList>
    </SideBarContainer>
  );
};
