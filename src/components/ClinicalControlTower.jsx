import React, { useEffect, useMemo, useState } from "react";
import "./ClinicalControlTower.css";
import { useParams } from "react-router-dom";

const sections = [
  { id: "executive", label: "Executive Summary" },
  { id: "mtr", label: "MTR Tracker" },
  { id: "dsr", label: "DSR Tracker" },
  { id: "shipments", label: "Shipment Monitor" },
  { id: "inventory", label: "Inventory Reconciliation" },
  { id: "exceptions", label: "Exceptions & Alerts" },
];

const executiveKpis = [
  { title: "Open MTRs", value: "18", note: "4 breached SLA" },
  { title: "Open DSRs", value: "42", note: "2 high-risk sites" },
  { title: "Delayed Shipments", value: "7", note: "3 customs related" },
  { title: "Inventory Match %", value: "91%", note: "SAP vs 3PL" },
  { title: "Temp Excursions", value: "2", note: "QA review needed" },
  { title: "Expiring < 90 Days", value: "1,250", note: "Units at risk" },
];

const processFlow = [
  "MTR Created",
  "Depot Pick",
  "Shipment",
  "Delivery",
  "Reconcile",
];

const exceptionSummary = [
  { label: "Shipment Delay", value: 7, width: "70%" },
  { label: "Inventory Mismatch", value: 4, width: "40%" },
  { label: "Temp Excursion", value: 2, width: "20%" },
  { label: "MTR SLA Breach", value: 4, width: "40%" },
];

const mtrData = [
  {
    id: "MTR-1001",
    study: "ABC-101",
    product: "Drug A",
    from: "Packaging Site",
    to: "US Depot",
    status: "In Transit",
    statusClass: "blue",
    age: 8,
    sla: "On Track",
    slaClass: "green",
    modalText:
      "Drug A transfer from Packaging Site to US Depot. Currently in transit and on track.",
  },
  {
    id: "MTR-1002",
    study: "ABC-101",
    product: "Drug A",
    from: "US Depot",
    to: "EU Depot",
    status: "Pending Pick",
    statusClass: "yellow",
    age: 13,
    sla: "Breached",
    slaClass: "red",
    modalText: "Pending pick for 13 days. SLA breached. Needs depot follow-up.",
  },
  {
    id: "MTR-1003",
    study: "XYZ-205",
    product: "Drug B",
    from: "EU Depot",
    to: "UK Depot",
    status: "Delivered",
    statusClass: "green",
    age: 6,
    sla: "Met",
    slaClass: "green",
    modalText: "Delivered successfully from EU Depot to UK Depot.",
  },
  {
    id: "MTR-1004",
    study: "LMN-301",
    product: "Drug C",
    from: "US Depot",
    to: "Canada Depot",
    status: "QA Hold",
    statusClass: "red",
    age: 15,
    sla: "Breached",
    slaClass: "red",
    modalText:
      "QA Hold at Canada Depot. Transfer is blocked until QA disposition.",
  },
];

const dsrData = [
  {
    id: "DSR-2001",
    study: "ABC-101",
    site: "Site 101",
    country: "USA",
    product: "Drug A",
    priority: "Normal",
    status: "Packed",
    statusClass: "blue",
    risk: "Low",
    riskClass: "green",
    modalText: "Normal shipment for USA site. Packed and ready for dispatch.",
  },
  {
    id: "DSR-2002",
    study: "ABC-101",
    site: "Site 202",
    country: "Germany",
    product: "Drug A",
    priority: "Urgent",
    status: "Customs Hold",
    statusClass: "red",
    risk: "High",
    riskClass: "red",
    modalText:
      "Urgent Germany site shipment is under customs hold. High risk to site supply.",
  },
  {
    id: "DSR-2003",
    study: "XYZ-205",
    site: "Site 310",
    country: "UK",
    product: "Drug B",
    priority: "Normal",
    status: "In Transit",
    statusClass: "blue",
    risk: "Medium",
    riskClass: "yellow",
    modalText:
      "UK site shipment is in transit. Moderate risk due to tight delivery timeline.",
  },
  {
    id: "DSR-2004",
    study: "LMN-301",
    site: "Site 405",
    country: "Canada",
    product: "Drug C",
    priority: "Urgent",
    status: "Pending Depot",
    statusClass: "yellow",
    risk: "High",
    riskClass: "red",
    modalText: "Urgent Canada site request pending depot action. High risk.",
  },
];

