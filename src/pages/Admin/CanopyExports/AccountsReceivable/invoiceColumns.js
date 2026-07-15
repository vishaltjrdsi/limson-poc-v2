const invoiceColumns = [
  {
    headerName: "TYPE",
    field: "type",
    width: 90,
  },
  {
    headerName: "EINV",
    field: "einv",
    width: 80,
  },
  {
    headerName: "ORDER NO",
    field: "orderNo",
    width: 120,
  },
  {
    headerName: "CUST NO",
    field: "customerNo",
    width: 120,
  },
  {
    headerName: "CUSTOMER NAME",
    field: "customerName",
    flex: 1,
    minWidth: 260,
  },
  {
    headerName: "TOTAL",
    field: "total",
    width: 140,
  },
  {
    headerName: "PICKUP DATE",
    field: "pickupDate",
    width: 140,
  },
  {
    headerName: "INVOICE ASSIGNED",
    field: "invoiceAssigned",
    width: 170,
  },
  {
    headerName: "ACTIONS",
    field: "action",
    width: 120,
  },
];

export default invoiceColumns;