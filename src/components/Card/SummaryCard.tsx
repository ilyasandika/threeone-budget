

interface SummaryCardProps {
    icon: string
    title: string
    value: number
    comparation: number
    basis: string
}

const SummaryCard: React.FC<SummaryCardProps> = ({icon, title, value, comparation, basis}) => {
    const numberToRupiah = (number: number)=>{
	return new Intl.NumberFormat("id-ID", {
	    style: "currency",
	    currency: "IDR"
	}).format(number);
    }

    return (
	<div className={`flex items-center justify-between bg-white ${basis} rounded-lg h-full p-6`}>
	    <div className="flex gap-5 items-center">
		<div className="bg-primary p-2 rounded-lg h-20 w-16 text-center content-center">
		    <img src={icon} alt="report" className="w-9 mx-auto"/>
		</div>
		<div className="flex flex-col text-left gap-2">
		    <p className="font-bold">Pengeluaran {title}</p>
		    <p className="font-medium">{numberToRupiah(value)}</p>
		</div>
	    </div>
	    <div className={`${comparation > 0 ? "text-green-600 bg-green-600" : "text-red-600 bg-red-600"} bg-opacity-10 w-28 rounded-lg content-center p-2`}>
		<p className={`font-bold text-xl`}>{comparation}%</p>
		<p className="text-xs leading-normal font-medium"> Lebih {comparation > 0 ? "besar" : "kecil" } dari bulan
		    kemarin</p>
	    </div>
	</div>
    )
}

export default SummaryCard