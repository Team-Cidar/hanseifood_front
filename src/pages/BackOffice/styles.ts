import { EColor } from '@styles/color';
import { Title4_2 } from '@styles/font';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  padding: 24px;
  gap: 12;
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
`;

export const DateInputContainer = styled.div`
  input[type="date"] {
    width: 100%;
  }
`;


export const IconButtonContainer = styled.div`
  margin-bottom: 40px;
  margin-right: 40px;
`;
