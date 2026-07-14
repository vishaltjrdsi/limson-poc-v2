import "./Button.css";

function Button({
  children,
  variant = "primary",
  type = "button",
  className = "",
  disabled = false,
  onClick,
}) {
  return (
    <button
      type={type}
      className={[
        "btn",
        `btn-${variant}`,
        className,
      ].join(" ")}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;