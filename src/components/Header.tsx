import { motion } from "motion/react";
import { TabType } from "../types";
import { Shield, Sparkles, Building2, ChevronRight, Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  onContactSales: () => void;
}

export default function Header({ activeTab, setActiveTab, onContactSales }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs: { id: TabType; label: string }[] = [
    { id: "products", label: "Products" },
    { id: "solutions", label: "Solutions" },
    { id: "pricing", label: "Pricing" },
    { id: "about", label: "About & Sales" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div 
          onClick={() => setActiveTab("products")}
          className="flex cursor-pointer items-center space-x-2.5 transition-opacity hover:opacity-90"
          id="logo-container"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 shadow-md shadow-blue-500/20">
            <Shield className="h-5 w-5 text-white" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Enterprise<span className="text-blue-600">Core</span>
            </span>
            <span className="hidden sm:inline-block ml-2 text-[10px] font-medium uppercase tracking-widest text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
              v2.8
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1" id="desktop-nav">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`nav-tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 text-sm font-semibold transition-colors duration-150 rounded-xl ${
                  isActive ? "text-[#3b82f6]" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-[#f1f5f9] rounded-xl -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center space-x-4" id="header-actions">
          <button
            onClick={() => setActiveTab("pricing")}
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Pricing Plans
          </button>
          <button
            id="header-contact-btn"
            onClick={onContactSales}
            className="inline-flex items-center justify-center rounded-xl bg-[#3b82f6] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-600 hover:shadow-md focus:outline-none active:scale-95"
          >
            Contact Sales
            <ChevronRight className="ml-1 h-4 w-4" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden" id="mobile-menu-trigger">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="border-b border-slate-200 bg-white px-4 pb-6 pt-2 md:hidden shadow-lg"
          id="mobile-drawer"
        >
          <div className="space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex w-full items-center rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                  activeTab === tab.id
                    ? "bg-[#f1f5f9] text-[#3b82f6]"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="mt-4 border-t border-slate-100 pt-4 space-y-2 px-4">
            <button
              onClick={() => {
                setActiveTab("pricing");
                setMobileMenuOpen(false);
              }}
              className="flex w-full justify-center rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Pricing
            </button>
            <button
              onClick={() => {
                onContactSales();
                setMobileMenuOpen(false);
              }}
              className="flex w-full justify-center rounded-xl bg-[#3b82f6] px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-600 shadow-md shadow-blue-500/10"
            >
              Contact Sales
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
