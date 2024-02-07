import { DefaultPaging } from '@type/defaults';
import { Paging } from '@type/index';
import { AxiosResponse } from 'axios';
import { RefObject, useEffect, useState } from 'react';

interface UsePagingDataHookI {
  scrollRef: RefObject<HTMLDivElement>;
  apiFunction: (pageNo: number, pageSize: number, ...args: string[]) => Promise<AxiosResponse>;
}
type UsePagingDataHookR<T> = {
  datas: T[];
  set_datas: React.Dispatch<React.SetStateAction<T[]>>;
  isLoading: boolean;
  paging: Paging;
};

export const usePagingData = <T>(
  { scrollRef, apiFunction }: UsePagingDataHookI,
  ...args: string[]
): UsePagingDataHookR<T> => {
  const [paging, set_paging] = useState<Paging>(DefaultPaging);
  const [data, set_data] = useState<T[]>([]);
  const [isLoading, set_isLoading] = useState<boolean>(false);

  useEffect(() => {
    loadData().then((res) => set_data(res));
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.onscroll = onScroll;
    }
    return () => {
      if (scrollRef.current) {
        scrollRef.current.onscroll = null;
      }
    };
  }, [paging, isLoading]);

  useEffect(() => {
    set_isLoading(false);
  }, [data]);

  const loadData = async (): Promise<T[]> => {
    if (paging.hasNext) {
      return apiFunction(paging.currentPage + 1, paging.pageSize, ...args)
        .then((res) => {
          set_paging({
            pageSize: res.data.pageSize,
            currentPage: res.data.pageNo,
            hasNext: res.data.pageNo < res.data.maxPage,
          });
          return <T[]>res.data.datas;
        })
        .catch((err) => {
          console.error("Error while fetching new Data in 'usePaingData' hook.");
          console.error(err);
          return <T[]>[];
        });
    }
    return Promise.resolve(<T[]>[]);
  };

  const onScroll = () => {
    if (isLoading) return;

    const maxScrollPos = scrollRef.current!.scrollHeight - scrollRef.current!.clientHeight;
    const currentScrollPos = scrollRef.current!.scrollTop;
    if (maxScrollPos - currentScrollPos < 10) {
      set_isLoading(true); // prevent bouncing issue
      loadData()
        .then((res) => {
          set_data((prev) => [...prev, ...res]);
        })
        .catch((err) => console.log(err));
    }
  };

  return <UsePagingDataHookR<T>>{
    datas: data,
    isLoading: isLoading,
    paging: paging,
    set_datas: set_data,
  };
};
