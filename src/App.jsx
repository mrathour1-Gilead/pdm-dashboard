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

export default function App() {
  const sections = [
    {
      title: "Raw Material Forecasting",
      image: raw_material,
      description:
        "Raw Material Forecasting dashboard to track inventory levels, supplier performance, procurement costs, and demand forecasting.",
      dashboards: [
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
    {
      title: "BMS",
      image: bms,
      description:
        "Bulk Management Services refer to the procurement, handling, storage, and distribution of large quantities and medical supplies required for drug manufacturing.",
      dashboards: [
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
    {
      title: "Demand Planning",
      image: demand_planning,
      description:
        "Demand Planning in clinical research involves analyzing historical data, understanding patient recruitment trends, and considering external factors that may impact the demand for study materials.",
      dashboards: [
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
    {
      title: "SCV Global",
      image: scv,
      description:
        "SCV Global showing stock levels, stock value levels, stock value lead time, turnover rates and backorder rates and inventory distribution.",
      dashboards: [
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
    {
      title: "CSCM",
      image: cscm,
      description:
        "Clinical Supply Chain Management is the process of distributing raw materials to pharmaceutical companies and then delivering final products to patients across the world.",
      children: [
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
              url: "https://gtp.gilead.com/#/site/PDM/views/InventoryForecastAnalytics/ProductionForecast?:iid=4Production%20Forecast%20Report",
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
              url: "https://gtp.gilead.com/#/site/PDM/views/LogisticDashboard/SalesOrderByStorageCondition?:iid=1Sales%20Order%20by%20Storage%20Conditions",
            },
            {
              name: "Sales Order by Countries",
              url: "https://gtp.gilead.com/#/site/PDM/views/LogisticDashboard/SalesOrderByCountries?:iid=6Sales%20Order%20by%20Countries",
            },
            {
              name: "Sales Order Detail Report",
              url: "https://gtp.gilead.com/#/site/PDM/views/LogisticDashboard/SalesOrderDetailReport?:iid=7",
            },
          ],
        },
        {
          title: "EBS On-Hand Inventory Analytics ",
          links: [
            {
              name: "On-Hand Inventory",
              url: "https://gtp.gilead.com/#/site/PDM/views/EBSOn-HandInventoryAnalytics/On-HandInventory?:iid=1%201",
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
              url: "https://gtp.gilead.com/#/site/PDM/views/CSCMIQSAnalytics-MTRReport/CSCMIQSAnalytics-MTRReport?:iid=1%20",
            },
            {
              name: "IQS Multiple Active MSN Exception Report",
              url: "https://gtp.gilead.com/#/site/PDM/views/IQSExceptionDashboard/IQSMultipleActiveMSNsExceptionReport?:iid=1",
            },
            {
              name: "IQS Source Data Exception Report",
              url: "https://gtp.gilead.com/#/site/PDM/views/IQSExceptionDashboard/IQSSourceDataExceptionReport?:iid=2%20",
            },
            {
              name: "GILDA QP Dashboard",
              url: "https://gtp.gilead.com/#/site/PDM/views/GILDAQPDashboard/GILDAQPDashboard?:iid=1GILDA%20QP%20Dashboard",
            },
          ],
        },
      ],
    },
    {
      title: "Supply Chain Analytics",
      image: supply_chain,
      description:
        "Supply chain Analytics in clinical settings can be applied to improve forecasting, planning, and performance to track logistics, optimize operations, and make data driven decisions.",
      dashboards: [
        {
          name: "Supply Chain Analytics",
          url: "https://us-west-2.quicksight.aws.amazon.com/sn/dashboards/8c80982c-992c-43d6-ac78-0119dc0ecc8f",
        },
      ],
    },
    {
      title: "Cycle Time Report",
      image: cycle_time,
      description:
        "The Cycle Time Report dashboard allows you to measure cycle times for selected intervals and compare them against various attributes and metrics to analyze efficiency and identify bottlenecks.",
      dashboards: [
        {
          name: "Cycle Time Report",
          url: "https://us-west-2.quicksight.aws.amazon.com/sn/accounts/588674337868/dashboards/3871892f-d60b-440f-bd50-412c70858049?directory_alias=gilead-dev",
        },
      ],
    },
    {
      title: "SEIP",
      image: seip,
      description:
        "Single Echelon Inventory Planning is designed to meet functional requirements while accounting for fluctuating customer demand, forecast inaccuracies, and variability in lead times.",
      dashboards: [{ name: "SEIP", url: "https://pdm.gilead.com/portal" }],
    },
    {
      title: "Supply Chain Resilience",
      image: supply_res,
      description:
        "Supply Chain Resilience refers to the ability of a supply chain or organization to withstand disruptions, adapt quickly to unexpected challenges, and continue delivering critical products and services.",
      dashboards: [
        {
          name: "Supply Chain Resilience",
          url: "https://us-west-2.quicksight.aws.amazon.com/sn/account/gilead-dev/dashboards/3b23796b-15b8-45e0-b3b8-f9653f28c9f3/sheets/3b23796b-15b8-45e0-b3b8-f9653f28c9f3_291de253-169e-477a-859a-dddc28e2af10?state=QUFBQURtdGxlUzB4TlRZNE9UVTFOekkyS0dmUGlIUWVMWEJWRVpJQVRlXzNPZEQ5YS0xOWlFMzk1cS1XRXV4ZWlPaUZrSHdpYVQ2VFNNemlZSXlMZDN6b0lYQ0tMOWFpSXF1WEJ4cTYzUEtnZHVKY3MwM2ZmYmkzeWV4MzlUSU9NZjBWUk0xUmRBRFh0SzhKMDY2TmZydk9KcjBZTnRXUHNzQzNrOTJQeS1yQ1BfMjU2Nm1rSlYzSTZ1N1dnYzRRbDBHZ3VyRXBVQzZvYkpJSXFpSEx3NFdZMGt5Y19VbjJOOWJ0b01lVXZwSDF0YndVZTZ4RXowVmVfdEg4",
        },
      ],
    },
    {
      title: "CMO Inventory Reconciliation",
      image: inventory,
      description:
        "A Contract Manufacturing Organization provides pharmaceutical manufacturing services on behalf of another company ensuring scalability, compliance, and timely delivery.",
      dashboards: [
        {
          name: "CMO Recon",
          url: "https://us-west-2.quicksight.aws.amazon.com/sn/account/gilead-prod/dashboards/4a5ac3de-9edd-4837-810c-357c8a1c269d",
        },
      ],
    },
    {
      title: "CARES Act",
      image: cares_act,
      description:
        "The CARES Act project focuses on supporting businesses, healthcare providers, and individuals through relief funding, regulatory flexibility, and reporting compliance.",
      dashboards: [
        {
          name: "CARES",
          url: "https://us-west-2.quicksight.aws.amazon.com/sn/account/gilead-prod/dashboards/29e9db52-e56f-42eb-8975-0ccc70678f11",
        },
      ],
    },
    {
      title: "Root Cause Analysis (RCA)",
      image: rca,
      description:
        "The RCA App is a centralized tool for capturing and analyzing issues across processes. It enables users to record incidents, investigate causes, assign corrective actions, and track progress.",
      dashboards: [
        { name: "RCA", url: "https://pdm-analytics-rca.gilead.com/" },
      ],
    },
    {
      title: "GTMS",
      image: gtms,
      description:
        "Gilead Transportation Management System refers to the management, control, and optimization of all transportation processes along the supply chain.",
      dashboards: [{ name: "GTMS", url: "http://w1gtmsappprdn01:8080/" }],
    },
  ];

  const renderLink = (dashboard, extraClass = "") => (
    <a
      key={dashboard.name}
      href={dashboard.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center gap-3 text-base font-medium text-slate-700 transition hover:text-teal-700 ${extraClass}`}
    >
      <span className="text-teal-600 transition-transform duration-200 group-hover:translate-x-1">
        ↗
      </span>

      <span className="border-b border-transparent transition-all duration-200 group-hover:border-teal-600">
        {dashboard.name}
      </span>
    </a>
  );

  return (
    <div className="min-h-screen bg-[#f6f8fb] text-slate-800">
      <header className="relative overflow-hidden bg-[#0f172a]">
        <img
          src={header}
          alt="Supply Chain"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />

        <div className="relative mx-auto max-w-[1700px] px-6 py-8 lg:px-10 lg:py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-4xl flex-1">
              <h1 className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
                PDM Supply Chain Analytics
              </h1>

              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-200">
                Centralized dashboard portal for forecasting, logistics,
                inventory visibility, transportation, and operational analytics.
              </p>
            </div>

            <div className="flex w-fit items-center gap-4 rounded-xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur">
              <img
                src={abhishek}
                alt="Abhishek Gupta"
                className="h-16 w-16 rounded-full border-2 border-white/20 object-cover"
              />

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Abhishek Gupta
                </h3>

                <p className="text-sm text-slate-300">
                  Director, IT Data Engineering
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-[1700px] gap-6 px-6 py-8 md:grid-cols-2 lg:px-10 lg:py-10">
        {sections.map((section) => (
          <section
            key={section.title}
            className={`overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 ${
              section.title === "CSCM" ? "md:col-span-2" : ""
            }`}
          >
            <div
              className={
                section.title !== "CSCM"
                  ? "grid items-center gap-6 lg:grid-cols-[260px_1fr]"
                  : ""
              }
            >
              <div className={section.title !== "CSCM" ? "p-4" : ""}>
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={section.image}
                    alt={section.title}
                    className={`w-full object-cover ${
                      section.title === "CSCM"
                        ? "h-[240px]"
                        : "h-[180px] object-center"
                    }`}
                  />
                </div>
              </div>

              <div className="p-5">
                <h2 className="text-2xl font-bold text-slate-900">
                  {section.title}
                </h2>

                <div className="mt-3 h-1 w-20 rounded-full bg-teal-500" />

                <p className="mt-4 max-w-3xl text-[15px] leading-6 text-slate-600">
                  {section.description}
                </p>

                <div className="mt-5 space-y-3">
                  {section.title === "CSCM" ? (
                    <div className="space-y-6">
                      {section.children.map((group) => (
                        <div key={group.title}>
                          <h3 className="mb-3 text-lg font-semibold text-slate-900">
                            {group.title}
                          </h3>

                          <div className="grid gap-3 sm:grid-cols-2">
                            {group.links.map((link) =>
                              renderLink(link, "py-1"),
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    (section.title === "SCV Global"
                      ? section.dashboards.slice(0, 5)
                      : section.dashboards
                    ).map((dashboard) => renderLink(dashboard))
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>

      <footer className="border-t border-slate-200 bg-white py-6 text-center text-sm text-slate-500">
        Internal Analytics Portal • PDM Supply Chain Analytics
      </footer>
    </div>
  );
}
