import { EColor } from '@styles/color';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 90vh;
  padding: 24px;
`;

export const SvgButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  padding: 8px;
  border-radius: 12px;
  background-color: ${EColor.TEXT_300};
  box-shadow: 0 3px 3px ${EColor.TEXT_600};
`;