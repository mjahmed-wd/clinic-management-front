import React, { useState, useRef } from "react";
import FormikError from "./FormikError";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Select, { components } from "react-select";
import Required from "../../Required";
import { customStyles } from "../../utils/selectCustomStyles";

interface IDropdownProps {
  name: string;
  options?: any;
  value: string|number;
  label: string;
  placeholder?: string;
  onChange?: (value: any) => void;
  setClear?: (value: any) => void;
  isDisabled?: boolean;
  isClearable?: boolean;
  isMulti?: boolean;
  required?: boolean;
  errors?: any;
  touched?: any;
  styles?: any;
}

// interface IDropdownIndicator{
//   [x: string]: any;
// }

// const DropdownIndicator:React.FC<IDropdownIndicator> = (props) => {
//   return (
//     <components.DropdownIndicator {...props}>
//       <ArrowDropDownIcon />
//     </components.DropdownIndicator>
//   );
// };

const DropDown: React.FC<IDropdownProps> = (props) => {
  const {
    name,
    options,
    value,
    label,
    placeholder,
    onChange,
    setClear,
    isDisabled,
    isClearable,
    isMulti,
    required,
    errors,
    touched,
    styles
  } = props;

  return (
    <div className="form-container">
      <div
        className="formik-select-wrapper"
      >
        <div className="d-flex">
          <span>{label && <label> {label} </label>}</span>
          <span>{required && <Required />}</span>
        </div>
        <Select
          isClearable={isClearable === false ? isClearable : true} // dont use or(||), or is not valid in this case
          placeholder={placeholder}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
          })}
          menuPosition="fixed"
          styles={styles || customStyles}
          {...props}
        />
      </div>
      {errors && touched && (
        <FormikError errors={errors} name={name} touched={touched} />
      )}
    </div>
  );
};

export default DropDown;

/*
   Usage

   a. formik Select with label ( height 40px)

      <FormikSelect
         name="country"
         options={[
            { value: 1, label: "BD" },
            { value: 2, label: "UK" },
            { value: 3, label: "USA" }
         ]}
         value={values?.country}
         label="Country"
         onChange={(valueOption) => {
            setFieldValue("country", valueOption);
         }}
         placeholder="Country"
         styles={customStyles}
         errors={errors}
         touched={touched}
         isDisabled={false}
      />

   a. formik Select with label ( height 56px)

      <FormikSelect
         name="country"
         options={[
            { value: 1, label: "BD" },
            { value: 2, label: "UK" },
            { value: 3, label: "USA" }
         ]}
         value={values?.country}
         label="Country"
         onChange={(valueOption) => {
            setFieldValue("country", valueOption);
         }}
         placeholder="Country"
         styles={customStylesLarge}
         errors={errors}
         touched={touched}
         isDisabled={false}
      />

*/
