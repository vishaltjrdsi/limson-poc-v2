import "./Chip.css";

function Chip({
  children,
  variant = "default",
}) {
  return (
    <span className={`chip chip--${variant}`}>
      {children}
    </span>
  );
}

export default Chip;