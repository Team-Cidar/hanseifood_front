import styled from 'styled-components';
import { EColor } from '@styles/color';
import { Title2, Title3, body1 } from '@styles/font';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 84vh;
  padding: 24px;
`;

export const Logo = styled.div`
  color: ${EColor.COLOR_PRIMARY};
  ${Title2};
`;

export const TempBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const TitleText = styled.div`
  color: ${EColor.COLOR_PRIMARY};
  ${Title3};
  padding: 4px;
`;

export const TitleSubText = styled.div`
  color: ${EColor.TEXT_600};
  ${body1};
`;
