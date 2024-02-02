import styled from 'styled-components';
import { ContainerProps } from './types';
import { EColor } from '@styles/color';
import { Title5 } from '@styles/font';

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: ${(props) => props.height - 48}px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding: 24px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  padding: 12px 12px;
  gap: 8px;
  box-shadow: 0px -4px 4px ${EColor.TEXT_400};
`;

export const LikeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubmitButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const CommentInput = styled.textarea`
  border: 0px;
  width: 100%;
  height: auto;
  border-bottom: 2px solid ${EColor.GRAY};
  background-color: transparent;
  color: ${EColor.TEXT_700};
  padding: 4px;
  ${Title5}
  caret-color: transparent;
  overflow-wrap: break-word;
  word-break: break-all;
  white-space: pre-wrap;
  transition: 0.3s;
  &:focus {
    outline: none;
    border-color: ${EColor.COLOR_INTERACTION};
    border-width: 2px;
    color: ${EColor.TEXT_900};
    transition: 0.3s;
  }
`;
