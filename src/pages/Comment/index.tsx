import { useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { DefaultMenuSpecific, DefaultPaging } from '@type/defaults';
import { CommentView } from './CommentView';
import { MenuSpecific, Paging, Comment, Lang, UserInfo, User } from '@type/index';
import { langState, userInfoState, userState } from '@modules/atoms';
import {
  reqeustMenuByMenuId,
  requestAddComment,
  requestCheckMenuLiked,
  requestCommentsByMenuId,
  requestDeleteComment,
  requestToggleLike,
} from '@apis/index';
import { CommentPageString } from '@utils/constants/strings';

export const CommentPage = () => {
  const [menuId, set_menuId] = useState<string>('');
  const [menu, set_menu] = useState<MenuSpecific>(DefaultMenuSpecific);
  const [comments, set_comments] = useState<Comment[]>([]);
  const [paging, set_paging] = useState<Paging>(DefaultPaging);
  const [isLoading, set_isLoading] = useState<boolean>(false);
  const [commentText, set_commentText] = useState<string>('');
  const [isLiked, set_isLiked] = useState<boolean>(false);
  const userInfo = useRecoilValue<UserInfo>(userInfoState);
  const lang = useRecoilValue<Lang>(langState);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const [page, set_page] = useRecoilState<User>(userState);

  useEffect(() => {
    console.log(page); // temp
    set_page((data) => ({ ...data, page: '/home/comments' })); // temp

    const _id = window.location.pathname.split('/').pop();
    set_menuId(_id!);
    reqeustMenuByMenuId(_id!)
      .then((res) => {
        set_menu(res.data);
      })
      .catch((err) => console.log(err));
    loadComments(_id!).then((res) => set_comments(res));
    requestCheckMenuLiked(_id!)
      .then((res) => {
        set_isLiked(res.data.like);
      })
      .catch((err) => console.log(err));
    // Would it be better to make a new type which contains menu, comments, isLiked states and manage them as one state value?
  }, []);

  useEffect(() => {
    set_isLoading(false);
  }, [comments]);

  const loadComments = async (menuId: string): Promise<Comment[]> => {
    if (paging.hasNext) {
      return requestCommentsByMenuId(menuId!, paging.currentPage + 1, paging.pageSize)
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
      loadComments(menuId)
        .then((res) => {
          set_comments((data) => [...data, ...res]);
        })
        .catch((err) => console.log(err));
    }
  };

  const onDelete = (commentId: string) => {
    if (!confirm(CommentPageString({ lang: lang, key: 'confirm.delete' }))) return;
    console.log(commentId);
    requestDeleteComment(commentId)
      .then(() => {
        const afterComments = comments.filter((data) => data.commentId != commentId);
        set_comments(afterComments);
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
        if (!paging.hasNext) set_comments((data) => [...data, res.data]);
        set_commentText('');
        inputRef.current!.blur();
      })
      .catch((err) => console.log(err));
  };

  const onToggleLike = () => {
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
    scrollRef.current!.scrollTop = 0;
    inputRef.current!.placeholder = '';
  };

  const onInputBlur = () => {
    inputRef.current!.placeholder = CommentPageString({ lang: lang, key: 'placeholder.comment' });
  };

  return (
    <CommentView
      datas={{
        lang: lang,
        comments: comments,
        menu: menu,
        user: userInfo,
        commentText: commentText,
        liked: isLiked,
      }}
      refs={{
        scrollRef: scrollRef,
        inputRef: inputRef,
      }}
      callbacks={{
        onDelete: onDelete,
        onScroll: onScroll,
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
