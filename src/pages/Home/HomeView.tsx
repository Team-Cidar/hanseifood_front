import Carousel from "@components/Carousel";
import { Background, CardView, TitleText } from "./Home.styled";

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

export const HomeCardView = () => {
  return (
    <Background>
      <CardView>
        <TitleText>Hansei Weekly Food</TitleText>
        <Carousel dailyMenu={Daily_Menu} />
      </CardView>
    </Background>
  );
};
