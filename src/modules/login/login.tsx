import { Call, LockOutlined, RemoveRedEyeOutlined, VisibilityOffOutlined } from '@mui/icons-material';
import { Form, Formik } from "formik";
import React, { useState } from "react";
import styled from 'styled-components';
import * as Yup from "yup";
import Input from '../../common/components/InputField/Input';
import ModalForm from "../../common/components/Modal/ModalForm";
import Loading from "../../common/Loading";
import PrimaryButton from "../../common/PrimaryButton";
import Logo from "./../../assets/images/logo.png";

const validationSchema = Yup.object().shape({
    mobileNo: Yup.string()
        .min(2, "Minimum 2 character")
        .max(100, "Maximum 100 character")
        .required("Mobile no is required"),
    password: Yup.string()
        .min(2, "Minimum 2 character")
        .max(100, "Maximum 100 character")
        .required("Password is required"),
});

const initData = {
    mobileNo: "",
    password: "",
    check: false,
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
const Border = styled.div`
    width: 527px;
    height: 527px;
    left: 456px;
    top: 87px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    border-radius: 4px;
`;
const Image = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 51.99px;
    margin: 40px 0 0 0;
`;

const Title = styled.div`
    height: 32px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    font-size: 27.5484px;
    line-height: 32px;
    text-align: center;
    margin: 18px 0;
    color: rgba(0, 0, 0, 0.6);
`;
const Subtitle = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    left: 117px;
    top: 155px;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.0015em;
    color: rgba(0, 0, 0, 0.4);
`;
const InputHolder = styled.div`
    display: flex;
    justify-content: center;
    width: 10zz0%;
    height: 48px;
    background: #FFFFFF;
    margin-top: 36px;
    border: 1.5px solid rgba(0, 0, 0, 0.08);
    box-sizing: border-box;
    border-radius: 4px;
    width: 100%;
`

// const Input = styled.input`
//     width: 100%;
//     border: none;
//     background: #FFFFFF;
// &:focus {
//     outline: none;
//     border: none;
//     background: #FFFFFF;
// }
// `;

const Text = styled.p`
    width: 100%;
    text-align: center;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.15px;
    color: #4285F4;
    cursor: pointer;
`;

const NewLogin = () => {

    const CommonSX = { height: "18px", margin: "16px", color: "rgba(0, 0, 0, 0.2)" }

    const [loading, setLoading] = useState(false);
    const [isShowModal, setIsShowModal] = useState(false);
    const [isShowPassword, setIsShowPassword] = useState(false);

    return (
        <Formik
            enableReinitialize={true}
            initialValues={initData}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                // dispatch(loginActions(values?.mobileNo, values?.password, setLoading));
                console.log({ values });
            }}
        >
            {({
                handleSubmit,
                resetForm,
                values,
                errors,
                touched,
                setFieldValue,
                isValid,
            }) => (
                <Form>
                    {/* {loading && <Loading />} */}
                    <Container>
                        <Border>
                            <Image> <img src={Logo} alt="smeLogo" /></Image>
                            <Title>Clinic Management</Title>
                            <Subtitle>Most powerful Clinic management system.</Subtitle>
                            <div className="" style={{ padding: "0 10%" }}>
                                <InputHolder>
                                    <Call sx={CommonSX} />
                                    <Input
                                        value={values?.mobileNo}
                                        name="mobileNo"
                                        type="text"
                                        placeholder="Mobile Number"
                                        errors={errors}
                                        touched={touched}
                                        label=""
                                        style={{ width: "100%" }}
                                    />
                                </InputHolder>
                                <InputHolder>
                                    <LockOutlined sx={CommonSX} />
                                    <Input
                                        value={values?.password}
                                        name="password"
                                        type={isShowPassword ? "text" : "password"}
                                        placeholder="Password"
                                        errors={errors}
                                        touched={touched}
                                        label=""
                                    />
                                    {isShowPassword ? <RemoveRedEyeOutlined onClick={() => {
                                        setIsShowPassword(false);
                                    }} sx={CommonSX} /> : <VisibilityOffOutlined onClick={() => {
                                        setIsShowPassword(true);
                                    }} sx={CommonSX} />}
                                </InputHolder>
                                <PrimaryButton type="submit" className="btn btn-primary-contained w-100" style={{ margin: "36px 0 24px 0" }} label="LOG IN" />
                                <Text onClick={() => {
                                    setIsShowModal(true);
                                }}>
                                    Forget password?
                                </Text>
                            </div>

                        </Border>
                    </Container>
                </Form>
            )}
        </Formik>
    )
}

export default NewLogin