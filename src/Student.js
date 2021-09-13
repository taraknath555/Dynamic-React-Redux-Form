import { Fragment } from "react";
import { Field, FieldArray } from "redux-form";
import { renderInput, renderDropdown } from "./utils";
import Project from "./Project";

const Student = ({ fields, meta: { error, submitFailed } }) => {
  return (
    <div>
      <button
        className="ui button positive"
        type="button"
        onClick={() => fields.push({})}
      >
        Add Student
      </button>
      <table className="ui table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Student ID</th>
            <th>Department</th>
            <th>Year</th>
          </tr>
        </thead>
      </table>
      {fields.map((student, index) => (
        <Fragment key={index}>
          <table className="ui table">
            <tbody>
              <tr>
                <td>
                  <Field
                    name={`${student}.name`}
                    type="text"
                    component={renderInput}
                    placeholder="Student Name"
                  />
                </td>
                <td>
                  <Field
                    name={`${student}.student_id`}
                    type="text"
                    component={renderInput}
                    placeholder="Student ID"
                  />
                </td>
                <td>
                  <Field
                    name={`${student}.dept`}
                    type="dropdown"
                    component={renderDropdown}
                    options="Dept CSE IT ECE MECH CE EE"
                  />
                </td>
                <td>
                  <Field
                    name={`${student}.year`}
                    type="dropdown"
                    component={renderDropdown}
                    options="Year 1ST 2ND 3RD 4TH"
                  />
                </td>
                <td key={index}>
                  <button
                    type="button"
                    className="ui negative button"
                    title="Remove Student"
                    onClick={() => fields.remove(index)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <FieldArray name={`${student}.projects`} component={Project} />
          </div>
        </Fragment>
      ))}
      {submitFailed && error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
};

export default Student;
