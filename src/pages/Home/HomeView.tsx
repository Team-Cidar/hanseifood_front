import { CardView } from "@components/CardView/CardView.styled";

import Carousel from "@components/Carousel";
import { Default, Mobile } from "@utils/MediaQuery";
import { Background, TitleText } from "./Home.styled";
import { BackgroundMobile, TitleTextMobile } from "./Home.styled.mobile";

const Daily_Menu = [
  {
    date: "2023-07-18",
    only_employee: true,
    has_two_menus: false,
    student_menu: [],
    employee_menu: [
      "얼갈이된장국",
      "오삼불고기",
      "짜장떡볶이",
      "삼색나물무침",
      "열무김치",
      "도시락김",
    ],
  },
  {
    date: "2023-07-19",
    only_employee: true,
    has_two_menus: false,
    student_menu: [],
    employee_menu: [
      "미역국",
      "오징어볶음",
      "짜장떡볶이",
      "콩나물무침",
      "열무김치",
      "도시락김",
    ],
  },
  {
    date: "2023-07-20",
    only_employee: true,
    has_two_menus: false,
    student_menu: [],
    employee_menu: [
      "미역국",
      "오징어볶음",
      "짜장떡볶이",
      "콩나물무침",
      "열무김치",
      "도시락김",
    ],
  },
  {
    date: "2023-07-21",
    only_employee: true,
    has_two_menus: false,
    student_menu: [],
    employee_menu: [
      "미역국",
      "오징어볶음",
      "짜장떡볶이",
      "콩나물무침",
      "열무김치",
      "도시락김",
    ],
  },
  {
    date: "2023-07-22",
    only_employee: true,
    has_two_menus: false,
    student_menu: [],
    employee_menu: [
      "미역국",
      "오징어볶음",
      "짜장떡볶이",
      "콩나물무침",
      "열무김치",
      "도시락김",
    ],
  },
];

interface Props {
  isMobile: boolean;
}

export const HomeView = ({ isMobile }: Props) => {
  return (
    <>
      {isMobile ? (
        <Mobile>
          <BackgroundMobile>
            <CardView isMobile={isMobile}>
              <TitleTextMobile>Hansei Weekly Food</TitleTextMobile>
              <Carousel dailyMenu={Daily_Menu} isMobile={isMobile} />
            </CardView>
          </BackgroundMobile>
        </Mobile>
      ) : (
        <Default>
          <Background>
            <CardView isMobile={isMobile}>
              <TitleText>Hansei Weekly Food</TitleText>
              <Carousel dailyMenu={Daily_Menu} isMobile={isMobile} />
            </CardView>
          </Background>
        </Default>
      )}
    </>
  );
};
