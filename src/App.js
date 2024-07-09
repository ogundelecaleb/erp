import "./App.css";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Login from "./authScreen/Login";
import SignUp from "./authScreen/SignUp";
import ForgotPassword from "./authScreen/ForgotPassword";
import CheckMail from "./authScreen/CheckMail";
import CreateNewPass from "./authScreen/CreateNewPass";
import ChangePassSuccess from "./authScreen/ChangepassSuccess";
import Projects from "./screens/Project/Projects";
import Layout from "./containers/Layout";
import Home from "./screens/Home";
import OverView from "./screens/OverView";
import ProjectAnalytics from "./screens/Project/ProjectAnalytics";
import ProjectReport from "./screens/Project/ProjectReport";
import ProjectDetails from "./screens/Project/ProjectDetails";
import GanttChat from "./screens/Project/GanttChat";
import BugReport from "./screens/Project/BugReport";
import ReportDetails from "./screens/Project/ReportDetails";
import ProjectSetup from "./screens/Project/ProjectSetup";
import User from "./screens/User/User";
import Role from "./screens/User/Role";
import LogHistory from "./screens/User/LogHistory";
import UpdatePermission from "./screens/User/UpdatePermission";
import CrmLead from "./screens/Crm/CrmLead";
import CrmDeal from "./screens/Crm/CrmDeal";
import CrmAnalytics from "./screens/Crm/CrmAnalytics";
import CrmReport from "./screens/Crm/CrmReport";
import CrmSetup from "./screens/Crm/CrmSetup";
import InventorySystemSetup from "./screens/Inventory/SystemSetup";
import ProductStock from "./screens/Inventory/ProductStock";
import InventoryManagement from "./screens/Inventory/InventoryManagement";
import CreateItem from "./screens/Inventory/CreateItem";
import ItemsDetails from "./screens/Inventory/ItemsDetails";
import EditItem from "./screens/Inventory/EditItem";
import Warehouse from "./screens/Inventory/Warehouse";
import Purchasedetails from "./screens/Inventory/Purchasedetails";
import Procurement from "./screens/Inventory/Procurement";
import Warehousestock from "./screens/Inventory/Warehousestock";
import CreatePurchase from "./screens/Inventory/CreatePurchase";
import ViewWarehouse from "./screens/Inventory/WarehouseTransfer";
import WarehouseTransfer from "./screens/Inventory/WarehouseTransfer";
import ReportInventory from "./screens/Inventory/ReportInventory";
import Analytics from "./screens/Hrm/Analytics";
import Attendance from "./screens/Hrm/Attendance";
import CompanyDocument from "./screens/Hrm/Company&Document";
import Employee from "./screens/Hrm/Employee";
import EmployeeSalary from "./screens/Hrm/EmployeeSalary";
import HrAdmin from "./screens/Hrm/HrAdmin";
import ManageEmployee from "./screens/Hrm/ManageEmployee";
import ManageEmployeeSalary from "./screens/Hrm/ManageEmployeeSalary";
import ManageLeave from "./screens/Hrm/ManageLeave";
import Payslip from "./screens/Hrm/Payslip";
import Report from "./screens/Hrm/Report";
import SetUp from "./screens/Hrm/SetUp";
import CreateEmployee from "./screens/Hrm/CreateEmployee";
import ViewEmployee from "./screens/Hrm/ViewEmployee";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
    },
  },
});

