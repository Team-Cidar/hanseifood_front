import { ButtonView, Container, InputBox, InputContainer, InputTitle, InputTitleWrapper, InputView, SubText, SvgButton } from './styles';
import { IconButton } from '@components/Button';
import PageLogo from '@components/PageLogo';
import { BackOfficeViewProps } from './types';
import { TextInput } from '@components/TextInput';
import { EColor } from '@styles/color';
import SvgIcon from '@components/SvgIcon';

const BackOfficeView = ({getter, setter, handleUploadMenu, handleExcelWeekMenu, handleModal, handleDeleteMenu}: BackOfficeViewProps) => (
  <Container>
    <PageLogo title={'식단표 업로드'} />
    <InputContainer>
      <input
        type="date"
        value={getter[0]}
        onChange={(e) => setter[0](e.target.value)} />
      <InputView>
        <InputBox>
          <InputTitleWrapper>
            <SvgButton onClick={() => handleModal('S')}>
              <SvgIcon
                name="history"
                width={20}
                height={20}
                fill={EColor.TEXT_500}
              />
            </SvgButton>
            <InputTitle>
              학생
            </InputTitle>
            <SvgButton onClick={() => handleDeleteMenu('S')}>
              <SvgIcon
                name='delete'
                width={20}
                height={20}
                fill={EColor.TEXT_500}
              />
            </SvgButton>
          </InputTitleWrapper>
          <TextInput value={getter[1]} onChange={setter[1]} maxLength={60} placeholder={getter[4][0]} />
        </InputBox>
        <InputBox>
          <InputTitleWrapper>
            <SvgButton onClick={() => handleModal('E')}>
              <SvgIcon
                name="history"
                width={20}
                height={20}
                fill={EColor.TEXT_500}
              />
            </SvgButton>
            <InputTitle>
              교직원
            </InputTitle>
            <SvgButton onClick={() => handleDeleteMenu('E')}>
              <SvgIcon
                name='delete'
                width={20}
                height={20}
                fill={EColor.TEXT_500}
              />
            </SvgButton>
          </InputTitleWrapper>
          <TextInput value={getter[2]} onChange={setter[2]} maxLength={60} placeholder={getter[4][1]} />
        </InputBox>
        <InputBox>
          <InputTitleWrapper>
            <SvgButton onClick={() => handleModal('A')}>
              <SvgIcon
                name="history"
                width={20}
                height={20}
                fill={EColor.TEXT_500}
              />
            </SvgButton>
            <InputTitle>
              일품
            </InputTitle>
            <SvgButton onClick={() => handleDeleteMenu('A')}>
              <SvgIcon
                name='delete'
                width={20}
                height={20}
                fill={EColor.TEXT_500}
              />
            </SvgButton>
          </InputTitleWrapper>
          <TextInput value={getter[3]} onChange={setter[3]} maxLength={60} placeholder={getter[4][2]} />
        </InputBox>
      </InputView>
      <SubText>',' 로 입력할 식단표를 나눠서 입력해주세요</SubText>
    </InputContainer>
    <ButtonView>
      <IconButton
        label="식단표 업로드"
        width={"132px"}
        height={"50px"}
        onClick={handleUploadMenu} />
      <IconButton
        label="엑셀파일 추출하기"
        width={"152px"}
        height={"50px"}
        onClick={handleExcelWeekMenu} />
    </ButtonView>
  </Container>
);

export default BackOfficeView;