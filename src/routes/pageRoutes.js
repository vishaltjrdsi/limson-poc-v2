import Home from "../pages/Home";
import ProgramSettings from "../pages/ProgramSettings";
import ScreenSetup from "../pages/ScreenSetup";
import VendorRules from "../pages/VendorRules";
import WarehouseRules from "../pages/WarehouseRules";
import ListNavigation from "../pages/ListNavigation";
import MasterDataList from "../pages/MasterDataList";
import CanopyExports from "../pages/CanopyExports";
import InventoryAdjustment from "../pages/InventoryAdjustment";
import TxQtyAdjustment from "../pages/TxQtyAdjustment";
import UserSettings from "../pages/UserSettings";
import RolesManagement from "../pages/RolesManagement";
import BackupAccess from "../pages/BackupAccess";
import SpotRate from "../pages/SpotRate";

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
  "Backup Access": BackupAccess,
  "Spot Rate": SpotRate,
  "List Navigation": ListNavigation,
  "Master Data List": MasterDataList,
};

export default pageRoutes;
