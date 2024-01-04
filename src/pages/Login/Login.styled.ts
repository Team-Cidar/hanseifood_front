import styled from 'styled-components';

import { EColor } from '@styles/color';
import { Title1 } from '@styles/font';

interface IContentProps {
  $display: boolean;
}

const VHeight = window.innerHeight;

export const Container = styled.div`
  position: relative;
  height: ${VHeight - 94}px;
`;

export const Content = styled.div<IContentProps>`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  width: 100%;
  height: 40%;
  padding: 24px;
  opacity: ${({$display}) => ($display ? 1 : 0)};
  visibility: ${({$display}) => ($display ? 'visible' : 'hidden')};
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
`;

export const Title = styled.div`
  color: ${EColor.COLOR_PRIMARY};
  ${Title1};
`;
