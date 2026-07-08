import { useState } from "react";
import DashboardLayout from "./layouts/DashboardLayout/DashboardLayout";

function App() {
  const [selectedPage, setSelectedPage] = useState("HOME");

  return (
    <DashboardLayout
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
    />
  );
}

export default App;