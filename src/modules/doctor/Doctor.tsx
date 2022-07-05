import { Form, Formik } from 'formik'
import React from 'react'
import DropDown from '../../common/components/InputField/DropDown'
import Input from '../../common/components/InputField/Input'
import { customStyles } from '../../common/utils/selectCustomStyles'
import { createDoctor } from './actions'

type Props = {}

const DoctorCreate = (props: Props) => {
    const [notification, setNotification] = React.useState('')
    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
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
                }}

                onSubmit={(values, { setSubmitting }) => {
                    createDoctor({
                        ...values, role: {
                            "value": "1",
                            "label": "Admin"
                        }, info: {
                            info: values?.info,
                            doctorSpecialites: values?.speciality,
                            doctorOpeningHour: values?.doctorOpeningHour,
                            doctorDailySlotCount: values?.doctorDailySlotCount,
                            doctorEducation: values?.education,
                            doctorExperience: values?.experience,
                            doctorAddress: values?.address
                        }
                    }, setNotification);
                }}
            >
                {({ values, setFieldValue, errors, touched, isSubmitting }) => (
                    <Form>
                        <Input
                            name="name"
                            label="Name"
                            placeholder="Name"
                            type="text"
                        />
                        <br />
                        <Input
                            name="email"
                            label="Email"
                            placeholder="Email"
                            type="email"
                        />
                        <br />
                        <Input
                            name="password"
                            label="Password"
                            type="password"
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
                        <Input
                            name="profilePic"
                            label="Profile Pic"
                            type="text"
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
                            name="info"
                            label="Info"
                            type="text"
                        />
                        <br />
                        <Input
                            name="education"
                            label="Education"
                            type="text"
                        />
                        <br />
                        <Input
                            name="experience"
                            label="Experience"
                            type="text"
                        />
                        <br />
                        <Input
                            name="address"
                            label="Address"
                            type="text"
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
                                {value: 2, label: 'Monday'}
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
                        />
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default DoctorCreate