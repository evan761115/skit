import { GoogleGenAI } from "@google/genai";
import { Series } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.error("API_KEY is not set in environment variables.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });
const modelName = "gemini-2.5-flash";

const generateContent = async (prompt: string, systemInstruction?: string): Promise<string> => {
    if (!API_KEY) {
        return "錯誤：API 金鑰未設定。請在環境中設定您的 API 金鑰。";
    }

    try {
        const response = await ai.models.generateContent({
            model: modelName,
            contents: prompt,
            config: {
                ...(systemInstruction && { systemInstruction }),
            },
        });
        
        return response.text;
    } catch (error) {
        console.error("Gemini API 請求失敗:", error);
        const errorMessage = error instanceof Error ? error.message : String(error);
        return `API 請求出錯，請檢查主控台以獲取詳細資訊。錯誤: ${errorMessage}`;
    }
};

export const generateTitle = async (series: Series): Promise<string> => {
    const prompt = `為以下熱門短劇生成 5 個吸引人的中文新聞標題。短劇資訊：短劇名稱 '${series.title}'，類型 '${series.genre}', 主演 '${series.protagonists.join('、')}', 目前排名第 ${series.rank}，播放量已達 ${series.views}。請用換行符號分隔每個標題。`;
    const systemInstruction = "你是一個專業的娛樂新聞標題產生器，擅長創造吸引眼球、高點擊率的標題。";
    return generateContent(prompt, systemInstruction);
};

export const generateArticleDraft = async (series: Series, userNotes: string): Promise<string> => {
    const prompt = `
請為目前熱門的網路短劇撰寫一篇約 400 字的新聞稿。

短劇資訊：
- 名稱：${series.title}
- 類型：${series.genre}
- 主演：${series.protagonists.join('、')}
- 總集數：${series.episodes}
- 劇情簡介：${series.synopsis}
- 本週排名：${series.rank}
- 總播放量：${series.views}
- 討論熱度：${series.discussionScore}

撰寫要求：
1. 分析這部劇為何如此受歡迎。可以從劇情設定、角色魅力、社交媒體討論度等方面切入。
2. 文筆生動有趣，吸引讀者點擊觀看。
3. 結構清晰，包含引言、主要內容和結語。
${userNotes ? `\n額外參考指示：\n- ${userNotes}` : ''}
`;
    const systemInstruction = "你是一位專業的娛樂新聞編輯，專門報導網路短劇的最新動態與深度分析。";
    return generateContent(prompt, systemInstruction);
};