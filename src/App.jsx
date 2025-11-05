import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Careers from "./components/Careers";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Security from "./components/Security";
import IndividualProducts from "./components/IndividualProducts";
import BusinessProducts from "./components/BusinessProducts";
import NotFound from "./components/NotFound";
import BackToTop from "./components/BackToTop";
export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/security" element={<Security />} />
        <Route path="/individual-products" element={<IndividualProducts />} />
        <Route path="/business-products" element={<BusinessProducts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <BackToTop />
      <Footer />
    </>
  );
}
