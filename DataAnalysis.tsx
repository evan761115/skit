
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { MOCK_TREND_DATA, MOCK_KEYWORD_DATA } from '../constants';
import Card from './common/Card';

const StatCard: React.FC<{ title: string; value: string; change: string; isPositive: boolean }> = ({ title, value, change, isPositive }) => (
    <Card>
      <h3 className="text-gray-400 text-lg">{title}</h3>
      <p className="text-4xl font-bold text-white mt-2">{value}</p>
      <p className={`mt-2 text-sm ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
        {change}
      </p>
    </Card>
);

const DataAnalysis: React.FC = () => {
  return (
    <div className="p-4 md:p-8 space-y-8">
      <h1 className="text-3xl font-bold text-center text-white">數據分析儀表板</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard title="今日熱度指數" value="8,452" change="+5.2% vs 昨日" isPositive={true} />
        <StatCard title="本週文章產出" value="128篇" change="+12篇 vs 上週" isPositive={true} />
        <StatCard title="主要競爭指數" value="78.2" change="-1.5% vs 上週" isPositive={false} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <h2 className="text-2xl font-bold mb-4 text-white">熱門關鍵詞搜尋量</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={MOCK_KEYWORD_DATA} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
              <XAxis dataKey="name" stroke="#A0AEC0" />
              <YAxis stroke="#A0AEC0" />
              <Tooltip
                contentStyle={{ backgroundColor: '#1A202C', border: '1px solid #4A5568' }}
                cursor={{ fill: 'rgba(128, 90, 213, 0.1)' }}
              />
              <Legend />
              <Bar dataKey="搜尋量" fill="#805AD5" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <h2 className="text-2xl font-bold mb-4 text-white">話題趨勢（近七日）</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={MOCK_TREND_DATA} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
              <XAxis dataKey="date" stroke="#A0AEC0" />
              <YAxis stroke="#A0AEC0" />
              <Tooltip
                contentStyle={{ backgroundColor: '#1A202C', border: '1px solid #4A5568' }}
              />
              <Legend />
              <Line type="monotone" dataKey="熱度" stroke="#38B2AC" strokeWidth={2} activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
};

export default DataAnalysis;
