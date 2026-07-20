import LoginHeader from "../components/LoginHeader/LoginHeader";
import LoginFooter from "../components/LoginFooter/LoginFooter";
import LoginCard from "../components/LoginCard/LoginCard";


import "./LoginPage.css";


function LoginPage() {

    return (

        <div className="login-container">

            <LoginHeader />

            <main className="login-main">

<div
  className="background-map"
/>

                <LoginCard />

            </main>

            {/* <LoginFooter /> */}

        </div>

    );

}

export default LoginPage;