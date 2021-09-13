import React, { useState } from "react";
import { connect } from "react-redux";
import { reduxForm, Field, FieldArray } from "redux-form";
import Student from "./Student";
import { renderInput } from "./utils";
import validate from "./validate";

const Form = ({ handleSubmit, pristine, reset, submitting }) => {
  const [submitMsg, setSubmitMsg] = useState("");
  const onFormSubmit = (formValues) => {
    console.log({ ...formValues });
    reset();
    setTimeout(() => {
      setSubmitMsg("Form Submitted! Please find Data on console");
    }, 10);
    setTimeout(() => {
      setSubmitMsg("");
    }, 1500);
  };

  return (
    <div>
      <div className=" ui header">
        <center style={{ fontSize: "25px", fontFamily: "monospace" }}>
          College project work
        </center>
        <hr style={{ width: "30%", marginBottom: "20px" }} />
      </div>
      <form onSubmit={handleSubmit(onFormSubmit)} className="ui form">
        <Field
          name="college_name"
          type="text"
          component={renderInput}
          placeholder="College Name"
        />
        <FieldArray name="students" component={Student} />
        <div>
          <button
            style={{ marginTop: "10px" }}
            className="ui button primary"
            type="submit"
            disabled={submitting}
          >
            Submit
          </button>
          <button
            style={{ marginTop: "10px" }}
            className="ui button secondary"
            type="submit"
            disabled={pristine}
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </form>
      <h4>{submitMsg}</h4>
    </div>
  );
};
const formWrapped = reduxForm({
  form: "projects",
  validate,
})(Form);

export default connect()(formWrapped);
