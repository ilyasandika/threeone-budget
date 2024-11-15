import Breadcrumb from "../components/Breadcrumb/Breadcrumb.tsx";
import Dropdown from "../components/Input/Dropdown.tsx";
import departemenData from "../database/departemen_list.json"
import jenisData from "../database/jenis_list.json"
import searchIcon from "../assets/icons/search.svg"
import {useEffect, useState} from "react";
import Date from "../components/Input/Date.tsx";
import Textbox from "../components/Input/Textbox.tsx";
import entryList from "../database/entry_list.json"
import EntryTable from "../components/Table/Table.tsx";
import {EntryList} from "../types/entity.tsx";

const Entry = () => {

    interface Item {
	id: number,
	name: string
    }

    const data: EntryList[] = entryList

    const [departemenFilter, setDepartemenFilter] = useState<string>('')
    const [departemenFilterId, setDepartemenFilterId] = useState<number>(0)
    const [jenisFilter, setJenisFilter] = useState<string>('')
    const [jenisFilterId, setJenisFilterId] = useState<number>(0)
    const [jenisItems, setJenisItems] = useState<Item[]>([])

    const handleClickDepartmenFilter = (id: number, item: string) => {
	setDepartemenFilter(item)
	setDepartemenFilterId(id)
    }

    const handleClickJenisFilter = (id: number, item: string) => {
	setJenisFilter(item)
	setJenisFilterId(id)
    }

    useEffect(() => {
	const items = jenisData.filter((item) => (
	    item.departemen_id == departemenFilterId
	))
	setJenisItems(items)

    }, [departemenFilterId]);



    console.log(departemenFilter)
    console.log(jenisFilter)
    console.log(jenisFilterId)

    return (

	<div className="flex flex-col items-center justify-between gap-4">
	    <div className="flex justify-between w-full">
		<Breadcrumb/>
		<button className="bg-primary px-4 py-3 rounded-lg text-white font-semibold">Tambah Pengeluaran
		</button>
	    </div>
	    <div className="flex flex-row p-5 gap-4 bg-white rounded-lg w-full text-left">
		<div>
		    <p className="font-semibold mb-2 text-sm xl:text-base">Apa yang kamu cari?</p>
		    <Textbox/>
		</div>
		<div>
		    <p className="font-semibold mb-2 text-sm xl:text-base">Departemen</p>
		    <Dropdown
			items={departemenData.map((item) => (
			    {id: item.id, name: item.name}
			))}
			placeholder={"Pilih Departemen"}
			onClick={handleClickDepartmenFilter}
		    />
		</div>
		<div>
		    <p className="font-semibold mb-2">Jenis</p>
		    <Dropdown
			items={jenisItems.map((item) => (
			    {id: item.id, name: item.name}
			))}
			placeholder={"Pilih Jenis"}
			onClick={handleClickJenisFilter}
		    />
		</div>
		<div>
		    <p className="font-semibold mb-2 text-sm xl:text-base">Tanggal Mulai</p>
		    <Date/>
		</div>
		<div>
		    <p className="font-semibold mb-2 text-sm xl:text-base">Tanggal Selesai</p>
		    <Date/>
		</div>
		<div className="content-end w-full">
		    <button
			className="py-2 px-4 flex items-center gap-3 bg-primary text-white font-medium w-full rounded-lg">
			<img alt="search" src={searchIcon}/> Cari
		    </button>
		</div>
	    </div>

	    {/*Table*/}
	    <EntryTable entryList={data}/>

	</div>
    )
}

export default Entry