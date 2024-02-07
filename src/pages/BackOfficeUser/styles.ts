import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  padding: 24px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 12px;
  overflow-y: scroll;
  overflow-x: hidden;
`;
