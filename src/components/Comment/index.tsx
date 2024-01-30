import React from 'react';
import { CommentText, CommentView, Container, DateText, DateView, NameText } from './Comment.styled';

interface ToggleComponentProps {
  writer: string;
  content: string;
  createTime: string;
  onClickDeclaration: () => void;
}


export const Comment = ({ writer, content, createTime, onClickDeclaration}: ToggleComponentProps) => {
  return (
    <Container>
      <NameText>{writer}</NameText>
      <CommentView>
        <CommentText>{content}</CommentText>
        <DateView>
          <DateText>{createTime}</DateText>
        </DateView>
      </CommentView>

    </Container>
  );
};
