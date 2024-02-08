import { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { DefaultMenuSpecific } from '@type/defaults';
import { CommentView } from './CommentView';
import { MenuSpecific, Comment, Lang, UserInfo, UserRole } from '@type/index';
import { langState, userInfoState } from '@modules/atoms';
import {
  reqeustMenuByMenuId,
  requestAddComment,
  requestCheckMenuLiked,
  requestCommentsByMenuId,
  requestDeleteComment,
  requestToggleLike,
} from '@apis/index';
import { CommentPageString } from '@utils/constants/strings';
import { useViewportResizeEffect } from '@hooks/useViewportResizeEffect';
import { usePagingData } from '@hooks/usePagingData';
import usePageControll from '@hooks/usePageControll';

export const CommentPage = () => {
  const menuId = window.location.pathname.split('/').pop()!;
  const [menu, set_menu] = useState<MenuSpecific>(DefaultMenuSpecific);
  const [commentText, set_commentText] = useState<string>('');
  const [isLiked, set_isLiked] = useState<boolean>(false);
  const userInfo = useRecoilValue<UserInfo>(userInfoState);
  const lang = useRecoilValue<Lang>(langState);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { scrollRef, datas, paging, set_datas } = usePagingData<Comment>(requestCommentsByMenuId, menuId);
  const { handlePrevPage, handlePage } = usePageControll();

  useViewportResizeEffect(containerRef);
  useEffect(() => {
    if (menuId == '' || menuId == 'comments') {
      alert(CommentPageString({ lang: lang, key: 'alert.error.menuid' }));
      handlePrevPage();
    }
    reqeustMenuByMenuId(menuId)
      .then((res) => {
        set_menu(res.data);
      })
      .catch((err) => console.log(err));
    requestCheckMenuLiked(menuId)
      .then((res) => {
        set_isLiked(res.data.like);
      })
      .catch((err) => console.log(err));
    // Would it be better to make a new type which contains menu, comments, isLiked states and manage them as one state value?
  }, []);

  const onDelete = (commentId: string) => {
    if (!confirm(CommentPageString({ lang: lang, key: 'confirm.delete' }))) return;
    requestDeleteComment(commentId)
      .then(() => {
        const afterDatas = datas.filter((data) => data.commentId != commentId);
        set_datas(afterDatas);
      })
      .catch((err) => console.log(err));
  };

  const onSubmit = () => {
    if (commentText.trim() == '') {
      alert(CommentPageString({ lang: lang, key: 'alert.empty' }));
      return;
    }
    if (!confirm(CommentPageString({ lang: lang, key: 'confirm.add' }))) return;
    requestAddComment(menuId, commentText)
      .then((res) => {
        if (!paging.hasNext) set_datas((data) => [...data, res.data]);
        set_menu((prev) => ({
          ...prev,
          commentCount: prev.commentCount + 1,
        }));
        set_commentText('');
        inputRef.current!.blur();
      })
      .catch((err) => console.log(err));
  };

  const onToggleLike = () => {
    if (!__checkLoggedIn()) return;

    if (!confirm(CommentPageString({ lang: lang, key: isLiked ? 'confirm.like.cancel' : 'confirm.like' }))) return;
    set_isLiked(!isLiked);
    requestToggleLike(menuId)
      .then((res) => {
        set_menu((data) => ({ ...data, likeCount: res.data.likeCount }));
        set_isLiked(res.data.like);
      })
      .catch((err) => console.log(err));
  };

  const onTextChanged = (text: string) => {
    set_commentText(text);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key == 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSubmit();
    }
  };

  const onInputFocus = () => {
    if (!__checkLoggedIn()) return;
    scrollRef.current!.scrollTop = 0;
    inputRef.current!.placeholder = '';
  };

  const onInputBlur = () => {
    inputRef.current!.placeholder = CommentPageString({ lang: lang, key: 'placeholder.comment' });
  };

  const __checkLoggedIn = () => {
    if (userInfo.role.value == UserRole.G.value) {
      alert(CommentPageString({ lang: lang, key: 'alert.error.guest' }));
      handlePage('login');
      return false;
    }
    return true;
  };

  return (
    <CommentView
      datas={{
        lang: lang,
        comments: datas,
        menu: menu,
        user: userInfo,
        commentText: commentText,
        liked: isLiked,
      }}
      refs={{
        scrollRef: scrollRef,
        containerRef: containerRef,
        inputRef: inputRef,
      }}
      callbacks={{
        onDelete: onDelete,
        onSubmit: onSubmit,
        onTextChanged: onTextChanged,
        onKeyDown: onKeyDown,
        onToggleLike: onToggleLike,
        onInputFocus: onInputFocus,
        onInputBlur: onInputBlur,
      }}
    />
  );
};
