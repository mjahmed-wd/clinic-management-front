import React from "react";

interface IProps {
  name: string;
  [x: string]: any;
}

const FormikError:React.FC<IProps> = ({ errors, name, touched }) => {
  return (
    <p
      style={{
        fontSize: "0.9rem",
        fontWeight: 400,
        width: "100%",
        marginTop: "0",
        marginBottom: "0",
      }}
      className={errors[name] ? "text-danger" : "d-none"}
    >
      {errors && errors[name] && touched && touched[name]
        ? errors[name].value || errors[name]
        : ""}
    </p>
  );
};

export default FormikError;
