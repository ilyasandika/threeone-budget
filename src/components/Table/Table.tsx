import { useState } from 'react';
import {EntryList} from "../../types/entity.tsx";

interface TableProps {
    entryList: EntryList[]
}

const EntryTable: React.FC<TableProps> = ({entryList}) => {
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(entryList.length / itemsPerPage);

    const currentItems = entryList.slice(
	(currentPage - 1) * itemsPerPage,
	currentPage * itemsPerPage
    );

    const goToPage = (pageNumber: number) => {
	setCurrentPage(pageNumber);
    };

    return (
	<div className="w-full bg-white rounded-lg text-left p-4 text-sm">
	    <div
		className={`grid grid-cols-[0.8fr_1.2fr_4fr_1fr_2fr_2fr_2fr_2fr_2fr] items-center pb-1 border-b font-bold`}
	    >
		<div className="text-center">NO</div>
		<div className="">TANGGAL</div>
		<div className="">NAMA BARANG</div>
		<div className="">QTY</div>
		<div className="">HARGA</div>
		<div className="">SUMBER DANA</div>
		<div className="">DEPARTEMEN</div>
		<div className="">STATUS <br /> PEMBAYARAN</div>
		<div className="">ACTION</div>
	    </div>

	    <div className="grid grid-cols-[0.8fr_1.2fr_4fr_1fr_2fr_2fr_2fr_2fr_2fr] gap-y-4 mt-3">
		{currentItems.map((item:EntryList, index:number) => (
		    <>
			<div className="text-center">{(currentPage - 1) * itemsPerPage + index + 1}</div>
			<div className="">{item.TANGGAL}</div>
			<div className="">{item.NM_BRG}</div>
			<div className="">{item.KUANTITAS}</div>
			<div className="">{item.HRG_SATUAN}</div>
			<div className="">{item.SUMBER_DANA}</div>
			<div className="">{item.JENIS}</div>
			<div className="">{item.TGL_PAYMENT}</div>
			<div className="">A|A</div>
		    </>
		))}
	    </div>

	    <div className="flex justify-center mt-6 space-x-2">
		<button
		    onClick={() => goToPage(currentPage - 1)}
		    disabled={currentPage === 1}
		    className="px-2 py-1 text-primary border border-primary rounded"
		>
		    {"<"}
		</button>



		{Array.from({ length: totalPages }, (_, index) => {
		    const pageNumber = index + 1;

		    if (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1) {
			return (
			    <button
				key={pageNumber}
				onClick={() => goToPage(pageNumber)}
				className={`px-2 py-1 rounded ${currentPage === pageNumber ? 'bg-primary text-white' : 'border border-primary  text-primary'}`}
			    >
				{pageNumber}
			    </button>
			);
		    }

		    if (pageNumber === 1 || pageNumber === totalPages) {
			return null;
		    }

		    if (pageNumber < currentPage - 1 && pageNumber === currentPage - 2) {
			return (
			    <>
			    	<button key={pageNumber} onClick={() => goToPage(1)} className="px-2 py-1 border border-primary rounded">1</button>
			    	<span key={pageNumber} className="px-2 py-1 border border-primary rounded">...</span>
			    </>
			);
		    }

		    if (pageNumber > currentPage + 1 && pageNumber === currentPage + 2) {
			return (
			    <>
				<span key={pageNumber}  className="px-2 py-1 border border-primary rounded">...</span>
				<button key={pageNumber} onClick={() => goToPage(totalPages)} className="px-2 py-1 border border-primary rounded">{totalPages}</button>
			    </>
			);
		    }

		    return null;
		})}



		<button
		    onClick={() => goToPage(currentPage + 1)}
		    disabled={currentPage === totalPages}
		    className="px-2 py-1 text-primary rounded border-primary border"
		>
		    {">"}
		</button>
	    </div>
	</div>
    );
}

export default EntryTable;
