import "./Select.css";

function Select({
  label,
  name,
  value,
  options = [],
  onChange,
}) {
  return (
    <div className="select-group">
      <label>{label}</label>

      <select
        name={name}
        value={value}
        onChange={onChange}
      >
        <option value="">
          Select {label}
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
    </div>
  );
}

export default Select;