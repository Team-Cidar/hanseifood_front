// MyLikeView.tsx

import { Container, Body } from './styles';

import {MyLikeString} from '@utils/constants/strings';
import PageLogo from '@components/PageLogo';
import {MyLikeViewProps} from './types';
import MenuSpecificItem from '@components/MenuSpecificItem';


const MyLikeView = ({datas, refs, callbacks}: MyLikeViewProps) => {
  return (
    <Container>
      <PageLogo
        title={MyLikeString({lang: datas.lang, key: 'title'})}
        subtitle={``}
      />
      <Body ref={refs.scrollRef} onScroll={callbacks.onScroll}>
        {datas.menus.map((data) => 
          <MenuSpecificItem key={data.menuId} menu={data} onClick={callbacks.onCancelLike}/>
        )}
      </Body>
    </Container>
  );
};

export default MyLikeView;
