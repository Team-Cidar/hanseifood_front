import { HomeView } from "./HomeView";
import { useEffect, useState } from "react";
import { requestDayFood, requestWeekFood } from "@apis/index";
import { Menu } from "@type/index";
import { useRecoilState } from "recoil";
import { menuState } from "@modules/atoms";

export const Home = () => {
  const [weeklyMenu, set_weeklyMenu] = useRecoilState<Menu[]>(menuState);
  const [checked, set_checked] = useState(false);
  const [toggleLabel, set_toggleLabel] = useState("학생");

  useEffect(() => {
    requestWeekFood().then((res) => {
      set_weeklyMenu(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  const toggleHandler = () => {
    set_checked(!checked);
    checked ? set_toggleLabel("학생") : set_toggleLabel("교직원");
  };

  return (
    <HomeView
      weeklyMenu={weeklyMenu}
      checked={checked}
      toggleLabel={toggleLabel}
      toggleHandler={toggleHandler}
    />
  );
};
