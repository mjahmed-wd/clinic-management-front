import { _dateFormatterPost } from "./_dateFormate";


export const firstDateOfMonth = () => {
  let date = new Date();
  return _dateFormatterPost(new Date(date.getFullYear(), date.getMonth(), 1));
};

export const lastDateOfMonth = () => {
  let date = new Date();
  return _dateFormatterPost(new Date(date.getFullYear(), date.getMonth()+1, 0));
};

/* export const monthFirstDate = () => {
  let date = new Date(),
    y = date.getFullYear(),
    m = date.getMonth();
  const firstDay = new Date(y, m, 1);

  return dateFormatterForInput(firstDay);
}; */