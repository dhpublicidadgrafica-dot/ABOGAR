import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import { SERVICES } from '../data/services';
import { Button } from './Button';
import { LogoAbogar } from './LogoAbogar';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesExpanded, setIsMobileServicesExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Handle scroll shadow/appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    setIsMobileServicesExpanded(false);
  }, [location.pathname]);

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-3'
          : 'bg-white border-b border-slate-200 py-4'
      }`}
    >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Firm Name */}
            <Link
              to="/"
              className="flex items-center group focus:outline-none py-0.5 transition-opacity hover:opacity-90"
              aria-label="ABOGAR Grupo Jurídico - Página de inicio"
            >
              <LogoAbogar className="h-10 sm:h-12 w-auto max-w-[210px] sm:max-w-[260px]" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link
                to="/"
                className={`px-3.5 py-2 text-sm font-medium rounded transition-colors ${
                  isActive('/') && location.pathname === '/'
                    ? 'text-[#15297C] font-semibold bg-[#15297C]/5'
                    : 'text-slate-700 hover:text-[#15297C] hover:bg-slate-50'
                }`}
              >
                Inicio
              </Link>

              <Link
                to="/nosotros"
                className={`px-3.5 py-2 text-sm font-medium rounded transition-colors ${
                  isActive('/nosotros')
                    ? 'text-[#15297C] font-semibold bg-[#15297C]/5'
                    : 'text-slate-700 hover:text-[#15297C] hover:bg-slate-50'
                }`}
              >
                Nosotros
              </Link>

              {/* Services Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <div className="flex items-center">
                  <Link
                    to="/servicios"
                    className={`pl-3.5 pr-1.5 py-2 text-sm font-medium rounded-l transition-colors ${
                      isActive('/servicios')
                        ? 'text-[#15297C] font-semibold bg-[#15297C]/5'
                        : 'text-slate-700 hover:text-[#15297C] hover:bg-slate-50'
                    }`}
                  >
                    Servicios
                  </Link>
                  <button
                    type="button"
                    onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                    aria-expanded={isServicesDropdownOpen}
                    aria-label="Abrir catálogo de servicios jurídicos"
                    className={`pr-2.5 pl-1 py-2 text-sm rounded-r transition-colors cursor-pointer ${
                      isActive('/servicios')
                        ? 'text-[#15297C] bg-[#15297C]/5'
                        : 'text-slate-700 hover:text-[#15297C] hover:bg-slate-50'
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                        isServicesDropdownOpen ? 'rotate-180 text-[#15297C]' : ''
                      }`}
                    />
                  </button>
                </div>

                {/* Dropdown Menu (12 services) */}
                {isServicesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-[580px] max-h-[85vh] overflow-y-auto bg-white rounded-lg shadow-xl border border-slate-200 p-4 grid grid-cols-2 gap-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="col-span-2 pb-2 mb-2 border-b border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        12 Áreas de Práctica Jurídica
                      </span>
                      <Link
                        to="/servicios"
                        onClick={() => setIsServicesDropdownOpen(false)}
                        className="text-xs text-[#15297C] hover:underline font-semibold flex items-center gap-1"
                      >
                        <span>Ver todas</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    {SERVICES.map((service) => (
                      <Link
                        key={service.id}
                        to={`/servicios/${service.slug}`}
                        onClick={() => setIsServicesDropdownOpen(false)}
                        className={`p-2.5 rounded-md hover:bg-slate-50 flex flex-col group transition-colors ${
                          location.pathname === `/servicios/${service.slug}`
                            ? 'bg-[#15297C]/5 border-l-2 border-[#15297C]'
                            : ''
                        }`}
                      >
                        <span className="text-xs font-semibold text-slate-900 group-hover:text-[#15297C] transition-colors leading-tight">
                          {service.nombre}
                        </span>
                        <span className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                          {service.descripcionCorta}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/contacto"
                className={`px-3.5 py-2 text-sm font-medium rounded transition-colors ${
                  isActive('/contacto')
                    ? 'text-[#15297C] font-semibold bg-[#15297C]/5'
                    : 'text-slate-700 hover:text-[#15297C] hover:bg-slate-50'
                }`}
              >
                Contacto
              </Link>
            </nav>

            {/* CTA Button in header */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                to={SITE_CONFIG.contacto.whatsappLink}
                external
                variant="primary"
                size="sm"
                icon={<ArrowRight className="w-3.5 h-3.5 text-[#FFE19E]" />}
              >
                Solicitar consulta
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Button
                to={SITE_CONFIG.contacto.whatsappLink}
                external
                variant="primary"
                size="sm"
                className="hidden sm:inline-flex"
              >
                Consulta
              </Button>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
                aria-label="Abrir menú de navegación"
                className="p-2.5 rounded-md text-slate-700 hover:text-[#15297C] hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#15297C] cursor-pointer"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 max-h-[80vh] overflow-y-auto shadow-lg"
          >
            <div className="flex flex-col space-y-1">
              <Link
                to="/"
                className={`px-4 py-3 rounded-md text-base font-medium transition-colors ${
                  isActive('/') && location.pathname === '/'
                    ? 'bg-[#15297C] text-white'
                    : 'text-slate-800 hover:bg-slate-100'
                }`}
              >
                Inicio
              </Link>

              <Link
                to="/nosotros"
                className={`px-4 py-3 rounded-md text-base font-medium transition-colors ${
                  isActive('/nosotros')
                    ? 'bg-[#15297C] text-white'
                    : 'text-slate-800 hover:bg-slate-100'
                }`}
              >
                Nosotros
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <div className="flex items-center justify-between px-4 py-3 rounded-md hover:bg-slate-100">
                  <Link
                    to="/servicios"
                    className="text-base font-medium text-slate-800 flex-1"
                  >
                    Servicios Jurídicos
                  </Link>
                  <button
                    type="button"
                    onClick={() => setIsMobileServicesExpanded(!isMobileServicesExpanded)}
                    aria-label="Desplegar los 12 servicios jurídicos"
                    className="p-1 text-slate-500"
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        isMobileServicesExpanded ? 'rotate-180 text-[#15297C]' : ''
                      }`}
                    />
                  </button>
                </div>

                {isMobileServicesExpanded && (
                  <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50 rounded-md border border-slate-100 mt-1">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.id}
                        to={`/servicios/${s.slug}`}
                        className={`block px-3 py-2 text-sm rounded transition-colors ${
                          location.pathname === `/servicios/${s.slug}`
                            ? 'text-[#15297C] font-bold bg-[#15297C]/10'
                            : 'text-slate-700 hover:text-[#15297C] hover:bg-slate-200/50'
                        }`}
                      >
                        {s.nombre}
                      </Link>
                    ))}
                    <Link
                      to="/servicios"
                      className="block px-3 py-2 text-xs font-semibold text-[#15297C] underline"
                    >
                      Ver todos los 12 servicios →
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/contacto"
                className={`px-4 py-3 rounded-md text-base font-medium transition-colors ${
                  isActive('/contacto')
                    ? 'bg-[#15297C] text-white'
                    : 'text-slate-800 hover:bg-slate-100'
                }`}
              >
                Contacto
              </Link>

              <div className="pt-4 mt-3 border-t border-slate-100">
                <Button
                  to={SITE_CONFIG.contacto.whatsappLink}
                  external
                  variant="primary"
                  size="lg"
                  className="w-full"
                  icon={<ArrowRight className="w-4 h-4 ml-1 text-[#FFE19E]" />}
                >
                  Solicitar consulta
                </Button>

                <div className="mt-4 pt-3 text-xs text-slate-500 space-y-1">
                  <p><strong>Teléfono:</strong> {SITE_CONFIG.contacto.telefono}</p>
                  <p><strong>Horario:</strong> {SITE_CONFIG.contacto.horario}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
  );
};
