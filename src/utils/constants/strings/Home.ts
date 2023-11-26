import {StringConstant} from '@type/index';

const Home: StringConstant = {
  title: {
    ko: '홈',
    en: 'Home',
    zh: '首页',
  },
  subtitle: {
    ko: '식단표를 미리 확인하고 식권을 편리하게 구매하세요!',
    en: 'Check menus in advance and buy meal tickets conveniently!',
    zh: '请提前确认食谱，方便购买餐券！',
  },
} as const;

export default Home;
