import { MyLikeString } from '@utils/constants/strings';
import PageLogo from '@components/PageLogo';
import MenuSpecificItem from '@components/MenuSpecificItem';
import { Container, Body } from './styles';
import { MyLikeViewProps } from './types';

const MyLikeView = ({ datas, refs, callbacks }: MyLikeViewProps) => {
  return (
    <Container>
      <PageLogo title={MyLikeString({ lang: datas.lang, key: 'title' })} subtitle={``} />
      <Body ref={refs.scrollRef}>
        {datas.menus.map((data) => (
          <MenuSpecificItem key={data.menuId} liked menu={data} onInteraction={callbacks.onCancelLike} />
        ))}
      </Body>
    </Container>
  );
};

export default MyLikeView;
