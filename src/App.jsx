import React, { useState, useMemo } from "react";
import bms from "./assets/images/bms.png";
import cares_act from "./assets/images/cares_act.png";
import cscm from "./assets/images/cscm.png";
import cycle_time from "./assets/images/cycle_time.png";
import demand_planning from "./assets/images/demand_planning.png";
import gtms from "./assets/images/gtms.png";
import header from "./assets/images/header.png";
import inventory from "./assets/images/inventory.png";
import raw_material from "./assets/images/raw_material.png";
import rca from "./assets/images/rca.png";
import scv from "./assets/images/scv.png";
import seip from "./assets/images/seip.png";
import supply_chain from "./assets/images/supply_chain.png";
import supply_res from "./assets/images/supply_res.png";
import abhishek from "./assets/images/abhishek.jpg";

const SECTIONS_DATA = [
  {
    title: "Raw Material Forecasting",
    image: raw_material,
    description: "Raw Material Forecasting dashboard to track inventory levels, supplier performance, procurement costs, and demand forecasting.",
    groups: [
      {
        title: "Dashboards",
        links: [
          { name: "Raw Material Forecasting - Home Page", url: "https://gtp.gilead.com/#/site/PDM/workbooks/21777/views" },
          { name: "Component Status", url: "https://gtp.gilead.com/#/site/PDM/redirect_to_view/142447" },
          { name: "Demand vs Inventory by CMO", url: "https://gtp.gilead.com/#/site/PDM/redirect_to_view/142448" },
          { name: "Demand Forecast", url: "https://gtp.gilead.com/#/site/PDM/redirect_to_view/142449" },
          { name: "Demand vs Inventory by Category", url: "https://gtp.gilead.com/#/site/PDM/redirect_to_view/142450" },
          { name: "Inventory at Part Level", url: "https://gtp.gilead.com/#/site/PDM/redirect_to_view/142451" },
        ]
      }
    ]
  },
  {
    title: "BMS",
    image: bms,
    description: "Bulk Management Services refer to the procurement, handling, storage, and distribution of large quantities and medical supplies required for drug manufacturing.",
    groups: [
      {
        title: "Dashboards",
        links: [
          { name: "Bulk Material Services - Home Page", url: "https://gtp.gilead.com/#/site/PDM/views/BulkMaterialServicesLandingPage/BulkMaterialServicesReports?:iid=8" },
          { name: "Analytical Operations Report", url: "https://gtp.gilead.com/#/site/PDM/views/AnalyticalOperationsReport/AnalyticalOperationsReport" },
          { name: "GMP Warehouse Operator Report", url: "https://gtp.gilead.com/#/site/PDM/views/GMPWarehouseOperatorReport/GMPWarehouseOperator" },
          { name: "Item Discrepancy Report", url: "https://gtp.gilead.com/#/site/PDM/views/ItemDescrepencyReport/ItemDescrepencyReport?:iid=2" },
          { name: "Open Sales Order Report", url: "https://gtp.gilead.com/#/site/PDM/views/OpenSalesOrderReport/OpenSalesOrderReport" },
          { name: "Overall Report", url: "https://gtp.gilead.com/#/site/PDM/views/OverallReport/OverallReport" },
          { name: "QA Report", url: "https://gtp.gilead.com/#/site/PDM/views/QAReport/QA_Report" },
          { name: "POs to Receive Report", url: "https://gtp.gilead.com/#/site/PDM/views/POstoReceiveReport/POstoReceiveReport" },
        ]
      }
    ]
  },
  {
    title: "Demand Planning",
    image: demand_planning,
    description: "Demand Planning in clinical research involves analyzing historical data, understanding patient recruitment trends, and considering external factors that may impact the demand for study materials.",
    groups: [
      {
        title: "Dashboards",
        links: [
          { name: "Demand Planning - Home Page", url: "https://gtp.gilead.com/#/site/PDM/projects/1744" },
          { name: "RR Forecast Accuracy Analysis Dashboard", url: "https://gtp.gilead.com/#/site/PDM/views/RR_ForecastAccuracyAnalysisDashboard/SummaryView?:iid=1" },
          { name: "RR Forecast Attainment Dashboard - Analytical", url: "https://gtp.gilead.com/#/site/PDM/views/RR_ForecastAttainmentDashboard-Analytical/AnalyticalView?:iid=7" },
          { name: "RR Forecast Attainment Dashboard - Detail", url: "https://gtp.gilead.com/#/site/PDM/views/RR_ForecastAttainmentDashboard-Detail/GeoView" },
          { name: "RR Forecast Attainment Dashboard - Summary", url: "https://gtp.gilead.com/#/site/PDM/views/RR_ForecastAttainmentDashboard-Summary/SummaryView?:iid=2" },
          { name: "RR Forecast Change Analysis Dashboard", url: "https://gtp.gilead.com/#/site/PDM/views/RR_ForecastChangeAnalysisDashboard/ExecutiveView" },
        ]
      }
    ]
  },
  {
    title: "SCV Global",
    image: scv,
    description: "SCV Global showing stock levels, stock value levels, stock value lead time, turnover rates and backorder rates and inventory distribution.",
    groups: [
      {
        title: "Dashboards",
        links: [
          { name: "SCV Global - Home Page", url: "https://gtp.gilead.com/#/site/PDM/projects/1363" },
          { name: "API Inventory Dashboard", url: "https://gtp.gilead.com/#/site/PDM/views/APIInventoryDashboard/APISummaryDashboard?:iid=1" },
          { name: "API Inventory with Exception Handling", url: "https://gtp.gilead.com/#/site/PDM/views/APIInventorywithExceptionHandling/InventorywEHD?:iid=1" },
          { name: "API Lot Restriction V1", url: "https://gtp.gilead.com/#/site/PDM/views/APIInventorywithExceptionHandling/InventorywEHD?:iid=1" },
          { name: "API Planning & Analytics Dashboards", url: "https://gtp.gilead.com/#/site/PDM/views/APIPlanningAnalyticsDashboards/Home?:iid=3" },
          { name: "ICN Map by Product and Country", url: "https://gtp.gilead.com/#/site/PDM/views/ICNMapbyProductandCountry_0/ICNMAPbyPRODUCTCOUNTRY?:iid=2" },
          { name: "Material Status Notification MSN", url: "https://gtp.gilead.com/#/site/PDM/views/MaterialStatusNotificationMSN/MaterialStatusNotification?:iid=5" },
          { name: "Planning Strategy Dashboard", url: "https://gtp.gilead.com/#/site/PDM/views/PlanningStrategyDashboard/PlanningStrategy?:iid=2%20" },
          { name: "Work Order Consumption Eligibility", url: "https://gtp.gilead.com/#/site/PDM/views/WorkOrderConsumptionEligibility/WorkOrderConsumptionEligibility?:iid=8" },
        ]
      }
    ]
  },
  {
    title: "CSCM",
    image: cscm,
    description: "Clinical Supply Chain Management is the process of distributing raw materials to pharmaceutical companies and then delivering final products to patients across the world.",
    isWide: true,
    groups: [
      {
        title: "CSCM Dashboards",
        links: [{ name: "CSCM Dashboards - Home Page", url: "https://gtp.gilead.com/#/site/PDM/views/CSCMDashboardsLandingPage/CSCMDashboards" }]
      },
      {
        title: "Inventory Forecast Analytics",
        links: [
          { name: "Inventory Forecast Analytics", url: "https://gtp.gilead.com/#/site/PDM/views/InventoryForecastAnalytics/InventoryTracker?:iid=3" },
          { name: "Commercial Inventory Forecast Analytics", url: "https://gtp.gilead.com/#/site/PDM/views/InventoryForecastAnalytics/CommercialInventoryTracker?:iid=5" },
          { name: "Demand Tracker", url: "https://gtp.gilead.com/#/site/PDM/views/InventoryForecastAnalytics/DemandTracker?:iid=6" },
          { name: "Lot Allocation", url: "https://gtp.gilead.com/#/site/PDM/views/InventoryForecastAnalytics/LotAllocation?:iid=1" },
          { name: "Labeling Details by Requested Date", url: "https://gtp.gilead.com/#/site/PDM/views/InventoryForecastAnalytics/LabelingDetailbyRequiredDate?:iid=2" },
          { name: "Labeling Details by Requested QA Release Date", url: "https://gtp.gilead.com/#/site/PDM/views/InventoryForecastAnalytics/LabelingDetailbyRequestedQAReleaseDate?:iid=4" },
          { name: "Labeling Details by Requested Expected Production Release Date", url: "https://gtp.gilead.com/#/site/PDM/views/InventoryForecastAnalytics/LabelingDetailbyExpectedReleaseDate?:iid=3" },
          { name: "Work Order Report", url: "https://gtp.gilead.com/#/site/PDM/views/InventoryForecastAnalytics/WorkOrderReport?:iid=5" },
          { name: "Production Forecast Report", url: "https://gtp.gilead.com/#/site/PDM/views/InventoryForecastAnalytics/ProductionForecast?:iid=4Production%20Forecast%20Report" },
          { name: "EBS Transfer from Commercial to Clinical", url: "https://gtp.gilead.com/#/site/PDM/views/InventoryForecastAnalytics/EBSTransfersfromCommercialtoClinicalOrgs?:iid=7" },
        ]
      },
      {
        title: "Logistics",
        links: [
          { name: "Logistics", url: "https://gtp.gilead.com/#/site/PDM/views/LogisticDashboard/Logistics?:iid=1" },
          { name: "Sales Order By Organization", url: "https://gtp.gilead.com/#/site/PDM/views/LogisticDashboard/SalesOrderByOrganization?:iid=2" },
          { name: "Sales Order by Storage Conditions", url: "https://gtp.gilead.com/#/site/PDM/views/LogisticDashboard/SalesOrderByStorageCondition?:iid=1Sales%20Order%20by%20Storage%20Conditions" },
          { name: "Sales Order by Countries", url: "https://gtp.gilead.com/#/site/PDM/views/LogisticDashboard/SalesOrderByCountries?:iid=6Sales%20Order%20by%20Countries" },
          { name: "Sales Order Detail Report", url: "https://gtp.gilead.com/#/site/PDM/views/LogisticDashboard/SalesOrderDetailReport?:iid=7" },
        ]
      },
      {
        title: "EBS On-Hand Inventory Analytics",
        links: [
          { name: "On-Hand Inventory", url: "https://gtp.gilead.com/#/site/PDM/views/EBSOn-HandInventoryAnalytics/On-HandInventory?:iid=1%201" },
          { name: "Outsourcing Management Product Report", url: "https://gtp.gilead.com/#/site/PDM/views/EBSOn-HandInventoryAnalytics/OutsourcingManagementProduct?:iid=2" },
          { name: "Product Distribution", url: "https://gtp.gilead.com/#/site/PDM/views/EBSOn-HandInventoryAnalytics/ProductDistribution?:iid=3" },
        ]
      },
      {
        title: "Additional Analytics",
        links: [
          { name: "CSCM IQS Analytics - MTR Report", url: "https://gtp.gilead.com/#/site/PDM/views/CSCMIQSAnalytics-MTRReport/CSCMIQSAnalytics-MTRReport?:iid=1%20" },
          { name: "IQS Multiple Active MSN Exception Report", url: "https://gtp.gilead.com/#/site/PDM/views/IQSExceptionDashboard/IQSMultipleActiveMSNsExceptionReport?:iid=1" },
          { name: "IQS Source Data Exception Report", url: "https://gtp.gilead.com/#/site/PDM/views/IQSExceptionDashboard/IQSSourceDataExceptionReport?:iid=2%20" },
          { name: "GILDA QP Dashboard", url: "https://gtp.gilead.com/#/site/PDM/views/GILDAQPDashboard/GILDAQPDashboard?:iid=1GILDA%20QP%20Dashboard" },
        ]
      }
    ]
  },
  {
    title: "Supply Chain Analytics",
    image: supply_chain,
    description: "Supply chain Analytics in clinical settings can be applied to improve forecasting, planning, and performance to track logistics, optimize operations, and make data driven decisions.",
    groups: [
      {
        title: "Dashboards",
        links: [{ name: "Supply Chain Analytics", url: "https://us-west-2.quicksight.aws.amazon.com/sn/dashboards/8c80982c-992c-43d6-ac78-0119dc0ecc8f" }]
      }
    ]
  },
  {
    title: "Cycle Time Report",
    image: cycle_time,
    description: "The Cycle Time Report dashboard allows you to measure cycle times for selected intervals and compare them against various attributes and metrics to analyze efficiency and identify bottlenecks.",
    groups: [
      {
        title: "Dashboards",
        links: [{ name: "Cycle Time Report", url: "https://us-west-2.quicksight.aws.amazon.com/sn/accounts/588674337868/dashboards/3871892f-d60b-440f-bd50-412c70858049?directory_alias=gilead-dev" }]
      }
    ]
  },
  {
    title: "SEIP",
    image: seip,
    description: "Single Echelon Inventory Planning is designed to meet functional requirements while accounting for fluctuating customer demand, forecast inaccuracies, and variability in lead times.",
    groups: [
      {
        title: "Dashboards",
        links: [{ name: "SEIP", url: "https://pdm.gilead.com/portal" }]
      }
    ]
  },
  {
    title: "Supply Chain Resilience",
    image: supply_res,
    description: "Supply Chain Resilience refers to the ability of a supply chain or organization to withstand disruptions, adapt quickly to unexpected challenges, and continue delivering critical products and services.",
    groups: [
      {
        title: "Dashboards",
        links: [{ name: "Supply Chain Resilience", url: "https://us-west-2.quicksight.aws.amazon.com/sn/account/gilead-dev/dashboards/3b23796b-15b8-45e0-b3b8-f9653f28c9f3/sheets/3b23796b-15b8-45e0-b3b8-f9653f28c9f3_291de253-169e-477a-859a-dddc28e2af10?state=QUFBQURtdGxlUzB4TlRZNE9UVTFOekkyS0dmUGlIUWVMWEJWRVpJQVRlXzNPZEQ5YS0xOWlFMzk1cS1XRXV4ZWlPaUZrSHdpYVQ2VFNNemlZSXlMZDN6b0lYQ0tMOWFpSXF1WEJ4cTYzUEtnZHVKY3MwM2ZmYmkzeWV4MzlUSU9NZjBWUk0xUmRBRXh0SzhKMD62TmZydk9KcjBZTnRXUHNzQzNrOTJQeS1yQ1BfMjU2Nm1rSlYzSTZ1N1dnYzRRbDBHZ3VyRXBVQzZvYkpJSXFpSEx3NFdZMGt5Y19VbjJOOWJ0b01lVXZwSDF0YndVZTZ4RXowVmVfdEg4" }]
      }
    ]
  },
  {
    title: "CMO Inventory Reconciliation",
    image: inventory,
    description: "A Contract Manufacturing Organization provides pharmaceutical manufacturing services on behalf of another company ensuring scalability, compliance, and timely delivery.",
    groups: [
      {
        title: "Dashboards",
        links: [{ name: "CMO Recon", url: "https://us-west-2.quicksight.aws.amazon.com/sn/account/gilead-prod/dashboards/4a5ac3de-9edd-4837-810c-357c8a1c269d" }]
      }
    ]
  },
  {
    title: "CARES Act",
    image: cares_act,
    description: "The CARES Act project focuses on supporting businesses, healthcare providers, and individuals through relief funding, regulatory flexibility, and reporting compliance.",
    groups: [
      {
        title: "Dashboards",
        links: [{ name: "CARES", url: "https://us-west-2.quicksight.aws.amazon.com/sn/account/gilead-prod/dashboards/29e9db52-e56f-42eb-8975-0ccc70678f11" }]
      }
    ]
  },
  {
    title: "Root Cause Analysis (RCA)",
    image: rca,
    description: "The RCA App is a centralized tool for capturing and analyzing issues across processes. It enables users to record incidents, investigate causes, assign corrective actions, and track progress.",
    groups: [
      {
        title: "Dashboards",
        links: [{ name: "RCA", url: "https://pdm-analytics-rca.gilead.com/" }]
      }
    ]
  },
  {
    title: "GTMS",
    image: gtms,
    description: "Gilead Transportation Management System refers to the management, control, and optimization of all transportation processes along the supply chain.",
    groups: [
      {
        title: "Dashboards",
        links: [{ name: "GTMS", url: "http://w1gtmsappprdn01:8080/" }]
      }
    ]
  }
];

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return SECTIONS_DATA;
    const query = searchQuery.toLowerCase();
    
    return SECTIONS_DATA.map(section => {
      // Filter the dashboard groups inside each section to match link name
      const matchedGroups = section.groups.map(group => {
        const filteredLinks = group.links.filter(link => 
          link.name.toLowerCase().includes(query)
        );
        return { ...group, links: filteredLinks };
      }).filter(group => group.links.length > 0);

      // Include section if name, description, or any child links match the string query
      if (
        section.title.toLowerCase().includes(query) ||
        section.description.toLowerCase().includes(query) ||
        matchedGroups.length > 0
      ) {
        return {
          ...section,
          groups: matchedGroups.length > 0 ? matchedGroups : section.groups
        };
      }
      return null;
    }).filter(Boolean);
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.05),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.04),transparent_30%),linear-gradient(to_bottom_right,#f8fafc,#eef2f7)] text-slate-800 antialiased font-sans">
      
      {/* Structural Header Block */}
      <header className="relative overflow-hidden border-b border-slate-800 bg-slate-900 shadow-md">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.15),transparent_50%)]" />
        <img
          src={header}
          alt="Banner Cover"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-10 mix-blend-overlay"
        />

        <div className="relative mx-auto max-w-[1920px] px-4 py-12 lg:px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-4xl">
              <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
                PDM Supply Chain Analytics
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">
                Unified enterprise portal providing secure, direct access to data systems spanning corporate forecasting, international logistics, itemized inventory, and distribution analytics.
              </p>
              
              {/* Dynamic Input bar filter */}
              <div className="mt-6 max-w-md">
                <div className="relative rounded-xl shadow-sm">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 pointer-events-none text-base">
                    ⌕
                  </span>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search systems or report names..."
                    className="block w-full rounded-xl border-0 bg-white/10 py-2.5 pl-9 pr-4 text-white placeholder-slate-400 ring-1 ring-inset ring-white/10 focus:bg-white focus:text-slate-900 focus:placeholder-slate-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm transition-all duration-200"
                  />
                </div>
              </div>
            </div>

            {/* Profile Block */}
            <div className="flex w-fit items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 shadow-xl backdrop-blur-md">
              <div className="relative">
                <img
                  src={abhishek}
                  alt="Abhishek Gupta"
                  loading="lazy"
                  className="h-14 w-14 rounded-full border-2 border-teal-500/30 object-cover shadow-inner"
                />
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-slate-900 bg-emerald-500" />
              </div>
              <div>
                <h3 className="text-base font-bold tracking-wide text-white">Abhishek Gupta</h3>
                <p className="text-xs font-medium text-slate-400">Director, IT Data Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Grid Workspace */}
      <main className="mx-auto max-w-[1920px] px-4 py-8 lg:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {filteredSections.length > 0 ? (
            filteredSections.map((section) => (
              <section
                key={section.title}
                className={`flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/40 shadow-sm transition-all duration-300 hover:shadow-lg ${
                  section.isWide ? "md:col-span-2" : ""
                }`}
              >
                <div className={`grid flex-1 ${section.isWide ? "lg:grid-cols-[300px_1fr]" : "lg:grid-cols-[240px_1fr]"}`}>
                  
                  {/* Aspect Locked Thumbnail Container Area */}
                  <div className="flex items-center justify-center border-b border-slate-100 bg-gradient-to-br from-slate-50 to-slate-100 p-4 lg:border-r lg:border-b-0">
                    <div className="h-full w-full overflow-hidden rounded-2xl border border-slate-200/60 shadow-xs">
                      <img
                        src={section.image}
                        alt={section.title}
                        loading="lazy"
                        className={`w-full object-cover transition-all duration-500 ${
                          section.isWide ? "h-[220px] lg:h-full" : "h-[160px] lg:h-full"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Descriptions block content elements */}
                  <div className="flex flex-col justify-between p-6">
                    <div>
                      <h2 className="text-[22px] font-bold tracking-tight text-slate-900">{section.title}</h2>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">{section.description}</p>
                    </div>

                    {/* Anchors Stack Collection */}
                    <div className="mt-6 border-t border-slate-100 pt-5 space-y-6">
                      {section.groups.map((group) => {
                        const showHeader = section.isWide || group.title !== "Dashboards";
                        
                        return (
                          <div key={group.title}>
                            {showHeader && (
                              <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                                {group.title}
                              </h4>
                            )}
                            <div className={`grid gap-3 sm:grid-cols-2 ${section.isWide ? "lg:grid-cols-3" : ""}`}>
                              {group.links.map((link) => (
                                <a
                                  key={link.url}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="group/link flex items-start gap-2.5 rounded-xl border border-slate-200/70 bg-white/90 p-3.5 transition-all duration-200 hover:border-teal-300 hover:bg-teal-50/40 hover:shadow-xs text-[14px] font-semibold text-slate-700 hover:text-teal-950"
                                >
                                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-white text-[11px] text-slate-400 transition-all duration-200 group-hover/link:border-teal-600 group-hover/link:bg-teal-600 group-hover/link:text-white">
                                    ↗
                                  </span>
                                  <span className="leading-tight">{link.name}</span>
                                </a>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                  </div>
                </div>
              </section>
            ))
          ) : (
            <div className="col-span-full py-16 text-center bg-white/50 rounded-3xl border border-dashed border-slate-300">
              <p className="text-base text-slate-500 font-medium">No dashboards found matching your search term.</p>
            </div>
          )}
        </div>
      </main>

      <footer className="border-t border-slate-200/80 bg-white/80 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 backdrop-blur-sm">
        Internal Data Engine Portal • PDM Supply Chain Analytics
      </footer>
    </div>
  );
}
