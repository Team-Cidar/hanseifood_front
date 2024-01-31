import { Comment } from '@components/Comment';
import { Divider } from '@components/Divider';
import { DefaultComment } from '@type/defaults';

export const CommentPage = () => {
  const onDelete = (commentId: string) => {
    console.log(commentId)
  }
  return (
    <div style={{padding: '18px'}}>
      <Comment comment={DefaultComment} onClickDelete={onDelete} />
      <Divider />
      <Comment comment={DefaultComment} onClickDelete={onDelete} />
      <Divider />
      <Comment comment={DefaultComment} onClickDelete={onDelete} />
    </div>
  );
};
