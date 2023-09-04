import SvgIcon from "@components/SvgIcon";

import {
  FloatingItemBtn,
  FloatingItemTitle,
  FloatingItemWrapper,
} from "./FloatingItem.styled";

interface FloatingItemInfo {
  svgName: "question" | "about_me";
  text: String;
  onClick: () => void;
}

const FloatingItem = (props: FloatingItemInfo) => {
  const handelItemBtnClick = () => {};
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
