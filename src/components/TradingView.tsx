import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';
import { useCryptoStore } from '../store/useCryptoStore';

export const TradingView: React.FC = () => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const { selectedCrypto } = useCryptoStore();

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { color: '#1a1d1e' },
        textColor: '#d1d4dc',
      },
      grid: {
        vertLines: { color: '#2b2b43' },
        horzLines: { color: '#2b2b43' },
      },
      width: chartContainerRef.current.clientWidth,
      height: 500,
    });

    const candlestickSeries = chart.addCandlestickSeries({
      upColor: '#26a69a',
      downColor: '#ef5350',
      borderVisible: false,
      wickUpColor: '#26a69a',
      wickDownColor: '#ef5350',
    });

    // Sample data - replace with real API data
    const data = [
      { time: '2024-01-01', open: 50000, high: 51000, low: 49000, close: 50500 },
      { time: '2024-01-02', open: 50500, high: 52000, low: 50000, close: 51500 },
      // Add more historical data points
    ];

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
  }, [selectedCrypto]);

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <div ref={chartContainerRef} />
    </div>
  );
};