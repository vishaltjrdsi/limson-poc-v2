import "./Tabs.css";

function Tabs({
  tabs = [],
  activeTab,
  onChange = () => {},
  variant = "pill",
  className = "",
}) {
  return (
    <div
      className={`tabs tabs-${variant} ${className}`}
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          className={`tab-btn ${
            activeTab === tab ? "active" : ""
          }`}
          onClick={() => onChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default Tabs;