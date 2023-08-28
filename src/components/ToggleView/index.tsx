import { ReactNode } from 'react';
import { StyledLabel, StyledToggleView } from './ToggleView.styled';

interface IToggleView {
  label: string;
  children: ReactNode;
}

export const ToggleView = ({ label, children }: IToggleView) => {
  return (
    <StyledToggleView>
      <StyledLabel>
        {label}
      </StyledLabel>
      {children}
    </StyledToggleView>
  );
};
