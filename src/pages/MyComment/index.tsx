import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { requestCommentByUser, requestDeleteComment } from '@apis/index';
import { Comment, UserInfo, MenuSpecific } from '@type/index';
import { langState, userInfoState } from '@modules/atoms';
import { DefaultMenuSpecific } from '@type/defaults';
import { MyCommentString } from '@utils/constants/strings';
import { Modal } from '@components/Modal';
import MenuSpecificItem from '@components/MenuSpecificItem';
import { IconButton } from '@components/Button';
import MyCommentView from './MyCommentView';
import { usePagingData } from '@hooks/usePagingData';

const MyComment = () => {
  const [showModal, set_showModal] = useState<boolean>(false);
  const [modalMenu, set_modalMenu] = useState<MenuSpecific>(DefaultMenuSpecific);
  const userInfo = useRecoilValue<UserInfo>(userInfoState);
  const lang = useRecoilValue(langState);
  const { scrollRef, datas, set_datas } = usePagingData<Comment>(requestCommentByUser);

  useEffect(() => {
    if (modalMenu.menuId != DefaultMenuSpecific.menuId) set_showModal(true);
  }, [modalMenu]);

  const onDelete = (commentId: string) => {
    if (!confirm(MyCommentString({ lang: lang, key: 'alert.delete' }))) return;

    requestDeleteComment(commentId)
      .then(() => {
        const afterComments = datas.filter((data) => data.commentId != commentId);
        set_datas(afterComments);
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
          comments: datas,
          user: userInfo,
        }}
        refs={{
          scrollRef: scrollRef,
        }}
        callbacks={{
          onDelete: onDelete,
          onClickMenu: showMenuModal,
        }}
      />
    </>
  );
};

export default MyComment;
