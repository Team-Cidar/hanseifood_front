import styled from 'styled-components';

import {EColor} from '@styles/color';
import {Title1, Title2, body3, body6} from '@styles/font';

const VHeight = window.innerHeight;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 24px;
  height: ${VHeight - 94}px;
  border: 1px solid red;
`;

export const Title = styled.div`
  color: ${EColor.COLOR_PRIMARY};
  ${Title1};
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding: 12px;
  border: 2px solid black;
  border-radius: 8px;
`;

export const InputComponent = styled.input`
  width: 80%;
  height: 50px;
  border: 2px solid black;
  border-radius: 10px;
  margin: 12px;
`;
