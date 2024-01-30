import React, {
  TouchEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";

import * as CarouselStyled from "./Carousel.styled";
import {
  MobileCarouselItem,
  MobileCarouselWrapper,
  MobileContainer,
  MobileDateText,
  MobileMenuList,
} from "./Carousel.mobile.styled";
import { Menu, User } from "@type/index";
import SvgIcon from "@components/SvgIcon";
import { EColor } from "@styles/color";
import { userState } from "@modules/atoms";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

interface CarouselProps {
  weeklyMenu: Menu;
}

const Carousel = ({ weeklyMenu }: CarouselProps) => {
  const navigate = useNavigate();
  let touchStartX: number;
  let touchEndX: number;
  const [currCarousel, setCurrCarousel] = useState(0);
  const [{page}, set_page] = useRecoilState<User>(userState);
  const carouselRef = useRef<HTMLUListElement>(null);

  // 요일에 따른 초기 화면 렌더링
  useEffect(() => {
    const date = new Date();

    // 월, 화, 수, 목, 금 => 1, 2, 3, 4, 5
    // 토, 일 => 6, 0
    let day = date.getDay();
    if (day == 6 || day == 0) {
      day = 1; // 토, 일 이면 월요일로 설정
    }

    // Carousel index : 0, 1, 2, 3, 4
    setCurrCarousel(day - 1);
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
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
    const totalMenus = Object.values(weeklyMenu).length;
    let nextCarousel = (currCarousel + move) % totalMenus; //nextCarousel의 값이 1~5사이 이도록 totalMenus(5)로 나눈 나머지값을 사용!
    if (nextCarousel < 0) {
      //nextCarousel이 음수 : 0번 슬라이드에서 왼쪽으로 이동 할 때!
      nextCarousel = totalMenus - 1; //마지막 슬라이드로 이동!
    }
    setCurrCarousel(nextCarousel);

    applyCarouselStyles("", "all 0.5s ease-in-out");
  };

  // 터치 이벤트

  // const handleMouseStart: MouseEventHandler<HTMLDivElement> = (e) => {
  //   touchStartX = e.nativeEvent.clientX;
  // };
  // const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
  //   applyCarouselStyles(
  //     `translateX(-${currCarousel}00%)`,
  //     "all 0.3s ease-in-out"
  //   );
  // };

  // const handleMouseEnd: MouseEventHandler<HTMLDivElement> = (e) => {
  //   touchEndX = e.nativeEvent.clientX;

  //   if (touchStartX > touchEndX) {
  //     handleSwipe(1); // 오른쪽페이지로 이동
  //   } else if (touchStartX < touchEndX) {
  //     handleSwipe(-1); // 왼쪽페이지로 이동
  //   }
  // };

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

  const handleNavigate = (name: string) => {
    set_page({page: name});
    navigate(`/${name}`);
  };

  return (
    <>
      <MobileContainer>
        <MobileCarouselWrapper
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* <SwipeLeftBtn onClick={() => handleSwipe(-1)}>
            <SvgIcon
              name={"chevron_left"}
              width={12}
              height={12}
              fill={"black"}
            />
          </SwipeLeftBtn> */}
          <CarouselStyled.Carousels ref={carouselRef}>
            {Object.entries(weeklyMenu).map((res, key) => {
              return (
                <MobileCarouselItem key={key}>
                  <MobileDateText>{res[0]}</MobileDateText>
                  <CarouselStyled.MenuCard>
                    {res[1].map((daily, idx) => {
                      return (
                        <MobileMenuList key={idx}>{daily}</MobileMenuList>
                      );
                    })}
                  </CarouselStyled.MenuCard>
                  <CarouselStyled.FeedbackBottom onClick={() => handleNavigate('home/comment')}>
                    <CarouselStyled.SvgView>
                      <SvgIcon
                        name={"comment"}
                        width={14}
                        height={14}
                        fill={EColor.TEXT_500}
                      />
                      <CarouselStyled.SvgText>
                        15
                      </CarouselStyled.SvgText>
                    </CarouselStyled.SvgView>
                    <CarouselStyled.SvgView>
                      <SvgIcon
                        name={"like"}
                        width={14}
                        height={14}
                        fill={EColor.TEXT_500}
                      />
                      <CarouselStyled.SvgText>
                        3
                      </CarouselStyled.SvgText>
                    </CarouselStyled.SvgView>
                  </CarouselStyled.FeedbackBottom>
                </MobileCarouselItem>
              );
            })}
          </CarouselStyled.Carousels>
          {/* <SwipeRightBtn onClick={() => handleSwipe(1)}>
            <SvgIcon
              name={"chevron_right"}
              width={12}
              height={12}
              fill={"black"}
            />
          </SwipeRightBtn> */}
        </MobileCarouselWrapper>
      </MobileContainer>
    </>
  );
};
export default Carousel;
