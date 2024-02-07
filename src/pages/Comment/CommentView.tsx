import { Comment } from '@components/Comment';
import { Divider } from '@components/Divider';
import { CommentViewProps } from './types';
import { Body, CommentInput, Container, InputContainer, LikeButton, SubmitButton } from './styles';
import MenuSpecificItem from '@components/MenuSpecificItem';
import { CommentPageString } from '@utils/constants/strings';
import SvgIcon from '@components/SvgIcon';
import { EColor } from '@styles/color';

export const CommentView = ({ datas, refs, callbacks }: CommentViewProps) => {
  return (
    <Container height={window.visualViewport!.height - 48} ref={refs.containerRef}>
      <Body ref={refs.scrollRef}>
        <MenuSpecificItem menu={datas.menu} onInteraction={() => {}} />
        {datas.comments.map((comment) => {
          return (
            <div key={comment.commentId}>
              <Comment
                comment={comment}
                user={datas.user}
                onClickDelete={() => callbacks.onDelete(comment.commentId)}
              />
              <Divider />
            </div>
          );
        })}
      </Body>
      <InputContainer>
        <LikeButton onClick={callbacks.onToggleLike}>
          <SvgIcon name="like" width={20} height={20} fill={datas.liked ? EColor.RED : EColor.TEXT_500} />
        </LikeButton>
        <CommentInput
          ref={refs.inputRef}
          value={datas.commentText}
          maxLength={100}
          rows={1}
          placeholder={CommentPageString({ lang: datas.lang, key: 'placeholder.comment' })}
          onChange={(e) => callbacks.onTextChanged(e.target.value)}
          onKeyDown={(e) => callbacks.onKeyDown(e)}
          onFocus={callbacks.onInputFocus}
          onBlur={callbacks.onInputBlur}
        />
        <SubmitButton onClick={callbacks.onSubmit}>
          <SvgIcon name="send" width={24} height={24} fill={EColor.COLOR_INTERACTION} stroke={EColor.TEXT_800} />
        </SubmitButton>
      </InputContainer>
    </Container>
  );
};
