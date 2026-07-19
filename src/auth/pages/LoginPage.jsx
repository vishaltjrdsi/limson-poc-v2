import LoginHeader from "../components/LoginHeader";
import LoginFooter from "../components/LoginFooter";
import LoginCard from "../components/LoginCard";

import "../styles/LoginPage.css";


function LoginPage() {

    return (

        <div className="login-container">

            <LoginHeader />

            <main className="login-main">

                <div className="background-map"></div>

                <LoginCard />

            </main>

            <LoginFooter />

        </div>

    );

}

export default LoginPage;