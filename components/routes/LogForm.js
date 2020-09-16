import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";

import Card from "../common/Card";

const LogForm = () => (
  <Card>
    <h1>Add a workout</h1>
    <Formik initialValues={{ sets: [0] }}>
      {({ isSubmitting, values }) => (
        <Form>
          <FieldArray
            name="sets"
            render={(arrayHelpers) => (
              <div>
                {values.sets.map((set, index) => (
                  <div key={index} className="set-field-group">
                    <Field
                      className="set-field"
                      type="number"
                      name={`sets.${index}`}
                    />
                    <button
                      type="button"
                      onClick={() => arrayHelpers.remove(index)}
                    >
                      X
                    </button>
                  </div>
                ))}
                <button type="button" onClick={() => arrayHelpers.push(0)}>
                  Add a set
                </button>
              </div>
            )}
          />
        </Form>
      )}
    </Formik>
  </Card>
);

export default LogForm;
