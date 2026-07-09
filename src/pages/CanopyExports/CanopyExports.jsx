import "./CanopyExports.css";

function CanopyExports() {
  return (
    <section className="canopy-page">
      <div className="canopy-banner">
        <div>
          <p className="canopy-eyebrow">Master Data</p>
          <h1>Canopy Exports</h1>
        </div>

        <div className="canopy-banner-actions">
          <button className="canopy-pill canopy-pill-active">Accounts Payable (AP)</button>
          <button className="canopy-pill" disabled>
            Accounts Receivable (AR)
          </button>
        </div>
      </div>

      <div className="canopy-tabs">
        <button className="canopy-tab canopy-tab-active">Invoice Selection</button>
        <button className="canopy-tab">Account Codes</button>
      </div>

      <div className="canopy-toolbar">
        <h2>AP Invoice Selection</h2>
        <button className="canopy-express">Express Process</button>
      </div>

      <div className="invoice-card">
        <table className="invoice-table">
          <thead>
            <tr>
              <th>Vendor Name</th>
              <th>Vendor Code</th>
              <th>Reference</th>
              <th>Invoice Date</th>
              <th>Type</th>
              <th>Cur</th>
              <th>Amount</th>
              <th>Account</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="vendor-name">EAST-LAND HK CO LTD</td>
              <td>13078</td>
              <td>12345</td>
              <td>03/05/2026</td>
              <td>1</td>
              <td>USD</td>
              <td className="amount">$12,237.12</td>
              <td>1300-00</td>
              <td>202524</td>
            </tr>
          </tbody>
        </table>

        <div className="invoice-file-row">
          <label htmlFor="invoice-file">Filename</label>
          <input id="invoice-file" type="text" defaultValue="name.txt" />
          <button className="invoice-submit">Invoice CX</button>
        </div>
      </div>

      <p className="canopy-note">
        This prototype applies the Limson public-site tone to BOS Admin by borrowing the site's reliable global
        supply chain positioning, warm neutral surfaces, green brand emphasis, and confident uppercase visual rhythm.
      </p>
    </section>
  );
}

export default CanopyExports;
