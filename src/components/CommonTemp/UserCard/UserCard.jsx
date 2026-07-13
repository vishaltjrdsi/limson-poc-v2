import "./UserCard.css";

function UserCard({
  name,
  networkId,
  status = "Active",
  selected = false,
  onClick,
}) {
  return (
    <div
      className={`user-card ${
        selected ? "user-card--selected" : ""
      }`}
      onClick={onClick}
    >
      <div className="user-card-name">
        {name}
      </div>

      <div className="user-card-meta">
        {networkId} • {status}
      </div>
    </div>
  );
}

export default UserCard;