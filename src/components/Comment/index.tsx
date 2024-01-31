import {
  CommentText,
  CommentView,
  Container,
  DateText,
  DateView,
  HeaderWrapper,
  NameText,
  SvgButton,
} from './Comment.styled';
import { Comment as CommentType } from '@type/index';
import SvgIcon from '@components/SvgIcon';
import { EColor } from '@styles/color';

interface CommentComponentProps {
  comment: CommentType;
  onClickDelete: (commentId: string) => void;
}

export const Comment = ({ comment, onClickDelete }: CommentComponentProps) => {
  return (
    <Container>
      <HeaderWrapper>
        <NameText>{comment.commenter.nickname}</NameText>
        <SvgButton onClick={() => onClickDelete(comment.commentId)}>
          <SvgIcon name="delete" width={20} height={20} fill={EColor.TEXT_300} />
        </SvgButton>
      </HeaderWrapper>
      <CommentView>
        <CommentText>{comment.comment}</CommentText>
        <DateView>
          <DateText>{comment.commentedAt}</DateText>
        </DateView>
      </CommentView>
    </Container>
  );
};
