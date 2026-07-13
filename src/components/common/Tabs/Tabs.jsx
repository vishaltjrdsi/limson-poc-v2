import "./Tabs.css";

function Tabs({
  tabs = [],
  activeTab,
  onChange = () => {},
}) {
  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          className={`tab-btn ${activeTab === tab ? "active" : ""}`}
          onClick={() => onChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default Tabs;