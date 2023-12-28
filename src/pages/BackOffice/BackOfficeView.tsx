import { Container, InputBox, InputContainer, InputTitle, InputView } from './styles';
import { IconButton } from '@components/Button';
import PageLogo from '@components/PageLogo';
import { BackOfficeViewProps } from './types';
import { TextInput } from '@components/TextInput';

const BackOfficeView = ({getter, setter}: BackOfficeViewProps) => (
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
          <TextInput value={getter[1]} onChange={setter[1]} maxLength={50} />
        </InputBox>
        <InputBox>
          <InputTitle>
            교직원메뉴
          </InputTitle>
          <TextInput value={getter[2]} onChange={setter[2]} maxLength={50} />
        </InputBox>
        <InputBox>
          <InputTitle>
            일품특선
          </InputTitle>
          <TextInput value={getter[3]} onChange={setter[3]} maxLength={50} />
        </InputBox>
        <InputBox>
        </InputBox>
      </InputView>
    </InputContainer>
    <IconButton
      label="식단표 업로드"
      width={"132px"}
      height={"50px"}
      onClick={() => console.log("asdfas")} />
    <IconButton
      label="엑셀파일 추출하기"
      width={"152px"}
      height={"50px"}
      onClick={() => console.log("asdfas")} />
  </Container>
);

export default BackOfficeView;