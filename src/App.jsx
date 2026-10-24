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

  // Dynamic On-Page SEO: Title & Meta Description Per Page
  useEffect(() => {
    const titles = {
      'home': 'Advocate Jagadish Chandra Halder | Civil Advocate, High Court, Calcutta',
      'about': 'About Advocate Jagadish Chandra Halder | High Court Bar Room 15, Calcutta',
      'practice-areas': 'Civil Practice Areas | High Court Appeals, Title Suits & Writs | Adv. Jagadish Halder',
      'chambers': 'Chambers & Offices | High Court Bar Room 15, Garia & Kakdwip | Adv. Jagadish Halder',
      'contact': 'Contact & Appointments | Advocate Jagadish Chandra Halder | +91 9830243096'
    };

    const descriptions = {
      'home': 'Official website of Advocate Jagadish Chandra Halder, Advocate at High Court, Calcutta (Bar Association Room No. 15, 2nd Floor). Over 25 years specializing in Land & Property Disputes, Title Suits, Partition, First & Second Appeals (Section 100 CPC), Civil Revisions & Writ Petitions in Kolkata and South 24-Parganas.',
      'about': 'Professional profile of Advocate Jagadish Chandra Halder, seasoned civil counsel with over 25 years at the Calcutta High Court and District Courts of West Bengal.',
      'practice-areas': 'Comprehensive civil litigation competencies: Land & Property Disputes, Title Suits, Section 100 CPC Second Appeals, Article 226 Writs, Partition Suits, and Injunctions.',
      'chambers': 'Three accessible legal chambers: High Court Bar Association Room 15, Garia Chamber (Kolkata), and Kakdwip Chamber (South 24-Parganas). Full addresses & timings.',
      'contact': 'Request a case review or consultation appointment with Advocate Jagadish Chandra Halder. Direct helpline: +91 9830243096, email: jagadish123halder@gmail.com.'
    };

    if (titles[activePage]) {
      document.title = titles[activePage];
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && descriptions[activePage]) {
      metaDesc.setAttribute('content', descriptions[activePage]);
    }
  }, [activePage]);

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
