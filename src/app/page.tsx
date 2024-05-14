"use client";

import { useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [generatedText, setGeneratedText] = useState<string>('');

  const generateText = async () => {
    const response = await axios.post('/api/generate-text', { prompt });
    setGeneratedText(response.data.text);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center w-full p-6 bg-gray-50">
      <div className="max-w-2xl w-full bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">AI Writing Assistant</h1>
        <textarea
          className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt here..."
          rows={6}
        />
        <button
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          onClick={generateText}
        >
          Generate Text
        </button>
        {generatedText && (
          <div className="mt-6 p-4 bg-gray-100 border border-gray-300 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2 text-gray-700">Generated Text</h2>
            <p className="whitespace-pre-wrap">{generatedText}</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default HomePage;
