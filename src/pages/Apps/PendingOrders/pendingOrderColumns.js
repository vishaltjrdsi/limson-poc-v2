import CheckboxCell from "./CheckboxCell";
import PoCell from "./PoCell";

const columns = [

  {
  headerName: "PO",
  field: "po",
  flex: 2.2,
  minWidth: 260,
  cellRenderer: PoCell,
},

  {
    headerName: "RECEIVED",
    field: "received",
    flex: 0.9,
    minWidth: 110,
  },

  {
    headerName: "SUPPLIER",
    field: "supplier",
    flex: 2,
    minWidth: 220,
  },

  {
    headerName: "TYPE",
    field: "type",
    flex: 1.1,
    minWidth: 120,
  },

  {
  headerName: "WHSE/CUST",
  field: "whseCust",
  flex: 1,
  minWidth: 120,

  cellStyle: {
    color: "#9d8d73",
  },
},

  {
    headerName: "TRUCKER",
    field: "trucker",
    flex: 1.1,
    minWidth: 130,
  },

  {
  headerName: "DATE",
  field: "date",
  flex: 1.5,
  minWidth: 170,

  cellStyle: {
    color: "#6b5638",
  },
},

  {
    headerName: "📋",
    field: "print",
    width: 55,
    sortable: false,
    filter: false,
    cellRenderer: CheckboxCell,
  },

  {
    headerName: "📄",
    field: "export",
    width: 55,
    sortable: false,
    filter: false,
    cellRenderer: CheckboxCell,
  },

  {
    headerName: "✓",
    field: "done",
    width: 55,
    sortable: false,
    filter: false,
    cellRenderer: CheckboxCell,
  },

];

export default columns;