import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface BarChartProps {
    categories: string[],
    values: number[]

}

const BarChart: React.FC<BarChartProps> = ({categories, values}) => {
    const state = {
	options: {
	    chart: {
		height: 350,
		type: 'bar',
		zoom: {
		    enabled: false,
		},
	    },
	    title: {
		text: '',
		align: 'left',
	    },
	    xaxis: {
		categories: categories,
	    },
	    yaxis: {
		max: Math.max(...values) + (Math.max(...values)*10/100),
		min:0,
		tickAmount: 6,
	    },
	    plotOptions: {
		bar: {
		    horizontal: false,
		    endingShape: 'rounded',
		    columnWidth: '55%',
		    dataLabels: {
			position: 'top',
		    },
		},
	    },
	    dataLabels: {
		enabled: true,
		offsetY : -20,
		style :{
		    colors:['#273240']
		},
		formatter: (value: number) => `Rp. ${value.toLocaleString('id-ID')}`
	    },
	    colors :['#227B94'],
	    fill: {
		opacity: 1,
	    },
	    legend: {
		position: 'top',
	    },
	} as ApexOptions,
	series: [
	    {
		name: 'Pengeluaran',
		data: values,
	    }
	],
    };

    return (
	<div>
	    <Chart
		options={state.options}
		series={state.series}
		type="bar"
		height={350}
	    />
	</div>
    );
};

export default BarChart;
