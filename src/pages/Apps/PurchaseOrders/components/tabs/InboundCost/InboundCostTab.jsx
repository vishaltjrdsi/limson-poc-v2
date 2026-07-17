import "./InboundCost.css";
import { useState } from "react";

import {
  AgGridTable,
  Button,
  Input,
  Select,
} from "../../../../../../components/common";

import inboundCostColumns from "./inboundCostColumns";
import inboundCostMockData from "./inboundCostMockData";

const emptyForm = {
  cost: "",
  method: "",
  amount: "",
  vendor: "",
  refNo: "",
  notes: "",
};

const selectOptions = [
  { label: "Select", value: "" },
  { label: "Air", value: "Air" },
  { label: "Ocean", value: "Ocean" },
  { label: "Truck", value: "Truck" },
];

function InboundCostTab() {
  const [rowData, setRowData] = useState(inboundCostMockData);
  const [selectedRow, setSelectedRow] = useState(null);
  const [form, setForm] = useState(emptyForm);

  const handleSelectionChanged = (params) => {
    const row = params.api.getSelectedRows()[0];

    if (!row) {
      setSelectedRow(null);
      setForm(emptyForm);
      return;
    }

    setSelectedRow(row);

    setForm({
      cost: row.cost || "",
      method: row.method || "",
      amount: row.amount || "",
      vendor: row.vendor || "",
      refNo: row.refNo || "",
      notes: row.notes || "",
    });
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleCopy = () => {
    if (!selectedRow) return;

    setRowData((prev) => [
      ...prev,
      {
        ...selectedRow,
        refNo: `${selectedRow.refNo || "NEW"}-COPY`,
      },
    ]);
  };

  const handleDelete = () => {
    if (!selectedRow) return;

    setRowData((prev) => prev.filter((row) => row !== selectedRow));

    setSelectedRow(null);
    setForm(emptyForm);
  };

  const handleImport = () => {
    alert("Import functionality will be added.");
  };

  return (
    <div className="inbound-cost-page">

      <section className="cost-entry-section">

        <div className="section-title">
          COSTING ENTRY
        </div>

        <AgGridTable
          className="cost-grid"
          columnDefs={inboundCostColumns}
          rowData={rowData}
          pagination={false}
          rowSelection="single"
          onSelectionChanged={handleSelectionChanged}
        />

      </section>

      <section className="cost-footer">

        <div className="total-row">
          <span>Total:</span>
          <strong>0.00</strong>
        </div>

        <div className="cost-form">

          <div className="field">
            <label>COST</label>

          <Select
  compact
  style={{ width: "100%" }}
  options={selectOptions}
  value={form.cost}
  onChange={handleChange("cost")}
/>
          </div>

          <div className="field">
            <label>METHOD</label>

            <Select
              compact
              style={{ width: "100%" }}
              value={form.method}
              options={selectOptions}
              onChange={handleChange("method")}
            />
          </div>

          <div className="field">
            <label>AMOUNT</label>

            <Input
              compact
              value={form.amount}
              onChange={handleChange("amount")}
            />
          </div>

          <div className="field vendor-field">
            <label>VENDOR</label>

            <Select
              compact
              style={{ width: "100%" }}
              value={form.vendor}
              options={selectOptions}
              onChange={handleChange("vendor")}
            />
          </div>

          <div className="field">
            <label>REF #</label>

            <Input
              compact
              value={form.refNo}
              onChange={handleChange("refNo")}
            />
          </div>

          <div className="action-buttons">

            <Button
              title="Copy"
              onClick={handleCopy}
            >
              📋
            </Button>

            <Button
              title="Delete"
              onClick={handleDelete}
            >
              ✕
            </Button>

            <Button
              onClick={handleImport}
            >
              Import
            </Button>

          </div>

        </div>

        <div className="notes-section">

          <div className="notes-label">
            NOTES
          </div>

          <textarea
            value={form.notes}
            onChange={handleChange("notes")}
          />

        </div>

      </section>

    </div>
  );
}

export default InboundCostTab;