import { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { DefaultMenuSpecific } from '@type/defaults';
import { CommentView } from './CommentView';
import { MenuSpecific, Comment, Lang, UserInfo, UserRoleData } from '@type/index';
import { langState, userInfoState } from '@modules/atoms';
import {
  reqeustMenuByMenuId,
  requestAddComment,
  requestCheckMenuLiked,
  requestCommentReport,
  requestCommentsByMenuId,
  requestDeleteComment,
  requestToggleLike,
} from '@apis/index';
import { CommentPageString } from '@utils/constants/strings';
import { useViewportResizeEffect } from '@hooks/useViewportResizeEffect';
import { usePagingData } from '@hooks/usePagingData';
import usePageControll from '@hooks/usePageControll';
import { Modal } from '@components/Modal';
import { CheckBoxView, CommentReportContainer } from './styles';
import CheckBox from '@components/CheckBox';
import { IconButton } from '@components/Button';
import { CommentComponent } from '@components/Comment';

export const CommentPage = () => {
  const menuId = window.location.pathname.split('/').pop()!;
  const [isModalOpen, set_isModalOpen] = useState(false);
  const [menu, set_menu] = useState<MenuSpecific>(DefaultMenuSpecific);
  const [commentText, set_commentText] = useState<string>('');
  const [isLiked, set_isLiked] = useState<boolean>(false);
  const [selected, set_selected] = useState<number>(0);
  const [reason, set_reason] = useState<string>("");
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
    if (userInfo.role.value == UserRoleData.G.value) {
      alert(CommentPageString({ lang: lang, key: 'alert.error.guest' }));
      handlePage('login');
      return false;
    }
    return true;
  };

  /* 이 함수 내려서 댓글 옆에 신고버튼에 누르면 이 함수 작동하도록 만들어줘.. */
  const handleModal = () => {
    set_isModalOpen(!isModalOpen);
  };

  const handleCheckbox = (index: number) => {
    set_selected(index);
  };

  const handleReason = (text: string) => {
    set_reason(text);
  };

  /* 테스트가 필요해요 ㅎㅎ */
  const handleReport = () => {
    requestCommentReport("글 아이디", 0, "기타 사유")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {isModalOpen && (
        <Modal
          header={'신고하기'}
          body={
            <CommentReportContainer>
              <CommentComponent
                /* 댓글 채워줘 */
                comment={{
                  commentId: '',
                  menu: {
                    date: '',
                    menus: [],
                    menuId: '',
                    menuType: '',
                    likeCount: 0,
                    commentCount: 0,
                    deleted: false,
                    deletedAt: null
                  },
                  commenter: {
                    kakaoId: 'asdf1234',
                    nickname: '귀요미 호주니'
                  },
                  comment: '너 너무 못생겼어.',
                  commentedAt: '2022-10-10 22:30',
                  deleted: false,
                  deletedAt: null
                }}
                onClickDelete={null}
              />
              <CheckBoxView>
                <CheckBox
                  label="기타"
                  checked={selected === 0}
                  onChange={() => handleCheckbox(0)}
                />
                <CheckBox
                  label="불법"
                  checked={selected === 1}
                  onChange={() => handleCheckbox(1)}
                />
                <CheckBox
                  label="비속어"
                  checked={selected === 2}
                  onChange={() => handleCheckbox(2)}
                />
                <CheckBox
                  label="개인정보"
                  checked={selected === 3}
                  onChange={() => handleCheckbox(3)}
                />
                <CheckBox
                  label="성 관련"
                  checked={selected === 4}
                  onChange={() => handleCheckbox(4)}
                />
                <CheckBox
                  label="불쾌함"
                  checked={selected === 5}
                  onChange={() => handleCheckbox(5)}
                />
                <CheckBox
                  label="스팸, 광고"
                  checked={selected === 6}
                  onChange={() => handleCheckbox(6)}
                />
              </CheckBoxView>
              {/* 원경님이 컴포넌트 재사용 못하게 만들어놔서 일단 하드코딩. */}
              {selected == 0 && <input style={{ width: '236px', padding: '8px', borderRadius: '32px', margin: '4px' }} placeholder='신고 사유를 입력하세요.' onChange={(e) => handleReason(e.target.value)} type='text' />}
              위와 같은 사유로 해당 댓글을 신고합니다.
            </CommentReportContainer>
          }
          bottom={<IconButton width={'96px'} height={'14px'} onClick={handleReport} label={'신고하기'} />}
        />
      )}
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
    </>
  );
};
