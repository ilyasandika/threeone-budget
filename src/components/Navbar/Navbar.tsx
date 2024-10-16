import NavItem from "./NavItem.tsx";
import mainLogo from "../../assets/icons/main-logo.svg";
import dashboardWhite from "../../assets/icons/dashboard-white.svg";
import dashboard from "../../assets/icons/dashboard.svg";
import entry from "../../assets/icons/entry.svg";
import report from "../../assets/icons/report.svg";
import setting from "../../assets/icons/setting.svg";
import account from "../../assets/icons/account.svg";
import {useLocation} from "react-router-dom";



const Navbar = () => {
    const location = useLocation();
    const firstPath = location.pathname.split('/').filter(Boolean)[0];

    const isActive = (path: string) => {
	return firstPath == path;
    }

    return (
	<div className="fixed top-0 left-0 text-left w-72 bg-white h-screen p-8 border-r z-10">
	    <img alt="" src={mainLogo} className="mx-auto mb-14 w-64"/>
	    <div className="flex flex-col gap-3">
		<NavItem to="/dashboard" activeImage={dashboardWhite} image={dashboard} title="Dashboard" active={isActive("dashboard")}/>
		<NavItem to="/entry" activeImage={dashboardWhite} image={entry} title="Entry" active={isActive("entry")}/>
		<NavItem to="/report" activeImage={dashboardWhite} image={report} title="Report" active={isActive("report")}/>
		<NavItem to="/setting" activeImage={dashboardWhite} image={setting} title="Setting" active={isActive("setting")}/>
		<NavItem to="/account" activeImage={dashboardWhite} image={account} title="Account" active={isActive("account")}/>
	    </div>
	</div>
    )
}

export default Navbar