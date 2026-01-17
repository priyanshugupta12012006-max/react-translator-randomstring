import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Translator from "./Translator";
import RandomString from "./pages/RandomString";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/translator" element={<Translator />} />
        <Route path="/random" element={<RandomString />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;