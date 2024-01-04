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

  const Getter: StateGetter = [date, student, employee, additional];
  const Setter: StateSetter = [set_date, set_student, set_employee, set_additional];

  useEffect(() => {
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
    }).catch((err) => {
      alert("식단표 업로드를 실패하였습니다.");
      console.error("handleUploadMenu" + err);
    });
  };

  const handleExcelWeekMenu = () => {
    requestExcelWeekFood(date)
    .then(res => {
      const contentDisposition = res.headers['content-disposition'];

      const filenameRegex = /filename=([^;]*)/;
      const matches = filenameRegex.exec(contentDisposition);
      const fileName = matches != null && matches[1] ? matches[1] : 'default_filename.xlsx';

      const url = window.URL.createObjectURL(new Blob([res.data]));
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();

      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }).catch(err => {
      alert("파일 다운로드에 실패하였습니다.");
      console.error("handleExcelWeekMenu error" + err);
    });
  };

  return <BackOfficeView getter={Getter} setter={Setter} handleUploadMenu={handleUploadMenu} handleExcelWeekMenu={handleExcelWeekMenu}/>;
};

export default BackOffice;