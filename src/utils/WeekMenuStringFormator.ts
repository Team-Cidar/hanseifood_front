export const WeekMenuStringFormator = (weekMenu) => {
  const formattedData = Object.values(weekMenu).map(menu => menu.join(', '))[0];
  return formattedData;
};