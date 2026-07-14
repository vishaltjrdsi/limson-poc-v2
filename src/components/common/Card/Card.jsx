import "./Card.css";

function Card({
  children,
  className = "",
  padding = "default",
}) {
  return (
    <div
      className={[
        "card",
        `card--${padding}`,
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export default Card;