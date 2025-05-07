import React, { useState } from 'react';
import axios from 'axios';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

export default function Gemini() {
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [answerToggle, setAnswerToggle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setAnswerToggle('');
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          contents: [{ parts: [{ text: userInput }] }],
        },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      const answer = response.data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (answer) {
        setLoading(false);
        setAnswerToggle(answer);
        setUserInput('');
      }
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col items-center py-10 px-4 sm:px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6 text-center">
        Gemini AI Сұрақ-Жауап
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-stretch gap-4 mb-6 w-full max-w-2xl"
      >
        <input
          type="text"
          placeholder="Сұрақты енгізіңіз?"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="flex-grow px-4 py-3 rounded border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded text-lg font-semibold w-full md:w-auto"
        >
          Жіберу
        </button>
      </form>

      {loading && <p className="text-green-600 text-lg">Жүктелуде...</p>}
      {error && <p className="text-red-600 text-lg">{error}</p>}

      {answerToggle && (
        <div className="bg-white shadow-md rounded p-6 w-full max-w-2xl">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">Жауап:</h2>
          <p className="text-gray-800 leading-relaxed whitespace-pre-line">{answerToggle}</p>
        </div>
      )}
    </div>
  );
}