const shipmentKpis = [
  { title: "DHL Active Shipments", value: "32" },
  { title: "FedEx Active Shipments", value: "18" },
  { title: "World Courier Active Shipments", value: "21" },
];

const shipmentData = [
  {
    shipment: "SHP-3001",
    relatedId: "MTR-1001",
    courier: "DHL",
    origin: "US",
    destination: "Germany",
    status: "In Transit",
    statusClass: "blue",
    delay: 0,
    temp: "No",
    modalText:
      "MTR shipment from US to Germany. No delay, no temperature excursion.",
  },
  {
    shipment: "SHP-3002",
    relatedId: "DSR-2002",
    courier: "FedEx",
    origin: "EU Depot",
    destination: "Germany Site",
    status: "Customs Hold",
    statusClass: "red",
    delay: 2,
    temp: "No",
    modalText: "Germany site DSR shipment delayed due to customs hold.",
  },
  {
    shipment: "SHP-3003",
    relatedId: "DSR-2003",
    courier: "World Courier",
    origin: "UK Depot",
    destination: "UK Site",
    status: "Delivered",
    statusClass: "green",
    delay: 0,
    temp: "No",
    modalText: "Shipment delivered on time.",
  },
  {
    shipment: "SHP-3004",
    relatedId: "MTR-1004",
    courier: "DHL",
    origin: "US Depot",
    destination: "Canada Depot",
    status: "QA Hold",
    statusClass: "red",
    delay: 5,
    temp: "Yes",
    modalText: "Canada shipment on QA hold due to temperature excursion.",
  },
];

const inventoryData = [
  {
    location: "US Depot",
    product: "Drug A",
    batch: "B001",
    sapQty: 1000,
    qty3pl: 1000,
    variance: "0%",
    status: "Match",
    statusClass: "green",
    rootCause: "-",
    modalText: "SAP and 3PL inventory match. No action required.",
  },
  {
    location: "EU Depot",
    product: "Drug A",
    batch: "B002",
    sapQty: 800,
    qty3pl: 750,
    variance: "-6.25%",
    status: "Mismatch",
    statusClass: "red",
    rootCause: "Timing Difference",
    modalText: "SAP is higher than 3PL by 50 units. Likely timing difference.",
  },
  {
    location: "UK Depot",
    product: "Drug B",
    batch: "B010",
    sapQty: 400,
    qty3pl: 420,
    variance: "5%",
    status: "Mismatch",
    statusClass: "red",
    rootCause: "Receipt Not Posted",
    modalText:
      "3PL shows 20 more units than SAP. Receipt may not be posted in SAP.",
  },
  {
    location: "Canada Depot",
    product: "Drug C",
    batch: "C015",
    sapQty: 300,
    qty3pl: 250,
    variance: "-16.7%",
    status: "Mismatch",
    statusClass: "red",
    rootCause: "QA Hold Adjustment",
    modalText:
      "Variance due to QA hold adjustment. Needs QA/depot confirmation.",
  },
];

const StatusBadge = ({ text, className }) => (
  <span className={`badge ${className}`}>{text}</span>
);

