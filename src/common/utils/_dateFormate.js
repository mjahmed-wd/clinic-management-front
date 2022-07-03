// export const _dateFormatter = (param) => {
//   const date = new Date(param);
//   const year = date.getFullYear();
//   const month = `${date.getMonth() + 1}`.padStart(2, "0");
//   const day = `${date.getDate()}`.padStart(2, "0");
//   return [year, month, day].join("-") || "";
// };

export const _dateFormatterView = (param) => {
  const date = new Date(param);
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return [day, month, year].join("-") || "";
};

export const _dateFormatterPost = (param) => {
  const date = new Date(param);
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  if (param === null) {
    return null;
  } else {
    return [year, month, day].join("-") || "";
  }

};
