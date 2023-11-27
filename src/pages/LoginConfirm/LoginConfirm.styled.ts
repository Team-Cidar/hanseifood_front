import styled from 'styled-components';

import {EColor} from '@styles/color';
import {Title1, Title2, Title3, body3, body6} from '@styles/font';

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

export const InputText = styled.input`
  border: 0px;
  border-bottom: 2px solid ${EColor.GRAY};
  padding: 8px 8px 2px 4px;
  width: 50%;
  caret-color: transparent;
  background-color: transparent;
  color: ${EColor.COLOR_SECONDARY};
  ${Title2};
  transition: 0.3s;
  &:focus {
    outline: none;
    box-shadow: 0px;
    border-bottom: 2px solid ${EColor.COLOR_INTERACTION};
    transition: 0.3s;
    width: 100%;
    color: ${EColor.TEXT_900};
  }
`;
