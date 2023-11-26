import { useEffect, useState } from "react";
import { HomeView } from "./HomeView";
import FontFaceObserver from "fontfaceobserver";
import { useRecoilState } from "recoil";
import { User, WeeklyData } from "@type/index";
import { userState, weeklyDataState } from "@modules/atoms";
import { requestWeekFood } from "@apis/index";

const Home = () => {
  let font = new FontFaceObserver('NotoSansBlack');
  const [weeklyData, set_weeklyData] = useRecoilState<WeeklyData>(weeklyDataState);
  const [loading, set_loading] = useState(false);
  const [{ isEmployee }, set_isEmployee] = useRecoilState<User>(userState);
  const [isModalOpen, set_isModalOpen] = useState(false);

  useEffect(() => {
    requestWeekFood().then((res) => {
      set_weeklyData(res.data);
    }).catch((err) => {
      console.log(err);
    });
    font.load().then(() => {
      set_loading(true);
    });
  }, []);

  const toggleHandler = () => {
    set_isEmployee({ isEmployee: !isEmployee });
  };

  const handleModal = () => {
    set_isModalOpen(!isModalOpen);
  }
  return (
    <HomeView
      weeklyData={weeklyData}
      toggleHandler={toggleHandler}
      handleModal={handleModal}
      loading={loading}
    />
  );
};

export default Home;