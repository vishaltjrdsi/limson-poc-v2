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
  compact = false,
  className = "",
  style = {},
  inputStyle = {},
}) {
  return (
    <div
      className={`select-group ${compact ? "compact" : ""} ${className}`}
      style={{
        width: "100%",
        ...style,
      }}
    >
      {label && (
        <label className="select-label">
          {label}

          {required && <span className="required">*</span>}
        </label>
      )}

      <select
        className={`select-input ${compact ? "compact" : ""}`}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        style={{
          background: "#fffdf8",
          ...inputStyle,
        }}
      >
        <option value="">{placeholder}</option>

        {options.map((option) => {
          if (typeof option === "string") {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          }

          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Select;
