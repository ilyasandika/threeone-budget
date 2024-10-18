import NavItem from "./NavItem.tsx";
import mainLogo from "../../assets/icons/main-logo.svg";
import dashboardWhite from "../../assets/icons/dashboard-white.svg";
import dashboard from "../../assets/icons/dashboard.svg";
import entry from "../../assets/icons/entry.svg";
import report from "../../assets/icons/report.svg";
import setting from "../../assets/icons/setting.svg";
import account from "../../assets/icons/account.svg";
import { useLocation } from "react-router-dom";
import hamburgerClose from "../../assets/icons/hamburger-close.svg";

interface NavbarProps {
    isOpen: boolean;
    openNavbar: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, openNavbar }) => {
    const location = useLocation();
    const firstPath = location.pathname.split('/').filter(Boolean)[0];

    const isActive = (path: string) => firstPath === path;

    return (
	<div
	    className={`fixed top-0 xl:left-0 w-72 h-screen bg-white p-8 border-r z-20 transform transition-transform duration-300 ease-in-out
                        ${isOpen ? 'translate-x-0' : '-translate-x-full'} xl:translate-x-0`}
	>
	    <button
		className="text-right block xl:hidden w-full"
		onClick={() => openNavbar(false)}
	    >
		<img
		    src={hamburgerClose}
		    alt="Hamburger Menu"
		    className="inline xl:hidden font-medium w-4 cursor-pointer"
		/>
	    </button>
	    <img alt="Main Logo" src={mainLogo} className="mx-auto mb-14 w-64"/>
	    <div className="flex flex-col gap-3">
		<NavItem onClick={() => openNavbar(false)} to="/dashboard" activeImage={dashboardWhite} image={dashboard} title="Dashboard" active={isActive("dashboard")}/>
		<NavItem onClick={()=>openNavbar(false)} to="/entry" activeImage={dashboardWhite} image={entry} title="Entry" active={isActive("entry")} />
		<NavItem onClick={()=>openNavbar(false)} to="/report" activeImage={dashboardWhite} image={report} title="Report" active={isActive("report")} />
		<NavItem onClick={()=>openNavbar(false)} to="/setting" activeImage={dashboardWhite} image={setting} title="Setting" active={isActive("setting")} />
		<NavItem onClick={()=>openNavbar(false)} to="/account" activeImage={dashboardWhite} image={account} title="Account" active={isActive("account")} />
	    </div>
	</div>
    );
};

export default Navbar;
