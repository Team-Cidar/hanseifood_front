export type WeeklyData = {
  only_employee: boolean;
  student_menu: Menu;
  employee_menu: Menu;
};

export type Menu = {
  [date: string]: string[]
}

export type User = {
  isEmployee: boolean;
};

export type StringSetter = (newLabel: string | ((prevLabel: string) => string)) => void;
export type BooleanSetter = (newValue: boolean | ((prevValue: boolean) => boolean)) => void;
