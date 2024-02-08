import { StringConstant } from '@type/index';

const Comment: StringConstant = {
  'confirm.delete': {
    ko: '댓글을 지우시겠습니까?',
    en: 'Are you sure to delete this comment?',
    zh: '您确定要删除此评论吗？',
  },
  'confirm.add': {
    ko: '댓글을 추가 하시겠습니까?',
    en: 'Are you sure to add this comment?',
    zh: '您确定要添加此评论吗？',
  },
  'confirm.like': {
    ko: '좋아요를 하시겠습니까?',
    en: 'Are you sure to like this menu?',
    zh: '你确定喜欢这个菜单吗？',
  },
  'confirm.like.cancel': {
    ko: '좋아요를 취소하시겠습니까?',
    en: 'Are you sure to unlike this menu?',
    zh: '确定要取消此菜单吗？',
  },
  'alert.empty': {
    ko: '댓글을 입력해주세요',
    en: 'Please enter comments',
    zh: '请输入留言内容',
  },
  'alert.error.menuid': {
    ko: '잘못된 접근입니다.',
    en: 'Inappropriate access',
    zh: 'Inappropriate access',
  },
  'alert.error.guest': {
    ko: '로그인이 필요합니다.',
    en: 'Please sign in first.',
    zh: '请先登录',
  },
  'placeholder.comment': {
    ko: '맛있어요!',
    en: 'Savory!',
    zh: '好吃！',
  },
} as const;

export default Comment;
