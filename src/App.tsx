import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AnalyticsTracker } from './components/AnalyticsTracker';

// Pages
import { Home } from './pages/Home';
import { Nosotros } from './pages/Nosotros';
import { Servicios } from './pages/Servicios';
import { ServiceDetail } from './pages/ServiceDetail';
import { Contacto } from './pages/Contacto';
import { AbogadosMedellin } from './pages/AbogadosMedellin';
import { AbogadosItagui } from './pages/AbogadosItagui';
import { AbogadosPoblado } from './pages/AbogadosPoblado';
import { AbogadosEnvigado } from './pages/AbogadosEnvigado';
import { NotFound } from './pages/NotFound';
import { Legales } from './pages/Legales';

export function AppContent() {
  return (
    <>
      <ScrollToTop />
      <AnalyticsTracker />
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

            {/* Landing Local SEO: Abogados en Medellín */}
            <Route path="/abogados-medellin" element={<AbogadosMedellin />} />
            <Route path="/abogados-medellin/" element={<AbogadosMedellin />} />

            {/* Landing Local SEO: Abogados en Itagüí */}
            <Route path="/abogados-itagui" element={<AbogadosItagui />} />
            <Route path="/abogados-itagui/" element={<AbogadosItagui />} />

            {/* Landing Local SEO: Abogados en El Poblado */}
            <Route path="/abogados-poblado" element={<AbogadosPoblado />} />
            <Route path="/abogados-poblado/" element={<AbogadosPoblado />} />

            {/* Landing Local SEO: Abogados en Envigado */}
            <Route path="/abogados-envigado" element={<AbogadosEnvigado />} />
            <Route path="/abogados-envigado/" element={<AbogadosEnvigado />} />

            {/* Páginas Legales (No-indexadas) */}
            <Route path="/legales" element={<Legales />} />
            <Route path="/politica-de-privacidad" element={<Legales />} />
            <Route path="/terminos-y-condiciones" element={<Legales />} />

            {/* Ruta 404 para cualquier URL inexistente */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
