import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Categories from "./components/Categories";
import Cards from "./components/cards";
import Footer from "./components/footer";

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