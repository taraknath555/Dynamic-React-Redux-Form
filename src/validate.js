const validate = (formValues) => {
  const errors = {};
  if (!formValues.college_name) {
    errors.college_name = "Please Enter the college name";
  }
  if (formValues.college_name && formValues.college_name.length < 5) {
    errors.college_name = "college name must be of atleast 5 characters long";
  }
  if (!formValues.students || !formValues.students.length) {
    errors.students = { _error: "Please enter atleast one student" };
  } else {
    const studentErrorsArr = [];
    formValues.students.forEach((student, s_idx) => {
      const studentErrors = {};
      if (!student || !student.name) {
        studentErrors.name = "Please Enter student's name";
        studentErrorsArr[s_idx] = studentErrors;
      }
      if (student.name && student.name.length < 8) {
        studentErrors.name = "Name must be of minimum 8 characters";
        studentErrorsArr[s_idx] = studentErrors;
      }
      if (!student || !student.student_id) {
        studentErrors.student_id = "Please Enter student's id";
        studentErrorsArr[s_idx] = studentErrors;
      }
      if (student.student_id && isNaN(parseInt(student.student_id))) {
        studentErrors.student_id = "Please enter integer value for Student Id";
        studentErrorsArr[s_idx] = studentErrors;
      }
      if (!student || !student.dept) {
        studentErrors.dept = "Please select student's department";
        studentErrorsArr[s_idx] = studentErrors;
      }
      if (student.dept && student.dept === "Dept") {
        studentErrors.dept = "Please select valid department";
        studentErrorsArr[s_idx] = studentErrors;
      }
      if (!student || !student.year) {
        studentErrors.year = "Please select student's year";
        studentErrorsArr[s_idx] = studentErrors;
      }
      if (student.year && student.year === "Year") {
        studentErrors.year = "Please select valid Year";
        studentErrorsArr[s_idx] = studentErrors;
      }

      if (student.name && student.projects && student.projects.length) {
        const projectErrorsArr = [];
        student.projects.forEach((project, p_idx) => {
          const projectErrors = {};
          if (!project || !project.project_name) {
            projectErrors.project_name = "Please Enter project name";
            projectErrorsArr[p_idx] = projectErrors;
          }
          if (project.project_name && project.project_name.length < 8) {
            projectErrors.project_name =
              "Project name must be of minimum 8 characters";
            projectErrorsArr[p_idx] = projectErrors;
          }

          if (!project || !project.project_description) {
            projectErrors.project_description =
              "Please Enter project description";
            projectErrorsArr[p_idx] = projectErrors;
          }
          if (
            project.project_description &&
            project.project_description.length < 50
          ) {
            projectErrors.project_description =
              "Please explain project in atleast 50 words";
            projectErrorsArr[p_idx] = projectErrors;
          }
          if (!project || !project.tech_used) {
            projectErrors.tech_used = "Please select at least one technology";
            projectErrorsArr[p_idx] = projectErrors;
          }
        });
        if (projectErrorsArr.length) {
          studentErrors.projects = projectErrorsArr;
          studentErrorsArr[s_idx] = studentErrors;
        }
      }
    });
    if (studentErrorsArr.length) {
      errors.students = studentErrorsArr;
    }
  }
  return errors;
};

export default validate;
