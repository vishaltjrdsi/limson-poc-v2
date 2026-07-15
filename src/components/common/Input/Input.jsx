import "./Input.css";

function Input({
  label,
  className = "",
  value = "",
  onChange,
  placeholder = "",
  type = "text",
  name,
  required = false,
  disabled = false,
}) {
  return (
    <div className={`input-group ${className}`}>

      {label && (
        <label className="input-label">
          {label}

          {required && (
            <span className="required">*</span>
          )}
        </label>
      )}

      <input
        className="input-field"
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />

    </div>
  );
}

export default Input;