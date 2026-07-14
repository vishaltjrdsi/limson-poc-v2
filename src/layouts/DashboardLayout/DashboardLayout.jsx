import { Outlet } from "react-router-dom";

import Header from "../../components/Header/Header";

import "./DashboardLayout.css";

function DashboardLayout() {
  return (
    <div className="dashboard-layout">

      <Header />

      <main className="dashboard-content">
        <Outlet />
      </main>

    </div>
  );
}

export default DashboardLayout;