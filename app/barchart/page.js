'use client';

import { recordBubbleSortSteps } from '../../utils/sortingUtils';
import { useState, useRef, useEffect } from 'react';
import { ChartContainer } from '@mui/x-charts/ChartContainer'; 
import { BarPlot } from '@mui/x-charts/BarChart';

// const data = [70, 20, 30, 15, 45, 10, 25];
const elements =    [92, 47, 5, 11, 18, 56, 70, 0, 34, 39,
  88, 20, 63, 77, 23, 3, 59, 64, 30, 86,
  14, 97, 33, 6, 12, 21, 40, 2, 35, 99,
  16, 81, 26, 93, 50, 84, 8, 79, 72, 67];

// const labels = ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G'];
const labels = Array.from({ length: elements.length }, (_, i) => `#${i + 1}`);

export default function BarChartPage() {
  const [data, setData] = useState(elements);

  // refs that survive re-renders but don’t trigger renders when they change
  const timerRef  = useRef(null);  // interval ID
  const swapsRef  = useRef([]);    // list of swap pairs (e.g. [[1,2], [0,4], …])
  const stepRef   = useRef(0);     // which swap we’re on

  const startSwapAnimation = () => {
    if (timerRef.current) return;              // ignore if already animating

    swapsRef.current = recordBubbleSortSteps(data);    // plan every swap up front
    stepRef.current  = 0;

    timerRef.current = setInterval(() => {
      const next = swapsRef.current[stepRef.current++]; // get the next swap

      if (!next) {                // ← falsy check (undefined / null / 0 / '')
        clearInterval(timerRef.current); // stop the repeating timer
        timerRef.current = null;         // mark as no-longer-running
        return;                          // exit the interval callback
      }

      // Perform this frame’s swap
      setData(prev => {
        const arr = [...prev];
        const [i, j] = next;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        return arr;
      });

    }, 200);                                   // swap every 300 ms
  };

  // Clear the timer if the component unmounts
  useEffect(() => {
    return () => timerRef.current && clearInterval(timerRef.current);
  }, []);

    return (
      <div className="p-8">
        <h1 className="text-xl font-bold mb-4">Bar Chart Example</h1>
        <ChartContainer
          width={1500}
          height={800}
          series={[{ data, label: 'uv', type: 'bar' }]}
          xAxis={[{ scaleType: 'band', data: labels }]}
          skipAnimation
        >
          <BarPlot />
        </ChartContainer>

        <button onClick={startSwapAnimation}>start Animation</button>
      </div>
    );
  }