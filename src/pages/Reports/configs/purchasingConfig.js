import columns from "../Purchasing/purchasingColumns";
import data from "../Purchasing/purchasingMockData";

const purchasingConfig = {
  title: "Purchasing Reports",

  tabs: [
    {
      id: "purchaseOrderStatistics",
      label: "Purchase Order Statistics",
      columns,
      data,
    },
    {
      id: "openPurchases",
      label: "Open Purchases",
      columns,
      data,
    },
    {
      id: "history",
      label: "History",
      columns,
      data,
    },
    {
      id: "apReconciliation",
      label: "AP Reconciliation",
      columns,
      data,
    },
    {
      id: "forwardPlanning",
      label: "Forward Planning",
      columns,
      data,
    },
    {
      id: "incompletePurchaseTracking",
      label: "Incomplete Purchase Tracking",
      columns,
      data,
    },
  ],
};

export default purchasingConfig;