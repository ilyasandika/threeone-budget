import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard.tsx";
import Report from "../pages/Report.tsx";
import Entry from "../pages/Entry.tsx";

const AppRoutes = () => {
    return (
	<Routes>
	    <Route path="/" element={<Navigate to="/dashboard" />}></Route>
	    <Route path="/dashboard/*" element={<Dashboard/>}></Route>
	    <Route path="/report/*" element={<Report/>}></Route>
	    <Route path="/entry/*" element={<Entry/>}></Route>
	</Routes>
    )
}

export default AppRoutes