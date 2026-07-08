import { useState } from "react";
import DashboardLayout from "./layouts/DashboardLayout/DashboardLayout";

function App() {
  const [activeMenu, setActiveMenu] = useState("APPS");

  return (
    <DashboardLayout
      activeMenu={activeMenu}
      setActiveMenu={setActiveMenu}
    />
  );
}

export default App;