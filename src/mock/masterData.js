const masterData = {
  palletRates: {
    columnDefs: [
      {
        headerName: "ID",
        field: "id",
        width: 120,
      },
      {
        headerName: "DESCRIPTION",
        field: "description",
        flex: 1,
      },
      {
        headerName: "STATUS",
        field: "status",
      },
      {
        headerName: "LAST MODIFIED",
        field: "lastModified",
      },
      {
        headerName: "ACTIONS",
        field: "actions",
      },
    ],

    rowData: [
      {
        id: "#0001",
        description: "Sample Entry",
        status: "Active",
        lastModified: "04/10/2026",
      },
      {
        id: "#0002",
        description: "Sample Entry",
        status: "Active",
        lastModified: "04/10/2026",
      },
      {
        id: "#0003",
        description: "Sample Entry",
        status: "Active",
        lastModified: "04/10/2026",
      },
    ],
  },

  countries: {
    columnDefs: [],
    rowData: [],
  },

  warehouses: {
    columnDefs: [],
    rowData: [],
  },

  vendors: {
    columnDefs: [],
    rowData: [],
  },
};

export default masterData;