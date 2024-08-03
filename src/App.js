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
import CompanyDocument from "./screens/Hrm/CompanyDocument";
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
import EditEmployee from "./screens/Hrm/EditEmployee";
import SetEmployeeSalary from "./screens/Hrm/SetEmployeeSalary";
import ViewPayslip from "./screens/Hrm/ViewPayslip";
import Award from "./screens/Hrm/Award";
import Transfer from "./screens/Hrm/Transfer";
import Resignation from "./screens/Hrm/Resignation";
import Trip from "./screens/Hrm/Trip";
import Promotion from "./screens/Hrm/Promotion";
import Compliants from "./screens/Hrm/Compliants";
import Warning from "./screens/Hrm/Warning";
import Termination from "./screens/Hrm/Termination";
import Annoucement from "./screens/Hrm/Annoucement";
import Holidays from "./screens/Hrm/Holidays";
import CompanyPolicy from "./screens/Hrm/CompanyPolicy";
import Document from "./screens/Hrm/Document";
import MonthlyAttendance from "./screens/Hrm/MonthlyAttendance";
import Leave from "./screens/Hrm/Leave";
import PayrollReport from "./screens/Hrm/PayrollReport";
import Customer from "./screens/Finance/Customer";
import ViewCustomer from "./screens/Finance/ViewCustomer";
import Vendor from "./screens/Finance/Vendor";
import Income from "./screens/Finance/Income";
import FinanceReport from "./screens/Finance/FinanceReport";
import FinanceAnalytics from "./screens/Finance/FinanceAnalytics";
import Expense from "./screens/Finance/Expense";
import Banking from "./screens/Finance/Banking";
import EditProposals from "./components/finance/EditProposals";
import ViewProposals from "./screens/Finance/ViewProposals";
import ViewInvoice from "./screens/Finance/ViewInvoice";
import EditProposal from "./screens/Finance/EditProposal";
import EditInvoice from "./screens/Finance/EditInvoice";
import InvoiceView from "./screens/Finance/InvoiceView";
import Account from "./screens/Finance/Account";
import ChartOfAccount from "./screens/Finance/ChartOfAccount";
import BankTransfer from "./screens/Finance/Transfer";
import Revenue from "./screens/Finance/Revenue";
import CreditNote from "./screens/Finance/CreditNote";
import Bill from "./screens/Finance/Bill";
import Payment from "./screens/Finance/Payment";
import DebitNote from "./screens/Finance/DebitNote";
import IncomeSummary from "./screens/Finance/IncomeSummary";
import TaxSummary from "./screens/Finance/TaxSummary";
import ExpenseSummary from "./screens/Finance/ExpenseSummary";
import CashFlow from "./screens/Finance/CashFlow";

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
              <Route path="/hrmreport" exact={true} element={<Report />}>
                <Route
                  path="/hrmreport/monthlyattendance"
                  exact={true}
                  element={<MonthlyAttendance />}
                />
                <Route
                  path="/hrmreport/leave"
                  exact={true}
                  element={<Leave />}
                />
                <Route
                  path="/hrmreport/payroll"
                  exact={true}
                  element={<PayrollReport />}
                />
              </Route>
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
              {/* ============>>>>>> eployeee */}
              <Route path="/employee" exact={true} element={<Employee />}>
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
                <Route
                  path="/employee/editemployee"
                  exact={true}
                  element={<EditEmployee />}
                />
                <Route
                  path="/employee/employeesalary"
                  exact={true}
                  element={<EmployeeSalary />}
                />
                <Route
                  path="/employee/setemployeesalary"
                  exact={true}
                  element={<SetEmployeeSalary />}
                />
                <Route
                  path="/employee/payslip"
                  exact={true}
                  element={<Payslip />}
                />
                <Route
                  path="/employee/viewpayslip"
                  exact={true}
                  element={<ViewPayslip />}
                />
                <Route
                  path="/employee/attendance"
                  exact={true}
                  element={<Attendance />}
                />
                <Route
                  path="/employee/manageleave"
                  exact={true}
                  element={<ManageLeave />}
                />
              </Route>
              {/*=========>>>>>> End of employee management */}
              {/*==============>>>>>>> Begining of HR Admin */}
              <Route path="/hradmin" exact={true} element={<HrAdmin />}>
                <Route path="/hradmin/award" exact={true} element={<Award />} />
                <Route
                  path="/hradmin/transfer"
                  exact={true}
                  element={<Transfer />}
                />
                <Route
                  path="/hradmin/resignation"
                  exact={true}
                  element={<Resignation />}
                />
                <Route path="/hradmin/trip" exact={true} element={<Trip />} />
                <Route
                  path="/hradmin/promotion"
                  exact={true}
                  element={<Promotion />}
                />
                <Route
                  path="/hradmin/compliant"
                  exact={true}
                  element={<Compliants />}
                />
                <Route
                  path="/hradmin/warning"
                  exact={true}
                  element={<Warning />}
                />
                <Route
                  path="/hradmin/termination"
                  exact={true}
                  element={<Termination />}
                />
                <Route
                  path="/hradmin/annoucement"
                  exact={true}
                  element={<Annoucement />}
                />
                <Route
                  path="/hradmin/holidays"
                  exact={true}
                  element={<Holidays />}
                />
              </Route>
              {/*==============>>>>>>> End of HR Admin */}
              <Route
                path="/companyanddocument"
                exact={true}
                element={<CompanyDocument />}
              >
                <Route
                  path="/companyanddocument/companypolicy"
                  exact={true}
                  element={<CompanyPolicy />}
                />
                <Route
                  path="/companyanddocument/document"
                  exact={true}
                  element={<Document />}
                />
              </Route>
              <Route
                path="/hrmanalytics"
                exact={true}
                element={<Analytics />}
              />
              {/* //================>>>>>>>>>>>>>>>>>>>> Finance and accounting */}
              <Route path="/customers" exact={true} element={<Customer />} />
              <Route
                path="/viewcustomers"
                exact={true}
                element={<ViewCustomer />}
              />{" "}
              <Route
                path="/customers/editproposals"
                exact={true}
                element={<EditProposal />}
              />
              <Route
                path="/customers/viewproposals"
                exact={true}
                element={<ViewProposals />}
              />
              <Route
                path="/customers/viewinvoice"
                exact={true}
                element={<ViewInvoice />}
              />
              <Route
                path="/customers/editinvoice"
                exact={true}
                element={<EditInvoice />}
              />
              <Route
                path="/customers/invoiceview"
                exact={true}
                element={<InvoiceView />}
              />
              <Route path="/vendor" exact={true} element={<Vendor />} />
              <Route path="/income" exact={true} element={<Income />}>
                <Route
                  path="/income/revenue"
                  exact={true}
                  element={<Revenue />}
                />
                <Route
                  path="/income/creitnote"
                  exact={true}
                  element={<CreditNote />}
                />
              </Route>
              <Route
                path="/financereport"
                exact={true}
                element={<FinanceReport />}
              >
               <Route
                path="/financereport/incomesummary"
                exact={true}
                element={<IncomeSummary />}
              />
               <Route
                path="/financereport/taxsummary"
                exact={true}
                element={<TaxSummary />}
              />
               <Route
                path="/financereport/expensesummary"
                exact={true}
                element={<ExpenseSummary />}
              />
               <Route
                path="/financereport/cashflow"
                exact={true}
                element={<CashFlow />}
              />
              </Route>
              <Route
                path="/financeanalytics"
                exact={true}
                element={<FinanceAnalytics />}
              />
              <Route path="/expense" exact={true} element={<Expense />}>
                <Route path="/expense/bill" exact={true} element={<Bill />} />
                <Route
                  path="/expense/payment"
                  exact={true}
                  element={<Payment />}
                />
                <Route
                  path="/expense/debitnote"
                  exact={true}
                  element={<DebitNote />}
                />
              </Route>
              <Route path="/banking" exact={true} element={<Banking />}>
                <Route
                  path="/banking/account"
                  exact={true}
                  element={<Account />}
                />
                <Route
                  path="/banking/chartofaccount"
                  exact={true}
                  element={<ChartOfAccount />}
                />
                <Route
                  path="/banking/transfer"
                  exact={true}
                  element={<BankTransfer />}
                />
              </Route>
            </Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
