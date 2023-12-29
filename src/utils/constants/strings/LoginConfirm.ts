import {StringConstant} from '@type/index';

const LoginConfirm: StringConstant = {
  'title.direction.kakao.done': {
    ko: '카카오 로그인이 완료된 후 확인 버튼을 눌러주세요',
    en: 'Please press confirm button after kakao login',
    zh: 'Kakao 登录完成后请按确认按钮',
  },
  'title.direction.nickname': {
    ko: '닉네임을 입력해주세요',
    en: 'Please put your nickname',
    zh: '请输入昵称',
  },
  'input.placeholder': {
    ko: '홍길동',
    en: 'John Doe',
    zh: '某人',
  },
  'button.label.kakao.confirm': {
    ko: '확인',
    en: 'Confirm',
    zh: 'Confirm',
  },
  'alert.fail.login': {
    ko: '로그인이 정상적으로 처리되지 않았습니다.\n다시 시도해주세요.',
    en: 'Login failed!\nPlease try again.',
    zh: '登录失败！ 请再试一次。',
  },
} as const;

export default LoginConfirm;
