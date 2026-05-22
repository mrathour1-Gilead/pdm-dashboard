import React, { useState, useMemo, useEffect } from "react";

import raw_material from "./assets/images/raw_material.png";
import demand_planning from "./assets/images/demand_planning.png";
import scv from "./assets/images/scv.png";
import bms from "./assets/images/bms.png";
import cscm from "./assets/images/cscm.png";
import supply_chain from "./assets/images/supply_chain.png";
import supply_res from "./assets/images/supply_res.png";
import cycle_time from "./assets/images/cycle_time.png";
import cares_act from "./assets/images/cares_act.png";
import rca from "./assets/images/rca.png";
import gtms from "./assets/images/gtms.png";
import seip from "./assets/images/seip.png";
import inventory from "./assets/images/inventory.png";

import header from "./assets/images/header.png";
import abhishek from "./assets/images/abhishek.jpg";

function HighlightText({ text, query }) {
  if (!query.trim()) return <span>{text}</span>;

  const regex = new RegExp(
    `(${query.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")})`,
    "gi",
  );

  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark
            key={i}
            className="rounded bg-cyan-100 px-1 font-bold text-cyan-950"
          >
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </span>
  );
}

const SECTIONS_DATA = [
  // ================= PLANNING =================

  {
    category: "Planning",
    title: "Raw Material Forecasting",
    type: "Clinical",
    image: raw_material,
    description:
      "Track inventory levels, supplier performance, procurement costs and demand forecasting.",

    groups: [
      {
        title: "Dashboards",
        links: [
          {
            name: "Raw Material Forecasting - Home Page",
            url: "https://gtp.gilead.com/#/site/PDM/workbooks/21777/views",
          },
          {
            name: "Component Status",
            url: "https://gtp.gilead.com/#/site/PDM/redirect_to_view/142447",
          },
          {
            name: "Demand vs Inventory by CMO",
            url: "https://gtp.gilead.com/#/site/PDM/redirect_to_view/142448",
          },
          {
            name: "Demand Forecast",
            url: "https://gtp.gilead.com/#/site/PDM/redirect_to_view/142449",
          },
          {
            name: "Demand vs Inventory by Category",
            url: "https://gtp.gilead.com/#/site/PDM/redirect_to_view/142450",
          },
          {
            name: "Inventory at Part Level",
            url: "https://gtp.gilead.com/#/site/PDM/redirect_to_view/142451",
          },
        ],
      },
    ],
  },

  {
    category: "Planning",
    title: "Demand Planning",
    type: "Clinical",
    image: demand_planning,
    description:
      "Demand planning and forecasting dashboards for clinical supply operations.",

    groups: [
      {
        title: "Dashboards",
        links: [
          {
            name: "Demand Planning - Home Page",
            url: "https://gtp.gilead.com/#/site/PDM/projects/1744",
          },
          {
            name: "RR Forecast Accuracy Analysis Dashboard",
            url: "https://gtp.gilead.com/#/site/PDM/views/RR_ForecastAccuracyAnalysisDashboard/SummaryView?:iid=1",
          },
          {
            name: "RR Forecast Attainment Dashboard - Analytical",
            url: "https://gtp.gilead.com/#/site/PDM/views/RR_ForecastAttainmentDashboard-Analytical/AnalyticalView?:iid=7",
          },
          {
            name: "RR Forecast Attainment Dashboard - Detail",
            url: "https://gtp.gilead.com/#/site/PDM/views/RR_ForecastAttainmentDashboard-Detail/GeoView",
          },
          {
            name: "RR Forecast Attainment Dashboard - Summary",
            url: "https://gtp.gilead.com/#/site/PDM/views/RR_ForecastAttainmentDashboard-Summary/SummaryView?:iid=2",
          },
          {
            name: "RR Forecast Change Analysis Dashboard",
            url: "https://gtp.gilead.com/#/site/PDM/views/RR_ForecastChangeAnalysisDashboard/ExecutiveView",
          },
        ],
      },
    ],
  },

  {
    category: "Planning",
    title: "SEIP",
    type: "Clinical",
    image: seip,
    description:
      "Single Echelon Inventory Planning platform for inventory optimization.",

    groups: [
      {
        title: "Dashboards",
        links: [
          {
            name: "SEIP",
            url: "https://pdm.gilead.com/portal",
          },
        ],
      },
    ],
  },

  // ================= SOURCE =================

  {
    category: "Source",
    title: "BMS",
    type: "Clinical",
    image: bms,
    description:
      "Bulk material sourcing, warehouse operations and procurement analytics.",

    groups: [
      {
        title: "Dashboards",
        links: [
          {
            name: "Bulk Material Services - Home Page",
            url: "https://gtp.gilead.com/#/site/PDM/views/BulkMaterialServicesLandingPage/BulkMaterialServicesReports?:iid=8",
          },
          {
            name: "Analytical Operations Report",
            url: "https://gtp.gilead.com/#/site/PDM/views/AnalyticalOperationsReport/AnalyticalOperationsReport",
          },
          {
            name: "GMP Warehouse Operator Report",
            url: "https://gtp.gilead.com/#/site/PDM/views/GMPWarehouseOperatorReport/GMPWarehouseOperator",
          },
          {
            name: "Item Discrepancy Report",
            url: "https://gtp.gilead.com/#/site/PDM/views/ItemDescrepencyReport/ItemDescrepencyReport?:iid=2",
          },
          {
            name: "Open Sales Order Report",
            url: "https://gtp.gilead.com/#/site/PDM/views/OpenSalesOrderReport/OpenSalesOrderReport",
          },
          {
            name: "Overall Report",
            url: "https://gtp.gilead.com/#/site/PDM/views/OverallReport/OverallReport",
          },
          {
            name: "QA Report",
            url: "https://gtp.gilead.com/#/site/PDM/views/QAReport/QA_Report",
          },
          {
            name: "POs to Receive Report",
            url: "https://gtp.gilead.com/#/site/PDM/views/POstoReceiveReport/POstoReceiveReport",
          },
        ],
      },
    ],
  },

  {
    category: "Source",
    title: "SCV Global",
    type: "Clinical",
    image: scv,
    description: "Inventory visibility, API inventory and planning analytics.",

    groups: [
      {
        title: "Dashboards",
        links: [
          {
            name: "SCV Global - Home Page",
            url: "https://gtp.gilead.com/#/site/PDM/projects/1363",
          },
          {
            name: "API Inventory Dashboard",
            url: "https://gtp.gilead.com/#/site/PDM/views/APIInventoryDashboard/APISummaryDashboard?:iid=1",
          },
          {
            name: "API Inventory with Exception Handling",
            url: "https://gtp.gilead.com/#/site/PDM/views/APIInventorywithExceptionHandling/InventorywEHD?:iid=1",
          },
          {
            name: "API Lot Restriction V1",
            url: "https://gtp.gilead.com/#/site/PDM/views/APIInventorywithExceptionHandling/InventorywEHD?:iid=1",
          },
          {
            name: "API Planning & Analytics Dashboards",
            url: "https://gtp.gilead.com/#/site/PDM/views/APIPlanningAnalyticsDashboards/Home?:iid=3",
          },
          {
            name: "ICN Map by Product and Country",
            url: "https://gtp.gilead.com/#/site/PDM/views/ICNMapbyProductandCountry_0/ICNMAPbyPRODUCTCOUNTRY?:iid=2",
          },
          {
            name: "Material Status Notification MSN",
            url: "https://gtp.gilead.com/#/site/PDM/views/MaterialStatusNotificationMSN/MaterialStatusNotification?:iid=5",
          },
          {
            name: "Planning Strategy Dashboard",
            url: "https://gtp.gilead.com/#/site/PDM/views/PlanningStrategyDashboard/PlanningStrategy?:iid=2%20",
          },
          {
            name: "Work Order Consumption Eligibility",
            url: "https://gtp.gilead.com/#/site/PDM/views/WorkOrderConsumptionEligibility/WorkOrderConsumptionEligibility?:iid=8",
          },
        ],
      },
    ],
  },

  // ================= MAKE =================

  {
    category: "Make",
    title: "CSCM",
    type: "Clinical",
    image: cscm,
    description:
      "Clinical Supply Chain Management dashboards for manufacturing, logistics and forecasting.",

    groups: [
      {
        title: "CSCM Dashboards",
        links: [
          {
            name: "CSCM Dashboards - Home Page",
            url: "https://gtp.gilead.com/#/site/PDM/views/CSCMDashboardsLandingPage/CSCMDashboards",
          },
        ],
      },

      {
        title: "Inventory Forecast Analytics",
        links: [
          {
            name: "Inventory Forecast Analytics",
            url: "https://gtp.gilead.com/#/site/PDM/views/InventoryForecastAnalytics/InventoryTracker?:iid=3",
          },
          {
            name: "Commercial Inventory Forecast Analytics",
            url: "https://gtp.gilead.com/#/site/PDM/views/InventoryForecastAnalytics/CommercialInventoryTracker?:iid=5",
          },
          {
            name: "Demand Tracker",
            url: "https://gtp.gilead.com/#/site/PDM/views/InventoryForecastAnalytics/DemandTracker?:iid=6",
          },
          {
            name: "Lot Allocation",
            url: "https://gtp.gilead.com/#/site/PDM/views/InventoryForecastAnalytics/LotAllocation?:iid=1",
          },
          {
            name: "Labeling Details by Requested Date",
            url: "https://gtp.gilead.com/#/site/PDM/views/InventoryForecastAnalytics/LabelingDetailbyRequiredDate?:iid=2",
          },
          {
            name: "Labeling Details by Requested QA Release Date",
            url: "https://gtp.gilead.com/#/site/PDM/views/InventoryForecastAnalytics/LabelingDetailbyRequestedQAReleaseDate?:iid=4",
          },
          {
            name: "Labeling Details by Requested Expected Production Release Date",
            url: "https://gtp.gilead.com/#/site/PDM/views/InventoryForecastAnalytics/LabelingDetailbyExpectedReleaseDate?:iid=3",
          },
          {
            name: "Work Order Report",
            url: "https://gtp.gilead.com/#/site/PDM/views/InventoryForecastAnalytics/WorkOrderReport?:iid=5",
          },
          {
            name: "Production Forecast Report",
            url: "https://gtp.gilead.com/#/site/PDM/views/InventoryForecastAnalytics/ProductionForecast?:iid=4",
          },
          {
            name: "EBS Transfer from Commercial to Clinical",
            url: "https://gtp.gilead.com/#/site/PDM/views/InventoryForecastAnalytics/EBSTransfersfromCommercialtoClinicalOrgs?:iid=7",
          },
        ],
      },

      {
        title: "Logistics",
        links: [
          {
            name: "Logistics",
            url: "https://gtp.gilead.com/#/site/PDM/views/LogisticDashboard/Logistics?:iid=1",
          },
          {
            name: "Sales Order By Organization",
            url: "https://gtp.gilead.com/#/site/PDM/views/LogisticDashboard/SalesOrderByOrganization?:iid=2",
          },
          {
            name: "Sales Order by Storage Conditions",
            url: "https://gtp.gilead.com/#/site/PDM/views/LogisticDashboard/SalesOrderByStorageCondition?:iid=1",
          },
          {
            name: "Sales Order by Countries",
            url: "https://gtp.gilead.com/#/site/PDM/views/LogisticDashboard/SalesOrderByCountries?:iid=6",
          },
          {
            name: "Sales Order Detail Report",
            url: "https://gtp.gilead.com/#/site/PDM/views/LogisticDashboard/SalesOrderDetailReport?:iid=7",
          },
        ],
      },

      {
        title: "EBS On-Hand Inventory Analytics",
        links: [
          {
            name: "On-Hand Inventory",
            url: "https://gtp.gilead.com/#/site/PDM/views/EBSOn-HandInventoryAnalytics/On-HandInventory?:iid=1",
          },
          {
            name: "Outsourcing Management Product Report",
            url: "https://gtp.gilead.com/#/site/PDM/views/EBSOn-HandInventoryAnalytics/OutsourcingManagementProduct?:iid=2",
          },
          {
            name: "Product Distribution",
            url: "https://gtp.gilead.com/#/site/PDM/views/EBSOn-HandInventoryAnalytics/ProductDistribution?:iid=3",
          },
        ],
      },

      {
        title: "Additional Analytics",
        links: [
          {
            name: "CSCM IQS Analytics - MTR Report",
            url: "https://gtp.gilead.com/#/site/PDM/views/CSCMIQSAnalytics-MTRReport/CSCMIQSAnalytics-MTRReport?:iid=1",
          },
          {
            name: "IQS Multiple Active MSN Exception Report",
            url: "https://gtp.gilead.com/#/site/PDM/views/IQSExceptionDashboard/IQSMultipleActiveMSNsExceptionReport?:iid=1",
          },
          {
            name: "IQS Source Data Exception Report",
            url: "https://gtp.gilead.com/#/site/PDM/views/IQSExceptionDashboard/IQSSourceDataExceptionReport?:iid=2",
          },
          {
            name: "GILDA QP Dashboard",
            url: "https://gtp.gilead.com/#/site/PDM/views/GILDAQPDashboard/GILDAQPDashboard?:iid=1",
          },
        ],
      },
    ],
  },

  {
    category: "Make",
    title: "Cycle Time Report",
    type: "Clinical",
    image: cycle_time,
    description:
      "Cycle time analytics for operational efficiency and bottleneck analysis.",

    groups: [
      {
        title: "Dashboards",
        links: [
          {
            name: "Cycle Time Report",
            url: "https://us-west-2.quicksight.aws.amazon.com/",
          },
        ],
      },
    ],
  },

  {
    category: "Make",
    title: "Root Cause Analysis (RCA)",
    type: "Clinical",
    image: rca,
    description:
      "Centralized platform for incident investigation and corrective action tracking.",

    groups: [
      {
        title: "Dashboards",
        links: [
          {
            name: "RCA",
            url: "https://pdm-analytics-rca.gilead.com/",
          },
        ],
      },
    ],
  },

  // ================= DELIVER =================

  {
    category: "Deliver",
    title: "Supply Chain Analytics",
    type: "Clinical",
    image: supply_chain,
    description:
      "Transportation, shipment and logistics performance analytics.",

    groups: [
      {
        title: "Dashboards",
        links: [
          {
            name: "Supply Chain Analytics",
            url: "https://us-west-2.quicksight.aws.amazon.com/",
          },
        ],
      },
    ],
  },

  {
    category: "Deliver",
    title: "Supply Chain Resilience",
    type: "Clinical",
    image: supply_res,
    description:
      "Resilience dashboards for disruption management and continuity monitoring.",

    groups: [
      {
        title: "Dashboards",
        links: [
          {
            name: "Supply Chain Resilience",
            url: "https://us-west-2.quicksight.aws.amazon.com/",
          },
        ],
      },
    ],
  },

  {
    category: "Deliver",
    title: "CMO Inventory Reconciliation",
    type: "Clinical",
    image: inventory,
    description:
      "Inventory reconciliation dashboards for contract manufacturing organizations.",

    groups: [
      {
        title: "Dashboards",
        links: [
          {
            name: "CMO Recon",
            url: "https://us-west-2.quicksight.aws.amazon.com/",
          },
        ],
      },
    ],
  },

  {
    category: "Deliver",
    title: "CARES Act",
    type: "Clinical",
    image: cares_act,
    description: "Compliance and healthcare reporting dashboards.",

    groups: [
      {
        title: "Dashboards",
        links: [
          {
            name: "CARES",
            url: "https://us-west-2.quicksight.aws.amazon.com/",
          },
        ],
      },
    ],
  },

  {
    category: "Deliver",
    title: "GTMS",
    type: "Clinical",
    image: gtms,
    description:
      "Transportation management platform for supply chain logistics.",

    groups: [
      {
        title: "Dashboards",
        links: [
          {
            name: "GTMS",
            url: "http://w1gtmsappprdn01:8080/",
          },
        ],
      },
    ],
  },
];

