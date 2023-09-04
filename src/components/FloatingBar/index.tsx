import FloatingItem from "@components/FloatingItem";
import SvgIcon from "@components/SvgIcon";
import React, { useState } from "react";
import { FloatingBtn, FloatingItemContainer } from "./FloatingBar.styled";
import { useNavigate } from "react-router-dom";

const FloatingBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const navigate = useNavigate();

  const handleNavigate = (name: String) => {
    navigate(`/${name}`);
  };

  const handleBtnClick = (e: React.MouseEvent) => {
    setIsVisible(!isVisible);
    console.log("click", isVisible);
  };

  return (
    <>
      <FloatingBtn onClick={handleBtnClick}>
        <SvgIcon name={"menu"} width={28} height={28} fill={"grey"} />
      </FloatingBtn>
      <FloatingItemContainer hidden={isVisible}>
        <FloatingItem
          onClick={() => handleNavigate("question")}
          svgName={"question"}
          text={"사용방법"}
        ></FloatingItem>
        <FloatingItem
          onClick={() => handleNavigate("about-me")}
          svgName={"about_me"}
          text={"About me"}
        ></FloatingItem>
      </FloatingItemContainer>
    </>
  );
};

export default FloatingBar;
