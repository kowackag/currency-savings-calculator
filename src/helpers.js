export const getToday = () => {
  const fullDate = new Date();
  const year = fullDate.getFullYear();
  const month =
    fullDate.getMonth() < 10 ? `0${fullDate.getMonth()}` : fullDate.getMonth();
  const day =
    fullDate.getDate() < 10 ? `0${fullDate.getDate()}` : fullDate.getDate();
  const today = `${year}-${month}-${day}`;
  return today;
};
