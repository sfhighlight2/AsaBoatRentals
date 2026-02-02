
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getTrailerRecommendation = async (boatLength: string, boatWeight: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Suggest the best boat trailer type for a boat that is ${boatLength} feet long and weighs approximately ${boatWeight} lbs. Provide a concise explanation.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendedType: { type: Type.STRING },
            reasoning: { type: Type.STRING },
            safetyTip: { type: Type.STRING }
          },
          required: ["recommendedType", "reasoning", "safetyTip"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Error getting recommendation:", error);
    return null;
  }
};
