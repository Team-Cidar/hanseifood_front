import React, { useState } from 'react';
import { BackOfficeContainer, IconButtonContainer, ToggleContainer, InputContainer, Logo } from './styles';
import { IconButton } from '@components/Button';
import { Toggle } from '@components/Toggle';

const BackOfficeView = () => {
  const [isStudentMenu, setIsStudentMenu] = useState(false);

  return (
    <BackOfficeContainer>
        <Logo>
        Back-Office
      </Logo>
      <InputContainer>
      
      </InputContainer>

      <IconButtonContainer>
        <IconButton
          label="식단표 업로드"
          width={120}
          height={50}
          onClick={() => {
            //
          }}
        />
      </IconButtonContainer>
      
      <ToggleContainer>
        <Toggle
          checked={isStudentMenu}
          onClick={() => setIsStudentMenu((prev) => !prev)}
        />
      </ToggleContainer>
    </BackOfficeContainer>
  );
};

export default BackOfficeView;
