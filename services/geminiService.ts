
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const fetchOrganDetails = async (organName: string): Promise<string> => {
  try {
    const prompt = `Oferă o descriere detaliată, dar ușor de înțeles, a organului uman "${organName}". Explică funcția sa principală, importanța sa pentru corp și o curiozitate interesantă. Răspunsul trebuie să fie în limba română și formatat ca un singur paragraf.`;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt
    });

    return response.text;
  } catch (error) {
    console.error('Gemini API call failed:', error);
    throw new Error('Failed to fetch details from Gemini API.');
  }
};
