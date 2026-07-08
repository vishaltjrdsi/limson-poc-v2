import "./Select.css";

function Select({
  label,
  name,
  value,
  options = [],
  placeholder = "Select",
  required = false,
  disabled = false,
  error = "",
  onChange,
}) {
  return (
    <div className="select-group">

      {label && (
        <label htmlFor={name}>
          {label}

          {required && (
            <span className="required">*</span>
          )}
        </label>
      )}

      <select
        id={name}
        name={name}
        value={value}
        disabled={disabled}
        onChange={onChange}
        className={error ? "error" : ""}
      >
        <option value="">
          {placeholder}
        </option>

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      {error && (
        <span className="error-text">
          {error}
        </span>
      )}

    </div>
  );
}

export default Select;