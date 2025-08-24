import { View, Series, TrendData, KeywordData } from './types';

export const NAVIGATION_ITEMS = [
  { id: View.WritingAssistant, label: 'AI 撰稿助手', icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536L16.732 3.732z' },
  { id: View.DataAnalysis, label: '數據分析儀表板', icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75c0 .621-.504 1.125-1.125 1.125h-2.25A1.125 1.125 0 013 21v-7.875zM12.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v12.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM21 4.125c0-.621.504-1.125 1.125-1.125h2.25C25.146 3 25.65 3.504 25.65 4.125v16.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z' },
  { id: View.SeriesRankings, label: '熱門短劇排行', icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
];

export const MOCK_SERIES_DATA: Series[] = [
  { id: 1, rank: 1, title: '霸道總裁的替身新娘', genre: '現代愛情', protagonists: ['林晚晚', '顧言深'], episodes: 80, synopsis: '平凡女孩林晚晚為救家人，被迫成為頂級總裁顧言深的契約妻子，在豪門鬥爭與誤會中，兩人逐漸萌生真愛。', views: '1.2億', discussionScore: 98.5 },
  { id: 2, rank: 2, title: '重生之我在古代當首富', genre: '古風穿越', protagonists: ['蘇淺', '蕭景琰'], episodes: 70, synopsis: '現代商業奇才蘇淺意外穿越，憑藉超前知識在古代建立商業帝國，並與腹黑王爺蕭景琰展開一場權力與愛情的較量。', views: '9,800萬', discussionScore: 95.2 },
  { id: 3, rank: 3, title: '我的師姐有點壞', genre: '武俠仙俠', protagonists: ['凌霜', '葉凡'], episodes: 65, synopsis: '看似高冷霸道的師姐凌霜，實則內心溫柔。廢柴師弟葉凡在她的“特殊”教導下，逆襲成為一代宗師。', views: '8,500萬', discussionScore: 92.1 },
  { id: 4, rank: 4, title: '都市神醫龍王婿', genre: '都市奇幻', protagonists: ['陳軒', '張芷澄'], episodes: 100, synopsis: '潛龍在淵的豪門棄子陳軒，習得絕世醫術歸來，履行婚約，面對輕視與挑戰，他以銀針濟世，拳腳鎮惡。', views: '7,600萬', discussionScore: 89.9 },
  { id: 5, rank: 5, title: '快穿：女配她颯爆了', genre: '科幻系統', protagonists: ['楚月', '系統007'], episodes: 90, synopsis: '王牌特工楚月綁定“女配逆襲系統”，穿梭於各個小世界，手撕白蓮，腳踩渣男，活出屬於自己的精彩人生。', views: '6,900萬', discussionScore: 88.0 },
  { id: 6, rank: 6, title: '系統讓我當皇帝', genre: '歷史架空', protagonists: ['李承乾', '趙靈兒'], episodes: 75, synopsis: '普通大學生李承乾，意外獲得“最強帝王系統”，穿越到架空王朝，從傀儡皇子一步步成長為千古一帝。', views: '6,100萬', discussionScore: 85.7 },
];

export const MOCK_TREND_DATA: TrendData[] = [
    { date: '週一', 熱度: 2400 },
    { date: '週二', 熱度: 1398 },
    { date: '週三', 熱度: 9800 },
    { date: '週四', 熱度: 3908 },
    { date: '週五', 熱度: 4800 },
    { date: '週六', 熱度: 3800 },
    { date: '週日', 熱度: 4300 },
];

export const MOCK_KEYWORD_DATA: KeywordData[] = [
    { name: '重生', 搜尋量: 5900 },
    { name: '甜寵', 搜尋量: 4200 },
    { name: '逆襲', 搜尋量: 3800 },
    { name: '神醫', 搜尋量: 2500 },
    { name: '戰神', 搜尋量: 2100 },
    { name: '女強', 搜尋量: 1800 },
];