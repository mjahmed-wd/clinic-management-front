import React from "react";
import Select from "react-select";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    minHeight: "30px",
    height: "30px",
  }),

  valueContainer: (provided, state) => ({
    ...provided,
    height: "30px",
    padding: "0 6px",
  }),

  input: (provided, state) => ({
    ...provided,
    margin: "0px",
  }),
  indicatorSeparator: (state) => ({
    display: "none",
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    height: "26px",
  }),
  option: (provided, state) => ({
    ...provided,
    padding: 1,
    color: "#000000",
    fontSize: 12.5,
    paddingLeft: 7,
    zIndex: 99999999,
  }),
  placeholder: (provided, state) => ({
    ...provided,
    fontSize: 11.5,
  }),
};

const BranchSelect = (props) => {
  const { name, options, value, placeholder, onChange } = props;
  return (
    <>
      <Select
        {...props}
        onChange={onChange}
        options={options || []}
        value={value}
        isSearchable={true}
        name={name}
        styles={customStyles}
        placeholder={placeholder}
      />
    </>
  );
};

export default BranchSelect;

/* 
    
    <BranchSelect
    name="category"
    options={[]}
    value={values?.category}
    label="Category"
    onChange={(valueOption) => {
          setFieldValue(name, valueOption);
        }}
    placeholder="Category"
    /> 

*/
