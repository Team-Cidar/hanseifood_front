import { StringConstant } from '@type/index';

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
  toggleLabelStudent: {
    ko: '학생 식당 식단표',
    en: 'Student Menu',
    zh: '学生食堂菜单',
  },
  toggleLabelEmployee: {
    ko: '교직원 식당 식단표',
    en: 'Employee Menu',
    zh: '学院食堂菜单',
  },
  toggleLabelStudentAndEmployee: {
    ko: '학생 & 교직원 식당 식단표',
    en: 'Student & Employee Menu',
    zh: '学生和教师食堂餐桌',
  },
  'menu.empty': {
    ko: '메뉴가 존재하지 않습니다.',
    en: 'Menu not exists',
    zh: '没有彩蛋',
  },
} as const;

export default Home;
