import Breadcrumb from "../components/Breadcrumb/Breadcrumb.tsx";
import SummaryCard from "../components/Card/SummaryCard.tsx";
import monthlyExpense from "../assets/icons/pengeluaran-bulanan.svg";
import annualExpense from "../assets/icons/pengeluaran-tahunan.svg";
import Chart from "../components/Chart/Chart";


import MiniSummaryCard from "../components/Card/MiniSummaryCard.tsx";
import {capitalizeWords, titleToImage} from "../helper/helper.tsx";
import Dropdown from "../components/Input/Dropdown.tsx";

const Dashboard = () => {

    const data = [
	{
	    title: "kitchen",
	    value: 50000000,
    	},{
	    title: "supplier kitchen",
	    value: 50000000,
    	},{
	    title: "bar",
	    value: 24000000,
    	},{
	    title: "supplier bar",
	    value: 36000000,
    	},{
	    title: "cashier",
	    value: 10000000,
    	},{
	    title: "office",
	    value: 50000000,
    	},{
	    title: "operasional",
	    value: 60000000,
    	},
    ]


    return (
	<div className="flex flex-col gap-4">
	    <div className="flex items-center justify-between">
		<Breadcrumb/>
		<div className="flex items-center gap-4">
		    <label htmlFor="rekap" className="font-semibold">Jenis rekap</label>
		    <Dropdown items={[
			{
			    id : 1,
			    name : "Harian"
			},
			{
			    id : 2,
			    name : "Bulanan"
			},
			{
			    id : 3,
			    name : "Tahunan"
			},
		    ]} placeholder={'Bulanan'} onClick={()=>{}}/>
		</div>
	    </div>

	    <div className="flex w-full gap-4">
		<SummaryCard
		    icon={monthlyExpense}
		    title="Bulan Oktober"
		    value={12000000}
		    comparation={-20}
		    basis="basis-5/12"
		    bgColor="primary"
		/>
		<SummaryCard
		    icon={annualExpense}
		    title="Tahun 2024"
		    value={100000000}
		    comparation={10}
		    basis="basis-7/12"
		    bgColor="secondary"
		/>
	    </div>
	    <div className="grid grid-cols-4 gap-4 w-full">
		{data.map((each, index)=>{
		    return <MiniSummaryCard
			key={index}
			icon={titleToImage(each.title)}
			title={capitalizeWords(each.title)}
			value={each.value}
			lastCard={index == data.length - 1}
			bgColor={index % 2 == 0 ? "primary" : "secondary"}
		    />
		})}
	    </div>

	    <div className="bg-white rounded-lg p-4">
		<Chart
		    categories={data.map((each)=>capitalizeWords(each.title))}
		    values={data.map((each)=>each.value)}
		/>
	    </div>

	</div>

    )
}

export default Dashboard