export const currentYear = (param) => {
    const date = new Date(param);
    const year = date.getFullYear();
   
    return year;
  };