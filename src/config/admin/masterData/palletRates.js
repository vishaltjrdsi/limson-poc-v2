const palletRates = {
  columnDefs: [
    {
      headerName: "Pallet Code",
      field: "code",
    },
    {
      headerName: "Description",
      field: "description",
    },
    {
      headerName: "Rate",
      field: "rate",
    },
  ],

  rowData: [
    {
      code: "PL001",
      description: "Wooden Pallet",
      rate: 120,
    },
    {
      code: "PL002",
      description: "Plastic Pallet",
      rate: 180,
    },
  ],
};

export default palletRates;