import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Product"
import NotFoundPage from "./NotFound";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);


    
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    
    handleResize();

    
    window.addEventListener("resize", handleResize);

    
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <>
    <section className="">
      <Sidebar isShow={isSidebarOpen} />

    </section>

      <section
        className={`transition-all duration-1000 ${
          isSidebarOpen ? "ml-[254px]" : "ml-[0px]"
        }`}
      >
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Product" element={<ProductPage/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </section>
    </>
  );
}

export default App;