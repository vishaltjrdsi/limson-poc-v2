import "./Tabs.css";

function Tabs({
  tabs = [],
  activeTab,
  onChange,
}) {
  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tab ${
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