import { EColor } from '@styles/color';
import { Title5, body3, body4, body5 } from '@styles/font';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 12px;
  /* border: 1px solid ${EColor.TEXT_400};
	border-width: 1.2px 0px 1.2px 0px; */
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CommentView = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px;
  padding: 14px;
  background-color: ${EColor.TEXT_400};
  border-radius: 12px;
`;

export const NameText = styled.div`
  ${Title5};
  color: ${EColor.COLOR_PRIMARY};
`;

export const CommentText = styled.div`
  ${body3};
  /* color: ${EColor.TEXT_700}; */
`;

export const DateView = styled.div`
  width: 100%;
  flex-direction: row-reverse;
  display: flex;
  margin-top: 6px;
`;

export const DateText = styled.div`
  ${body5};
  color: ${EColor.TEXT_800};
`;

export const SvgButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 4px;
`;

export const ReportCommentText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${body4}
  color: ${EColor.TEXT_700};
  margin-right: 4px;
`;