import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: ['BTC', 'ETH', 'SAND', 'DOGE', 'SHIP', 'BABYDOGE'],
  datasets: [
    {
      label: 'Cypto Currency',
      data: [27160, 15000, 20000, 12500, 13600, 5000],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

export default function App() {
  return <Radar data={data} />;
}
