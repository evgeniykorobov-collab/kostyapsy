'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleServices = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsServicesOpen(!isServicesOpen);
  };

  const closeMenus = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #eaeaea' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>
        <Link href="/" onClick={closeMenus} className="brand-link" style={{ fontFamily: 'var(--font-lora)', fontSize: '22px', fontWeight: 600, color: 'var(--color-text-main)', lineHeight: 1.1 }}>
          Константин Альбертович
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <Link href="/about" className="nav-link">О специалисте</Link>
          <div style={{ position: 'relative' }} className="nav-dropdown-container">
            <button className="nav-link" onClick={toggleServices} style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', cursor: 'pointer', fontFamily: 'var(--font-inter)', fontSize: '16px', color: 'var(--color-text-main)' }}>
              Услуги <ChevronDown size={16} style={{ marginLeft: '4px' }} />
            </button>
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  style={{ position: 'absolute', top: '100%', left: 0, backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', padding: '12px 0', minWidth: '280px', marginTop: '8px' }}
                >
                  <Link href="/uslugi/razvod" className="dropdown-link" onClick={closeMenus}>Развод и расставание</Link>
                  <Link href="/uslugi/poterya" className="dropdown-link" onClick={closeMenus}>Потеря и горе</Link>
                  <Link href="/uslugi/vygoranie" className="dropdown-link" onClick={closeMenus}>Выгорание и увольнение</Link>
                  <Link href="/uslugi/ekzistencialnyj-tupik" className="dropdown-link" onClick={closeMenus}>Экзистенциальный тупик</Link>
                  <Link href="/uslugi/ostrye-sostoyaniya" className="dropdown-link" onClick={closeMenus}>Острые состояния и паника</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link href="/metody" className="nav-link">Метод</Link>
          <Link href="/astro" className="nav-link">Карта</Link>
          <Link href="/chakry" className="nav-link">Чакры</Link>
          <Link href="/blog" className="nav-link">Блог</Link>
          <Link href="/kontakty" className="nav-link">Контакты</Link>
          <Link href="/zapis" className="btn" style={{ marginLeft: '16px', padding: '10px 20px' }}>Записаться</Link>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={toggleMenu} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}>
          {isOpen ? <X size={28} color="var(--color-text-main)" /> : <Menu size={28} color="var(--color-text-main)" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: 'hidden', backgroundColor: '#fff', borderBottom: '1px solid #eaeaea' }}
          >
            <div className="container" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Link href="/about" onClick={closeMenus} className="mobile-nav-link">О специалисте</Link>
              
              <div style={{ padding: '12px 0' }}>
                <div style={{ fontWeight: 600, color: 'var(--color-text-light)', marginBottom: '12px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Услуги и направления</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingLeft: '12px', borderLeft: '2px solid #eaeaea' }}>
                  <Link href="/uslugi/razvod" onClick={closeMenus} className="mobile-nav-link">Развод и расставание</Link>
                  <Link href="/uslugi/poterya" onClick={closeMenus} className="mobile-nav-link">Потеря и горе</Link>
                  <Link href="/uslugi/vygoranie" onClick={closeMenus} className="mobile-nav-link">Выгорание и увольнение</Link>
                  <Link href="/uslugi/ekzistencialnyj-tupik" onClick={closeMenus} className="mobile-nav-link">Экзистенциальный тупик</Link>
                  <Link href="/uslugi/ostrye-sostoyaniya" onClick={closeMenus} className="mobile-nav-link">Острые состояния и паника</Link>
                </div>
              </div>

              <Link href="/metody" onClick={closeMenus} className="mobile-nav-link">Метод</Link>
              <Link href="/astro" onClick={closeMenus} className="mobile-nav-link">Ведическая карта</Link>
              <Link href="/chakry" onClick={closeMenus} className="mobile-nav-link">Система чакр</Link>
              <Link href="/blog" onClick={closeMenus} className="mobile-nav-link">Блог</Link>
              <Link href="/kontakty" onClick={closeMenus} className="mobile-nav-link">Контакты</Link>

              <Link href="/zapis" onClick={closeMenus} className="btn" style={{ width: '100%', marginTop: '16px', justifyContent: 'center' }}>Записаться на консультацию</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}
