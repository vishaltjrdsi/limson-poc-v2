import "./Select.css";

function Select({
  label,
  placeholder = "Select",
  options = [],
  value = "",
  onChange,
  name,
  required = false,
  disabled = false,
}) {
  return (
    <div className="select-group">

      {label && (
        <label className="select-label">
          {label}

          {required && (
            <span className="required">*</span>
          )}
        </label>
      )}

      <select
        className="select-input"
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        <option value="">
          {placeholder}
        </option>

        {options.map((option) => {

          if (typeof option === "string") {

            return (
              <option
                key={option}
                value={option}
              >
                {option}
              </option>
            );

          }

          return (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          );

        })}

      </select>

    </div>
  );
}

export default Select;