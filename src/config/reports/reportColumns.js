import LinkCellRenderer from "../../components/common/AgGridTable/CellRenderers/LinkCellRenderer/LinkCellRenderer";

const reportColumns = [
  {
    headerName: "",
    field: "action",
    width: 60,
    sortable: false,
    filter: false,
    cellRenderer: () => "▶",
  },
 {
  headerName: "REPORT NAME",
  field: "reportName",
  flex: 1,
  cellRenderer: LinkCellRenderer
},
  {
    headerName: "DESCRIPTION",
    field: "description",
    flex: 2,
    valueGetter: (params) =>
      `This report shows ${params.data.description}.`,
  },
];

export default reportColumns;