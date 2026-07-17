const inboundCostColumns = [
  {
    headerName: "COST",
    field: "cost",
    width: 90,
  },
  {
    headerName: "DESCRIPTION",
    field: "description",
    flex: 1,
    minWidth: 180,
  },
  {
    headerName: "VENDOR",
    field: "vendor",
    width: 120,
  },
  {
    headerName: "USER",
    field: "user",
    width: 80,
  },
  {
    headerName: "AMOUNT",
    field: "amount",
    width: 110,
    cellStyle: {
      textAlign: "right",
    },
  },
  {
    headerName: "METHOD",
    field: "method",
    width: 120,
  },
  {
    headerName: "PER/CTN",
    field: "perCtn",
    width: 120,
    cellStyle: {
      textAlign: "right",
    },
  },
  {
    headerName: "PER/WGT",
    field: "perWgt",
    width: 120,
    cellStyle: {
      textAlign: "right",
    },
  },
  {
    headerName: "LAST CHANGED",
    field: "lastChanged",
    width: 190,
  },
  {
    headerName: "REF #",
    field: "refNo",
    width: 90,
  },
  {
    headerName: "NOTES",
    field: "notes",
    width: 120,
  },
];

export default inboundCostColumns;