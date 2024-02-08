import { EColor } from '@styles/color';
import { Title3, body3 } from '@styles/font';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  padding: 12px;
  gap: 8px;
  margin: 8px 0px;
  background-color: ${EColor.TEXT_400};
  border-radius: 12px;
  border: 1px solid ${EColor.TEXT_600};
  box-shadow: 0px 4px 4px ${EColor.TEXT_400};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 0px 12px;
`;

export const Label = styled.div`
  ${body3}
  font-weight: bold;
`;

export const Title = styled.div`
  ${Title3}
`;

export const TitleInput = styled.input`
  ${Title3}
  max-width: 50%;
  background-color: transparent;
  outline: none;
  border: 0px;
  border-radius: 0px;
  border-bottom: 2px solid transparent;
  padding: 4px;
  transition: 0.2s;
  &:focus {
    border-bottom: 2px solid ${EColor.COLOR_INTERACTION};
    transition: 0.2s;
  }
`;

export const Content = styled.div`
  ${body3}
`;

export const ContentInput = styled.input`
  ${body3}
  max-width: 70%;
  background-color: transparent;
  outline: none;
  border: 0px;
  border-radius: 0px;
  border-bottom: 2px solid transparent;
  text-align: end;
  transition: 0.2s;
  &:focus {
    border-bottom: 2px solid ${EColor.COLOR_INTERACTION};
    transition: 0.2s;
  }
`;
