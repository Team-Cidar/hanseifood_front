import {StringConstant} from '@type/index';

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
  'label.comment': {
    ko: '댓글 목록',
    en: 'Comments History',
    zh: '回帖列表'
  },
  'label.like': {
    ko: '좋아요 목록',
    en: 'Like History',
    zh: '点赞列表'
  }
} as const;

export default MyPage;
