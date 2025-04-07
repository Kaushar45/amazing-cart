import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/Home";
import NotFoundPage from "./NotFound";
import Asidebar from "./components/Asidebar";
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

    // Run on initial render
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
    <h2>Hello</h2>
      <Asidebar isShow={isSidebarOpen} />

      <section
        className={`transition-all duration-1000 ${
          isSidebarOpen ? "ml-[254px]" : "ml-[0px]"
        }`}
      >
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </section>
    </>
  );
}

export default App;