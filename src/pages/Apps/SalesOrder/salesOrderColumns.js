const salesOrderColumns = [
  {
    headerName: "ITEM#",
    field: "item",
    minWidth: 90,
    flex: 1,
  },
  {
    headerName: "CUST#",
    field: "customer",
    minWidth: 90,
    flex: 1,
  },
  {
    headerName: "DESCRIPTION",
    field: "description",
    minWidth: 260,
    flex: 3,
  },
  {
    headerName: "ORD",
    field: "ordered",
    minWidth: 80,
    flex: 1,
  },
  {
    headerName: "QTY",
    field: "qty",
    minWidth: 80,
    flex: 1,
  },
  {
    headerName: "WGT",
    field: "weight",
    minWidth: 90,
    flex: 1,
  },
  {
    headerName: "GRSWGT",
    field: "grossWeight",
    minWidth: 90,
    flex: 1,
  },
  {
    headerName: "UOM",
    field: "uom",
    minWidth: 70,
    flex: 1,
  },
  {
    headerName: "PALQTY",
    field: "palletQty",
    minWidth: 90,
    flex: 1,
  },
  {
    headerName: "TOTPAL",
    field: "totalPallet",
    minWidth: 90,
    flex: 1,
  },
  {
    headerName: "UNIT PRICE",
    field: "unitPrice",
    minWidth: 110,
    flex: 1,
  },
  {
    headerName: "LIM PRICE",
    field: "limitPrice",
    minWidth: 110,
    flex: 1,
  },
  {
    headerName: "LINE TOTAL",
    field: "lineTotal",
    minWidth: 120,
    flex: 1,
  },
  {
    headerName: "BAL",
    field: "balance",
    minWidth: 70,
    flex: 1,
  },
  {
    headerName: "FILL %",
    field: "fill",
    minWidth: 80,
    flex: 1,
  },
  {
    headerName: "CUBE",
    field: "cube",
    minWidth: 80,
    flex: 1,
  },
];

export default salesOrderColumns;