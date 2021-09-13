export const renderInput = ({
  input,
  placeholder,
  type,
  meta: { touched, error },
}) => {
  return (
    <div className="field">
      <input type={type} placeholder={placeholder} {...input} />
      {touched && error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
};

export const renderTextArea = ({
  input,
  placeholder,
  meta: { touched, error },
}) => {
  return (
    <div className="field">
      <textarea placeholder={placeholder} {...input} rows="10" />
      {touched && error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
};

export const renderDropdown = ({
  input,
  options,
  meta: { touched, error },
}) => {
  const values = options.split(" ").map((option) => {
    return (
      <option key={option} value={option}>
        {option}
      </option>
    );
  });
  return (
    <div className="field">
      <select className="ui fluid dropdown" {...input}>
        {values}
      </select>
      {touched && error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
};

export const renderCheckbox = ({
  options,
  input,
  meta: { touched, error },
}) => {
  return options.map((option, index) => {
    return (
      <div key={index}>
        <div className="inline fields">
          <div className="ui checkbox">
            <input
              type="checkbox"
              name={`${input}[${index}]`}
              value={option}
              checked={input.value.indexOf(option) !== -1}
              onChange={(event) => {
                const newValue = [...input.value];
                if (event.target.checked) {
                  newValue.push(option);
                } else {
                  newValue.splice(newValue.indexOf(option), 1);
                }

                return input.onChange(newValue);
              }}
            />
            <label>{option}</label>
          </div>
        </div>
        {touched && error && <span style={{ color: "red" }}>{error}</span>}
      </div>
    );
  });
};
