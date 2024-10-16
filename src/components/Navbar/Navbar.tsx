import NavItem from "./NavItem.tsx";
import mainLogo from "../../assets/icons/main-logo.svg";
import dashboardWhite from "../../assets/icons/dashboard-white.svg";
import dashboard from "../../assets/icons/dashboard.svg";
import entry from "../../assets/icons/entry.svg";
import report from "../../assets/icons/report.svg";
import setting from "../../assets/icons/setting.svg";
import account from "../../assets/icons/account.svg";

const Navbar = () => (
    <div className="top-0 left-0 text-left w-1/5 bg-white h-screen p-8">
	<img alt="" src={mainLogo} className="mx-auto mb-14 w-64"/>
	<div className="flex flex-col gap-3">
	    <NavItem to="/" activeImage={dashboardWhite} image={dashboard} title="Dashboard" active={true}></NavItem>
	    <NavItem to="/entry" activeImage={dashboardWhite} image={entry} title="Entry"></NavItem>
	    <NavItem to="/report" activeImage={dashboardWhite} image={report} title="Report"></NavItem>
	    <NavItem to="/setting" activeImage={dashboardWhite} image={setting} title="Setting"></NavItem>
	    <NavItem to="/account" activeImage={dashboardWhite} image={account} title="Account"></NavItem>
	</div>
    </div>
)

export default Navbar