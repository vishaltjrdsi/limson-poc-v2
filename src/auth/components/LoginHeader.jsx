import "../styles/LoginPage.css";

function LoginHeader() {
    return (
        <header className="login-header">
            <img
                src="/assets/atlas-logo.png"
                alt="Atlas"
                className="atlas-logo"
            />

            <div className="login-language">
                English
            </div>
        </header>
    );
}

export default LoginHeader;