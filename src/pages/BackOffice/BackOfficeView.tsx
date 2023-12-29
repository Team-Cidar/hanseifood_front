import { ButtonView, Container, InputBox, InputContainer, InputTitle, InputView, SubText } from './styles';
import { IconButton } from '@components/Button';
import PageLogo from '@components/PageLogo';
import { BackOfficeViewProps } from './types';
import { TextInput } from '@components/TextInput';

const BackOfficeView = ({getter, setter, handleUploadMenu}: BackOfficeViewProps) => (
  <Container>
    <PageLogo title={'식단표 업로드'} />
    <InputContainer>
      <input
        type="date"
        value={getter[0]}
        onChange={(e) => setter[0](e.target.value)} />
      <InputView>
        <InputBox>
          <InputTitle>
            학생메뉴
          </InputTitle>
          <TextInput value={getter[1]} onChange={setter[1]} maxLength={50} placeholder="',' 로 입력할 식단표를 나눠서 입력해주세요" />
        </InputBox>
        <InputBox>
          <InputTitle>
            교직원메뉴
          </InputTitle>
          <TextInput value={getter[2]} onChange={setter[2]} maxLength={50} placeholder="',' 로 입력할 식단표를 나눠서 입력해주세요" />
        </InputBox>
        <InputBox>
          <InputTitle>
            일품특선
          </InputTitle>
          <TextInput value={getter[3]} onChange={setter[3]} maxLength={50} placeholder="',' 로 입력할 식단표를 나눠서 입력해주세요" />
        </InputBox>
      </InputView>
      <SubText>ex) 돼지고기김치찌개, 시금치무침, 연두부, 밥, 된장국</SubText>
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
        onClick={() => console.log("asdfas")} />
    </ButtonView>
  </Container>
);

export default BackOfficeView;