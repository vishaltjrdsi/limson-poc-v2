import "./NavigationCard.css";

function NavigationCard({
  icon,
  title,
  description,
  count,
  onClick,
}) {
  return (
    <div
      className="navigation-card"
      onClick={onClick}
    >
      <div className="navigation-card-top">

        <div className="navigation-icon">
          {icon}
        </div>

        <div className="navigation-count">
          {count}
        </div>

      </div>

      <div className="navigation-title">
        {title}
      </div>

      <div className="navigation-description">
        {description}
      </div>

    </div>
  );
}

export default NavigationCard;