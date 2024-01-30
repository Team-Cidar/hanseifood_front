import { ButtonView, Container, InputBox, InputContainer, InputTitle, InputView, SubText } from './styles';
import { IconButton } from '@components/Button';
import PageLogo from '@components/PageLogo';
import { BackOfficeViewProps } from './types';
import { TextInput } from '@components/TextInput';

const BackOfficeView = ({getter, setter, handleUploadMenu, handleExcelWeekMenu, handleModal}: BackOfficeViewProps) => (
  <Container>
    <PageLogo title={'식단표 업로드'} />
    <InputContainer>
      <input
        type="date"
        value={getter[0]}
        onChange={(e) => setter[0](e.target.value)} />
      <InputView>
        <InputBox>
          <InputTitle onClick={() => handleModal('S')} >
            학생메뉴 ⓘ
          </InputTitle>
          <TextInput value={getter[1]} onChange={setter[1]} maxLength={60} placeholder={getter[4][0]} />
        </InputBox>
        <InputBox>
          <InputTitle onClick={() => handleModal('E')} >
            교직원메뉴 ⓘ
          </InputTitle>
          <TextInput value={getter[2]} onChange={setter[2]} maxLength={60} placeholder={getter[4][1]} />
        </InputBox>
        <InputBox>
          <InputTitle onClick={() => handleModal('A')} >
            일품특선 ⓘ
          </InputTitle>
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