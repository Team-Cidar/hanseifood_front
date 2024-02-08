import { StringConstant } from '@type/index';

const MyComment: StringConstant = {
  title: {
    ko: '댓글 목록',
    en: 'Comment History',
    zh: '点赞列表',
  },
  'alert.delete': {
    ko: '정말 댓글을 삭제하시겠습니까?',
    en: 'Are you sure to delete this comment?',
    zh: '您确定要删除此评论吗?',
  },
} as const;

export default MyComment;
