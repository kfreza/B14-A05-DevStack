import { ToastContainer } from "react-toastify";
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
      <ToastContainer position="top-right" autoClose={2500} newestOnTop />
    </>
  );
}

export default App;
