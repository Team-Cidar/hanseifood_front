import { ToggleBox, ToggleIcon } from './Toggle.styled';

interface ToggleProps {
  checked: boolean;
  onClick: () => void;
  disabled: boolean;
}

export const Toggle = ({ checked, onClick, disabled }: ToggleProps) => {
  if (disabled) {
    return (
      /* 토글 비활성화 디자인 필요 */
      <ToggleBox>
        <ToggleIcon />
      </ToggleBox>
    )
  }
  return (
    <ToggleBox checked={checked} onClick={onClick}>
      <ToggleIcon checked={checked} />
    </ToggleBox>
  );
};
