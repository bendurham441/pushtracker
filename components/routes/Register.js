import React from "react";
import { Formik, Form, Field } from "formik";

import Card from "../common/Card";

const Register = () => (
  <Card header="Register">
    <Formik
      onSubmit={(values) => console.log(values)}
      initialValues={{
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
      }}
    >
      {(isSubmitting) => (
        <Form>
          <Field
            name="firstName"
            placeholder="First Name"
            className="set-field"
          />
          <Field
            name="lastName"
            placeholder="Last Name"
            className="set-field"
          />
          <Field name="username" placeholder="Username" className="set-field" />
          <Field name="email" placeholder="Email" className="set-field" />
          <Field name="password" placeholder="Password" className="set-field" />
          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  </Card>
);

export default Register;
