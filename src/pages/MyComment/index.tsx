import { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { requestCommentByUser, requestDeleteComment } from '@apis/index';
import { Paging, Comment, UserInfo, MenuSpecific } from '@type/index';
import { langState, userInfoState } from '@modules/atoms';
import { DefaultMenuSpecific, DefaultPaging } from '@type/defaults';
import { MyCommentString } from '@utils/constants/strings';
import { Modal } from '@components/Modal';
import MenuSpecificItem from '@components/MenuSpecificItem';
import { IconButton } from '@components/Button';
import MyCommentView from './MyCommentView';

const MyComment = () => {
  const [comments, set_comments] = useState<Comment[]>([]);
  const [paging, set_paging] = useState<Paging>(DefaultPaging);
  const [isLoading, set_isLoading] = useState<boolean>(false);
  const [showModal, set_showModal] = useState<boolean>(false);
  const [modalMenu, set_modalMenu] = useState<MenuSpecific>(DefaultMenuSpecific);
  const userInfo = useRecoilValue<UserInfo>(userInfoState);
  const lang = useRecoilValue(langState);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadComments().then((res) => set_comments(res));
  }, []);

  useEffect(() => {
    if (modalMenu.menuId != DefaultMenuSpecific.menuId) set_showModal(true);
  }, [modalMenu]);

  useEffect(() => {
    set_isLoading(false);
  }, [comments]);

  const loadComments = async (): Promise<Comment[]> => {
    if (paging.hasNext) {
      return requestCommentByUser(paging.currentPage + 1, paging.pageSize)
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
          return comments;
        });
    }
    return Promise.resolve([]);
  };

  const onScroll = () => {
    if (isLoading) return;

    const maxScrollPos = scrollRef.current!.scrollHeight - scrollRef.current!.clientHeight;
    const currentScrollPos = scrollRef.current!.scrollTop;
    if (maxScrollPos - currentScrollPos < 10) {
      set_isLoading(true); // prevent bouncing issue
      loadComments()
        .then((res) => {
          set_comments((data) => [...data, ...res]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const onDelete = (commentId: string) => {
    if (!confirm(MyCommentString({ lang: lang, key: 'alert.delete' }))) return;

    requestDeleteComment(commentId)
      .then(() => {
        const afterComments = comments.filter((data) => data.commentId != commentId);
        set_comments(afterComments);
      })
      .catch((err) => console.log(err));
  };

  const showMenuModal = (menu: MenuSpecific) => {
    set_modalMenu(menu);
  };

  return (
    <>
      {showModal && (
        <Modal
          header="Menu"
          body={<MenuSpecificItem menu={modalMenu} onInteraction={() => {}} />}
          bottom={<IconButton width={'84'} height={'32'} onClick={() => set_showModal(false)} label={'닫기'} />}
        />
      )}
      <MyCommentView
        datas={{
          lang: lang,
          comments: comments,
          user: userInfo,
        }}
        refs={{
          scrollRef: scrollRef,
        }}
        callbacks={{
          onScroll: onScroll,
          onDelete: onDelete,
          onClickMenu: showMenuModal,
        }}
      />
    </>
  );
};

export default MyComment;
