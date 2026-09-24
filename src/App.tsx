import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

// Pages
import { Home } from './pages/Home';
import { Nosotros } from './pages/Nosotros';
import { Servicios } from './pages/Servicios';
import { ServiceDetail } from './pages/ServiceDetail';
import { Contacto } from './pages/Contacto';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-[#FFE19E] selection:text-[#15297C]">
        <Header />
        <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
          <Routes>
            {/* 1. Inicio */}
            <Route path="/" element={<Home />} />

            {/* 2. Nosotros */}
            <Route path="/nosotros" element={<Nosotros />} />

            {/* 3. Servicios Índice */}
            <Route path="/servicios" element={<Servicios />} />

            {/* Páginas individuales de los 12 servicios jurídicos */}
            <Route path="/servicios/:slug" element={<ServiceDetail />} />

            {/* 4. Contacto */}
            <Route path="/contacto" element={<Contacto />} />

            {/* Ruta 404 para cualquier URL inexistente */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
}
