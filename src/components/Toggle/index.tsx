import { ToggleBox, ToggleIcon } from './Toggle.styled';

interface ToggleProps {
  checked: boolean;
  onClick: () => void;
}

export const Toggle = ({ checked, onClick }: ToggleProps) => {
  return (
    <ToggleBox checked={checked} onClick={onClick}>
      <ToggleIcon checked={checked} />
    </ToggleBox>
  );
};
