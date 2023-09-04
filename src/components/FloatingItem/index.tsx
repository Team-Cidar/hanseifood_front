import SvgIcon from "@components/SvgIcon";

import {
  FloatingItemBtn,
  FloatingItemTitle,
  FloatingItemWrapper,
} from "./FloatingItem.styled";

interface FloatingItemInfo {
  svgName: "help" | "about_me" | "home";
  text: String;
  onClick: () => void;
}

const FloatingItem = (props: FloatingItemInfo) => {
  return (
    <FloatingItemWrapper onClick={props.onClick}>
      <FloatingItemBtn>
        <SvgIcon name={props.svgName} width={28} height={28} fill={"black"} />
      </FloatingItemBtn>
      <FloatingItemTitle>{props.text}</FloatingItemTitle>
    </FloatingItemWrapper>
  );
};

export default FloatingItem;
