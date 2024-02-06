import { useRef } from 'react';
import { useRecoilValue } from 'recoil';

import { requestMenusByLike, requestToggleLike } from '@apis/index';
import { MenuSpecific } from '@type/index';
import { langState } from '@modules/atoms';
import { MyLikeString } from '@utils/constants/strings';
import MyLikeView from './MyLikeView';
import { usePagingData } from '@hooks/usePagingData';

const MyLike = () => {
  const lang = useRecoilValue(langState);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { datas, set_datas, onScroll } = usePagingData<MenuSpecific>({
    scrollRef: scrollRef,
    apiFunction: requestMenusByLike,
  });

  const onCancelLike = (menuId: string) => {
    if (confirm(MyLikeString({ lang: lang, key: 'alert.toggleLike' }))) {
      requestToggleLike(menuId).then(() => {
        const afterMenus = datas.filter((data) => data.menuId != menuId);
        set_datas(afterMenus);
      });
    }
  };

  return (
    <MyLikeView
      datas={{
        lang: lang,
        menus: datas,
      }}
      refs={{
        scrollRef: scrollRef,
      }}
      callbacks={{
        onCancelLike: onCancelLike,
        onScroll: onScroll,
      }}
    />
  );
};

export default MyLike;
