import { useEffect, useState } from "react";
import BackOfficeView from "./BackOfficeView";
import { StateGetter, StateSetter } from "./types";
import { requestDayTargetFood, requestExcelWeekFood, requestUploadMenu } from "@apis/index";
import { getFormattedDate } from "@utils/GetFormattedDate";
import { WeekMenuStringFormator } from "@utils/WeekMenuStringFormator";
import { userState } from "@modules/atoms";
import { User } from "@type/index";
import { useRecoilState } from "recoil";

const BackOffice = () => {
  const [date, set_date] = useState<string>(getFormattedDate());
  const [student, set_student] = useState<string>("");
  const [employee, set_employee] = useState<string>("");
  const [additional, set_additional] = useState<string>("");
  const [{ page }, set_page] = useRecoilState<User>(userState);

  const Getter: StateGetter = [date, student, employee, additional];
  const Setter: StateSetter = [set_date, set_student, set_employee, set_additional];

  useEffect(() => {
    set_page({ page: "backoffice" });
    requestDayTargetFood(date)
    .then(res => {
      set_student(WeekMenuStringFormator(res.data.student_menu));
      set_employee(WeekMenuStringFormator(res.data.employee_menu));
      set_additional(WeekMenuStringFormator(res.data.additional_menu));
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