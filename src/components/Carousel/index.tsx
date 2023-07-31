import React, { TouchEventHandler, useEffect, useRef, useState } from "react";

import {
  CarouselItem,
  Carousels,
  CarouselWrapper,
  Container,
  Date,
  Menu,
  MenuList,
  SwipeLeftBtn,
  SwipeRightBtn,
} from "./Carousel.styled";

type DailyMenu = {
  date: string;
  only_employee: boolean;
  has_two_menus: boolean;
  student_menu: never[];
  employee_menu: string[];
};

interface Props {
  dailyMenu: DailyMenu[];
}

const Carousel = ({ dailyMenu }: Props) => {
  let touchStartX: number;
  let touchEndX: number;

  const [currCarousel, setCurrCarousel] = useState(0);
  const carouselRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (carouselRef.current != null) {
      // console.log(carouselRef.current);
      carouselRef.current.style.transform = `translateX(-${currCarousel}00%)`;
    }
  }, [currCarousel]);

  const handleSwipe = (move: number) => {
    const totalMenus = dailyMenu.length;
    let nextCarousel = (currCarousel + move) % totalMenus; //nextCarousel의 값이 1~5사이 이도록 totalMenus(5)로 나눈 나머지값을 사용!
    if (nextCarousel < 0) {
      //nextCarousel이 음수 : 0번 슬라이드에서 왼쪽으로 이동 할 때!
      nextCarousel = totalMenus - 1; //마지막 슬라이드로 이동!
    }
    setCurrCarousel(nextCarousel);

    if (carouselRef.current != null) {
      carouselRef.current.style.transition = "all 0.5s ease-in-out"; // 부드럽게 이동
    }
  };

  // 터치 이벤트

  const handleTouchStart: TouchEventHandler<HTMLDivElement> = (e) => {
    touchStartX = e.nativeEvent.touches[0].clientX;
    console.log("start", touchStartX);
  };

  const handleTouchEnd: TouchEventHandler<HTMLDivElement> = (e) => {
    touchEndX = e.nativeEvent.changedTouches[0].clientX;
    console.log("touch", touchEndX);
    if (touchStartX >= touchEndX) {
      handleSwipe(1); // 오른쪽페이지로 이동
    } else {
      handleSwipe(-1); // 왼쪽페이지로 이동
    }
  };

  return (
    <Container>
      <CarouselWrapper
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <SwipeLeftBtn onClick={() => handleSwipe(-1)}>{"<"}</SwipeLeftBtn>
        <Carousels ref={carouselRef}>
          {dailyMenu.map((menu, idx) => {
            return (
              <CarouselItem key={idx}>
                <Date>{menu.date}일</Date>
                <Menu>
                  {menu.employee_menu.map((daily, idx) => {
                    return <MenuList key={idx}>{daily}</MenuList>;
                  })}
                </Menu>
              </CarouselItem>
            );
          })}
        </Carousels>
        <SwipeRightBtn onClick={() => handleSwipe(1)}>{">"}</SwipeRightBtn>
      </CarouselWrapper>
    </Container>
  );
};
export default Carousel;
