import { Default, Mobile } from "@utils/MediaQuery";
import { HomeView } from "./HomeView";
import { useEffect } from "react";
import { requestDayFood } from "@apis/index";

export const Home = () => {
  useEffect(() => {
    requestDayFood().then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err);
    })
  }, []);

  return (
    <>
      <Default>
        <HomeView isMobile={false} />
      </Default>
      <Mobile>
        <HomeView isMobile={true} />
      </Mobile>
    </>
  );
};
