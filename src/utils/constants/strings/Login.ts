import {StringConstant} from '@type/index';

const Login: StringConstant = {
  'title.direction.kakao': {
    ko: '카카오톡을 이용해 로그인해 주세요',
    en: 'Please login using Kakao Talk',
    zh: '请使用Kakao Talk登录',
  },
  'button.label.kakao': {
    ko: '카카오로 시작하기',
    en: 'Start with Kakao',
    zh: 'Start with Kakao',
  },
} as const;

export default Login;
