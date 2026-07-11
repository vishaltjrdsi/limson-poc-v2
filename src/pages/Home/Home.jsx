import Card from "../../components/Common/Card/Card";
import "./Home.css";

function Home() {
  return (

      <div className="home-content">

      <Card className="welcome-card">

  <p className="welcome-title">
    Welcome
  </p>

  <h1 className="welcome-app-name">
    Atlas BOS
  </h1>

  <p className="welcome-description">
    Please select a module from the menu above to get started.
  </p>

</Card>


    </div>
  );
}

export default Home;
