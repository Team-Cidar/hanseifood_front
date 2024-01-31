import { useEffect, useState } from "react";
import BackOfficeView from "./BackOfficeView";
import { MenuHistory, StateGetter, StateSetter } from "./types";
import { requestDayTargetFood, requestExcelWeekFood, requestMenuHistory, requestUploadMenu } from "@apis/index";
import { getFormattedDate } from "@utils/GetFormattedDate";
import { WeekMenuStringFormator } from "@utils/WeekMenuStringFormator";
import { Modal } from "@components/Modal";
import { DefaultMenuHistory } from "./types.default";
import MenuSpecificItem from "@components/MenuSpecificItem";
import { IconButton } from "@components/Button";
import { userState } from "@modules/atoms";
import { User } from "@type/index";
import { useRecoilState } from "recoil";

const BackOffice = () => {
  const [date, set_date] = useState<string>(getFormattedDate());
  const [student, set_student] = useState<string>("");
  const [employee, set_employee] = useState<string>("");
  const [additional, set_additional] = useState<string>("");
  const [{ page }, set_page] = useRecoilState<User>(userState);
  const [placeholder, set_placeholder] = useState<string[]>([]);
  const [showHistory, set_showHistory] = useState<boolean>(false);
  const [historyTarget, set_historyTarget] = useState<MenuHistory>(DefaultMenuHistory);

  const Getter: StateGetter = [date, student, employee, additional, placeholder];
  const Setter: StateSetter = [set_date, set_student, set_employee, set_additional];

  console.log("핳허" + page);
  useEffect(() => {
    set_page(data => ({ ...data, page: "backoffice" }));
    requestDayTargetFood(date)
    .then(res => {
      let sMenu = WeekMenuStringFormator(res.data.studentMenu.menus);
      let eMenu = WeekMenuStringFormator(res.data.employeeMenu.menus);
      let aMenu = WeekMenuStringFormator(res.data.additionalMenu.menus);
      const exPlaceholder = "ex) 백미밥, 된장찌개, 숙주나물, 비엔나소시지조림, 깍두기"
      set_placeholder([
          sMenu.length ? sMenu : exPlaceholder,
          eMenu.length ? eMenu : exPlaceholder,
          aMenu.length ? aMenu : exPlaceholder,
        ]);
    }).catch(err => {
      console.log(err);
    });
  }, [date]);

  const handleUploadMenu = () => {
    requestUploadMenu(date, student, employee, additional)
    .then(() => {
      alert("식단표 업로드를 성공하였습니다.");
    }).catch((e) => {
      console.log(e)
      alert("식단표 업로드를 실패하였습니다.");
    });
  };

  const handleExcelWeekMenu = () => {
    requestExcelWeekFood(date)
    .then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  };

  const handleModal = (menuType: string) => {
    requestMenuHistory(date, menuType)
    .then(res => {
      set_historyTarget({
        date: date,
        menuType: menuType,
        history: res.data
      })
    }).catch(err => {
      console.log(err)
    }).finally(() => {
      set_showHistory(true);
    })
  }

  return (
    <>
      {
        showHistory &&
        (<Modal 
          header={`${historyTarget.date} (${historyTarget.menuType}) History`}
          body={
            <div style={{overflow: 'scroll'}}>
              {historyTarget.history.map((value) => {
                return (
                  <MenuSpecificItem key={value.menuId} menu={value} onInteraction={() => {}}/>
                )
              })}
            </div>
          }
          bottom={
            <IconButton width={'84'} height={'32'} onClick={() => set_showHistory(false)} label={"닫기"} />
          }
        />)
      }
      <BackOfficeView getter={Getter} setter={Setter} handleUploadMenu={handleUploadMenu} handleExcelWeekMenu={handleExcelWeekMenu} handleModal={handleModal} />
    </>);
};

export default BackOffice;