import {Card} from "../../common";
import "./PreviewCard.css";

function PreviewCard({
  label,
  title,
  description,
  children,
}) {
  return (
    <Card padding="default">

      <span className="preview-label">
        {label}
      </span>

      <h3 className="preview-title">
        {title}
      </h3>

      {description && (
        <p className="preview-description">
          {description}
        </p>
      )}

      <div className="preview-body">
        {children}
      </div>

    </Card>
  );
}

export default PreviewCard;