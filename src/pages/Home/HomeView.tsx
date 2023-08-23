import Carousel from "@components/Carousel";
import { Background, TitleText, TitleTextBox, TitleTextMobile, TitleTextMobileRight, TitleTextRight } from "./Home.styled";
import CardView from "@components/CardView";
import { Desktop, Mobile } from "@utils/MediaQuery";

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

/* 그 외 컴포넌트 사이징 */
export const HomeView = () => {
  return (
    <Background>
      <Desktop>
        <CardView>
          <TitleText>Hansei Weekly Food</TitleText>
          <Carousel dailyMenu={Daily_Menu} />
          <TitleTextRight>매 주 월요일 오전 8:00에 식단표가 업데이트됩니다.</TitleTextRight>
        </CardView>
      </Desktop>
      <Mobile>
        <CardView>
          <TitleTextBox>
            <TitleTextMobile>Hansei</TitleTextMobile>
            <TitleTextMobile>Weekly Food</TitleTextMobile>
          </TitleTextBox>
          <Carousel dailyMenu={Daily_Menu} />
          <TitleTextMobileRight>매 주 월요일 오전 8:00에 식단표가 업데이트됩니다.</TitleTextMobileRight>
        </CardView>
      </Mobile>
    </Background>
  );
};