import FloatingItem from "@components/FloatingItem";
import SvgIcon from "@components/SvgIcon";
import React, { useState } from "react";
import {
  BackgroundBlur,
  FloatingBtn,
  FloatingItemContainer,
} from "./FloatingBar.styled";
import { useNavigate } from "react-router-dom";

const FloatingBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hidden, setHidden] = useState(false); //FloatingItemContainer의 hidden을 관리

  const navigate = useNavigate();

  const handleNavigate = (name: String) => {
    navigate(`/${name}`);
  };

  const handleClickEvent =
    <T extends HTMLElement>() =>
    (e: React.MouseEvent<T>) => {
      if (hidden) {
        setTimeout(() => {
          setHidden(!hidden);
        }, 300);
      } else {
        setHidden(!hidden);
      }
      setIsVisible(!isVisible);
    };

  const handleBtnClick = handleClickEvent();
  const handleBackgroundClick = handleClickEvent();

  return (
    <>
      <BackgroundBlur hidden={!hidden} onClick={handleBackgroundClick} />
      <FloatingBtn onClick={handleBtnClick}>
        <SvgIcon name={"menu"} width={28} height={28} fill={"grey"} />
      </FloatingBtn>
      <FloatingItemContainer hidden={!hidden}>
        <FloatingItem
          isVisible={isVisible}
          delay={1}
          onClick={() => handleNavigate("")}
          svgName={"home"}
          text={"Home"}
        ></FloatingItem>
        <FloatingItem
          isVisible={isVisible}
          delay={2}
          onClick={() => handleNavigate("help")}
          svgName={"help"}
          text={"사용 방법"}
        ></FloatingItem>
        <FloatingItem
          isVisible={isVisible}
          delay={3}
          onClick={() => handleNavigate("about-me")}
          svgName={"about_me"}
          text={"About me"}
        ></FloatingItem>
      </FloatingItemContainer>
    </>
  );
};

export default FloatingBar;
