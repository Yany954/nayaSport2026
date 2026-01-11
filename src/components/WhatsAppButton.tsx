// src/components/WhatsAppButton.tsx
import React from 'react';
import { Phone } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/573174703402"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all z-50 animate-bounce-slow"
      aria-label="Contactar por WhatsApp"
    >
      <Phone size={24} className="text-white" />
    </a>
  );
};

export default WhatsAppButton;