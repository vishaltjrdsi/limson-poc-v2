import OktaWidget from "./OktaWidget";

function LoginCard() {
    return (
        <div className="login-card">

            <h2>Sign In</h2>

            <OktaWidget />

            <button className="request-btn">
                Request Access
            </button>

        </div>
    );
}

export default LoginCard;