import { HomeView } from "./HomeView";
import { useEffect, useState } from "react";
import { requestDayFood, requestWeekFood } from "@apis/index";
import { Menu } from "@type/index";

/* 레이아웃 설정 */

export const Home = () => {
  const [weeklyMenu, set_weeklyMenu] = useState<Menu[]>([]);
  useEffect(() => {
    requestWeekFood().then((res) => {
      set_weeklyMenu(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <HomeView weeklyMenu={weeklyMenu} />
  );
};
