import Navbar from "./Components/navbar";
import Hero from "./Components/hero";
import Categories from "./Components/categories";
import Cards from "./Components/cards";
import Footer from "./Components/footer";

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