export type StateGetter = [string, string, string, string]
export type StateSetter = [React.Dispatch<React.SetStateAction<string>>, React.Dispatch<React.SetStateAction<string>>, React.Dispatch<React.SetStateAction<string>>, React.Dispatch<React.SetStateAction<string>>]
export type BackOfficeViewProps = {
    getter: StateGetter;
    setter: StateSetter;
    handleUploadMenu: () => void;
  };