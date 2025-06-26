'use client';

import { useState } from 'react';
import { ChartContainer } from '@mui/x-charts/ChartContainer'; 
import { BarPlot } from '@mui/x-charts/BarChart';

// const data = [900, 3000, 2000, 2780, 1890, 2390, 3490];
const labels = ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G'];

export default function BarChartPage() {
  const [data, setData] = useState([900, 3000, 2000, 2780, 1890, 2390, 3490]);

  const updateData = () => {
    // Example: Increment all data points by 5
    // const newData = data.map(value => value + 5);
    
    const newData = [900, 1890, 2000, 2780, 3000, 2390, 3490];
    setData(newData);
  };

    return (
      <div className="p-8">
        <h1 className="text-xl font-bold mb-4">Bar Chart Example</h1>
        <ChartContainer
          width={500}
          height={300}
          series={[{ data, label: 'uv', type: 'bar' }]}
          xAxis={[{ scaleType: 'band', data: labels }]}
        >
          <BarPlot />
        </ChartContainer>

        <button onClick={updateData}>Update Data</button>
      </div>
    );
  }