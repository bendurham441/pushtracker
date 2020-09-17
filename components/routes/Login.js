import React from "react";
import { Formik, Form, Field } from "formik";

import Card from "../common/Card";
import { Link } from "react-router-dom";

const Login = () => (
  <Card header="Login">
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      onSubmit={(values) => console.log(values)}
    >
      {(isSubmitting) => (
        <Form>
          <Field name="username" className="set-field" placeholder="Username" />
          <Field name="password" className="set-field" placeholder="Password" />
          <button type="submit">Login</button>
          <Link to="/forgot" style={{ textDecoration: "none" }}>
            <div className="forgot">Forgot Password?</div>
          </Link>
        </Form>
      )}
    </Formik>
  </Card>
);

export default Login;
