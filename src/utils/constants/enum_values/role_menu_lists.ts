import { AccessibleMenuItemGroup, MenuListItem } from '@type/index';

export const MENU_LIST_BY_ROLE = {
  A: <AccessibleMenuItemGroup>[
    [MenuListItem.COMMENT, MenuListItem.LIKE],
    [MenuListItem.HELP, MenuListItem.ABOUT],
    [MenuListItem.BACK],
  ],
  M: <AccessibleMenuItemGroup>[
    [MenuListItem.COMMENT, MenuListItem.LIKE],
    [MenuListItem.HELP, MenuListItem.ABOUT],
    [MenuListItem.BACK],
  ],
  U: <AccessibleMenuItemGroup>[
    [MenuListItem.COMMENT, MenuListItem.LIKE],
    [MenuListItem.HELP, MenuListItem.ABOUT],
  ],
  G: <AccessibleMenuItemGroup>[[MenuListItem.HELP, MenuListItem.ABOUT]],
} as const;
export type MenuListByRoleKey = keyof typeof MENU_LIST_BY_ROLE;
