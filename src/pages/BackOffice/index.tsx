import { useState } from "react";
import BackOfficeView from "./BackOfficeView";
import { StateGetter, StateSetter } from "./types";

const BackOffice = () => {
  const [menuDateInput, set_menuDateInput] = useState<string>("");
  const [studentMenuInput, set_studentMenuInput] = useState<string>("");
  const [employeeMenuInput, set_employeeMenuInput] = useState<string>("");
  const [additionalMenuInput, set_additionalMenuInput] = useState<string>("");

  const Getter: StateGetter = [menuDateInput, studentMenuInput, employeeMenuInput, additionalMenuInput];
  const Setter: StateSetter = [set_menuDateInput, set_studentMenuInput, set_employeeMenuInput, set_additionalMenuInput];
  return <BackOfficeView getter={Getter} setter={Setter} />;
};

export default BackOffice;