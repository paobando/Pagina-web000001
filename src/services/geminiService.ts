import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getAssistantResponse(prompt: string, history: { role: 'user' | 'model', parts: { text: string }[] }[] = []) {
  try {
    const chat = ai.chats.create({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction: "Eres un asistente virtual de la Biblioteca de la Universidad Icesi. Tu objetivo es ayudar a los estudiantes, docentes y visitantes con información sobre la biblioteca, sus recursos, horarios, eventos y servicios como apoyo académico y convenios interbibliotecarios. Sé amable, profesional y conciso. Si no conoces la respuesta a algo específico de Icesi, sugiere contactar al equipo de la biblioteca.",
      },
      history: history,
    });

    const response = await chat.sendMessage({
      message: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Lo siento, ha ocurrido un error al procesar tu solicitud. Por favor intenta de nuevo más tarde.";
  }
}
