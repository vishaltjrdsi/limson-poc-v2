import ActionCellRenderer from "../../../components/Common/AgGridTable/CellRenderers";
import StatusCellRenderer from "../../../components/Common/AgGridTable/CellRenderers";

const palletRates = {
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
      width: 160,
      cellRenderer: StatusCellRenderer,
    },
    {
      headerName: "LAST MODIFIED",
      field: "lastModified",
      width: 180,
    },
    {
      headerName: "ACTIONS",
      width: 120,
      sortable: false,
      filter: false,
      resizable: false,
      cellRenderer: ActionCellRenderer,
    },
  ],

  rowData: [
    {
      id: "#0001",
      description: "Sample Pallet Rates Entry 1",
      status: "Active",
      lastModified: "04/10/2026",
    },
    {
      id: "#0002",
      description: "Sample Pallet Rates Entry 2",
      status: "Active",
      lastModified: "04/10/2026",
    },
    {
      id: "#0003",
      description: "Sample Pallet Rates Entry 3",
      status: "Active",
      lastModified: "04/10/2026",
    },
    {
      id: "#0004",
      description: "Sample Pallet Rates Entry 4",
      status: "Active",
      lastModified: "04/10/2026",
    },
    {
      id: "#0005",
      description: "Sample Pallet Rates Entry 5",
      status: "Active",
      lastModified: "04/10/2026",
    },
  ],
};

export default palletRates;
