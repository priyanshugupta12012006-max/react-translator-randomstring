import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-10 max-w-md w-full text-center">
        
        <h1 className="text-4xl font-extrabold text-gray-800 mb-3">
          QSkill Slab 1
        </h1>

        <p className="text-gray-600 mb-8">
          React + Tailwind + Routing Project
        </p>

        <div className="flex flex-col gap-4">
          <Link
            to="/translator"
            className="bg-green-600 hover:bg-green-700 transition text-white py-3 rounded-xl font-semibold shadow-md"
          >
            🌍 Text Translator
          </Link>

          <Link
            to="/random"
            className="bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-semibold shadow-md"
          >
            🔢 Random String Generator
          </Link>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          Frontend Internship Task
        </p>
      </div>
    </div>
  );
}

export default Home;