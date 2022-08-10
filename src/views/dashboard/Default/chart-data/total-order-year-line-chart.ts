// ===========================|| DASHBOARD - TOTAL ORDER YEAR CHART ||=========================== //

import {ApexOptions} from "apexcharts";

const chartDataSeries: ApexAxisChartSeries = [
    {
        name: "series 1",
        data: [35, 44, 9, 54, 45, 66, 41, 69]
    }
]
const chartDataOption: ApexOptions = {
    chart: {
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#fff'],
    fill: {
        type: 'solid',
        opacity: 1
    },
    stroke: {
        curve: 'smooth',
        width: 3
    },
    yaxis: {
        min: 0,
        max: 100
    },
    tooltip: {
        theme: 'dark',
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            formatter: undefined,
            title: {
                formatter: (seriesName = "Total Order") => seriesName,
            },        },
        marker: {
            show: false
        }
    }
}

const chartData = {
    type: 'line',
    height: 90,
    options: chartDataOption,
    series: chartDataSeries
};

export default chartData;
