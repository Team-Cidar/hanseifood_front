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
import { Comment as CommentType, UserInfo } from '@type/index';
import SvgIcon from '@components/SvgIcon';
import { EColor } from '@styles/color';

interface CommentComponentProps {
  comment: CommentType;
  user?: UserInfo;
  onClickDelete: (commentId: string) => void;
}

export const Comment = ({ comment, user, onClickDelete }: CommentComponentProps) => {
  return (
    <Container>
      <HeaderWrapper>
        <NameText>{comment.commenter.nickname}</NameText>
        {user && user.kakaoId == comment.commenter.kakaoId && (
          <SvgButton onClick={() => onClickDelete(comment.commentId)}>
            <SvgIcon name="delete" width={20} height={20} fill={EColor.TEXT_300} stroke={EColor.TEXT_900} />
          </SvgButton>
        )}
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
