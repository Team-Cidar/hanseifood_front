import styled from 'styled-components';
import { EColor } from '@styles/color';
import { Title2 } from '@styles/font';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 90vh;
  padding: 24px 24px 0px 24px;
`;

export const Body = styled.div`
  overflow: scroll;
  padding: 12px;
`;

export const Logo = styled.div`
  color: ${EColor.COLOR_PRIMARY};
  ${Title2};
`;

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 8px;
  border: 1px solid ${EColor.TEXT_400};
  border-width: 0px 0px 1.2px 0px;
`;

export const SvgButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  padding: 8px;
  border-width: 0px 0px 1.5px 0px;
  border-color: ${EColor.TEXT_500};
  border-style: solid;
  border-radius: 12px;
`;
