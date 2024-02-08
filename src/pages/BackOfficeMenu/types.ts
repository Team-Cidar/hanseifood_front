import { MenuSpecific } from '@type/index';

export type StateGetter = [string, string, string, string, string[]];
export type StateSetter = [
  React.Dispatch<React.SetStateAction<string>>,
  React.Dispatch<React.SetStateAction<string>>,
  React.Dispatch<React.SetStateAction<string>>,
  React.Dispatch<React.SetStateAction<string>>,
];
export type BackOfficeViewProps = {
  getter: StateGetter;
  setter: StateSetter;
  handleUploadMenu: () => void;
  handleExcelWeekMenu: () => void;
  handleModal: (menuType: string) => void;
  handleDeleteMenu: (menuType: string) => void;
};
export type MenuHistory = {
  date: string;
  menuType: string;
  history: MenuSpecific[];
};
