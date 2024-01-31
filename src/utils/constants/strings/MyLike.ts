import { StringConstant } from '@type/index';

const MyLike: StringConstant = {
  title: {
    ko: '좋아요 목록',
    en: 'Like History',
    zh: '点赞列表',
  },
  'alert.toggleLike': {
    ko: '정말 좋아요를 취소하시겠습니까?',
    en: 'Are you sure to unlike this menu?',
    zh: '确定要取消对这个菜单的点赞吗?',
  },
} as const;

export default MyLike;
