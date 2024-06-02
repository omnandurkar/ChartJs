import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import {BarChartData} from '../../public/FakeData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const BarGraph = () => {

  const options = {}

  const data = {}

  return (
    <>
    
    <Bar options={options} data={BarChartData} />

    </>
  )
}

export default BarGraph