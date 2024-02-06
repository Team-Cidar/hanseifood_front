import {useEffect, useState} from 'react';
import {HomeView} from './HomeView';
import {useRecoilState, useSetRecoilState} from 'recoil';
import {langState} from '@modules/atoms';
import {Lang} from '@type/index';
import {getSystemLang} from '@utils/languages';
import FontFaceObserver from 'fontfaceobserver';
import {User, WeeklyData} from '@type/index';
import {userState, weeklyDataState} from '@modules/atoms';
import {requestWeekFood} from '@apis/index';
import { Modal } from '@components/Modal';
import { IconButton } from '@components/Button';

const Home = () => {
  const font = new FontFaceObserver('NotoSansBlack');
  const [weeklyData, set_weeklyData] =
    useRecoilState<WeeklyData>(weeklyDataState);
  const [loading, set_loading] = useState(false);
  const [{isEmployee}, set_isEmployee] = useRecoilState<User>(userState);
  const [{ isFeedbackModal }, set_isFeedbackModal] = useRecoilState<User>(userState);
  const [isModalOpen, set_isModalOpen] = useState(false);
  const setLang = useSetRecoilState<Lang>(langState);

  useEffect(() => {
    requestWeekFood()
      .then(res => {
        set_weeklyData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    font.load().then(() => {
      set_loading(true);
    });
    setLang(() => getSystemLang());
  }, []);

  const toggleHandler = () => {
    set_isEmployee({ isEmployee: !isEmployee });
  };

  const handleModal = () => {
    set_isModalOpen(!isModalOpen);
  };

  const handleFeedbackModal = () => {
    set_isFeedbackModal({ isFeedbackModal: !isFeedbackModal });
  };
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
                      return daily + " ";
                    })}
                  </div>
                  <br></br>
                </>
              );
            })
          }
          bottom={
            <IconButton width={84} height={32} onClick={handleModal} label={"닫기"} />
          }
        />
      }
      {isFeedbackModal &&
        <Modal
          header={"댓글"}
          body={
            <div>
              asdfas
            </div>
          }
          bottom={
            <div>
              asdfs
            </div>
          }
        />
      }
      <HomeView
        weeklyData={weeklyData}
        toggleHandler={toggleHandler}
        handleModal={handleModal}
        loading={loading}
      />
    </>
  );
};

export default Home;
