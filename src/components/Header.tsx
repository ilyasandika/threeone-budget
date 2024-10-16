import defaultProfile from "../assets/image/default-profile.jpg"

const Header = () => {
    return (
	<div className="flex justify-between w-full bg-white border-b border-l py-4 px-10 items-center">
	    <span className="font-medium">Thursday, 20 June 2024, 11:41 WIB</span>
	    <div className="flex items-center gap-4">
		<div className="flex flex-col text-right">
		    <span className="font-bold text-sm">Ilyas Andika</span>
		    <span className="text-xs">Admin Keuangan</span>
		</div>
		<img alt="" src={defaultProfile} className="rounded-full object-cover h-12 w-12" />
	    </div>
	</div>
    )
}

export default Header