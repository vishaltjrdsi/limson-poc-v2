import Home from "../pages/Home/Home";
import ProgramSettings from "../pages/ProgramSettings/ProgramSettings";
import ScreenSetup from "../pages/ScreenSetup/ScreenSetup";
import VendorRules from "../pages/VendorRules/VendorRules";
import WarehouseRules from "../pages/WarehouseRules/WarehouseRules";
import ListNavigation from "../pages/ListNavigation/ListNavigation";
import MasterDataList from "../pages/MasterDataList/MasterDataList";
import CanopyExports from "../pages/CanopyExports/CanopyExports";
import InventoryAdjustment from "../pages/InventoryAdjustment/InventoryAdjustment";
import TxQtyAdjustment from "../pages/TxQtyAdjustment/TxQtyAdjustment";
import UserSettings from "../pages/UserSettings/UserSettings";
import RolesManagement from "../pages/RolesManagement/RolesManagement";

const pageRoutes = {
  HOME: Home,

  "Program Settings": ProgramSettings,
  "Screen Setup": ScreenSetup,
  "Vendor Rules": VendorRules,
  "Warehouse Rules": WarehouseRules,
  "Canopy Exports": CanopyExports,
  "Inventory Adjustments": InventoryAdjustment,
  "TX Qty Adjustment": TxQtyAdjustment,
  "User Settings": UserSettings,
  "Roles": RolesManagement,
  // "Backup Access": BackupAccess,
  "List Navigation": ListNavigation,
  "Master Data List": MasterDataList,
};

export default pageRoutes;
