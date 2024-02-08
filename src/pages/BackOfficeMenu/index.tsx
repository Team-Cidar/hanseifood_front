import { useEffect, useState } from 'react';

import {
  requestDayTargetFood,
  requestDeleteMenu,
  requestExcelWeekFood,
  requestMenuHistory,
  requestUploadMenu,
} from '@apis/index';
import { formatDate, getFormattedDate } from '@utils/GetFormattedDate';
import { WeekMenuStringFormator } from '@utils/WeekMenuStringFormator';
import { Modal } from '@components/Modal';
import MenuSpecificItem from '@components/MenuSpecificItem';
import { IconButton } from '@components/Button';
import { Menu } from '@type/index';
import BackOfficeMenuView from './BackOfficeMenuView';
import { MenuHistory, StateGetter, StateSetter } from './types';
import { DefaultMenuHistory } from './types.default';

const BackOfficeMenu = () => {
  const [date, set_date] = useState<string>(getFormattedDate());
  const [student, set_student] = useState<string>('');
  const [employee, set_employee] = useState<string>('');
  const [additional, set_additional] = useState<string>('');
  const [studentMenu, set_studentMenu] = useState<Menu | undefined>(undefined);
  const [employeeMenu, set_employeeMenu] = useState<Menu | undefined>(undefined);
  const [additionalMenu, set_additionalMenu] = useState<Menu | undefined>(undefined);
  const [placeholder, set_placeholder] = useState<string[]>([]);
  const [showHistory, set_showHistory] = useState<boolean>(false);
  const [historyTarget, set_historyTarget] = useState<MenuHistory>(DefaultMenuHistory);

  const Getter: StateGetter = [date, student, employee, additional, placeholder];
  const Setter: StateSetter = [set_date, set_student, set_employee, set_additional];

  useEffect(() => {
    const dateObj = new Date(date);
    const day = dateObj.getUTCDay();
    if ([6, 0].includes(day)) {
      alert('주말은 선택할 수 없습니다. 금요일로 이동합니다.');
      if (day) dateObj.setUTCDate(dateObj.getUTCDate() - 1);
      else dateObj.setDate(dateObj.getDate() - 2);
      set_date(formatDate(dateObj));
      return;
    }
    __handleGetMenu();
  }, [date]);

  useEffect(() => {
    if (historyTarget.menuType != '') set_showHistory(true);
  }, [historyTarget]);

  const handleUploadMenu = () => {
    requestUploadMenu(date, student, employee, additional)
      .then(() => {
        alert('식단표 업로드를 성공하였습니다.');
        __handleGetMenu();
      })
      .catch((e) => {
        if (e.resopnse.status == 400) alert('주말이나 과거 날짜의 식단표는 변경할 수 없습니다.');
        else {
          console.log(e);
          alert('식단표 업로드를 실패하였습니다.');
        }
      });
  };

  const handleExcelWeekMenu = () => {
    requestExcelWeekFood(date)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleModal = (menuType: string) => {
    requestMenuHistory(date, menuType)
      .then((res) => {
        set_historyTarget({
          date: date,
          menuType: menuType,
          history: res.data,
        });
      })
      .catch((err) => {
        if (err.response.status == 404) alert('변경 내역이 존재하지 않습니다.');
        else console.log(err);
      });
  };

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
  };

  const __deleteMenu = (menu: Menu | undefined, menuType: string) => {
    if (!menu) {
      alert(`메뉴 [${date} (${menuType})]가 존재하지 않습니다!`);
      return;
    }
    if (!confirm(`[${date} (${menuType})] 메뉴를 삭제하겠습니까?`)) return;
    requestDeleteMenu(menu.menuId)
      .then(() => {
        __handleGetMenu();
      })
      .catch((err) => {
        if (err.response.status == 400) alert('이미 지난 날짜의 메뉴는 삭제할 수 없습니다.');
        else console.log(err);
      });
  };

  const __handleGetMenu = () => {
    set_student('');
    set_employee('');
    set_additional('');
    requestDayTargetFood(date)
      .then((res) => {
        const datas = res.data;
        const exPlaceholder = 'ex) 백미밥, 된장찌개, 숙주나물, 비엔나소시지조림, 깍두기';

        if (datas.studentMenu.exists) {
          set_studentMenu(Object.values<Menu>(datas.studentMenu.menus)[0]);
          set_placeholder([WeekMenuStringFormator(datas.studentMenu.menus)]);
        } else {
          set_studentMenu(undefined);
          set_placeholder([exPlaceholder]);
        }

        if (datas.employeeMenu.exists) {
          set_employeeMenu(Object.values<Menu>(datas.employeeMenu.menus)[0]);
          set_placeholder((data) => [...data, WeekMenuStringFormator(datas.employeeMenu.menus)]);
        } else {
          set_employeeMenu(undefined);
          set_placeholder((data) => [...data, exPlaceholder]);
        }

        if (datas.additionalMenu.exists) {
          set_additionalMenu(Object.values<Menu>(datas.additionalMenu.menus)[0]);
          set_placeholder((data) => [...data, WeekMenuStringFormator(datas.additionalMenu.menus)]);
        } else {
          set_additionalMenu(undefined);
          set_placeholder((data) => [...data, exPlaceholder]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {showHistory && (
        <Modal
          header={`${historyTarget.date} (${historyTarget.menuType}) History`}
          body={
            <div style={{ overflow: 'scroll' }}>
              {historyTarget.history.map((menu) => {
                return (
                  <MenuSpecificItem
                    key={menu.menuId}
                    menu={menu}
                    onInteraction={() => {
                      // set current menu as this specific menu history
                      alert('이전 메뉴를 현재 메뉴로 등록하는 기능 추가 예정입니다.');
                    }}
                  />
                );
              })}
            </div>
          }
          bottom={<IconButton width={'84'} height={'32'} onClick={() => set_showHistory(false)} label={'닫기'} />}
        />
      )}
      <BackOfficeMenuView
        getter={Getter}
        setter={Setter}
        handleUploadMenu={handleUploadMenu}
        handleExcelWeekMenu={handleExcelWeekMenu}
        handleModal={handleModal}
        handleDeleteMenu={handleDeleteMenu}
      />
    </>
  );
};

export default BackOfficeMenu;
