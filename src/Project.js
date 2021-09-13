import { Fragment } from "react";
import { Field } from "redux-form";
import { renderInput, renderCheckbox, renderTextArea } from "./utils";

const Project = ({ fields, meta: { error } }) => {
  return (
    <div>
      <button
        style={{ marginBottom: "10px" }}
        className="ui button olive"
        type="button"
        onClick={() => fields.push({})}
      >
        Add Projects
      </button>
      {fields.map((project, index) => (
        <Fragment key={index}>
          <table className="ui table">
            <tbody>
              <tr>
                <td>
                  <Field
                    name={`${project}.project_name`}
                    type="text"
                    component={renderInput}
                    placeholder="Project Name"
                  />
                </td>
                <td>
                  <Field
                    name={`${project}.project_description`}
                    type="textarea"
                    component={renderTextArea}
                    placeholder="Project Description"
                  />
                </td>
                <td>
                  <Field
                    name={`${project}.tech_used`}
                    type="checkbox"
                    options={[
                      "Node",
                      "React",
                      "Javascript",
                      "mongodb",
                      "java",
                      "c++",
                      "python",
                    ]}
                    component={renderCheckbox}
                  />
                </td>
                <td key={index}>
                  <button
                    className="ui negative button"
                    type="button"
                    title="Remove Student"
                    onClick={() => fields.remove(index)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </Fragment>
      ))}
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default Project;
