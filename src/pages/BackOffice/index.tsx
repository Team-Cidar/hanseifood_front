import { useEffect, useState } from "react";
import BackOfficeView from "./BackOfficeView";
import { StateGetter, StateSetter } from "./types";
import { requestDayTargetFood, requestUploadMenu } from "@apis/index";
import { getFormattedDate } from "@utils/GetFormattedDate";

const BackOffice = () => {
  const [menuDateInput, set_menuDateInput] = useState<string>(getFormattedDate());
  const [onlyEmployee, set_onlyEmployee] = useState<boolean>(false);
  const [hasAdditional, set_hasAdditional] = useState<boolean>(false);
  const [studentMenuInput, set_studentMenuInput] = useState<string>("");
  const [employeeMenuInput, set_employeeMenuInput] = useState<string>("");
  const [additionalMenuInput, set_additionalMenuInput] = useState<string>("");

  const Getter: StateGetter = [menuDateInput, studentMenuInput, employeeMenuInput, additionalMenuInput];
  const Setter: StateSetter = [set_menuDateInput, set_studentMenuInput, set_employeeMenuInput, set_additionalMenuInput];

  useEffect(() => {
    requestDayTargetFood(menuDateInput)
    .then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }, [menuDateInput]);

  const handleUploadMenu = () => {
    requestUploadMenu(menuDateInput, onlyEmployee, hasAdditional, studentMenuInput, employeeMenuInput, additionalMenuInput)
    .then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  };

  return <BackOfficeView getter={Getter} setter={Setter} handleUploadMenu={handleUploadMenu}/>;
};

export default BackOffice;