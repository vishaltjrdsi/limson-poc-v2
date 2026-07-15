import columns from "../Inventory/inventoryColumns";
import data from "../Inventory/inventoryMockData";

const inventoryConfig = {
  title: "Inventory Reports",

  tabs: [
    {
      id: "levels",
      label: "Levels",
      columns,
      data,
    },
    {
      id: "atRisk",
      label: "At Risk",
      columns,
      data,
    },
    {
      id: "movements",
      label: "Movements",
      columns,
      data,
    },
    {
      id: "storageReport",
      label: "Storage Report",
      columns,
      data,
    },
    {
      id: "valueCosting",
      label: "Value and Costing",
      columns,
      data,
    },
  ],
};

export default inventoryConfig;