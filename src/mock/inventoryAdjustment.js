const inventoryAdjustment = {
  moduleOptions: [
    "Inventory",
    "Warehouse",
    "Shipping",
  ],

  screenOptions: [
    "Inventory Adjustment",
    "Receiving",
    "Dispatch",
  ],

  table: {
    columnDefs: [
       {
    headerName: "ID",
    field: "id",
    width: 80,
  },
  {
    headerName: "TYPE",
    field: "type",
    width: 120,
  },
  {
    headerName: "NAME",
    field: "name",
    flex: 1,
  },
  {
    headerName: "LAST UPDATED USER",
    field: "updatedBy",
    width: 300,
  },
  {
    headerName: "LAST UPDATED TIME",
    field: "updatedTime",
    width: 300,
  },
    ],

    rowData: [
     
    ],
  },
};

export default inventoryAdjustment;