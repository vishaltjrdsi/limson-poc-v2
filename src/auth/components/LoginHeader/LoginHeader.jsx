import "./LoginHeader.css";
import logo from "../../../assets/icons/atlas-logo.png"
function LoginHeader() {
    return (
        
        <header className="login-header">
            <div className="header-left">
            <img
                src= {logo}
                alt="Atlas"
                className="atlas-logo"
            />
            <h1>Atlas</h1>
            </div>
            
            <div className="header-right">
               <h1>Request Access</h1> 
            </div>
        </header>
    );
}

export default LoginHeader;