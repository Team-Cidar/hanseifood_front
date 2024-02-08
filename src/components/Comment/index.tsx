import {
  CommentText,
  CommentView,
  Container,
  DateText,
  DateView,
  HeaderRight,
  HeaderWrapper,
  NameText,
  ReportCommentText,
  SvgButton,
} from './Comment.styled';
import { Comment as CommentType, UserInfo } from '@type/index';
import SvgIcon from '@components/SvgIcon';
import { EColor } from '@styles/color';
import { Modal } from '@components/Modal';
import { CheckBoxView, CommentReportContainer, ModalBottomView } from '@pages/Comment/styles';
import CheckBox from '@components/CheckBox';
import { IconButton } from '@components/Button';
import { useState } from 'react';
import { requestCommentReport } from '@apis/index';

interface CommentComponentProps {
  comment: CommentType;
  user?: UserInfo;
  onClickDelete: (commentId: string) => void;
}

export const CommentComponent = ({ comment, user, onClickDelete }: CommentComponentProps) => {
  const [isModalOpen, set_isModalOpen] = useState(false);
  const [selected, set_selected] = useState<number>(0);
  const [reason, set_reason] = useState<string>("");

  const handleModal = () => {
    set_isModalOpen(!isModalOpen);
  };

  const handleCheckbox = (index: number) => {
    set_selected(index);
  };

  const handleReason = (text: string) => {
    set_reason(text);
  };

  const handleReport = () => {
    requestCommentReport(comment.commentId, selected, reason)
      .then((res) => {
        if (res.data.status) {
          alert("댓글 신고가 완료되었습니다.");
          return handleModal();
        }
        throw Error();
      })
      .catch((err) => {
        if (err.response.data == "reportMsg field is required with ReportType.ETC. But not given.") {
          return alert("기타 사유를 입력해주세요.");
        }
        return alert("댓글 신고 중 오류가 발생하였습니다. 다시 시도해주세요.");
      });
  };

  return (
    <>
      {isModalOpen && (
        <Modal
          header={'신고하기'}
          body={
            <CommentReportContainer>
              <Container>
                <HeaderWrapper>
                  <NameText>{comment.commenter.nickname}</NameText>
                </HeaderWrapper>
                <CommentView>
                  <CommentText>{comment.comment}</CommentText>
                  <DateView>
                    <DateText>{comment.commentedAt}</DateText>
                  </DateView>
                </CommentView>
              </Container>
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
          bottom={
            <ModalBottomView>
              <IconButton width={'96px'} height={'14px'} onClick={handleModal} label={'취소하기'} />
              <IconButton width={'96px'} height={'14px'} onClick={handleReport} label={'신고하기'} />
            </ModalBottomView>
          }
        />
      )}
      <Container>
        <HeaderWrapper>
          <NameText>{comment.commenter.nickname}</NameText>
          <HeaderRight>
            {user.kakaoId !== comment.commenter.kakaoId && (
              <ReportCommentText onClick={handleModal}>신고하기</ReportCommentText>
            )}
            {user && user.kakaoId == comment.commenter.kakaoId && (
              <SvgButton onClick={() => onClickDelete(comment.commentId)}>
                <SvgIcon name="delete" width={20} height={20} fill={EColor.TEXT_300} stroke={EColor.TEXT_900} />
              </SvgButton>
            )}
          </HeaderRight>
        </HeaderWrapper>
        <CommentView>
          <CommentText>{comment.comment}</CommentText>
          <DateView>
            <DateText>{comment.commentedAt}</DateText>
          </DateView>
        </CommentView>
      </Container>
    </>

  );
};
