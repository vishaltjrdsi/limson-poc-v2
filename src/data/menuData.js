import { ROUTES } from "../routes/routeConstants";

const menuData = {
  APPS: [
    {
      title: "CORE WORKFLOWS",
      items: [
        { label: "Purchase Orders (Pending)", path: "#" },
        { label: "Sales Orders (Pending)", path: "#" },
        { label: "Inventory Control (Pending)", path: "#" },
        { label: "Repack Order (InProgress)", path: "#" },
        { label: "Transfer Order", path: ROUTES.TRANSFER_ORDER,},
        { label: "Pending Orders", path: ROUTES.PENDING_ORDERS },
      ],
    },
    {
      title: "MASTER DATA",
      items: [
        { label: "Item Maintainance", path: ROUTES.ITEM_MAINTENANCE },
        { label: "Business Partners", path: ROUTES.BUSINESS_PARTNERS },
      ],
    },
  ],

  REPORTS: [
  {
    title: "REPORTS",
    items: [
      {
        label: "Sales",
        path: ROUTES.SALES_REPORTS,
      },
      {
        label: "Purchasing",
        path: ROUTES.PURCHASING_REPORTS,
      },
      {
        label: "Inventory",
        path: ROUTES.INVENTORY_REPORTS,
      },
      {
        label: "Items & Contacts",
        path: ROUTES.ITEMS_CONTACTS_REPORTS,
      },
    ],
  },
],

  ADMIN: [
    {
      title: "CONFIGURATION",
      items: [
        {
          label: "Program Settings",
          path: ROUTES.PROGRAM_SETTINGS,
        },
        {
          label: "Screen Setup",
          path: ROUTES.SCREEN_SETUP,
        },
        {
          label: "Vendor Rules",
          path: ROUTES.VENDOR_RULES,
        },
        {
          label: "Warehouse Rules",
          path: ROUTES.WAREHOUSE_RULES,
        },
      ],
    },

    {
      title: "MASTER DATA",
      items: [
        {
          label: "List Navigation",
          path: ROUTES.LIST_NAVIGATION,
        },
        {
          label: "Canopy Exports",
          path: ROUTES.CANOPY_EXPORTS,
        },
      ],
    },

    {
      title: "USERS & ROLES",
      items: [
        {
          label: "User Settings",
          path: ROUTES.USER_SETTINGS,
        },
        {
          label: "Roles",
          path: ROUTES.ROLES,
        },
        {
          label: "Backup Access",
          path: ROUTES.BACKUP_ACCESS,
        },
      ],
    },

    {
      title: "ADJUSTMENTS",
      items: [
        {
          label: "Inventory Adjustments",
          path: ROUTES.INVENTORY_ADJUSTMENT,
        },
        {
          label: "TX Qty Adjustment",
          path: ROUTES.TX_QTY_ADJUSTMENT,
        },
      ],
    },
  ],

  TOOLS: [
    {
      title: "SYSTEM TOOLS",
      items: [
        {
          label: "Spot Rate",
          path: ROUTES.SPOT_RATE,
        },
        {
          label: "Fiscal Calendar",
          path: ROUTES.FISCAL_CALENDAR,
        },
        {
          label: "EDI Settings",
          path: ROUTES.EDI_SETTINGS,
        },
        {
          label: "Unit Of Measure",
          path: ROUTES.UNIT_OF_MEASURE,
        },
        {
          label: "Pricing Mismatch",
          path: ROUTES.PRICING_MISMATCH,
        },
      ],
    },
  ],
};

export default menuData;