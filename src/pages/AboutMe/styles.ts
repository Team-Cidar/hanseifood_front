import { EColor } from "@styles/color";
import { Title2, Title4, Title5 } from "@styles/font";
import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background:
  linear-gradient(
    to bottom left,
    ${EColor.GRAD_TR},
    ${EColor.GRAD_BR},
    ${EColor.GRAD_TL},
    ${EColor.GRAD_BL}
  );
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
  margin-bottom: 50px;
`;

export const Developer = styled.span`
  ${Title5}
  margin : 20px 0;
`;

export const MobileParticipants = styled.div`
  padding: 24px;
`;

export const EmailInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

export const EmailText = styled.span`
  ${Title4}
  margin-left : 15px;
`;
