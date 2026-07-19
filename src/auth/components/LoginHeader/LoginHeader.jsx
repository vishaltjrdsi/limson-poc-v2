import { useState } from "react";
import RequestAccessModal from "../RequestAccessModal/RequestAccessModal";

import logo from "../../../assets/icons/atlas-logo.png";

import "./LoginHeader.css";

function LoginHeader() {
  const [openRequest, setOpenRequest] = useState(false);

  return (
    <>
      <header className="login-header">
        <div className="header-left">
          <img
            src={logo}
            alt="Atlas"
            className="atlas-logo"
          />

          <h1>Atlas</h1>
        </div>

        <div className="header-right">
         <button
  className="request-access-btn"
  onClick={() => setOpenRequest(true)}
>
  Request Access
</button>
        </div>
      </header>

      <RequestAccessModal
        open={openRequest}
        onClose={() => setOpenRequest(false)}
      />
    </>
  );
}

export default LoginHeader;