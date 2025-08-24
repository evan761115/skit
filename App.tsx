
import React, { useState } from 'react';
import { View } from './types';
import { NAVIGATION_ITEMS } from './constants';
import WritingAssistant from './components/WritingAssistant';
import DataAnalysis from './components/DataAnalysis';
import SeriesRankings from './components/SeriesRankings';

const NavIcon: React.FC<{ d: string }> = ({ d }) => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={d}></path></svg>
);

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>(View.WritingAssistant);

  const renderView = () => {
    switch (activeView) {
      case View.WritingAssistant:
        return <WritingAssistant />;
      case View.DataAnalysis:
        return <DataAnalysis />;
      case View.SeriesRankings:
        return <SeriesRankings />;
      default:
        return <WritingAssistant />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col md:flex-row">
      <aside className="w-full md:w-64 bg-gray-800 p-4 border-b-2 md:border-b-0 md:border-r-2 border-gray-700 flex-shrink-0">
        <h1 className="text-2xl font-bold text-white text-center mb-8">
          短劇情報站
        </h1>
        <nav className="flex flex-row md:flex-col justify-around md:justify-start md:space-y-2">
          {NAVIGATION_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 w-full text-left ${
                activeView === item.id
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <NavIcon d={item.icon} />
              <span className="hidden md:inline">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto">
        {renderView()}
      </main>
    </div>
  );
};

export default App;
