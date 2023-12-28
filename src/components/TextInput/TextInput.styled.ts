import styled from 'styled-components';

export const TextInputContainer = styled.div<{ width?: string }>`
  position: relative;
  width: ${(props) => props.width || '400px'}; // 기본값 400으로 지정
`;

export const TextInputBox = styled.textarea`
  margin: 8px;
  padding: 10px;
  font-size: 15px;
  font-family: Arial, sans-serif;
  background-color: #F2F2F250;
  border: 2px solid #ccc;
  border-radius: 10px;
  width: 100%;
  height: 200px;
  resize: none;
  text-align: left;
  

  &:focus { // 눌렀을 때 색 바뀌게
    outline: none;
    background-color: #8BF7FB30;
    border-color: #00FFFF;
    box-shadow: 5px 5px 10px #F2F2F2;
  }
`;

export const CharacterCount = styled.div`
    position: absolute;
    bottom: 20px;
    right: 0px;
    font-size: 12px;
    color: #555;
    display: flex;
    flex-direction: column;
`;

export const TInputContainer = styled.div`
  position: relative;
  width: 100px;
`;

export const TInputBox = styled.input<{ error?: boolean }>`
  margin: 8px;
  padding: 10px;
  width: 200px;
  height: 30px;
  resize: none;

  font-size: 14px;
  font-family: Arial, sans-serif;

  background-color: #F2F2F250;

  border: 2px solid ${(props) => (props.error ? 'red' : '#ccc')};
  border-radius: 10px;

  text-align: left;
  


  &:focus { // 눌렀을 때 색 바뀌게
    outline: none;
    background-color: #8BF7FB30;
    border-color: #00FFFF;
    box-shadow: 5px 5px 10px #F2F2F2;
  }

`;

