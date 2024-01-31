import { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { requestMenusByLike, requestToggleLike } from '@apis/index';
import { MenuSpecific, Paging } from '@type/index';
import { langState } from '@modules/atoms';
import { DefaultPaging } from '@type/defaults';
import { MyLikeString } from '@utils/constants/strings';
import MyLikeView from './MyLikeView';

const MyLike = () => {
  const [menus, set_menus] = useState<MenuSpecific[]>([]);
  const [paging, set_paging] = useState<Paging>(DefaultPaging);
  const [isLoading, set_isLoading] = useState<boolean>(false);
  const lang = useRecoilValue(langState);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadLikedMenu().then((res) => set_menus(res));
  }, []);

  const loadLikedMenu = async (): Promise<MenuSpecific[]> => {
    if (paging.hasNext) {
      return requestMenusByLike(paging.currentPage + 1, paging.pageSize)
        .then((res) => {
          set_paging((data) => ({
            ...data,
            currentPage: res.data.pageNo,
            hasNext: res.data.pageNo < res.data.maxPage,
          }));
          return res.data.datas;
        })
        .catch((err) => {
          console.log(err);
          return menus;
        });
    }
    return Promise.resolve([]);
  };

  const onCancelLike = (menuId: string) => {
    if (confirm(MyLikeString({ lang: lang, key: 'alert.toggleLike' }))) {
      requestToggleLike(menuId).then(() => {
        const afterMenus = menus.filter((data) => data.menuId != menuId);
        set_menus(afterMenus);
      });
    }
  };

  const onScroll = () => {
    if (isLoading) return;

    const maxScrollPos = scrollRef.current!.scrollHeight - scrollRef.current!.clientHeight;
    const currentScrollPos = scrollRef.current!.scrollTop;
    if (maxScrollPos - currentScrollPos < 10) {
      set_isLoading(true); // prevent bouncing issue
      loadLikedMenu()
        .then((res) => {
          set_menus((data) => [...data, ...res]);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          set_isLoading(false);
        });
    }
  };

  return (
    <MyLikeView
      datas={{
        lang: lang,
        menus: menus,
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
