import { Form, Formik } from 'formik'
import React from 'react'
import Input from '../../common/components/InputField/Input'

type Props = {}

const DoctorCreate = (props: Props) => {
    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    role: '',
                    profilePic: '',
                    info: ''
                }}

                onSubmit={(values, { setSubmitting }) => {
                    console.log(values);
                }}
            >
                {({ values, isSubmitting }) => (
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
                        <Input
                            name="role"
                            label="Role"
                            type="text"
                        />
                        <br />
                        <Input
                            name="profilePic"
                            label="Profile Pic"
                            type="text"
                        />
                        <br />
                        <Input
                            name="info"
                            label="Info"
                            type="text"
                        />
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default DoctorCreate