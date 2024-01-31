import PageLogo from '@components/PageLogo';
import { MyCommentString } from '@utils/constants/strings';
import { Comment } from '@components/Comment';
import SvgIcon from '@components/SvgIcon';
import { EColor } from '@styles/color';
import { MyCommentViewProps } from './types';
import { Container, Body, CommentWrapper, SvgButton } from './styles';

const MyCommentView = ({ datas, refs, callbacks }: MyCommentViewProps) => {
  return (
    <Container>
      <PageLogo title={MyCommentString({ lang: datas.lang, key: 'title' })} subtitle={``} />
      <Body ref={refs.scrollRef} onScroll={callbacks.onScroll}>
        {datas.comments.map((data) => (
          <CommentWrapper key={data.commentId}>
            <Comment comment={data} user={datas.user} onClickDelete={callbacks.onDelete} />
            <SvgButton onClick={() => callbacks.onClickMenu(data.menu)}>
              <SvgIcon name="cloche" width={32} height={32} fill={EColor.COLOR_PRIMARY} />
            </SvgButton>
          </CommentWrapper>
        ))}
      </Body>
    </Container>
  );
};

export default MyCommentView;