const categories = ["Planning", "Source", "Make", "Deliver"];

export default function App() {
  const [selectedMain, setSelectedMain] = useState("Clinical");

  const [search, setSearch] = useState("");

  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 250);

    return () => clearTimeout(timer);
  }, [search]);

  const filteredData = useMemo(() => {
    if (!debouncedSearch.trim()) {
      return SECTIONS_DATA;
    }

    const query = debouncedSearch.toLowerCase();

    return SECTIONS_DATA.filter(sec => sec.type === selectedMain).map((section) => {
      const matchedGroups = section.groups
        .map((group) => {
          const filteredLinks = group.links.filter((link) =>
            link.name.toLowerCase().includes(query),
          );

          return {
            ...group,
            links: filteredLinks,
          };
        })
        .filter((group) => group.links.length);

      const matchesSection =
        section.title.toLowerCase().includes(query) ||
        section.description.toLowerCase().includes(query);

      if (matchesSection || matchedGroups.length) {
        return {
          ...section,
          groups: matchedGroups.length > 0 ? matchedGroups : section.groups,
        };
      }

      return null;
    }).filter(Boolean);
  }, [debouncedSearch]);

  const totalCount = useMemo(() => {
    return SECTIONS_DATA.filter(sec => sec.type === selectedMain).reduce(
      (acc, section) =>
        acc +
        section.groups.reduce((gAcc, group) => gAcc + group.links.length, 0),
      0,
    );
  }, [selectedMain]);

  const filteredCount = useMemo(() => {
    return filteredData.filter(sec => sec.type === selectedMain).reduce(
      (acc, section) =>
        acc +
        section.groups.reduce((gAcc, group) => gAcc + group.links.length, 0),
      0,
    );
  }, [filteredData,selectedMain]);

  return (
    <div className="min-h-screen bg-[#f4f7fb]">
      {/* HEADER */}
      <header className="relative overflow-hidden border-b border-slate-900 bg-[#071226]">
        <img
          src={header}
          alt="Header"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.08]"
        />

        <div className="relative mx-auto max-w-[1700px] px-10 py-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.32em] text-cyan-400">
                Enterprise Analytics Platform
              </p>

              <h1 className="mt-2 text-[38px] font-black tracking-tight text-white">
                PDM Supply Chain Analytics
              </h1>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
              <img
                src={abhishek}
                alt="Profile"
                className="h-10 w-10 rounded-full object-cover"
              />

              <div>
                <h3 className="text-[13px] font-bold text-white">
                  Abhishek Gupta
                </h3>

                <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-cyan-400">
                  Director, IT Data Engineering
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="mx-auto max-w-[1700px] px-10 py-8">
        {/* TOP BUTTONS */}
        <div className="mb-8 flex justify-center gap-4">
          <button
            onClick={() => setSelectedMain("Clinical")}
            className={`flex h-[58px] w-[180px] items-center justify-center rounded-xl border text-[22px] font-black transition-all ${
              selectedMain === "Clinical"
                ? "border-slate-900 bg-[#09152d] text-white shadow-md"
                : "border-slate-200 bg-white text-slate-900"
            }`}
          >
            Clinical
          </button>

          <button
            onClick={() => setSelectedMain("Commercial")}
            className={`flex h-[58px] w-[180px] items-center justify-center rounded-xl border text-[22px] font-black transition-all ${
              selectedMain === "Commercial"
                ? "border-slate-900 bg-[#09152d] text-white shadow-md"
                : "border-slate-200 bg-white text-slate-900"
            }`}
          >
            Commercial
          </button>
        </div>

        {/* SEARCH */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="relative w-full max-w-[420px]">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              ⌕
            </span>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search dashboards..."
              className="h-[48px] w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-[14px] font-medium outline-none"
            />
          </div>

          <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-[12px] font-bold text-slate-500">
            {search.trim()
              ? `${filteredCount} Results`
              : `${totalCount} Dashboards`}
          </div>
        </div>

        {/* DASHBOARDS */}
        {selectedMain === "Commercial" ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-20 text-center">
            <h2 className="text-3xl font-black text-slate-900">
              No Commercial Dashboards Found
            </h2>

            <p className="mt-3 text-sm text-slate-500">
              Commercial dashboards are currently unavailable.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 2xl:grid-cols-4 xl:grid-cols-2">
            {categories.map((category) => {
              const cards = filteredData.filter(
                (item) => item.category === category,
              );

              if (!cards.length) return null;

              return (
                <div key={category}>
                  {/* CATEGORY */}
                  <div className="mb-4 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                    <div className="text-center">
                      <h2 className="text-[22px] font-black tracking-tight text-slate-900">
                        {category}
                      </h2>

                      <div className="mx-auto mt-2 h-[3px] w-8 rounded-full bg-cyan-500" />
                    </div>
                  </div>

                  {/* CARDS */}
                  <div className="space-y-3">
                    {cards.map((card) => (
                      <div
                        key={card.title}
                        className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
                      >
                        {/* CARD HEADER */}
                        <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50 p-3">
                          <div className="h-[70px] w-[110px] overflow-hidden rounded-lg bg-slate-200 shrink-0">
                            <img
                              src={card.image}
                              alt={card.title}
                              className="h-full w-full object-cover"
                            />
                          </div>

                          <div className="flex-1">
                            <h3 className="text-[16px] font-black tracking-tight text-slate-900">
                              <HighlightText
                                text={card.title}
                                query={debouncedSearch}
                              />
                            </h3>

                            <div className="mt-2 h-[3px] w-8 rounded-full bg-cyan-500" />

                            <p className="mt-2 text-[11px] leading-5 text-slate-500">
                              {card.description}
                            </p>
                          </div>
                        </div>

                        {/* LINKS */}
                        <div className="p-3">
                          {card.groups.map((group) => (
                            <div key={group.title} className="mb-3 last:mb-0">
                              {card.groups.length > 1 && (
                                <h4 className="mb-2 text-[10px] font-black uppercase tracking-[0.14em] text-slate-500">
                                  {group.title}
                                </h4>
                              )}

                              <div className="grid gap-2">
                                {group.links.map((link) => (
                                  <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 transition-all hover:border-slate-300 hover:bg-white"
                                  >
                                    <div className="flex items-center gap-2">
                                      <span className="h-[5px] w-[5px] rounded-full bg-cyan-500" />

                                      <span className="text-[11px] font-semibold text-slate-700">
                                        <HighlightText
                                          text={link.name}
                                          query={debouncedSearch}
                                        />
                                      </span>
                                    </div>

                                    <span className="text-[11px] text-slate-400">
                                      ↗
                                    </span>
                                  </a>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
