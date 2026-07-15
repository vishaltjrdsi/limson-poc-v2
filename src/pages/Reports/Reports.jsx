import ReportPage from "./components/ReportPage/ReportPage";

import salesConfig from "./configs/salesConfig";
import purchasingConfig from "./configs/purchasingConfig";
import inventoryConfig from "./configs/inventoryConfig";
import itemsContactsConfig from "./configs/itemsContactsConfig";

const reportConfigs = {
  sales: salesConfig,
  purchasing: purchasingConfig,
  inventory: inventoryConfig,
  itemsContacts: itemsContactsConfig,
};

function Reports({ reportType }) {
  const config = reportConfigs[reportType];

  if (!config) {
    return <div>Report configuration not found.</div>;
  }

  return <ReportPage config={config} />;
}

export default Reports;