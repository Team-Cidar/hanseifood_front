import { HomeView } from "./HomeView";
import { useEffect, useState } from "react";
import { requestWeekFood } from "@apis/index";
import { User, WeeklyData } from "@type/index";
import { useRecoilState } from "recoil";
import { userState, weeklyDataState } from "@modules/atoms";
import { Modal } from "@components/Modal";
import { IconButton } from "@components/Button";
import { DateText } from "@components/Carousel/Carousel.styled";

export const Home = () => {
  const [weeklyData, set_weeklyData] = useRecoilState<WeeklyData>(weeklyDataState);
  const [{ isEmployee }, set_isEmployee] = useRecoilState<User>(userState);
  const [isModalOpen, set_isModalOpen] = useState(false);

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

  const handleModal = () => {
    set_isModalOpen(!isModalOpen);
  }

  return (
    <>
      {isModalOpen &&
        <Modal
          header={"학생식당 임시 일품한정 메뉴 안내"}
          body={
            Object.entries(weeklyData.additional_menu).map((res, key) => {
              return (
                <>
                  <div>{res[0]}</div>
                  <div>
                    {res[1].map((daily, idx) => {
                      return daily + " "
                    })}
                  </div>
                  <br></br>
                </>
              )
            })
          }
          bottom={
            <IconButton width={84} height={32} onClick={handleModal} label={"닫기"} />
          }
        />
      }
      <HomeView
        weeklyData={weeklyData}
        toggleHandler={toggleHandler}
        handleModal={handleModal}
      />
    </>
  );
};
