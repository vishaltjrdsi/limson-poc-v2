import { useState } from "react";
import DashboardLayout from "./layouts/DashboardLayout/DashboardLayout";

function App() {
  const [selectedPage, setSelectedPage] = useState("HOME");
 const [selectedMasterData, setSelectedMasterData] = useState(null);
  return (
    <DashboardLayout
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      selectedMasterData={selectedMasterData}
      setSelectedMasterData={setSelectedMasterData}
    />
  );
}

export default App;