import React from 'react';
import { Brain, TrendingUp, AlertTriangle } from 'lucide-react';

interface AIAnalysisProps {
  sentiment: 'bullish' | 'bearish' | 'neutral';
  confidence: number;
  recommendations: string[];
}

export const AIAnalysis: React.FC<AIAnalysisProps> = ({
  sentiment,
  confidence,
  recommendations,
}) => {
  const sentimentColor = {
    bullish: 'text-green-500',
    bearish: 'text-red-500',
    neutral: 'text-yellow-500',
  }[sentiment];

  return (
    <div className="bg-gray-800 rounded-lg p-6 space-y-4">
      <div className="flex items-center space-x-2">
        <Brain className="w-6 h-6 text-blue-400" />
        <h3 className="text-xl font-bold text-white">AI Analysis</h3>
      </div>
      
      <div className="flex items-center space-x-2">
        <TrendingUp className={`w-5 h-5 ${sentimentColor}`} />
        <span className="text-white">
          Market Sentiment:{' '}
          <span className={`font-bold ${sentimentColor}`}>
            {sentiment.charAt(0).toUpperCase() + sentiment.slice(1)}
          </span>
        </span>
      </div>

      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-blue-400 h-2.5 rounded-full"
          style={{ width: `${confidence}%` }}
        ></div>
      </div>
      <p className="text-gray-300">AI Confidence: {confidence}%</p>

      <div className="space-y-2">
        <h4 className="text-white font-semibold">Recommendations:</h4>
        <ul className="space-y-2">
          {recommendations.map((rec, index) => (
            <li key={index} className="flex items-start space-x-2">
              <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-300">{rec}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}