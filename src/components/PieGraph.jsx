import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { PieChartData } from '../../public/FakeData';

ChartJS.register(ArcElement, Tooltip, Legend);


export const PieGraph = () => {

  const options = {}

  const data = {}

  return (
    <>
    
    <Pie options={options} data={PieChartData} />
    
    
    </>
  )
}
