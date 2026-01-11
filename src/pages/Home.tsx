// src/pages/Home.tsx
// Ejemplo de cómo usar los componentes reutilizables
import React, { useState } from 'react';
import { ChevronRight, Check, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const clients = [
    'Universidad EAN', 'COOMEVA', 'La Equidad', 
    'Uniminuto', 'Fundación San Antonio', 'COMFABOY'
  ];

  const benefits = [
    { icon: '💧', title: 'Tecnología DryFit', desc: 'Telas nacionales de secado rápido 100% poliéster' },
    { icon: '👕', title: 'Desde 10 unidades', desc: 'Ideal para equipos pequeños y grandes empresas' },
    { icon: '🚚', title: 'Envíos Nacionales', desc: 'Llegamos a toda Colombia con pago contraentrega' },
    { icon: '🎨', title: 'Diseño Digital', desc: 'Creamos tu montaje full color antes de fabricar' }
  ];

  const uniformGallery = [
    { name: 'Fútbol Profesional', client: 'La Equidad', color: 'bg-green-600' },
    { name: 'Basketball Universitario', client: 'Universidad EAN', color: 'bg-blue-700' },
    { name: 'Ciclismo Elite', client: 'COOMEVA', color: 'bg-red-600' },
    { name: 'Voleibol Escolar', client: 'Uniminuto', color: 'bg-purple-600' },
    { name: 'Atletismo', client: 'San Antonio', color: 'bg-yellow-600' },
    { name: 'Fútbol Infantil', client: 'El Minuto FC', color: 'bg-orange-600' }
  ];

  const testimonials = [
    { name: 'Carlos Rodríguez', team: 'Ubaté FC', text: 'Calidad excepcional y entrega a tiempo. Nuestros jugadores están felices.' },
    { name: 'Ana Martínez', team: 'Liga Guainía', text: 'Los diseños superaron nuestras expectativas. 100% recomendados.' }
  ];

  // Variantes de animación para Framer Motion
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="pt-24 pb-12 px-4 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              variants={fadeInUp}
            >
              <motion.div 
                className="inline-block"
                whileHover={{ scale: 1.05 }}
              >
                <span className="bg-cyan-100 text-cyan-600 px-4 py-2 rounded-full text-sm font-semibold">
                  🇨🇴 Hecho en Colombia
                </span>
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
                Lleva la identidad de tu equipo al 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-900"> siguiente nivel</span>
              </h1>
              <p className="text-xl text-gray-600">
                Diseño 100% personalizado con tecnología DryFit y más de <span className="font-bold text-cyan-500">15 años de experiencia</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-cyan-400 hover:bg-cyan-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Cotiza tu diseño ahora
                  <ChevronRight size={20} />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all"
                >
                  Ver galería
                </motion.button>
              </div>
              <motion.div 
                className="flex items-center gap-8 pt-4"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {[
                  { value: '15+', label: 'Años de experiencia' },
                  { value: '500+', label: 'Equipos vestidos' },
                  { value: '10', label: 'Unidades mínimas' }
                ].map((stat, idx) => (
                  <motion.div key={idx} variants={fadeInUp}>
                    <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-900/20 rounded-3xl transform rotate-3"></div>
              <motion.div 
                className="relative bg-white rounded-3xl shadow-2xl p-8 transform -rotate-1"
                whileHover={{ rotate: 0, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-square bg-gradient-to-br from-cyan-400 to-blue-900 rounded-2xl flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-6xl mb-4">👕</div>
                    <div className="text-2xl font-bold">Unique Sporty Style</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Clients Bar */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-600 mb-8 text-sm uppercase tracking-wide">
            Nuestras prendas han vestido a
          </p>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {clients.map((client, idx) => (
              <motion.div 
                key={idx} 
                className="text-center opacity-60 hover:opacity-100 transition-opacity"
                variants={fadeInUp}
                whileHover={{ scale: 1.1 }}
              >
                <div className="font-bold text-gray-700">{client}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
              ¿Por qué Naya Sport?
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Combinamos tecnología de punta con experiencia artesanal para crear uniformes que inspiran
            </p>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, idx) => (
              <motion.div 
                key={idx} 
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
                variants={fadeInUp}
                whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
              Nuestras Creaciones
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Cada uniforme cuenta una historia de pasión y dedicación
            </p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {uniformGallery.map((item, idx) => (
              <motion.div 
                key={idx} 
                className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`absolute inset-0 ${item.color} transition-transform group-hover:scale-110`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-white font-bold text-lg">{item.name}</h3>
                  <p className="text-gray-300 text-sm">{item.client}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
              Proceso Simple
            </h2>
            <p className="text-center text-gray-600 mb-16">
              De la idea a la cancha en tres pasos
            </p>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { num: '01', title: 'Cotiza', desc: 'Elige tu prenda y cantidad. Mínimo 10 unidades' },
              { num: '02', title: 'Diseña', desc: 'Envíanos tu idea o logos en PDF. Creamos el montaje digital' },
              { num: '03', title: 'Recibe', desc: 'Entrega en 15-20 días hábiles a todo Colombia' }
            ].map((step, idx) => (
              <motion.div 
                key={idx} 
                className="relative"
                variants={fadeInUp}
              >
                <div className="text-8xl font-black text-cyan-100 absolute -top-8 -left-4 -z-10">
                  {step.num}
                </div>
                <motion.div 
                  className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-cyan-400"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-black text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Lo que dicen nuestros capitanes
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((test, idx) => (
              <motion.div 
                key={idx} 
                className="bg-white p-8 rounded-2xl shadow-lg"
                variants={fadeInUp}
                whileHover={{ y: -8 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{test.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-900 rounded-full"></div>
                  <div>
                    <div className="font-bold text-gray-900">{test.name}</div>
                    <div className="text-sm text-gray-600">{test.team}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-br from-blue-900 to-cyan-600 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            ¿Listo para vestir a tu equipo?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Obtén una cotización personalizada en menos de 24 horas
          </p>
          <motion.button 
            className="bg-white text-blue-900 px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar cotización gratis
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;