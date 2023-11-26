import styled from "styled-components";
import { EColor } from "@styles/color";
import { Title4_2, Title5, body3, body4 } from "@styles/font";

export const Container = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    padding: 8px;
    border: 1px solid ${EColor.TEXT_300};
    border-width: 1.2px 0px 1.2px 0px;
    &:active {
        background-color: ${EColor.TEXT_500};
        color: ${EColor.WHITE};
        border-radius: 12px;
    }
`

export const Label = styled.div`
    ${Title4_2}
`