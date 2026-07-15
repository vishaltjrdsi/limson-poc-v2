import ReportPage from "../components/ReportPage/ReportPage";
import inventoryConfig from "../configs/inventoryConfig";

function Inventory() {
  return (
    <ReportPage
      config={inventoryConfig}
    />
  );
}

export default Inventory;