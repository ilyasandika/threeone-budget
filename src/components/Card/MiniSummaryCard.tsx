import { numberToRupiah } from "../../helper/helper"


interface SummaryCardProps {
    icon: string
    title: string
    value: number
    lastCard?: boolean
    bgColor : "primary" | "secondary"
}

const MiniSummaryCard: React.FC<SummaryCardProps> = ({icon, title, value, lastCard, bgColor}) => {
    return (
	<div className={`flex items-center justify-between bg-white ${lastCard ? "col-span-2" : ""} rounded-lg h-full p-6`}>
	    <div className="flex gap-5 items-center">
		<div className={`${bgColor == "primary" ? "bg-primary" : "bg-secondary"} p-2 rounded-lg h-16 w-14 text-center content-center`}>
		    <img src={icon} alt="report" className="w-6 mx-auto"/>
		</div>
		<div className="flex flex-col text-left gap-2">
		    <p className="font-bold text-sm">Pengeluaran <br/> {title}</p>
		    <p className="font-medium text-sm">{numberToRupiah(value)}</p>
		</div>
	    </div>
	</div>
    )
}

export default MiniSummaryCard