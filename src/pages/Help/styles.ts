import { Title4, Title5 } from "@styles/font";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const ImageView = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`

export const Gif = styled.img`
  width: 232px;
  height: 100%;
  border-radius: 24px;
`

export const TextView = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StyledText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${Title5}
`