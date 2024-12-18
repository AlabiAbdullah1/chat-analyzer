// pages/api/analyze.js
import { Configuration, OpenAIApi } from 'openai';
import {dotenv} from "dotenv";

dotenv.config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  const { chatContent } = req.body;

  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are an assistant that categorizes WhatsApp messages into themes, patterns, and insights.',
        },
        {
          role: 'user',
          content: `Analyze this chat:\n${chatContent}`,
        },
      ],
    });

    res.status(200).json(response.data.choices[0].message.content);
  } catch (error) {
    res.status(500).json({ error: 'Failed to analyze content' });
  }
}
