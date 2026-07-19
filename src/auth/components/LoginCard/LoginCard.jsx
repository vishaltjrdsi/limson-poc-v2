import logo from "../../../assets/icons/atlas-logo.png";
import jrdLogo from "../../../assets/icons/jrd-logo.png";
import "./LoginCard.css";
import OktaWidget from "../OktaWidget/OktaWidget";

function LoginCard() {
  return (
    <div className="login-card">

      <img
        src={logo}
        alt="Atlas"
      />

      <h2>ATLAS BACK OFFICE</h2>

      <OktaWidget />

      {/* <div className="panel-buttons">

        <button>
          Request Access
        </button>

        <button>
          Exit
        </button>

      </div> */}

      <div className="demo">

        <span>Demo by</span>

        <img
          src={jrdLogo}
          alt="JRD Systems"
        />

      </div>

    </div>
  );
}

export default LoginCard;