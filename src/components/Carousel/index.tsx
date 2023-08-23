import React, {
  MouseEventHandler,
  TouchEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";

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
import SvgIcon from "@components/SvgIcon";

type DailyMenu = {
  date: string;
  only_employee: boolean;
  has_two_menus: boolean;
  student_menu: never[];
  employee_menu: string[];
};

interface Props {
  dailyMenu: DailyMenu[];
  isMobile: boolean;
}

const Carousel = ({ dailyMenu, isMobile }: Props) => {
  let touchStartX: number;
  let touchEndX: number;

  const [currCarousel, setCurrCarousel] = useState(0);
  const carouselRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (carouselRef.current != null) {
      // console.log(carouselRef.current);
      carouselRef.current.style.transform = `translateX(-${
        isMobile ? currCarousel * 98 : currCarousel * 101
      }%)`;
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

  const handleMouseStart: MouseEventHandler<HTMLDivElement> = (e) => {
    touchStartX = e.nativeEvent.clientX;
    console.log("start", touchStartX);
  };
  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const currTouchX = e.nativeEvent.clientX;

    if (carouselRef.current != null) {
      carouselRef.current.style.transform = `translateX(-${
        isMobile ? currCarousel * 98 : currCarousel * 101
      }%)`;
    }
  };

  const handleMouseEnd: MouseEventHandler<HTMLDivElement> = (e) => {
    touchEndX = e.nativeEvent.clientX;
    console.log("end", touchEndX);
    if (touchStartX > touchEndX) {
      handleSwipe(1); // 오른쪽페이지로 이동
    } else if (touchStartX < touchEndX) {
      handleSwipe(-1); // 왼쪽페이지로 이동
    }
  };

  return (
    <Container isMobile={isMobile}>
      <SwipeLeftBtn onClick={() => handleSwipe(-1)}>
        <SvgIcon name={"chevron_left"} width={36} height={36} fill={"black"} />
      </SwipeLeftBtn>
      <CarouselWrapper
        isMobile={isMobile}
        onMouseDown={handleMouseStart}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseEnd}
      >
        <Carousels ref={carouselRef}>
          {dailyMenu.map((menu, idx) => {
            return (
              <CarouselItem key={idx} isMobile={isMobile}>
                <Date>{menu.date}</Date>
                <Menu>
                  {menu.employee_menu.map((daily, idx) => {
                    return <MenuList key={idx}>{daily}</MenuList>;
                  })}
                </Menu>
              </CarouselItem>
            );
          })}
        </Carousels>
      </CarouselWrapper>
      <SwipeRightBtn onClick={() => handleSwipe(1)}>
        <SvgIcon name={"chevron_right"} width={36} height={36} fill={"black"} />
      </SwipeRightBtn>
    </Container>
  );
};
export default Carousel;
