import React from 'react';
import { MOCK_SERIES_DATA } from '../constants';
import { Series } from '../types';

const InfoPill: React.FC<{ label: string; value: string | number; className?: string }> = ({ label, value, className = ''}) => (
    <div className={`text-sm ${className}`}>
        <span className="font-semibold text-gray-400 mr-2">{label}:</span>
        <span className="text-white">{value}</span>
    </div>
);


const SeriesCard: React.FC<{ series: Series }> = ({ series }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl transition-shadow duration-300 ease-in-out border border-gray-700 flex flex-col p-6 hover:shadow-indigo-500/20">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white pr-4 flex-1">{series.title}</h3>
        <div className="flex-shrink-0 bg-indigo-600 text-white text-2xl font-bold w-12 h-12 flex items-center justify-center rounded-full">
          {series.rank}
        </div>
      </div>
      
      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-2 flex-wrap">
            <span className="bg-gray-700 text-indigo-400 text-xs font-semibold px-2.5 py-0.5 rounded-full">{series.genre}</span>
            <InfoPill label="主演" value={series.protagonists.join(', ')} />
            <InfoPill label="集數" value={`${series.episodes}集`} />
        </div>
        <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-indigo-500 pl-3">
          {series.synopsis}
        </p>
      </div>

      <div className="mt-auto pt-4 border-t border-gray-700 flex justify-between items-center text-gray-400">
          <div>
            <p className="text-sm">總播放量</p>
            <p className="text-lg font-semibold text-indigo-400">{series.views}</p>
          </div>
          <div>
            <p className="text-sm">討論熱度</p>
            <p className="text-lg font-semibold text-teal-400">{series.discussionScore}</p>
          </div>
      </div>
    </div>
  );
};


const SeriesRankings: React.FC = () => {
  return (
    <div className="p-4 md:p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">本週熱門短劇排行</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {MOCK_SERIES_DATA.map((series) => (
          <SeriesCard key={series.id} series={series} />
        ))}
      </div>
    </div>
  );
};

export default SeriesRankings;