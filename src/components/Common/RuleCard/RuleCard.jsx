import Button from "../Button/Button";
import "./RuleCard.css";

function RuleCard({
  title,
  buttonText = "Add Rule",
  emptyMessage,
  children,
}) {
  return (
    <div className="rule-card">

      <div className="rule-card-header">

        <h3>{title}</h3>

        <Button className="rule-card-btn" variant="secondary">
          {buttonText}
        </Button>

      </div>

      <div className="rule-card-content">

        {children ? (
          children
        ) : (
          <div className="rule-card-empty">
            {emptyMessage}
          </div>
        )}

      </div>

    </div>
  );
}

export default RuleCard;