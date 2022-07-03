import { useFormikContext } from "formik";
import React, { FC } from "react";
import "./Input.scss";

interface IInputProps {
    name: string;
    [x: string]: any;
}

const Input: FC<IInputProps> = ({ name, ...rest }) => {

    const { values, setFieldValue }: {
        values: any;
        setFieldValue: (name: string, value: any) => void;
    } = useFormikContext();

    return (
        <>
            <input
                onChange={(e: any) => {
                    setFieldValue(name, e.target.value);
                }
                }
                value={values[name]}
                type="text"
                name={name}
                placeholder={`Enter ${name}`}
                {...rest}
            />
        </>
    );
};

export default Input;