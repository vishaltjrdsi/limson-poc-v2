import { Button } from "../../common";

import "./FooterBar.css";

function FooterBar({
  editedCount = 0,
  buttonText = "Save",
  onSave,
}) {
  return (
    <div className="footer-bar">

      <div className="footer-left">

        <span className="footer-count">

          {editedCount} Sections Edited

        </span>

      </div>

      <div className="footer-right">

        <Button
          variant="primary"
          onClick={onSave}
        >
          {buttonText}
        </Button>

      </div>

    </div>
  );
}

export default FooterBar;