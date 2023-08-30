import { ReactNode } from 'react';
import { StyledDisabledToggleView, StyledLabel, StyledToggleView } from './ToggleView.styled';

interface IToggleView {
  label?: string;
  children?: ReactNode;
  disabled?: boolean;
}

export const ToggleView = ({ label, children, disabled }: IToggleView) => {
  return (
    disabled ? (
      <StyledDisabledToggleView>
        학생 & 교직원
      </StyledDisabledToggleView>
    ) : (
      <StyledToggleView>
        <StyledLabel>
          {label}
        </StyledLabel>
        {children}
      </StyledToggleView>
    )
  );
};
