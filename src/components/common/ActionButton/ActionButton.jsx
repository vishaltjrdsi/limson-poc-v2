import "./ActionButton.css";

function ActionButton({
  children,
  onClick,
}) {
  return (
    <button
      className="action-button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ActionButton;