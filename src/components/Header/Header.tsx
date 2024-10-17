import defaultProfile from "../../assets/image/default-profile.jpg";
import hamburger from "../../assets/icons/hamburger.svg";

interface HeaderProps {
    openNavbar: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ openNavbar }) => {
    return (
	<div className="sticky top-0 z-10 flex justify-between w-full bg-white border-b py-4 px-10 items-center">
	    <span className="hidden xl:inline font-medium">Thursday, 20 June 2024, 11:41 WIB</span>
	    <img
		src={hamburger}
		alt="Hamburger Menu"
		className="inline xl:hidden font-medium w-6 cursor-pointer"
		onClick={() => openNavbar(true)}
	    />
	    <div className="flex items-center gap-4">
		<div className="flex flex-col text-right">
		    <span className="font-bold text-sm">Ilyas Andika</span>
		    <span className="text-xs">Admin Keuangan</span>
		</div>
		<img alt="" src={defaultProfile} className="rounded-full object-cover h-12 w-12" />
	    </div>
	</div>
    );
};

export default Header;
