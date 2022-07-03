export const currentDate = (daysToAdjust = 0) => {
  const primaryDate = new Date();
  const date = new Date(
    primaryDate.setDate(primaryDate.getDate() + +daysToAdjust)
  );
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return [year, month, day].join("-") || "";
};
