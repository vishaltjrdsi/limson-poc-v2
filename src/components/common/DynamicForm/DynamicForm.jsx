import {
  Input,
  Select,
  Checkbox,
} from "../../common";

import "./DynamicForm.css";

function DynamicForm({
  fields = [],
  values = {},
  onChange,
}) {
  return (
    <div className="dynamic-form">

      {fields.map((field) => {

        const {
          type = "text",
          name,
          label,
          placeholder,
          options = [],
          required = false,
          fullWidth = false,
        } = field;

        const wrapperClass = fullWidth
          ? "form-field full-width"
          : "form-field";

    switch (type) {

  case "select":
    return (
      <div
        key={name}
        className={wrapperClass}
      >
        <Select
          label={label}
          name={name}
          value={values[name] || ""}
          placeholder={placeholder}
          options={options}
          required={required}
          onChange={onChange}
        />
      </div>
    );

  case "checkbox":
    return (
      <div
        key={name}
        className={wrapperClass}
      >
        <Checkbox
          label={label}
          name={name}
          checked={values[name] || false}
          onChange={onChange}
        />
      </div>
    );

  case "date":
    return (
      <div
        key={name}
        className={wrapperClass}
      >
        <Input
          type="date"
          label={label}
          name={name}
          value={values[name] || ""}
          required={required}
          onChange={onChange}
        />
      </div>
    );

  default:
    return (
      <div
        key={name}
        className={wrapperClass}
      >
        <Input
          type={type}
          label={label}
          name={name}
          value={values[name] || ""}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
        />
      </div>
    );

}

      })}

    </div>
  );
}

export default DynamicForm;