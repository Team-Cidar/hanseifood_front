import { HomeView } from "./HomeView";
import { useEffect, useState } from "react";
import { requestWeekFood } from "@apis/index";
import { User, WeeklyData } from "@type/index";
import { useRecoilState } from "recoil";
import { userState, weeklyDataState } from "@modules/atoms";

export const Home = () => {
  const [weeklyData, set_weeklyData] = useRecoilState<WeeklyData>(weeklyDataState);
  const [{ isEmployee }, set_isEmployee] = useRecoilState<User>(userState);

  useEffect(() => {
    requestWeekFood().then((res) => {
      set_weeklyData(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  const toggleHandler = () => {
    set_isEmployee({ isEmployee: !isEmployee });
  };

  return (
    <HomeView
      weeklyData={weeklyData}
      toggleHandler={toggleHandler}
    />
  );
};
