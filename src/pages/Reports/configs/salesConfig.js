import salesColumns from "../Sales/salesColumns";
import salesMockData from "../Sales/salesMockData";

const createTab = (id, label) => ({
  id,
  label,
  columns: salesColumns,
  data: salesMockData,
});

const salesConfig = {
  title: "Sales Reports",

  tabs: [
    createTab("volumeHistory", "Volume History"),
    createTab("serviceLevels", "Service Levels"),
    createTab("sellPrices", "Sell Prices"),
    createTab("salesMargin", "Sales and Margin"),
    createTab("pipPromo", "PIP and Promo Rebates"),
    createTab("pallets", "Pallets"),
    createTab("bulkChanges", "Bulk Changes"),
    createTab("arReconciliation", "AR Reconciliation"),
  ],
};

export default salesConfig;