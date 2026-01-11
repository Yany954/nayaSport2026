// src/components/Footer.tsx
import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        {/* Column 1: Identity */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 transform rotate-45"></div>
            <span className="text-xl font-bold">NAYA SPORT</span>
          </div>
          <p className="text-gray-400 mb-2">Unique Sporty Style</p>
          <p className="text-cyan-400 font-semibold">🇨🇴 Orgullosamente Marca Colombiana</p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="font-bold mb-4">Navegación</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="/" className="hover:text-cyan-400 transition-colors">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/uniformes" className="hover:text-cyan-400 transition-colors">
                Uniformes
              </Link>
            </li>
            <li>
              <Link to="/preguntas" className="hover:text-cyan-400 transition-colors">
                Preguntas Frecuentes
              </Link>
            </li>
            <li>
              <Link to="/nosotros" className="hover:text-cyan-400 transition-colors">
                Sobre Nosotros
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3 className="font-bold mb-4">Contacto</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-start gap-2">
              <Phone size={18} className="mt-1 flex-shrink-0" />
              <a href="tel:+573174703402" className="hover:text-cyan-400 transition-colors">
                +57 317 4703402
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={18} className="mt-1 flex-shrink-0" />
              <a href="mailto:naya.sports@gmail.com" className="hover:text-cyan-400 transition-colors">
                naya.sports@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={18} className="mt-1 flex-shrink-0" />
              <div>
                <div>Bogotá: Calle 64 #23-28</div>
                <div className="text-sm">Barrio 7 de agosto</div>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={18} className="mt-1 flex-shrink-0" />
              <span>Curumaní, Cesar: Calle 3 #12-26</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Social */}
        <div>
          <h3 className="font-bold mb-4">Síguenos</h3>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/nayasportuniformes/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-400 transition-colors transform hover:scale-110"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/nayasport2017"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-400 transition-colors transform hover:scale-110"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
        <p>Naya Sport © 2026 | Diseñado y Confeccionado con pasión en Colombia</p>
      </div>
    </footer>
  );
};

export default Footer;