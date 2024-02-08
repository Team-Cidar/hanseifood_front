import { StringConstant } from '@type/index';

const NoticePage: StringConstant = {
  title: {
    ko: '공지사항',
    en: 'Notification',
    zh: '公告',
  },
  subtitle: {
    ko: '메뉴 공지사항과 투표를 한눈에!',
    en: 'Check out menu notifications and polls at a glance!',
    zh: '查看菜单通知和投票一目了然!',
  },
  'information.title.implementing': {
    ko: '서비스 준비중입니다!',
    en: 'Service will be available soon!',
    zh: '服务将很快可用!',
  },
  'information.sub.implementing': {
    ko: '곧 만나요!',
    en: 'See you soon!',
    zh: '一会儿见!',
  },
} as const;

export default NoticePage;