function App() {
  return (
    <div className="">
      <SnackbarProvider
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      />
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route path="/forgot-password" component={ForgotPassword} />

            {/* Place new routes over this */}
            <Route element={<Layout />}>
              <Route path="/" exact={true} element={<Home />} />
              <Route path="/overview" exact={true} element={<OverView />} />
              <Route path="/project" exact={true} element={<Projects />} />
              <Route
                path="/projectanalytics"
                exact={true}
                element={<ProjectAnalytics />}
              />
              <Route
                path="/projectreport"
                exact={true}
                element={<ProjectReport />}
              />
              <Route
                path="/projectsetup"
                exact={true}
                element={<ProjectSetup />}
              />
              <Route path="/finance" exact={true} element={<Projects />} />
              <Route path="/analytics" exact={true} element={<Projects />} />
              <Route
                path="/projectdetails"
                exact={true}
                element={<ProjectDetails />}
              />
              <Route path="/ganttchart" exact={true} element={<GanttChat />} />
              <Route path="/bugreport" exact={true} element={<BugReport />} />
              <Route
                path="/reportdetails"
                exact={true}
                element={<ReportDetails />}
              />
              <Route path="/usermanagement" exact={true} element={<User />} />
              <Route path="/role" exact={true} element={<Role />} />
              <Route path="/loghistory" exact={true} element={<LogHistory />} />
              <Route
                path="/updatepermission"
                exact={true}
                element={<UpdatePermission />}
              />
              <Route path="/crmlead" exact={true} element={<CrmLead />} />
              <Route path="/crmdeal" exact={true} element={<CrmDeal />} />
              <Route
                path="/crmanalytics"
                exact={true}
                element={<CrmAnalytics />}
              />
              <Route path="/crmreport" exact={true} element={<CrmReport />} />
              <Route path="/crmsetup" exact={true} element={<CrmSetup />} />
              <Route
                path="/inventorysetup"
                exact={true}
                element={<InventorySystemSetup />}
              />
              <Route
                path="/productstock"
                exact={true}
                element={<ProductStock />}
              />
              <Route
                path="/inventorymanagement"
                exact={true}
                element={<InventoryManagement />}
              />
              <Route path="/createitem" exact={true} element={<CreateItem />} />
              <Route
                path="/itemdetails"
                exact={true}
                element={<ItemsDetails />}
              />
              <Route path="/edititem" exact={true} element={<EditItem />} />
              <Route path="/warehouse" exact={true} element={<Warehouse />} />
              <Route
                path="/purchasedetails"
                exact={true}
                element={<Purchasedetails />}
              />
              <Route
                path="/procurement"
                exact={true}
                element={<Procurement />}
              />
              <Route
                path="/warehousestock"
                exact={true}
                element={<Warehousestock />}
              />
              <Route
                path="/createpurchase"
                exact={true}
                element={<CreatePurchase />}
              />
              <Route
                path="/warehousetransfer"
                exact={true}
                element={<WarehouseTransfer />}
              />
              <Route
                path="/inventoryreport"
                exact={true}
                element={<ReportInventory />}
              />
              <Route path="/hrmsetup" exact={true} element={<SetUp />} />

              <Route path="/hrmreport" exact={true} element={<Report />} />
              <Route path="/payslip" exact={true} element={<Payslip />} />

              <Route
                path="/manageleave"
                exact={true}
                element={<ManageLeave />}
              />
              <Route
                path="/manageemployeesalary"
                exact={true}
                element={<ManageEmployeeSalary />}
              />
             
              <Route path="/hradmin" exact={true} element={<HrAdmin />} />
              <Route
                path="/employeesalary"
                exact={true}
                element={<EmployeeSalary />}
              />

              {/* ============>>>>>> eployeee */}
              <Route path="/employee" exact={true} element={<Employee />} >
              <Route
                path="/employee/manageemployee"
                exact={true}
                element={<ManageEmployee />}
              />
              <Route
                path="/employee/createemployee"
                exact={true}
                element={<CreateEmployee />}
              />
                <Route
                path="/employee/viewemployee"
                exact={true}
                element={<ViewEmployee />}
              />
              </Route>
              <Route
                path="/companyanddocument"
                exact={true}
                element={<CompanyDocument />}
              />
              <Route path="/attendance" exact={true} element={<Attendance />} />
              <Route
                path="/hrmanalytics"
                exact={true}
                element={<Analytics />}
              />

            </Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
