const productTrackingColumns = [
  { field: "itemNo", headerName: "ITEM #", width: 90 },
  { field: "qty", headerName: "QTY", width: 70 },
  { field: "uom", headerName: "UOM", width: 70 },
  { field: "wgt", headerName: "WGT", width: 90 },
  { field: "grWgt", headerName: "GRWGT", width: 90 },
  { field: "totGrWgt", headerName: "TOT GRWGT", width: 110 },
  { field: "ctnPlt", headerName: "CTN/PLT", width: 90 },
  { field: "totPallet", headerName: "TOT PALLET", width: 100 },
  { field: "costUom", headerName: "COST/UOM", width: 90 },
  { field: "description", headerName: "DESCRIPTION", flex: 1, minWidth: 220 },
  { field: "status", headerName: "STATUS", width: 120 },
  { field: "lotNumber", headerName: "LOT NUMBER", width: 120 },
  { field: "receiptUser", headerName: "RECEIPT USER", width: 130 },
  { field: "receiptDate", headerName: "RECEIPT DATE", width: 130 },
  { field: "lotTrace", headerName: "LOT TRACE", width: 110 },
  { field: "mop", headerName: "MOP", width: 70 },
  { field: "brand", headerName: "BRAND", width: 90 },
  { field: "condition", headerName: "CONDITION", width: 110 },
  { field: "productionDate", headerName: "PRODUCTION DATE", width: 150 },
];

export default productTrackingColumns;