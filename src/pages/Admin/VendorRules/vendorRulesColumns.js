const columns = [
  {
    headerName: "VENDOR TYPE",
    field: "vendorType",
    minWidth: 160,
    flex: 1,
  },
  {
    headerName: "RULE NAME",
    field: "ruleName",
    minWidth: 180,
    flex: 1,
  },
  {
    headerName: "PRIORITY",
    field: "priority",
    width: 110,
  },
  {
    headerName: "ACTIVE",
    field: "active",
    width: 100,
    cellRenderer: (params) =>
      params.value ? "Yes" : "No",
  },
  {
    headerName: "LAST UPDATED USER",
    field: "updatedUser",
    minWidth: 170,
    flex: 1,
  },
  {
    headerName: "LAST UPDATED TIME",
    field: "updatedTime",
    minWidth: 180,
    flex: 1,
  },
];

export default columns;