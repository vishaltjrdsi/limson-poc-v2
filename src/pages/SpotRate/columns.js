import { CheckboxCellRenderer } from "../../components/common/AgGridTable/CellRenderers";

const columns = [
  {
    headerName: "DATE",
    field: "date",
    flex: 2,
    minWidth: 300,
  },
  {
    headerName: "USD",
    field: "usd",
    width: 140,
  },
  {
    headerName: "CAD",
    field: "cad",
    width: 140,
  },
  {
    headerName: "EUR",
    field: "eur",
    width: 140,
  },
  {
    headerName: "",
    field: "selected",
    width: 70,
    cellRenderer: CheckboxCellRenderer,
    sortable: false,
  },
];

export default columns;
