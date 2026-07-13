import "./FooterBar.css";
import Button from "../Button/Button";

function FooterBar({
  editedCount = 0,
  buttonText = "Save",
  onSave,
}) {
  return (
    <div className="footer-bar">
    <span className="footer-bar-text">
        {editedCount} Sections Edited
    </span>

    <div className="footer-bar-actions">
        <Button onClick={onSave}>
            {buttonText}
        </Button>
    </div>
</div>
  );
}

export default FooterBar;