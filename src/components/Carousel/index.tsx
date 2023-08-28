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
  MenuCard,
  MenuList,
  SwipeLeftBtn,
  SwipeRightBtn,
} from "./Carousel.styled";
import {
  MobileCarouselWrapper,
  MobileContainer,
} from "./Carousel.mobile.styled";
import SvgIcon from "@components/SvgIcon";
import { Default, Mobile } from "@utils/MediaQuery";
import { Menu } from "@type/index";

interface CarouselProps {
  weeklyMenu: Menu[];
}

const Carousel = ({ weeklyMenu }: CarouselProps) => {
  let touchStartX: number;
  let touchEndX: number;

  const [currCarousel, setCurrCarousel] = useState(0);
  const carouselRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (carouselRef.current != null) {
      applyCarouselStyles(
        `translateX(-${currCarousel}00%)`,
        "all 0.5s ease-in-out"
      );
    }
  }, [currCarousel]);

  const applyCarouselStyles = (
    transform: string = "",
    transition: string = ""
  ) => {
    if (carouselRef.current != null) {
      carouselRef.current.style.transform = transform;
      carouselRef.current.style.transition = transition;
    }
  };
  const handleSwipe = (move: number) => {
    const totalMenus = weeklyMenu.length;
    let nextCarousel = (currCarousel + move) % totalMenus; //nextCarousel의 값이 1~5사이 이도록 totalMenus(5)로 나눈 나머지값을 사용!
    if (nextCarousel < 0) {
      //nextCarousel이 음수 : 0번 슬라이드에서 왼쪽으로 이동 할 때!
      nextCarousel = totalMenus - 1; //마지막 슬라이드로 이동!
    }
    setCurrCarousel(nextCarousel);

    applyCarouselStyles("", "all 0.5s ease-in-out");
  };

  // 터치 이벤트

  const handleMouseStart: MouseEventHandler<HTMLDivElement> = (e) => {
    touchStartX = e.nativeEvent.clientX;
  };
  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    applyCarouselStyles(`translateX(-${currCarousel}00%)`);
  };

  const handleMouseEnd: MouseEventHandler<HTMLDivElement> = (e) => {
    touchEndX = e.nativeEvent.clientX;

    if (touchStartX > touchEndX) {
      handleSwipe(1); // 오른쪽페이지로 이동
    } else if (touchStartX < touchEndX) {
      handleSwipe(-1); // 왼쪽페이지로 이동
    }
  };

  // 모바일용 터치 이벤트
  const handleTouchStart: TouchEventHandler<HTMLDivElement> = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove: TouchEventHandler<HTMLDivElement> = (e) => {
    const currTouchX = e.touches[0].clientX;
    const deltaX = currTouchX - touchStartX;
    const newX = currCarousel * 100 - deltaX;

    applyCarouselStyles(`translateX(-${newX}%)`, "all ease-in-out");
  };

  const handleTouchEnd: TouchEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();

    touchEndX = e.changedTouches[0].clientX;

    if (touchStartX - touchEndX > 50) {
      handleSwipe(1);
    } else if (touchEndX - touchStartX > 50) {
      handleSwipe(-1);
    } else {
      applyCarouselStyles(
        `translateX(-${currCarousel}00%)`,
        "all 0.3s ease-in-out"
      );
    }
  };

  return (
    <>
      <Default>
        <Container>
          <SwipeLeftBtn onClick={() => handleSwipe(-1)}>
            <SvgIcon
              name={"chevron_left"}
              width={36}
              height={36}
              fill={"black"}
            />
          </SwipeLeftBtn>
          <CarouselWrapper
            onMouseDown={handleMouseStart}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseEnd}
          >
            <Carousels ref={carouselRef}>
              {weeklyMenu.map((menu, idx) => {
                return (
                  <CarouselItem key={idx}>
                    <Date>{menu.date}</Date>
                    <MenuCard>
                      {menu.employee_menu.map((daily, idx) => {
                        return <MenuList key={idx}>{daily}</MenuList>;
                      })}
                    </MenuCard>
                  </CarouselItem>
                );
              })}
            </Carousels>
          </CarouselWrapper>
          <SwipeRightBtn onClick={() => handleSwipe(1)}>
            <SvgIcon
              name={"chevron_right"}
              width={36}
              height={36}
              fill={"black"}
            />
          </SwipeRightBtn>
        </Container>
      </Default>
      <Mobile>
        <MobileContainer>
          <SwipeLeftBtn onClick={() => handleSwipe(-1)}>
            <SvgIcon
              name={"chevron_left"}
              width={36}
              height={36}
              fill={"black"}
            />
          </SwipeLeftBtn>
          <MobileCarouselWrapper
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <Carousels ref={carouselRef}>
              {weeklyMenu.map((menu, idx) => {
                return (
                  <CarouselItem key={idx}>
                    <Date>{menu.date}</Date>
                    <MenuCard>
                      {menu.employee_menu.map((daily, idx) => {
                        return <MenuList key={idx}>{daily}</MenuList>;
                      })}
                    </MenuCard>
                  </CarouselItem>
                );
              })}
            </Carousels>
          </MobileCarouselWrapper>
          <SwipeRightBtn onClick={() => handleSwipe(1)}>
            <SvgIcon
              name={"chevron_right"}
              width={36}
              height={36}
              fill={"black"}
            />
          </SwipeRightBtn>
        </MobileContainer>
      </Mobile>
    </>
  );
};
export default Carousel;
