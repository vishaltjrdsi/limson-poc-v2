import Card from "../../components/common/Card/Card";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-content">

        <Card className="welcome-card">

          <h1 className="welcome-title">
            Welcome
          </h1>

          <h2 className="welcome-app-name">
            Atlas BOS
          </h2>

          <p className="welcome-description">
            Please select a module from the menu above to get started.
          </p>

        </Card>

      </div>
    </div>
  );
}

export default Home;