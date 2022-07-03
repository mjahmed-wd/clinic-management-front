import {
  black100,
  black400,
  whiteColor,
  black200,
  black300,
  black900,
  black600,
  primaryColor,
} from "./customColor";

export const customStyles = {
  control: (provided, { isFocused,isMulti }) => ({
    ...provided,
    minHeight: isMulti?"auto":"30px",
    height: isMulti?"auto":"30px",
    width: "100%",
    borderRadius: "4px",
    border: isFocused ? `1px solid ${primaryColor}` : `1px solid ${black300}`,
    "&:hover": {
      border: isFocused ? `1px solid ${primaryColor}` : `1px solid ${black600}`,
    },
    boxShadow: isFocused
      ? `0px 0px 0px 1px ${primaryColor}`
      : "0px 0px 0px 1px transparent",
  }),

  valueContainer: (provided, {isMulti}) => ({
    ...provided,
    height: isMulti?"auto":"30px",
    padding: "0px 10px",
  }),
  valueOption: (provided, state) => ({
    ...provided,
    zIndex: 9999,
  }),
  singleValue: (provided, state) => ({
    ...provided,
    fontSize: "14px",
    color: "gray",
  }),
  input: (provided, state) => ({
    ...provided,
    margin: "0px",
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: black900,
    padding: "4px 4px 4px 0px",
  }),
  indicatorSeparator: (state) => ({
    display: "none",
  }),
  indicatorsContainer: (provided, {isMulti}) => ({
    ...provided,
    color: "red",
    height: isMulti?"auto":"30px",
   "& > div":{
    padding:"0"
   }
  }),
  menu: (provided, state) => ({
    ...provided,
    padding: "0",
    boxShadow:
      "0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2)",
    marginTop: "2px",
  }),
  menuList: (provided, state) => ({
    ...provided,
    padding: "0",
    // margin: "0",
  }),
  option: (provided, { isDisabled, isFocused, isSelected }) => ({
    ...provided,
    fontWeight: 500,
    fontSize: 14,
    lineHeight: "18px",
    letterSpacing: 0.1,
    padding: "6px 12px",
    zIndex: 99999,
    marginTop: 0,
    color: isDisabled ? black100 : isSelected ? primaryColor : black900,
    backgroundColor: isDisabled
      ? black100
      : isSelected
      ? black200
      : isFocused
      ? black200
      : whiteColor,
    ":active": {
      backgroundColor: !isDisabled
        ? isSelected
          ? black200
          : whiteColor
        : whiteColor,
    },
    ":hover": {
      backgroundColor: "rgba(0, 0, 0, 0.08)",
      borderColor: "rgba(0, 0,0,10) !important",
    },
    textAlign: "left",
  }),
  placeholder: (provided, state) => ({
    ...provided,
    fontSize: 14,
    fontWeight: 400,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    color: black400,
    textAlign: "left",
  }),
  menuPortal: (base) => ({ ...base, zIndex: 99999999 }),
  // multiValue:(provided, {isMulti})=>(
  //   {...provided, 
  //     // marginTop:"0", 
  //     marginTop: isMulti?"":"0"
  //   }
  // ),
  multiValueLabel:(provided, state)=>(
    {...provided, 
      padding:"0px"
    }
  )
};
export const borderLessCustomStyles = {
  control: (provided, { isFocused }) => ({
    ...provided,
    minHeight: "40px",
    height: "40px",
    // borderRadius: "4px",
    borderBottom: isFocused
      ? `1px solid ${primaryColor}`
      : `1px solid ${black200}`,
    border: "none",
    // borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
    "&:hover": {
      borderColor: "unset",
      borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
    },
    boxShadow: "unset",
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    height: "34px",
    padding: "0 11px",
  }),
  valueOption: (provided, state) => ({
    ...provided,
    zIndex: 9999,
  }),
  singleValue: (provided, state) => ({
    ...provided,
    fontSize: "14px",
    color: "gray",
  }),
  input: (provided, state) => ({
    ...provided,
    margin: "0px",
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: black900,
    padding: "8px 8px 8px 0px",
  }),
  indicatorSeparator: (state) => ({
    display: "none",
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    color: "red",
    height: "34px",
  }),
  menu: (provided, state) => ({
    ...provided,
    padding: "0",
    boxShadow:
      "0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2)",
    marginTop: "2px",
  }),
  menuList: (provided, state) => ({
    ...provided,
    padding: "0",
    // margin: "0",
  }),
  option: (provided, { isDisabled, isFocused, isSelected }) => ({
    ...provided,
    fontWeight: 500,
    fontSize: 14,
    lineHeight: "18px",
    letterSpacing: 0.1,
    padding: "12px 14px",
    zIndex: 99999,
    marginTop: 0,
    color: isDisabled ? black100 : isSelected ? primaryColor : black900,
    backgroundColor: isDisabled
      ? black100
      : isSelected
      ? black200
      : isFocused
      ? black200
      : whiteColor,
    ":active": {
      backgroundColor: !isDisabled
        ? isSelected
          ? black200
          : whiteColor
        : whiteColor,
    },
    ":hover": {
      backgroundColor: "rgba(0, 0, 0, 0.08)",
      bordercolor: "rgba(0, 0,0,10) !important",
    },
    textAlign: "left",
  }),
  placeholder: (provided, state) => ({
    ...provided,
    fontSize: 14,
    fontWeight: 400,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    color: black400,
    textAlign: "left",
  }),
  menuPortal: (base) => ({ ...base, zIndex: 99999999 }),
};
