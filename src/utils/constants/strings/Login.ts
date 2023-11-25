import {StringConstant} from '@type/index';

const Login: StringConstant = {
  'title.direction.kakao': {
    ko: '카카오톡을 이용해 로그인해 주세요',
    en: 'Please login using Kakao Talk',
    zh: '请使用Kakao Talk登录',
  },
  'title.direction.nickname': {
    ko: '닉네임을 입력해주세요',
    en: 'Please put your nickname',
    zh: '请输入昵称',
  },
} as const;

export default Login;
