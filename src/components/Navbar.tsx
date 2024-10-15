import NavItem from "./navbar/NavItem.tsx";

export default function Navbar() {
    return (
	<div className="fixed top-0 left-0 text-left w-1/6 bg-white border-r-2 h-screen p-8">
	    <img alt="" src="/main-logo.svg" className="mx-auto mb-14 w-64"/>
	    <div className="flex flex-col gap-3">
		<NavItem activeImage="/chart-white.svg" image="/chart.svg" title="Dashboard" active={true}></NavItem>
		<NavItem image="/entry.svg" title="Entry"></NavItem>
		<NavItem image="/report.svg" title="Report"></NavItem>
		<NavItem image="/setting.svg" title="Setting"></NavItem>
		<NavItem image="/account.svg" title="Account"></NavItem>
	    </div>
	</div>
    )
}
