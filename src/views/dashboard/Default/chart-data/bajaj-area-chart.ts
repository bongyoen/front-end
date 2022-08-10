// ===========================|| DASHBOARD - BAJAJ AREA CHART ||=========================== //


import {ApexOptions} from "apexcharts";

const chartDataSeries: ApexAxisChartSeries = [
    {
        data: [0, 15, 10, 50, 30, 40, 25]
    }
]
const chartDataOption: ApexOptions = {
    chart: {
        id: 'support-chart',
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 1
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            formatter: undefined,
            title: {
                formatter: (seriesName = "Ticket") => seriesName,
            },
        },
        marker: {
            show: false
        }
    }

}


const chartData = {
    type: 'area',
    height: 95,
    options: chartDataOption,
    series: chartDataSeries
};

export default chartData;
