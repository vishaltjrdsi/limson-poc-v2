import "./InfoBox.css";

function InfoBox({ children, className = "" }) {
  return (
    <div className={`info-box ${className}`}>
      {children}
    </div>
  );
}

export default InfoBox;