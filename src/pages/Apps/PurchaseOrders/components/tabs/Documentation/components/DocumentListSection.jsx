import { Button, Select, AgGridTable } from "../../../../../../../components/common";

import documentColumns from "../documentColumns";
import documentMockData from "../documentationMockData";

function DocumentListSection() {
  return (
    <div className="document-list">

      <h4>LIST OF DOCUMENTS</h4>

      <div className="upload-row">
        <Button>Upload Document</Button>
      </div>

      <div className="filter-row">

        <span>Filter By</span>

        <Select
          options={[
            { label: "All", value: "all" },
          ]}
        />

        <Select
          options={[
            { label: "All", value: "all" },
          ]}
        />

      </div>

      <AgGridTable
        columnDefs={documentColumns}
        rowData={documentMockData}
      />

    </div>
  );
}

export default DocumentListSection;