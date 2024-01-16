import { EColor } from "@styles/color";
import styled from "styled-components";

interface StyledToggleProps {
  checked: boolean;
  disabled: boolean;
}

export const ToggleBox = styled.div<StyledToggleProps>`
  background-color: ${({ checked }) => (checked ? EColor.COLOR_INTERACTION : EColor.TEXT_300)};
  border: 2px solid ${({ checked, disabled }) => (disabled ? EColor.TEXT_500 : EColor.TEXT_900)};
  border-radius: 24px;
  width: 42px;
  height: 20px;
  position: relative;
  transition: 0.3s;
  padding: 1px;
`;

export const ToggleIcon = styled.div<StyledToggleProps>`
  background-color: ${({ checked, disabled }) => (disabled ? EColor.TEXT_400 : EColor.TEXT_500)};
  border: 2px solid ${({ checked, disabled }) => (disabled ? EColor.TEXT_500 : EColor.TEXT_900)};
  width: 14px;
  height: 14px;
  border-radius: 24px;
  position: absolute;
  left: ${({ checked }) => (checked ? '23px' : '1px')};
  transition: 0.3s;
`;