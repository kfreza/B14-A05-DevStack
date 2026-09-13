import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import TechCatalog from "./components/TechCatalog/TechCatalog";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechCatalog />
      </main>
      <Footer />
      <ToastContainer position="bottom-right" autoClose={2500} />
    </>
  );
}

export default App;
