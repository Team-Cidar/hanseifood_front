import styled from 'styled-components';
import { Title5 } from '@styles/font';

interface StyledIconButtonProps {
  width?: number;
  height?: number;
}

export const StyledIconButton = styled.button<StyledIconButtonProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: COLOR_PRIMARY;
  border-radius: 12px;
  border-width: 2px;
  border-style: solid;
  border-color: COLOR_PRIMARY;
  width: ${({width}) => width + 'px' || '118px'};
  height: ${({height}) => height + 'px' || '40px'};
  ${Title5}
`;
