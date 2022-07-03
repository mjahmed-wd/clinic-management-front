import { black900 } from "./customColor";

export const menuSx = {
  "& .MuiPaper-root": {
    boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2)",
    borderRadius: "0",
    width: "210px",
    "& .MuiMenuItem-root": {
      padding: "12px 14px",
      color: black900,
      marginBottom: "5px",
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.08)",
      },
    },
    "& .MuiMenuItem-root:last-child": {
      marginBottom: "0",
    },
  },
};