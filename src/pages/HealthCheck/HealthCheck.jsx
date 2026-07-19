import "./HealthCheck.css";

function HealthCheck() {
  const version = import.meta.env.VITE_APP_VERSION || "1.0.0";

  return (
    <div className="health-check">
      <div className="health-card">
        <h1>Application Health</h1>

        <div className="status-row">
          <span>Status</span>
          <span className="healthy">🟢 Healthy</span>
        </div>

        {/* <div className="status-row">
          <span>Version</span>
          <span>{version}</span>
        </div>

        <div className="status-row">
          <span>Environment</span>
          <span>{import.meta.env.MODE}</span>
        </div> */}

        <div className="status-row">
          <span>Build Time</span>
          <span>{new Date().toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}

export default HealthCheck;