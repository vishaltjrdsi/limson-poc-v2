import "./WelcomeCard.css";
import { MdDashboard } from "react-icons/md";

function WelcomeCard() {
  return (
    <div className="welcome-card">


      <div className="welcome-content">
        <h1>Welcome</h1>
         <h2>Atlas BOS</h2>
        <p>
          Get started by selecting a module from the menu above.
        </p>
      </div>
    </div>
  );
}

export default WelcomeCard;