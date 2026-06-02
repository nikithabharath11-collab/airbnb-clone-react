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
import ParticlesBackground from "./components/ParticlesBackground";

import { useState } from "react";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (

    <div
      className={`relative min-h-screen overflow-hidden transition-all duration-500 ${
        darkMode
          ? "bg-transparent text-white"
          : "bg-transparent text-white"
      }`}
    >

      {/* Animated Background */}

      <ParticlesBackground />

      {/* Cursor Glow */}

      <CursorGlow />

      {/* Main Content */}

      <div className="relative z-10">

        <Navbar darkMode={darkMode} />

        <Hero />

        <Categories />

        <Cards darkMode={darkMode} />

        <Testimonials darkMode={darkMode} />

        <Stats />

        <Destinations />

        <Trending darkMode={darkMode} />

        <LuxuryFooter />

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