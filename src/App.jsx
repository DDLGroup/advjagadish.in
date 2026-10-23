import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DisclaimerModal from './components/DisclaimerModal';
import QuickContactFloating from './components/QuickContactFloating';
import AppointmentModal from './components/AppointmentModal';

import Home from './pages/Home';
import About from './pages/About';
import PracticeAreas from './pages/PracticeAreas';
import Chambers from './pages/Chambers';
import Contact from './pages/Contact';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [preselectedChamber, setPreselectedChamber] = useState(null);
  const [forceDisclaimerOpen, setForceDisclaimerOpen] = useState(false);

  // Sync with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      const validPages = ['home', 'about', 'practice-areas', 'chambers', 'contact'];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      } else if (!hash) {
        setActivePage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenAppointment = (chamberId = null) => {
    setPreselectedChamber(chamberId || null);
    setIsAppointmentOpen(true);
  };

  const handleCloseAppointment = () => {
    setIsAppointmentOpen(false);
    setPreselectedChamber(null);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} onOpenAppointment={() => handleOpenAppointment()} />;
      case 'about':
        return <About setActivePage={setActivePage} onOpenAppointment={() => handleOpenAppointment()} />;
      case 'practice-areas':
        return <PracticeAreas onOpenAppointment={() => handleOpenAppointment()} />;
      case 'chambers':
        return <Chambers onOpenAppointment={(chamberId) => handleOpenAppointment(chamberId)} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActivePage={setActivePage} onOpenAppointment={() => handleOpenAppointment()} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-black selection:text-white font-sans">
      {/* BCI Statutory Compliance Disclaimer Modal */}
      <DisclaimerModal
        forceOpen={forceDisclaimerOpen}
        onClose={() => setForceDisclaimerOpen(false)}
      />

      {/* Appointment Consultation Modal */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={handleCloseAppointment}
        preselectedChamber={preselectedChamber}
      />

      {/* Global Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenAppointment={() => handleOpenAppointment()}
      />

      {/* Active Page Body */}
      <main className="flex-1 w-full animate-fadeIn">
        {renderPage()}
      </main>

      {/* Floating Call & WhatsApp Buttons */}
      <QuickContactFloating
        onOpenAppointment={() => handleOpenAppointment()}
      />

      {/* Global Footer */}
      <Footer
        setActivePage={setActivePage}
        onOpenDisclaimer={() => setForceDisclaimerOpen(true)}
        onOpenAppointment={() => handleOpenAppointment()}
      />
    </div>
  );
}
