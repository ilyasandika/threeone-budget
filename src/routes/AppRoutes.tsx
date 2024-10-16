import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard.tsx";
import Report from "../pages/Report.tsx";

const AppRoutes = () => {
    return (
	<Routes>
	    <Route path="/" element={<Navigate to="/dashboard" />}></Route>
	    <Route path="/dashboard/*" element={<Dashboard/>}></Route>
	    <Route path="/report/*" element={<Report/>}></Route>
	</Routes>
    )
}

export default AppRoutes