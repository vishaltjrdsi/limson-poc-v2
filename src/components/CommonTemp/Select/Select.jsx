import "./Select.css";

function Select({
  label,
  placeholder = "Select",
  options = [],
  value = "",
  onChange,
}) {
  return (
    <div className="select-field">

      {label && (
        <label className="select-label">
          {label}
        </label>
      )}

      <select
        className="select-input"
        value={value}
        onChange={onChange}
      >
        <option value="">
          {placeholder}
        </option>

   
        
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