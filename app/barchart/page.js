'use client';

import { ChartContainer } from '@mui/x-charts/ChartContainer'; 
import { BarPlot } from '@mui/x-charts/BarChart';

const data = [900, 3000, 2000, 2780, 1890, 2390, 3490];
const labels = ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G'];

export default function BarChartPage() {
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
      </div>
    );
  }