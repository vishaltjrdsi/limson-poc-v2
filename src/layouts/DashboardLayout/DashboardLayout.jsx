import "./DashboardLayout.css";
import Header from "../../components/Header/Header";
import WelcomeCard from "../../components/WelcomeCard/WelcomeCard";

function DashboardLayout({ activeMenu, setActiveMenu }) {
  return (
    <div className="layout">
      <div className="content">
        <Header
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />

        <main className="main-content">
          <WelcomeCard />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;