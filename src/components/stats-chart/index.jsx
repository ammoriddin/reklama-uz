"use client"

import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
} from 'chart.js'

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
)

const StatsChart = ({data}) => {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        min: 2,
        max: 50,
        display: false,
      },
    },
    elements: {
      line: {
        fill: false, // Ensures the line does not have a filled background
      },
    },
  }

  return (
    <div style={{ width: '600px', height: '150px', background: 'transparent' }}>
      <Line data={data} options={options} />
    </div>
  )
}

export default StatsChart
