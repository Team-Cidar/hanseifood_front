import { EColor } from '@styles/color';
import { Title4_2, Title6, body3 } from '@styles/font';
import styled from 'styled-components';
import { IDateText } from './types';

export const Container = styled.div`
  display: flex;
  flex: none;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px dashed black;
  border-radius: 22px;
  object-fit: contain;
  width: 100%;
  height: 212px;
  padding: 16px 16px 8px 16px;
  margin-bottom: 12px;
  box-shadow: 0 3px 3px ${EColor.TEXT_400};
`;

export const DateText = styled.h2<IDateText>`
  ${Title4_2}
  color: ${EColor.TEXT_800};
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
  padding: 4px;
  border: 1px dashed ${EColor.TEXT_900};
  border-width: 0px 0px 1px 0px;
  text-decoration: ${({ $deleted }) => ($deleted ? 'line-through' : 'none')};
`;

export const MenuCard = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  flex-direction: column;
`;

export const MenuList = styled.p`
  display: flex;
  text-align: center;
  ${body3}
  color: ${EColor.TEXT_800};
  white-space: normal;
  line-height: 24px;
`;

export const FeedbackBottom = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row-reverse;
  align-items: center;
  gap: 6px;
`;

export const SvgView = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 13px;
`;
export const SvgText = styled.div`
  ${Title6}
  color: ${EColor.TEXT_500};
  -webkit-text-stroke: 0.6px ${EColor.TEXT_900};
`;
