import "./DashboardLayout.css";

import Header from "../../components/Header/Header";

import Home from "../../pages/Home/Home";
import ProgramSettings from "../../pages/ProgramSettings/ProgramSettings";
import pageRoutes from "../../routes/pageRoutes";

function DashboardLayout({
  selectedPage,
  setSelectedPage,
}) {
  const CurrentPage = pageRoutes[selectedPage] || pageRoutes.HOME;
  return (
    <div className="layout">
      <div className="content">

        <Header
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />

        <main className="main-content">

          <CurrentPage
  selectedPage={selectedPage}
  setSelectedPage={setSelectedPage}
/>
        </main>

      </div>
    </div>
  );
}

export default DashboardLayout;