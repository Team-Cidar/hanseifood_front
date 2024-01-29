import { useEffect, useState } from "react";
import BackOfficeView from "./BackOfficeView";
import { StateGetter, StateSetter } from "./types";
import { requestDayTargetFood, requestExcelWeekFood, requestUploadMenu } from "@apis/index";
import { getFormattedDate } from "@utils/GetFormattedDate";
import { WeekMenuStringFormator } from "@utils/WeekMenuStringFormator";

const BackOffice = () => {
  const [date, set_date] = useState<string>(getFormattedDate());
  const [student, set_student] = useState<string>("");
  const [employee, set_employee] = useState<string>("");
  const [additional, set_additional] = useState<string>("");
  const [placeholder, set_placeholder] = useState<string[]>([]);

  const Getter: StateGetter = [date, student, employee, additional, placeholder];
  const Setter: StateSetter = [set_date, set_student, set_employee, set_additional];

  useEffect(() => {
    requestDayTargetFood(date)
    .then(res => {
      set_placeholder([
          WeekMenuStringFormator(res.data.studentMenu.menus),
          WeekMenuStringFormator(res.data.employeeMenu.menus),
          WeekMenuStringFormator(res.data.additionalMenu.menus)
        ]);
    }).catch(err => {
      console.log(err);
    });
  }, [date]);

  const handleUploadMenu = () => {
    requestUploadMenu(date, student, employee, additional)
    .then(() => {
      alert("식단표 업로드를 성공하였습니다.");
    }).catch(() => {
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

  return <BackOfficeView getter={Getter} setter={Setter} handleUploadMenu={handleUploadMenu} handleExcelWeekMenu={handleExcelWeekMenu}/>;
};

export default BackOffice;