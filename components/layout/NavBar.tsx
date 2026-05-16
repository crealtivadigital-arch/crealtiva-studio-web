"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navigation, WHATSAPP_URL } from "@/lib/data/navigation";
import Button from "@/components/ui/Button";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const serviceGroups = navigation.find((n) => n.label === "Servicios")?.children ?? [];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0" onClick={() => setMenuOpen(false)}>
          <span
            className="font-alex text-2xl text-ink"
            style={{ fontFamily: "var(--font-alex)" }}
          >
            Crealtiva Studio
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Link
            href="/"
            className="kicker text-ink/70 hover:text-ink transition-colors"
          >
            Inicio
          </Link>

          {/* Servicios dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="kicker text-ink/70 hover:text-ink transition-colors flex items-center gap-1">
              Servicios
              <svg
                className={`w-3 h-3 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[640px] bg-white border border-pearl shadow-xl p-6"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                >
                  <div className="grid grid-cols-2 gap-6">
                    {serviceGroups.map((group) => (
                      <div key={group.label}>
                        <p className="kicker text-champagne mb-3">{group.label}</p>
                        <ul className="space-y-2">
                          {group.children?.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                className={`flex items-center gap-2 text-sm font-montserrat transition-colors ${
                                  item.featured
                                    ? "text-ink font-medium hover:text-rose-deep"
                                    : "text-ink/70 hover:text-ink"
                                }`}
                                onClick={() => setServicesOpen(false)}
                              >
                                {item.featured && (
                                  <span className="w-1.5 h-1.5 rounded-full bg-dusky-rose flex-shrink-0" />
                                )}
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 pt-4 border-t border-pearl">
                    <p className="text-xs font-montserrat text-ink/50">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-dusky-rose" />
                        Servicios destacados — mayor demanda y retorno
                      </span>
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/portafolio" className="kicker text-ink/70 hover:text-ink transition-colors">
            Portafolio
          </Link>
          <Link href="/nosotros" className="kicker text-ink/70 hover:text-ink transition-colors">
            Nosotros
          </Link>
          <Link href="/contacto" className="kicker text-ink/70 hover:text-ink transition-colors">
            Contacto
          </Link>
        </div>

        {/* CTA Desktop */}
        <div className="hidden lg:block">
          <Button href={WHATSAPP_URL} external size="sm">
            Cotizar
          </Button>
        </div>

        {/* Hamburger mobile */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <motion.span
            className="block w-6 h-px bg-ink"
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
          />
          <motion.span
            className="block w-6 h-px bg-ink"
            animate={{ opacity: menuOpen ? 0 : 1 }}
          />
          <motion.span
            className="block w-6 h-px bg-ink"
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 top-16 bg-white z-30 overflow-y-auto px-6 py-8"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.25 }}
          >
            <nav className="flex flex-col gap-6">
              <Link href="/" className="kicker text-ink" onClick={() => setMenuOpen(false)}>
                Inicio
              </Link>
              <div>
                <p className="kicker text-champagne mb-4">Servicios</p>
                {serviceGroups.map((group) => (
                  <div key={group.label} className="mb-4">
                    <p className="text-xs font-montserrat text-ink/50 uppercase tracking-widest mb-2">
                      {group.label}
                    </p>
                    <ul className="space-y-2 pl-2">
                      {group.children?.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={`text-sm font-montserrat ${
                              item.featured ? "text-ink font-medium" : "text-ink/70"
                            }`}
                            onClick={() => setMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <Link href="/portafolio" className="kicker text-ink" onClick={() => setMenuOpen(false)}>
                Portafolio
              </Link>
              <Link href="/nosotros" className="kicker text-ink" onClick={() => setMenuOpen(false)}>
                Nosotros
              </Link>
              <Link href="/contacto" className="kicker text-ink" onClick={() => setMenuOpen(false)}>
                Contacto
              </Link>
              <div className="pt-4 border-t border-pearl">
                <Button href={WHATSAPP_URL} external size="lg" className="w-full justify-center">
                  Cotizar por WhatsApp
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
