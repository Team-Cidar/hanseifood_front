import React from 'react';
import {StyledIconButton} from './Button.styled';

interface IIconButton {
  label: string;
  svg?: React.ReactElement<SVGAElement>;
  width?: number;
  height?: number;
  onClick?: () => void;
}

export const IconButton = ({
  label,
  width,
  height,
  svg,
  onClick,
}: IIconButton) => {
  return (
    <StyledIconButton width={width} height={height}>
      {label.toUpperCase()}
    </StyledIconButton>
  );
};
