export enum View {
  WritingAssistant = 'WRITING_ASSISTANT',
  DataAnalysis = 'DATA_ANALYSIS',
  SeriesRankings = 'SERIES_RANKINGS',
}

export interface Series {
  id: number;
  rank: number;
  title: string;
  genre: string;
  protagonists: string[];
  episodes: number;
  synopsis: string;
  views: string;
  discussionScore: number;
}

export interface TrendData {
  date: string;
  熱度: number;
}

export interface KeywordData {
  name:string;
  搜尋量: number;
}