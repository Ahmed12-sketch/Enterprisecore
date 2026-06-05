import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsTab from "./components/ProductsTab";
import SolutionsTab from "./components/SolutionsTab";
import AboutTab from "./components/AboutTab";
import PricingTab from "./components/PricingTab";
import { TabType } from "./types";

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>("products");

  // Smooth scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  const handleContactSales = () => {
    setActiveTab("about");
    // Wait for About tab to mount and render, then scroll to form element
    setTimeout(() => {
      const salesSection = document.getElementById("sales-form-section");
      if (salesSection) {
        salesSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case "products":
        return <ProductsTab onContactSales={handleContactSales} />;
      case "solutions":
        return <SolutionsTab onContactSales={handleContactSales} />;
      case "about":
        return <AboutTab />;
      case "pricing":
        return <PricingTab onContactSales={handleContactSales} />;
      default:
        return <ProductsTab onContactSales={handleContactSales} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col font-sans" id="app-root-container">
      {/* Structural Header Navigation */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onContactSales={handleContactSales} 
      />

      {/* Main Area with Framer Motion page switch transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Corporate Compliance Brand Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
