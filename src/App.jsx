import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from "./Components/Shopping Section/Shopping"; // Import your Shop component
import Blog from "../src/Components/Blog Page/Blog"; // Import your Blog component
import ContactUs from "../src/Components/Contact Us Page/Contact"; // Import your ContactUs component
import AboutUs from "../src/Components/About Us/About"; // Import your AboutUs component
import Navbar from "../public/Navbar/Navbar";
import MainHomeSection from "../src/Components/Home Section/MainHome";
import Footer from "../public/Footer/Footer";
import "./App.css";
import Men from "./Components/Shopping Section/Men";
import Women from "./Components/Shopping Section/Women";
import Kids from "./Components/Shopping Section/Kids";
import Brands from "./Components/Shopping Section/Brands";
// import MainHomeSection from "./Components/Home Section/MainHome";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainHomeSection />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/mensWear" element={<Men />} />
        <Route path="/womensWear" element={<Women />} />
        <Route path="/kidsWear" element={<Kids />} />
        <Route path="/brands" element={<Brands/>} />
      </Routes>
      {/* <MainHomeSection /> */}
      <Footer />
    </Router>
  );
}

export default App;
