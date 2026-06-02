import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Categories from "./components/Categories";
import Cards from "./components/cards";
import Testimonials from "./components/Testimonials";
import Trending from "./components/Trending";
import CursorGlow from "./components/CursorGlow";
import Stats from "./components/Stats";
import Destinations from "./components/Destinations";
import LuxuryFooter from "./components/LuxuryFooter";

import { useState } from "react";

function App() {

  const [darkMode, setDarkMode] = useState(true);

  return (

    <div
      className={`relative min-h-screen overflow-hidden transition-all duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white"
          : "bg-gradient-to-br from-pink-50 via-white to-gray-100 text-gray-900"
      }`}
    >

      {/* Animated Background Glow */}

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">

        <div className="absolute top-20 left-20 w-96 h-96 bg-pink-500/20 blur-[120px] rounded-full animate-pulse"></div>

        <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-purple-500/20 blur-[120px] rounded-full animate-pulse"></div>

        <div className="absolute top-1/2 left-1/2 w-[25rem] h-[25rem] bg-blue-500/10 blur-[120px] rounded-full animate-pulse"></div>

      </div>

      {/* Cursor Glow */}

      <CursorGlow />

      {/* Main Content */}

      <div className="relative z-10">

        <Navbar darkMode={darkMode} />

        <Hero />

        <Categories darkMode={darkMode} />

        <Cards darkMode={darkMode} />

        <Testimonials darkMode={darkMode} />

        <Stats />

        <Destinations darkMode={darkMode} />

        <Trending darkMode={darkMode} />

        <LuxuryFooter darkMode={darkMode} />

      </div>

      {/* Dark Mode Toggle */}

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-6 right-6 z-50 bg-pink-500 hover:bg-pink-600 text-white px-5 py-3 rounded-full shadow-2xl shadow-pink-500/40 transition-all duration-300 hover:scale-110"
      >

        {darkMode ? "☀️ Light" : "🌙 Dark"}

      </button>

    </div>
  );
}

export default App;