import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

interface TradingChartProps {
  data: Array<{
    time: string;
    open: number;
    high: number;
    low: number;
    close: number;
  }>;
}

export const TradingChart: React.FC<TradingChartProps> = ({ data }) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartContainerRef.current) {
      const chart = createChart(chartContainerRef.current, {
        layout: {
          background: { color: '#1a1a1a' },
          textColor: '#d1d5db',
        },
        grid: {
          vertLines: { color: '#2d2d2d' },
          horzLines: { color: '#2d2d2d' },
        },
        width: chartContainerRef.current.clientWidth,
        height: 400,
      });

      const candlestickSeries = chart.addCandlestickSeries({
        upColor: '#4caf50',
        downColor: '#ef4444',
        borderVisible: false,
        wickUpColor: '#4caf50',
        wickDownColor: '#ef4444',
      });

      candlestickSeries.setData(data);

      const handleResize = () => {
        if (chartContainerRef.current) {
          chart.applyOptions({ width: chartContainerRef.current.clientWidth });
        }
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        chart.remove();
      };
    }
  }, [data]);

  return <div ref={chartContainerRef} className="w-full h-[400px]" />;
}