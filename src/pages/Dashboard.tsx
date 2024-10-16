import Breadcrumb from "../components/Breadcrumb/Breadcrumb.tsx";

const Dashboard = () => {
    return (
	<div className="p-10">
	    <div className="flex items-center justify-between">
	    	<Breadcrumb/>
		<div className="flex items-center gap-4">
		    <label htmlFor="rekap" className="font-semibold">Jenis rekap</label>
		    <select name="rekap" id="rekap" className="appearance-none py-2 px-4 rounded-lg w-36">
			<option value="harian">Harian</option>
			<option value="bulanan">Bulanan</option>
			<option value="tahunan">Tahunan</option>
		    </select>
		</div>
	    </div>

	</div>
    )
}

export default Dashboard