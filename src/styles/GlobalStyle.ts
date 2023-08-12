import { createGlobalStyle } from "styled-components";
import NotoSansBlack from "@assets/fonts/NotoSansKR-Black.otf";
import NotoSansBold from "@assets/fonts/NotoSansKR-Bold.otf";
import NotoSansLight from "@assets/fonts/NotoSansKR-Light.otf";
import NotoSansMedium from "@assets/fonts/NotoSansKR-Medium.otf";
import NotoSansRegular from "@assets/fonts/NotoSansKR-Regular.otf";
import NotoSansThin from "@assets/fonts/NotoSansKR-Thin.otf";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  @font-face {
    font-family: 'NotoSansBlack';
    src: local('NotoSansBlack'), local('NotoSansBlack');
    font-style: normal;
    src: url(${NotoSansBlack}) format('truetype');
  }
  @font-face {
    font-family: 'NotoSansBold';
    src: local('NotoSansBold'), local('NotoSansBold');
    font-style: normal;
    src: url(${NotoSansBold}) format('truetype');
  }
  @font-face {
    font-family: 'NotoSansLight';
    src: local('NotoSansLight'), local('NotoSansLight');
    font-style: normal;
    src: url(${NotoSansLight}) format('truetype');
  }
  @font-face {
    font-family: 'NotoSansMedium';
    src: local('NotoSansMedium'), local('NotoSansMedium');
    font-style: normal;
    src: url(${NotoSansMedium}) format('truetype');
  }
  @font-face {
    font-family: 'NotoSansRegular';
    src: local('NotoSansRegular'), local('NotoSansRegular');
    font-style: normal;
    src: url(${NotoSansRegular}) format('truetype');
  }
  @font-face {
    font-family: 'NotoSansThin';
    src: local('NotoSansThin'), local('NotoSansThin');
    font-style: normal;
    src: url(${NotoSansThin}) format('truetype');
  }
`;