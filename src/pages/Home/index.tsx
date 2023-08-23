import { Default, Mobile } from "@utils/MediaQuery";
import { HomeView } from "./HomeView";
import { useEffect } from "react";
import { requestDayFood, requestWeekFood } from "@apis/index";

export const Home = () => {
  useEffect(() => {
    requestDayFood().then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err);
    });
    requestWeekFood().then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
  <HomeView />
  );
};
