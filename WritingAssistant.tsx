import React, { useState, useCallback } from 'react';
import { generateTitle, generateArticleDraft } from '../services/geminiService';
import { MOCK_SERIES_DATA } from '../constants';
import { Series } from '../types';
import Card from './common/Card';
import Button from './common/Button';

const WritingAssistant: React.FC = () => {
  const [selectedSeries, setSelectedSeries] = useState<Series | null>(MOCK_SERIES_DATA[0]);
  const [userNotes, setUserNotes] = useState<string>('');
  const [generatedContent, setGeneratedContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTask, setActiveTask] = useState<string | null>(null);

  const handleApiCall = useCallback(async (apiFunction: () => Promise<string>, taskName: string) => {
    setIsLoading(true);
    setError(null);
    setGeneratedContent('');
    setActiveTask(taskName);
    try {
      const result = await apiFunction();
      setGeneratedContent(result);
    } catch (err) {
      const message = err instanceof Error ? err.message : '發生未知錯誤';
      setError(`任務 "${taskName}" 失敗: ${message}`);
    } finally {
      setIsLoading(false);
      setActiveTask(null);
    }
  }, []);

  const handleGenerateTitle = () => {
    if (!selectedSeries) {
      setError('請先從列表選擇一部短劇');
      return;
    }
    handleApiCall(() => generateTitle(selectedSeries), '生成標題');
  };

  const handleGenerateArticle = () => {
    if (!selectedSeries) {
      setError('請先從列表選擇一部短劇');
      return;
    }
    handleApiCall(() => generateArticleDraft(selectedSeries, userNotes), '生成文章草稿');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 md:p-8 h-full">
      <Card className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-white">內容創作區</h2>
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">1. 選擇熱門短劇開始撰稿</label>
          <div className="space-y-2 max-h-60 overflow-y-auto bg-gray-900/50 p-2 rounded-md border border-gray-700">
            {MOCK_SERIES_DATA.map(series => (
              <button
                key={series.id}
                onClick={() => setSelectedSeries(series)}
                className={`w-full text-left px-4 py-3 rounded-md transition-colors duration-200 flex items-center gap-4 ${
                  selectedSeries?.id === series.id
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
              >
                <span className="flex-shrink-0 bg-indigo-800 text-white font-bold rounded-full h-8 w-8 flex items-center justify-center text-sm">{series.rank}</span>
                <span className="font-semibold">{series.title}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="userNotes" className="block text-sm font-medium text-gray-300 mb-2">2. 補充說明或指定撰稿角度 (選填)</label>
          <textarea
            id="userNotes"
            rows={8}
            value={userNotes}
            onChange={(e) => setUserNotes(e.target.value)}
            placeholder="例如：強調男女主角的化學反應，或分析其成功的行銷策略..."
            className="w-full bg-gray-700 text-white rounded-md border-gray-600 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        
        <div className="flex flex-wrap gap-4 mt-auto pt-4 border-t border-gray-700">
          <Button onClick={handleGenerateArticle} isLoading={isLoading && activeTask === '生成文章草稿'}>
            生成文章草稿
          </Button>
          <Button onClick={handleGenerateTitle} isLoading={isLoading && activeTask === '生成標題'} variant="secondary">
            生成標題
          </Button>
        </div>
      </Card>
      
      <Card className="flex flex-col">
        <h2 className="text-2xl font-bold text-white mb-4">AI 生成結果</h2>
        {error && <div className="bg-red-900 border border-red-700 text-red-200 px-4 py-3 rounded-md mb-4">{error}</div>}
        
        <div className="bg-gray-900 rounded-md p-4 flex-1 whitespace-pre-wrap text-gray-300 overflow-y-auto border border-gray-700">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <div className="flex flex-col items-center gap-4">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-indigo-500"></div>
                <p className="text-lg">AI 正在為您創作中...</p>
                <p className="text-sm text-gray-400">{activeTask}...</p>
              </div>
            </div>
          ) : (
            generatedContent || <p className="text-gray-500 flex items-center justify-center h-full text-center">從左側選擇一部短劇，<br/>點擊「生成文章草稿」或「生成標題」開始創作。</p>
          )}
        </div>
      </Card>
    </div>
  );
};

export default WritingAssistant;
