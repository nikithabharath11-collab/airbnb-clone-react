import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Hero />
      <Categories />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;