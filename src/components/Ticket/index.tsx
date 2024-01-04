import React from 'react';
import { Body, StyledTicketItem, Title, Tail, Price } from './Ticket.styled';
import SvgIcon from '@components/SvgIcon';

interface ITicketItem {
  label: string;
  svg?: React.ReactElement<SVGAElement>;
  width?: number;
  height?: number;
  onClick?: () => void;
}

export const TicketItem = ({
  width,
  height,
  onClick,
}: ITicketItem) => {
  return (
    <StyledTicketItem width={width} height={height} onClick={onClick}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '10px 18px 10px 10px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Title>교직원 식당</Title>
          <Body>한세대학교 식권</Body>
          <Price>₩ 5,000</Price>
          <Tail>결제일: 2022년 11월 18일</Tail>
        </div>
        <div>
          <SvgIcon name='search' width={32} height={32} fill='black' />
        </div>
      </div>
    </StyledTicketItem>
  );
};