import "./DashboardLayout.css";

import Header from "../../components/Header/Header";

import pageRoutes from "../../routes/pageRoutes";

function DashboardLayout({
  selectedPage,
  setSelectedPage,
  selectedMasterData,
  setSelectedMasterData,
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
          selectedMasterData={selectedMasterData}
          setSelectedMasterData={setSelectedMasterData}
        />
        </main>

      </div>
    </div>
  );
}

export default DashboardLayout;
