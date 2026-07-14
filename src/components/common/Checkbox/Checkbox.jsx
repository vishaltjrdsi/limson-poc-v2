import "./Checkbox.css";

function Checkbox({
  label,
  children,
  checked,
  name,
  disabled = false,
  onChange,
}) {
  return (
    <label className="checkbox">

      <input
        type="checkbox"
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />

      <span>
        {children || label}
      </span>

    </label>
  );
}

export default Checkbox;