import "./DisplayBox.css";

function DisplayBox({
  label,
  children,
  className = "",
}) {
  return (
    <div className={`display-group ${className}`}>

      {label && (
        <label className="display-label">
          {label}
        </label>
      )}

      <div className="display-box">
        {children}
      </div>

    </div>
  );
}

export default DisplayBox;