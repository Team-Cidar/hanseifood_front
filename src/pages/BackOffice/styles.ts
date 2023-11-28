import { EColor } from '@styles/color';
import { Title2 } from '@styles/font';
import styled from 'styled-components';

export const BackOfficeContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-end;
  align-items: flex-end;
  height: 100vh;
  padding: 16px;
`;

export const Logo = styled.div`
  position: absolute;
  top: 40px;
  left: 40px;
  color: ${EColor.COLOR_PRIMARY};
  ${Title2};
`;

export const ToggleContainer = styled.div`
margin-bottom: 16px;
position: absolute;
top: 40px;
right: 40px;
flex-direction: column;
`;


export const InputContainer = styled.div`
border: 2px solid ${EColor.TEXT_900};
  border-radius: 8px;
  background-color: white;
  display: flex;
  position: absolute;
  height: 30%;
  width: calc(100% - 80px);
  margin: 40px, 40px;
  padding: 16px;
  top: 100px;
  left: 40px;
`;

export const IconButtonContainer = styled.div`
  margin-bottom: 120px;
  margin-right: 40px;
`;


