import { EColor } from "@styles/color";
import { Title2, Title4, Title5 } from "@styles/font";
import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;

`;

export const Participants = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Developers = styled.div`
  ${Title2}
  display :flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Developer = styled.span`
  ${Title5}
  margin : 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MobileParticipants = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;

`;

export const EmailInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

export const EmailText = styled.span`
  ${Title4}
  margin-left : 15px;
`;