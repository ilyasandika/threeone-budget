import Breadcrumb from "../components/Breadcrumb/Breadcrumb.tsx";
import SummaryCard from "../components/Card/SummaryCard.tsx";
import monthlyExpense from "../assets/icons/pengeluaran-bulanan.svg";

const Dashboard = () => {
    return (
	<div className="flex flex-col p-10 gap-4">
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

	    <div className="flex flex-row w-full gap-4">
		<SummaryCard
		    icon={monthlyExpense}
		    title="Bulan Oktober"
		    value={12000000}
		    comparation={-20}
		    basis="basis-5/12"
		/>
		<SummaryCard
		    icon={monthlyExpense}
		    title="Tahun 2024"
		    value={100000000}
		    comparation={10}
		    basis="basis-7/12"
		/>
	    </div>
	</div>

    )
}

export default Dashboard