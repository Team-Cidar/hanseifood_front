import { StringConstant } from '@type/index';

const MyPage: StringConstant = {
  title: {
    ko: '내 정보',
    en: 'My Info',
    zh: '我的数据',
  },
  'listbutton.label.login': {
    ko: '로그인',
    en: 'Login',
    zh: '登陆',
  },
  'listbutton.label.logout': {
    ko: '로그아웃',
    en: 'Logout',
    zh: '登出',
  },
  'listbutton.label.tickets': {
    ko: '구매 내역',
    en: 'Purchase History',
    zh: '购买明细',
  },
  'listbutton.label.help': {
    ko: '도움말',
    en: 'Help',
    zh: '帮助',
  },
  'listbutton.label.aboutme': {
    ko: 'About me',
    en: 'About me',
    zh: '开发人员',
  },
  'listbutton.label.comment': {
    ko: '댓글 목록',
    en: 'Comments History',
    zh: '回帖列表',
  },
  'listbutton.label.like': {
    ko: '좋아요 목록',
    en: 'Like History',
    zh: '点赞列表',
  },
  'listbutton.label.backoffice': {
    ko: '백 오피스',
    en: '백 오피스',
    zh: '백 오피스',
  },
  'confirm.logout': {
    ko: '정말 로그아웃 하시겠습니까?',
    en: 'Are you sure to sign out?',
    zh: '您确定要退出吗？',
  },
} as const;

export default MyPage;
