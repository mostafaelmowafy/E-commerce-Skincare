import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Product from "./components/Product";
import { CartProvider } from "./context/CartContext";

import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./ScrollToTop";
import NotFound from "./components/NotFound";
import WhatsAppButton from "./UI/WhatsAppButton";
import { useEffect } from "react";

import ReactPixel from "react-facebook-pixel";

function App() {
  useEffect(() => {
    // قراءة الـ ID من ملف الـ .env
    const pixelId = process.env.REACT_APP_PIXEL_ID;

    if (pixelId) {
      const options = {
        autoConfig: true,
        debug: false,
      };

      ReactPixel.init(pixelId, null, options);
      ReactPixel.pageView(); // تتبع زيارة الصفحة
    }
  }, []);
  return (
    <>
      <CartProvider>
        <ScrollToTop />
        <Toaster position="top-center" reverseOrder={false} />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:name" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton />
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
