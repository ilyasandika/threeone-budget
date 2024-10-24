import Breadcrumb from "../components/Breadcrumb/Breadcrumb.tsx";
import Dropdown from "../components/Dropdown/Dropdown.tsx";
import data from "../database/departemenList.json"

const Entry = () => {
    return (
	<>
	    <div className="flex flex-col items-center justify-between gap-4">
		<div className="flex justify-between w-full">
		    <Breadcrumb/>
		    <button className="bg-primary px-4 py-3 rounded-lg text-white font-semibold">Tambah Pengeluaran
		    </button>
		</div>
		<div className="flex flex-row p-5 gap-4 bg-white rounded-lg w-full text-left">
		    <div>
			<p className="font-semibold mb-2">Apa yang kamu cari?</p>
			<input type="text" className="w-full rounded-lg bg-bg-primary py-2 px-4" placeholder="Masukkan nama"/>
		    </div>
		    <div>
			<p className="font-semibold mb-2">Departemen</p>
			<Dropdown
			    items={data.map((item)=>(
				item.name
			    ))}
			    placeholder={"Pilih Departmen"}
			/>
		    </div>
		</div>
	    </div>

	</>
    )
}

export default Entry