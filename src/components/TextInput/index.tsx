import React, { useState } from 'react';
import { TextInputBox, CharacterCount, TextInputContainer, TInputContainer, TInputBox } from './TextInput.styled';

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
}

export const TextInput: React.FC<TextInputProps> = ({ value, onChange, maxLength }) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (maxLength === undefined || event.target.value.length <= maxLength) {
      onChange(event.target.value);
    }
  };

  return (
    <TextInputContainer>
      <TextInputBox
        value={value}
        onChange={handleChange}
        placeholder="입력하세뇨'v'/"
        maxLength={maxLength}
      />
      <CharacterCount>
        {value.length}/{maxLength}
      </CharacterCount>
    </TextInputContainer>
  );
};

export const TI: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  return (
    <div>
      <TextInput value={inputValue} onChange={handleInputChange} maxLength={50}/>
    </div>
  );
};

export const NickInput: React.FC<TextInputProps> = ({ value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <TInputContainer>
      <TInputBox
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="닉네임 입력"
      />
    </TInputContainer>
  );
};

export const PassInput: React.FC<TextInputProps> = ({ value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <TInputContainer>
      <TInputBox
        type="password"
        value={value}
        onChange={handleChange}
        placeholder="Password"
      />
    </TInputContainer>
  );
};

export const Nick: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  return (
    <div>
      <NickInput value={inputValue} onChange={handleInputChange} />
    </div>
  );
};

export const Pass: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  return (
    <div>
      <PassInput value={inputValue} onChange={handleInputChange} />
    </div>
  );
};
