import { EColor } from '@styles/color';
import { Title4_2, body3 } from '@styles/font';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  padding: 24px;
  gap: 12px;
`;

export const InputView = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputTitle = styled.div`
  ${Title4_2}
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px dashed ${EColor.TEXT_900};
  border-radius: 8px;
  padding: 16px;
  gap: 4px;
`;

export const DateInputContainer = styled.div`
  input[type="date"] {
    width: 100%;
  }
`;

export const ButtonView = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const SubText = styled.div`
	color: ${EColor.TEXT_600};
	${body3};
`;