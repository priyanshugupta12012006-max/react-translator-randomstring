import { useState, useEffect, useCallback } from "react";

function RandomString() {
  const [length, setLength] = useState(8);
  const [randomString, setRandomString] = useState("");

  const generateString = useCallback(() => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setRandomString(result);
  }, [length]);

  useEffect(() => {
    generateString();
  }, [generateString]);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-sky-400 to-indigo-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm text-center">
        
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          🔢 Random String Generator
        </h1>

        <div className="mb-4">
          <label className="block text-gray-600 mb-2">
            Length
          </label>
          <input
            type="number"
            min="1"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full explain border rounded-lg px-3 py-2 text-center focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div className="bg-gray-100 rounded-lg p-3 font-mono text-lg tracking-wide mb-5 break-all">
          {randomString}
        </div>

        <button
          onClick={generateString}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold transition"
        >
          🔄 Generate Again
        </button>
      </div>
    </div>
  );
}

export default RandomString;