import styled from 'styled-components';
import {Title2, Title5, Title6, body1} from '@styles/font';
import { EColor } from '@styles/color';

interface StyledTicketItemProps {
  width?: number;
  height?: number;
}

export const StyledTicketItem = styled.div<StyledTicketItemProps>`

  position: relative;  
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: COLOR_PRIMARY;
  border-radius: 8px;
  border: 3px solid #BDBDBD;
  width: ${({ width }) => (width ? width + 'px' : '100%')};
  height: ${({ height }) => (height ? height + 'px' : '30%')};
  
  ::before {
    content: '';
    position: absolute;
    display: flex;
    height: 10px;
    width: 20px;
    background-color: white;
    border-radius: 0 0 20px 20px;
    border: 3px solid #BDBDBD;
    border-top: white;
    left: 76%;
    top: -2.6px;
    z-index: 1;
  }

  ::after {
    content: '';
    position: absolute;
    display: flex;
    height: 10px;
    width: 20px;
    background-color: white;
    border-radius: 20px 20px 0 0;
    border: 3px solid #BDBDBD;
    border-bottom: white;
    left: 76%;
    bottom: -2.6px;
    z-index: 1;
  }

  &::before {
    content: '';
    position: relative;
    display: flex;
    height: 100%;
    width: 2px;
    background: repeating-linear-gradient(
      to bottom,
      transparent 0px,
      transparent 5px,
      #D5D5D5 5px,
      #D5D5D5 10px
    );
    left: 78.5%;
    top: 0;
    z-index: 0;
  }
`;

export const Title = styled.div`
  color: ${EColor.GRAD_BR};
  ${Title5};
  font-weight: bold;
`
export const Body = styled.div`
  color: ${EColor.COLOR_PRIMARY};
  ${body1};
`
export const Tail = styled.div`
  color: ${EColor.TEXT_700};
  ${Title6};
`
export const Price = styled.div`
  color: ${EColor.TEXT_900};
  ${Title2};
  margin-bottom: 10px;
`

export const Image = styled.img`
  width: 104px;
  height: 100%;
`