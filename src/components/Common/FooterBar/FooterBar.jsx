import "./FooterBar.css";
import Button from "../Button/Button";

function FooterBar({
  editedCount = 0,
  buttonText = "Save",
  onSave,
}) {
  return (
    <div className="footer-bar">
      <span>{editedCount} Sections Edited</span>

      <Button onClick={onSave}>
        {buttonText}
      </Button>
    </div>
  );
}

export default FooterBar;