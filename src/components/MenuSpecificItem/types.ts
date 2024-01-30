import { MenuSpecific } from "@type/index"

export interface MenuSpecificItemProps {
  menu: MenuSpecific,
  liked?: boolean,
  onClick: (menuId: string) => void
}

export interface IDateText {
    $deleted?: boolean
}