const TableSection = ({ title, columns, data, onRowClick }) => {
  return (
    <section className="section active">
      <div className="card">
        <h2>{title}</h2>

        <table>
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.key}>{col.label}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row, index) => (
              <tr
                key={row.id || row.shipment || index}
                className="row-click"
                onClick={() => onRowClick(row)}
              >
                {columns.map((col) => (
                  <td key={col.key}>
                    {col.render ? col.render(row) : row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default function ClinicalControlTower() {
   const { type } = useParams();

  const [activeSection, setActiveSection] = useState("executive");

  useEffect(() => {
    if (type) {
      setActiveSection(type);
    }
  }, [type]);

  const [modal, setModal] = useState({
    open: false,
    title: "",
    text: "",
  });

  const openModal = (title, text) => {
    setModal({
      open: true,
      title,
      text,
    });
  };

  const closeModal = () => {
    setModal({
      open: false,
      title: "",
      text: "",
    });
  };

  const tableConfig = useMemo(
    () => ({
      mtr: {
        title: "MTR Tracker",
        data: mtrData,
        columns: [
          { key: "id", label: "MTR ID" },
          { key: "study", label: "Study" },
          { key: "product", label: "Product" },
          { key: "from", label: "From" },
          { key: "to", label: "To" },
          {
            key: "status",
            label: "Status",
            render: (row) => (
              <StatusBadge text={row.status} className={row.statusClass} />
            ),
          },
          { key: "age", label: "Age" },
          {
            key: "sla",
            label: "SLA",
            render: (row) => (
              <StatusBadge text={row.sla} className={row.slaClass} />
            ),
          },
        ],
        getModal: (row) => ({
          title: row.id,
          text: row.modalText,
        }),
      },

      dsr: {
        title: "DSR Tracker",
        data: dsrData,
        columns: [
          { key: "id", label: "DSR ID" },
          { key: "study", label: "Study" },
          { key: "site", label: "Site" },
          { key: "country", label: "Country" },
          { key: "product", label: "Product" },
          { key: "priority", label: "Priority" },
          {
            key: "status",
            label: "Status",
            render: (row) => (
              <StatusBadge text={row.status} className={row.statusClass} />
            ),
          },
          {
            key: "risk",
            label: "Risk",
            render: (row) => (
              <StatusBadge text={row.risk} className={row.riskClass} />
            ),
          },
        ],
        getModal: (row) => ({
          title: row.id,
          text: row.modalText,
        }),
      },

      inventory: {
        title: "Inventory Reconciliation — SAP vs 3PL",
        data: inventoryData,
        columns: [
          { key: "location", label: "Location" },
          { key: "product", label: "Product" },
          { key: "batch", label: "Batch" },
          { key: "sapQty", label: "SAP Qty" },
          { key: "qty3pl", label: "3PL Qty" },
          { key: "variance", label: "Variance" },
          {
            key: "status",
            label: "Status",
            render: (row) => (
              <StatusBadge text={row.status} className={row.statusClass} />
            ),
          },
          { key: "rootCause", label: "Root Cause" },
        ],
        getModal: (row) => ({
          title: `${row.location} / ${row.batch}`,
          text: row.modalText,
        }),
      },
    }),
    [],
  );

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">Clinical Control Tower</div>

        <div className="subtitle">DELIVER · MTR · DSR · Reconciliation</div>

        <div className="nav">
          {sections.map((section) => (
            <button
              key={section.id}
              className={activeSection === section.id ? "active" : ""}
              onClick={() => setActiveSection(section.id)}
            >
              {section.label}
            </button>
          ))}
        </div>
      </aside>

      <main className="main">
        <div className="topbar">
          <div className="title">
            <h1>Clinical Supply Chain Control Tower</h1>

            <p>
              Prototype for DELIVER operations visibility and exception
              management
            </p>
          </div>

          <div className="filters">
            <select>
              <option>All Studies</option>
              <option>ABC-101</option>
              <option>XYZ-205</option>
              <option>LMN-301</option>
            </select>

            <select>
              <option>All Regions</option>
              <option>North America</option>
              <option>Europe</option>
              <option>Canada</option>
            </select>

            <input type="date" defaultValue="2026-05-18" />
          </div>
        </div>

        <div className="click-note">
          Click the left menu tabs and click any table row to view sample
          drill-down details.
        </div>

        {activeSection === "executive" && (
          <section className="section active">
            <div className="grid kpi-grid">
              {executiveKpis.map((item) => (
                <div className="card" key={item.title}>
                  <div className="kpi-title">{item.title}</div>

                  <div className="kpi-value">{item.value}</div>

                  <div className="kpi-note">{item.note}</div>
                </div>
              ))}
            </div>

            <div className="grid two-col">
              <div className="card">
                <h2>Deliver Process Flow</h2>

                <div className="flow">
                  {processFlow.map((step, index) => (
                    <React.Fragment key={step}>
                      <div className="flow-box">{step}</div>

                      {index !== processFlow.length - 1 && (
                        <div className="arrow">→</div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="card">
                <h2>Exception Summary</h2>

                {exceptionSummary.map((item) => (
                  <div className="bar-row" key={item.label}>
                    <div className="bar-label">
                      <span>{item.label}</span>

                      <b>{item.value}</b>
                    </div>

                    <div className="bar-bg">
                      <div
                        className="bar-fill"
                        style={{
                          width: item.width,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeSection === "exceptions" && (
          <section className="section active">
            <div className="grid two-col">
              <div className="card">
                <h2>Critical / High Alerts</h2>

                <div className="alert critical">
                  <b>Temp Excursion:</b> SHP-3004 requires QA disposition before
                  release.
                </div>

                <div className="alert critical">
                  <b>Customs Hold:</b> SHP-3002 delayed beyond planned delivery
                  date.
                </div>

                <div className="alert warning">
                  <b>Inventory Mismatch:</b> EU Depot Drug A Batch B002 variance
                  exceeds threshold.
                </div>

                <div className="alert warning">
                  <b>MTR SLA Breach:</b> MTR-1004 pending for 15 days.
                </div>
              </div>

              <div className="card">
                <h2>Owner Queue</h2>

                <table>
                  <thead>
                    <tr>
                      <th>Owner</th>
                      <th>Open Items</th>
                      <th>Critical</th>
                    </tr>
                  </thead>

                  <tbody>
                    {[
                      ["Logistics", 8, 2],
                      ["QA", 3, 1],
                      ["Depot Ops", 5, 0],
                      ["Clinical Supply Planning", 4, 0],
                    ].map(([owner, open, critical]) => (
                      <tr key={owner}>
                        <td>{owner}</td>
                        <td>{open}</td>
                        <td>{critical}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {(activeSection === "mtr" ||
          activeSection === "dsr" ||
          activeSection === "inventory") && (
          <TableSection
            title={tableConfig[activeSection].title}
            columns={tableConfig[activeSection].columns}
            data={tableConfig[activeSection].data}
            onRowClick={(row) => {
              const modalData = tableConfig[activeSection].getModal(row);

              openModal(modalData.title, modalData.text);
            }}
          />
        )}

        {activeSection === "shipments" && (
          <section className="section active">
            <div className="grid three-col">
              {shipmentKpis.map((item) => (
                <div className="card" key={item.title}>
                  <div className="kpi-title">{item.title}</div>

                  <div className="kpi-value">{item.value}</div>
                </div>
              ))}
            </div>

            <br />

            <TableSection
              title="Shipment Monitor"
              data={shipmentData}
              onRowClick={(row) => openModal(row.shipment, row.modalText)}
              columns={[
                {
                  key: "shipment",
                  label: "Shipment",
                },
                {
                  key: "relatedId",
                  label: "Related ID",
                },
                {
                  key: "courier",
                  label: "Courier",
                },
                {
                  key: "origin",
                  label: "Origin",
                },
                {
                  key: "destination",
                  label: "Destination",
                },
                {
                  key: "status",
                  label: "Status",
                  render: (row) => (
                    <StatusBadge
                      text={row.status}
                      className={row.statusClass}
                    />
                  ),
                },
                {
                  key: "delay",
                  label: "Delay",
                },
                {
                  key: "temp",
                  label: "Temp",
                },
              ]}
            />
          </section>
        )}
      </main>

      {modal.open && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>{modal.title}</h3>

            <p>{modal.text}</p>

            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
