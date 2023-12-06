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

export const InputContainer = styled.div`
  border: 2px solid ${EColor.TEXT_900};
  border-radius: 8px;
  background-color: white;
  display: flex;
  position: absolute;
  height: 35%;
  width: calc(100% - 80px);
  margin: 40px, 40px;
  padding: 16px;
  top: 100px;
  left: 40px;
  

 div {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: 10px;

  }

  label {
    color: #555;
    margin-bottom: 8px;
    margin-top: 10px;
    font-weight: bold;
  }

  textarea {
    width: 95%;
    flex-grow: 1;
    margin-bottom: 10px;
    overflow-y: auto;
    resize: none;
    white-space: pre-line;
    border-radius: 8px;
    font-size: 20px;
  }
`;



export const AdditionalTextareaContainer = styled.div`
  position: absolute;
  top: calc(100px + 35% + 20px);
  left: 40px;
  height: 30%;
  width: 30%;
  padding: 10px;

  div {
    flex: 1;
    margin-right: 16px;
    display: flex;
    flex-direction: column;
  }

  label {
    color: #555;
    margin-bottom: 10px;
    font-weight: bold;
  }
  
input[type="date"] {
    width: 110px;
  }

  textarea {
    width: 100%;
    height: 80%;
    flex-grow: 1;
    overflow-y: auto;
    resize: none;
    white-space: pre-line;
    border-radius: 8px;
    font-size: 16px;
  }
`;

export const DateInputContainer = styled.div`
  position: absolute;
  top: 0; /* 수정된 부분: 위치 조정 */
  input[type="date"] {
    width: 100%;
  }
  `;


export const IconButtonContainer = styled.div`
  margin-bottom: 120px;
  margin-right: 40px;
`;
