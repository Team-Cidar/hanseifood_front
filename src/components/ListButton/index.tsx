import React from 'react'
import { Container, Label } from './ListButton.styled'

interface ListButtonComponentProps {
  label: string
  onClick?: () => void;
}

export const ListButton = ({ label, onClick }: ListButtonComponentProps) => {
  return (
    <Container onClick={onClick}>
        <Label>
            {label}
        </Label>
    </Container>
  );
}
