import axios from 'axios'
import * as yup from 'yup'
import { Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import DropDown from '../../common/components/InputField/DropDown'
import Input from '../../common/components/InputField/Input'
import Navbar from '../../common/Navbar'
import Sidebar from '../../common/Sidebar'
import { customStyles } from '../../common/utils/selectCustomStyles'
import { createDoctor, editDoctor, getOneDoctor } from './actions'

type Props = {}

const validationSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    phone: yup.string().required(),
    role: yup.object().shape({
        value: yup.string().required("role is required"),
        label: yup.string().required("role is required"),
    }),
    // profilePic: yup.string().required(),
    // info: yup.string().required(),
    speciality: yup.array().required(),
    doctorOpeningHour: yup.string().required(),
    doctorOpeningDayOfWeek: yup.array().required(),
    doctorDailySlotCount: yup.string().required(),
    education: yup.string().required(),
    experience: yup.string().required(),
    address: yup.string().required()
});


const DoctorCreate = (props: Props) => {
    const [notification, setNotification] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [initialData, setInitialData] = useState<any>({
        name: '',
        email: '',
        password: '',
        phone: '',
        role: '',
        profilePic: '',
        info: '',
        speciality: '',
        doctorOpeningHour: '',
        doctorOpeningDayOfWeek: '',
        doctorDailySlotCount: '',
        education: '',
        experience: '',
        address: ''
    });
    const { id } = useParams();
    let navigate = useNavigate();
    const handleImageUpload = (event: any) => {
        const imageData = new FormData();
        imageData.set("key", "8bc92ea2aef5c437abee8233cb8457b2");
        imageData.append("image", event.target.files[0]);
        axios
            .post("https://api.imgbb.com/1/upload", imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
                console.log("image uploaded to server");
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const saveHandler=(values: { info: any; speciality: any; doctorOpeningHour: any; doctorDailySlotCount: any; education: any; experience: any; address: any; doctorOpeningDayOfWeek: any })=>{
        if (id) {
            editDoctor(id, {
                ...values,
                profilePic: imageURL
                , role: {
                    "value": "1",
                    "label": "Admin"
                }, info: {
                    info: values?.info,
                    doctorSpecialites: values?.speciality,
                    doctorOpeningHour: values?.doctorOpeningHour,
                    doctorDailySlotCount: values?.doctorDailySlotCount,
                    doctorEducation: values?.education,
                    doctorExperience: values?.experience,
                    doctorAddress: values?.address,
                    doctorOpeningDayOfWeek: values?.doctorOpeningDayOfWeek
                }
            }, () => {
                navigate('/doctorsList')
                getOneDoctor({ _id: id }, setInitialData);
            });
        } else {
            createDoctor({
                ...values,
                profilePic: imageURL
                , role: {
                    "value": "1",
                    "label": "Admin"
                }, info: {
                    info: values?.info,
                    doctorSpecialites: values?.speciality,
                    doctorOpeningHour: values?.doctorOpeningHour,
                    doctorDailySlotCount: values?.doctorDailySlotCount,
                    doctorEducation: values?.education,
                    doctorExperience: values?.experience,
                    doctorAddress: values?.address,
                    doctorOpeningDayOfWeek: values?.doctorOpeningDayOfWeek
                }
            }, setNotification, () => {
                navigate('/doctorsList')
            });
        }
    }

    useEffect(() => {
        if (id) {
            getOneDoctor({ _id: id }, setInitialData);
        }
    }, [])

    return (
        <>
            <Navbar />
            <Sidebar>
                <Formik
                    enableReinitialize={true}
                    initialValues={initialData}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                       saveHandler(values)
                    }}
                >
                    {({ values, setFieldValue, errors, touched, isSubmitting }) => (
                        <Form style={{ padding: '30px' }}>
                            <>
                                {console.log({ errors })}
                                <Input
                                    name="name"
                                    label="Name"
                                    placeholder="Name"
                                    onChange={(e: any) => {
                                        setFieldValue('name', e.target.value);
                                    }
                                    }
                                    type="text"
                                />
                                <br />
                                <Input
                                    name="email"
                                    label="Email"
                                    placeholder="Email"
                                    onChange={(e: any) => {
                                        setFieldValue('email', e.target.value);
                                    }}
                                    type="email"
                                />
                                <br />
                                <Input
                                    name="phone"
                                    label="Phone"
                                    placeholder="Phone"
                                    onChange={(e: any) => {
                                        setFieldValue('phone', e.target.value);
                                    }}
                                />
                                <br />
                                <Input
                                    name="password"
                                    label="Password"
                                    type="password"
                                    onChange={(e: any) => {
                                        setFieldValue('password', e.target.value);
                                    }}
                                />
                                <br />
                                <DropDown
                                    name="role"
                                    options={[
                                        { value: 1, label: "Admin" },
                                        { value: 2, label: "Doctor" },
                                        { value: 3, label: "Patient" }
                                    ]}
                                    value={values?.role}
                                    label="Role"
                                    onChange={(valueOption) => {
                                        setFieldValue("role", valueOption);
                                    }}
                                    placeholder="Role"
                                    styles={customStyles}
                                    errors={errors}
                                    touched={touched}
                                    isDisabled={false}
                                />
                                <br />
                                <input
                                    className="file-input"
                                    id="exampleRequired"
                                    type="file"
                                    onChange={handleImageUpload}
                                />
                                <br />
                                <DropDown
                                    name="speciality"
                                    options={[
                                        { value: 1, label: "Cancer Specialist" },
                                        { value: 2, label: "Nutritionist" },
                                        { value: 3, label: "Neurologist" },
                                        { value: 4, label: "Bariatrician" },
                                        { value: 5, label: "Cardiologist" },
                                        { value: 6, label: "Dermatologist" },
                                        { value: 7, label: "General Surgury" }
                                    ]}
                                    value={values?.speciality}
                                    label="Speciality"
                                    onChange={(valueOption) => {
                                        setFieldValue("speciality", valueOption);
                                    }}
                                    isMulti={true}
                                    placeholder="Speciality"
                                    styles={customStyles}
                                    errors={errors}
                                    touched={touched}
                                    isDisabled={false}
                                />
                                <br />

                                <Input
                                    name="education"
                                    label="Education"
                                    type="text"
                                    onChange={(e: any) => {
                                        setFieldValue('education', e.target.value);
                                    }}
                                />
                                <br />
                                <Input
                                    name="experience"
                                    label="Experience"
                                    type="text"
                                    onChange={(e: any) => {
                                        setFieldValue('experience', e.target.value);
                                    }}
                                />
                                <br />
                                <Input
                                    name="address"
                                    label="Address"
                                    type="text"
                                    onChange={(e: any) => {
                                        setFieldValue('address', e.target.value);
                                    }}
                                />
                                <br />
                                <Input
                                    name="doctorOpeningHour"
                                    label="Opening Hour"
                                    type="time"
                                    value={values?.doctorOpeningHour}
                                    onChange={(e: any) => setFieldValue("doctorOpeningHour", e?.target?.value)}
                                />
                                <br />
                                <DropDown
                                    name="doctorOpeningDayOfWeek"
                                    options={[
                                        { value: 0, label: 'Satureday' },
                                        { value: 1, label: 'Sunday' },
                                        { value: 2, label: 'Monday' }
                                    ]}
                                    value={values?.doctorOpeningDayOfWeek}
                                    label="Opening Day"
                                    onChange={(valueOption) => {
                                        setFieldValue("doctorOpeningDayOfWeek", valueOption);
                                    }}
                                    isMulti={true}
                                    placeholder="Opening Day"
                                    styles={customStyles}
                                    errors={errors}
                                    touched={touched}
                                    isDisabled={false}
                                />
                                <br />
                                <Input
                                    name="doctorDailySlotCount"
                                    label="Daily Slot"
                                    type="Number"
                                    onChange={(e: any) => {
                                        setFieldValue('doctorDailySlotCount', e.target.value);
                                    }}
                                />
                                <button className="btn btn-primary" type="submit">Submit</button>
                            </>
                        </Form>
                    )}
                </Formik>
            </Sidebar>
        </>
    )
}

export default DoctorCreate