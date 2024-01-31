import { useEffect, useState } from "react";
import BackOfficeView from "./BackOfficeView";
import { MenuHistory, StateGetter, StateSetter } from "./types";
import { requestDayTargetFood, requestDeleteMenu, requestExcelWeekFood, requestMenuHistory, requestUploadMenu } from "@apis/index";
import { getFormattedDate } from "@utils/GetFormattedDate";
import { WeekMenuStringFormator } from "@utils/WeekMenuStringFormator";
import { Modal } from "@components/Modal";
import { DefaultMenuHistory } from "./types.default";
import MenuSpecificItem from "@components/MenuSpecificItem";
import { IconButton } from "@components/Button";
import { userState } from "@modules/atoms";
import { Menu, User } from "@type/index";
import { useRecoilState } from "recoil";

const BackOffice = () => {
  const [date, set_date] = useState<string>(getFormattedDate());
  const [student, set_student] = useState<string>("");
  const [employee, set_employee] = useState<string>("");
  const [additional, set_additional] = useState<string>("");
  const [studentMenu, set_studentMenu] = useState<Menu | undefined>(undefined);
  const [employeeMenu, set_employeeMenu] = useState<Menu | undefined>(undefined);
  const [additionalMenu, set_additionalMenu] = useState<Menu | undefined>(undefined);
  const [{ page }, set_page] = useRecoilState<User>(userState);
  const [placeholder, set_placeholder] = useState<string[]>([]);
  const [showHistory, set_showHistory] = useState<boolean>(false);
  const [historyTarget, set_historyTarget] = useState<MenuHistory>(DefaultMenuHistory);

  const Getter: StateGetter = [date, student, employee, additional, placeholder];
  const Setter: StateSetter = [set_date, set_student, set_employee, set_additional];

  useEffect(() => {
    set_page(data => ({ ...data, page: "backoffice" }));
    __handleGetMenu();
  }, [date]);

  const handleUploadMenu = () => {
    requestUploadMenu(date, student, employee, additional)
    .then(() => {
      alert("식단표 업로드를 성공하였습니다.");
      __handleGetMenu();
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

  const handleDeleteMenu = (menuType: string) => {
    switch (menuType) {
      case 'S':
        __deleteMenu(studentMenu, menuType);
        break;
      case 'E':
        __deleteMenu(employeeMenu, menuType);
        break;
      case 'A':
        __deleteMenu(additionalMenu, menuType);
        break;
    }
  }

  const __deleteMenu = (menu: Menu | undefined, menuType: string) => {
    if (!menu) {
        alert(`Menu [${date} (${menuType})] is not exists!`);
        return;
    }
    if (!confirm(`Are you sure to delete menu [${date} (${menuType})]`)) return;
    requestDeleteMenu(menu.menuId)
    .then(res => {
      __handleGetMenu();
    })
    .catch(err => console.log(err));
  }

  const __handleGetMenu = () => {
    set_student('');
    set_employee('');
    set_additional('');
    requestDayTargetFood(date)
    .then(res => {
      const datas = res.data
      const exPlaceholder = "ex) 백미밥, 된장찌개, 숙주나물, 비엔나소시지조림, 깍두기"

      if (datas.studentMenu.exists) {
        set_studentMenu(Object.values<Menu>(datas.studentMenu.menus)[0]);
        set_placeholder([WeekMenuStringFormator(datas.studentMenu.menus)])
      } else {
        set_studentMenu(undefined)
        set_placeholder([exPlaceholder])
      }

      if (datas.employeeMenu.exists) {
        set_employeeMenu(Object.values<Menu>(datas.employeeMenu.menus)[0]);
        set_placeholder(data => ([...data, WeekMenuStringFormator(datas.employeeMenu.menus)]))
      } else {
        set_employeeMenu(undefined)
        set_placeholder(data => ([...data, exPlaceholder]))
      }

      if (datas.additionalMenu.exists) {
        set_additionalMenu(Object.values<Menu>(datas.additionalMenu.menus)[0]);
        set_placeholder(data => ([...data, WeekMenuStringFormator(datas.additionalMenu.menus)]))
      } else {
        set_additionalMenu(undefined)
        set_placeholder(data => ([...data, exPlaceholder]))
      }
    }).catch(err => {
      console.log(err);
    });
  }

  return (
    <>
      {
        showHistory &&
        (<Modal 
          header={`${historyTarget.date} (${historyTarget.menuType}) History`}
          body={
            <div style={{overflow: 'scroll'}}>
              {historyTarget.history.map((menu) => {
                return (
                  <MenuSpecificItem 
                    key={menu.menuId} 
                    menu={menu} 
                    onInteraction={() => {
                      // set current menu as this specific menu history
                      console.log(menu);
                    }}/>
                )
              })}
            </div>
          }
          bottom={
            <IconButton 
              width={'84'} 
              height={'32'} 
              onClick={() => set_showHistory(false)} label={"닫기"} />
          }
        />)
      }
      <BackOfficeView 
        getter={Getter} 
        setter={Setter} 
        handleUploadMenu={handleUploadMenu} 
        handleExcelWeekMenu={handleExcelWeekMenu} 
        handleModal={handleModal} 
        handleDeleteMenu={handleDeleteMenu}
        />
    </>);
};

export default BackOffice;