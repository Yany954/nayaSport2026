import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import PageTransition from './components/PageTransition';

// Importa tus páginas
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import FAQs from './pages/FAQS';
import CustomUniform from './pages/CustomUniform';

// Componente envolvedor para las transiciones
const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/nosotros"
          element={
            <PageTransition>
              <AboutUs />
            </PageTransition>
          }
        />
        <Route
          path="/contacto"
          element={
            <PageTransition>
              <ContactUs />
            </PageTransition>
          }
        />
        <Route
          path="/preguntas"
          element={
            <PageTransition>
              <FAQs />
            </PageTransition>
          }
        />
        <Route
          path="/uniformes"
          element={
            <PageTransition>
              <CustomUniform />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;