export type Menu = {
  date: String;
  student_menu?: String[];
  employee_menu: String[];
  has_two_menus: boolean;
  only_employee: boolean;
}

export type StringSetter = (newLabel: string | ((prevLabel: string) => string)) => void;
export type BooleanSetter = (newValue: boolean | ((prevValue: boolean) => boolean)) => void;