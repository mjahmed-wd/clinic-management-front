import { Field, useFormikContext } from "formik";
import React, { FC } from "react";
import FormikError from "./FormikError";
import "./Input.scss";

interface IInputProps {
    name: string;
    [x: string]: any;
}

const Input: FC<IInputProps> = ({ name, ...rest }) => {

    const { values, setFieldValue, errors, touched }: {
        values: any;
        setFieldValue: (name: string, value: any) => void;
        errors: any;
        touched: any;
    } = useFormikContext();

    return (
        <div>
            <h5 style={{padding: '5px 0'}}>{rest?.label || name} :</h5>
            <Field
                value={values[name]}
                name={name}
                placeholder={`Enter ${rest?.label || name}`}
                {...rest}
            />
            <FormikError errors={errors} touched={touched} name={name} />
        </div>
    );
};

export default Input;