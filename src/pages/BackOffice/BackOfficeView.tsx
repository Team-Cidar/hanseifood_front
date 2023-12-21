import React, { useState } from 'react';
import { BackOfficeContainer, IconButtonContainer, AdditionalTextareaContainer, InputContainer, Logo, DateInputContainer } from './styles';
import { IconButton } from '@components/Button';

const BackOfficeView = () => {
  const [studentMenu, setStudentMenu] = useState<string>("");
  const [staffMenu, setStaffMenu] = useState<string>("");
  const [specialMenu, setSpecialMenu] = useState<string>("");
  const [breakfastMenu, setBreakfastMenu] = useState<string>("");
  
  const [inputDate, setInputDate] = useState<string>("");
  const [additionalTextareaDate, setAdditionalTextareaDate] = useState<string>("");

  return (
    <BackOfficeContainer>
      <Logo>Back-Office</Logo>


      <InputContainer>
      <DateInputContainer>
        <input
          type="date"
          value={inputDate}
          onChange={(e) => setInputDate(e.target.value)}
        />
      </DateInputContainer>
        <div>
          <label>학생</label>
          <textarea
            value={studentMenu}
            onChange={(e) => setStudentMenu(e.target.value)}
          />
        </div>

        <div>
          <label>교직원</label>
          <textarea
            value={staffMenu}
            onChange={(e) => setStaffMenu(e.target.value)}
          />
        </div>

        <div>
          <label>일품</label>
          <textarea
            value={specialMenu}
            onChange={(e) => setSpecialMenu(e.target.value)}
          />
        </div>
      </InputContainer>

      <AdditionalTextareaContainer>
        <div style={{ marginBottom: 8 }}>
          <input
            type="date"
            value={additionalTextareaDate}
            onChange={(e) => setAdditionalTextareaDate(e.target.value)}
          />
        </div>

        <label>천원의 아침밥</label>
        <textarea
          value={breakfastMenu}
          onChange={(e) => setBreakfastMenu(e.target.value)}
        />
      </AdditionalTextareaContainer>

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
    </BackOfficeContainer>
  );
};

export default BackOfficeView;