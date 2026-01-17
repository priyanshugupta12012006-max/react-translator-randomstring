import axios from "axios";
import { useState } from "react";

function Translator() {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("hi");
  const [translated, setTranslated] = useState("");

  const translateText = async () => {
  if (!text.trim()) {
    alert("Please enter text");
    return;
  }

  try {
    const res = await axios.post(
      "https://libretranslate.p.rapidapi.com/translate",
      {
        q: text,
        source: "en",
        target: language,
        format: "text",
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Key": "90b7b84b79msha96414a9bbbb2e9p1e9265jsn5b533d287aaf",
          "X-RapidAPI-Host": "libretranslate.p.rapidapi.com"
        },
      }
    );

    setTranslated(res.data.translatedText);
  } catch (error) {
    console.log(error);
    alert("Translation failed. Try again.");
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600 p-6">

      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">🌍 Multi Language Translator</h1>

        <textarea
          className="w-full border p-3 rounded mb-4"
          rows="4"
          placeholder="Type your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <select
          className="w-full border p-3 rounded mb-4"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="hi">Hindi</option>
          <option value="bn">Bengali</option>
          <option value="mr">Marathi</option>
          <option value="ta">Tamil</option>
          <option value="te">Telugu</option>
          <option value="gu">Gujarati</option>
          <option value="pa">Punjabi</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
          <option value="de">German</option>
          <option value="ar">Arabic</option>
          <option value="ja">Japanese</option>
          <option value="ko">Korean</option>
          <option value="ru">Russian</option>
          <option value="zh">Chinese</option>
        </select>

        <button
          onClick={translateText}
          className="w-full bg-purple-600 text-white py-3 rounded font-semibold hover:bg-purple-700 transition"
        >
          Translate 🚀
        </button>

        {translated && (
          <div className="mt-5 p-4 bg-gray-100 rounded text-lg">
            {translated}
          </div>
        )}
      </div>

    </div>
  );
}

export default Translator;
