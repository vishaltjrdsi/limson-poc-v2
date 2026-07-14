import { DataTable } from "../index";

function ReportTable({
  columns,
  data,
}) {

  return (

    <DataTable
      columns={columns}
      data={data}
    />

  );

}

export default ReportTable;