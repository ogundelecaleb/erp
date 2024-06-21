import "./App.css";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
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

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/forgot-password" component={ForgotPassword} />

          {/* Place new routes over this */}
          <Route  element={<Layout />}>
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/overview" exact={true} element={<OverView />} />
            <Route path="/project" exact={true} element={<Projects />} />
            <Route path="/projectanalytics" exact={true} element={<ProjectAnalytics />} />
            <Route path="/projectreport" exact={true} element={<ProjectReport />} />
            <Route path="/projectsetup" exact={true} element={<ProjectSetup />} />
            <Route path="/finance" exact={true} element={<Projects />} />
            <Route path="/analytics" exact={true} element={<Projects />} />
            <Route path="/projectdetails" exact={true} element={<ProjectDetails />} />
            <Route path="/ganttchart" exact={true} element={<GanttChat />} />
            <Route path="/bugreport" exact={true} element={<BugReport />} />
            <Route path="/reportdetails" exact={true} element={<ReportDetails />} />
            
          </Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
