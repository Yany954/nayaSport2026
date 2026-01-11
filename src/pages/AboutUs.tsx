import { Target, Eye, Award, Users, TrendingUp, Heart } from 'lucide-react';
import { motion } from 'framer-motion';


const AboutUs = () => {
  const timeline = [
    { year: '2009', event: 'Fundación de Naya Sport', desc: 'Inicio de operaciones en Bogotá' },
    { year: '2015', event: 'Expansión Nacional', desc: 'Apertura sede Curumaní, Cesar' },
    { year: '2020', event: 'Innovación Digital', desc: 'Lanzamiento tienda virtual' },
    { year: '2024', event: 'Líder en personalización', desc: '+500 equipos vestidos' }
  ];

  const values = [
    { icon: <Award size={32} />, title: 'Calidad Premium', desc: 'Telas DryFit 100% poliéster de alta tecnología' },
    { icon: <Users size={32} />, title: 'Compromiso', desc: 'Cada cliente es único y merece lo mejor' },
    { icon: <TrendingUp size={32} />, title: 'Innovación', desc: 'Diseños digitales antes de producir' },
    { icon: <Heart size={32} />, title: 'Pasión Deportiva', desc: 'Amamos el deporte tanto como tú' }
  ];

  const clients = [
    'Universidad EAN', 'COOMEVA', 'La Equidad', 'Uniminuto',
    'San Antonio', 'COMFABOY', 'Liga Guainía', 
    'Escuela El Minuto FC', 'Ubaté FC', 'REFEREE'
  ];

  // Variantes para animaciones al hacer scroll
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
      <div className="min-h-screen bg-white text-gray-900">
        <main className="pt-16">
          {/* Hero Section */}
          <section className="pt-24 pb-16 px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-white opacity-70"></div>
            
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="max-w-5xl mx-auto text-center relative z-10"
            >
              <div className="inline-block mb-6">
                <span className="bg-cyan-100 text-cyan-600 px-4 py-2 rounded-full text-sm font-semibold">
                  🇨🇴 Orgullosamente Colombianos
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                Más que uniformes,
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-900"> somos equipo</span>
              </h1>
              <p className="text-2xl text-gray-600 font-light italic">
                15 años vistiendo la pasión de Colombia
              </p>
            </motion.div>
          </section>

          {/* Story Section */}
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <h2 className="text-4xl font-black mb-6 text-blue-900">Nuestra Trayectoria</h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Desde hace más de una década, hemos trabajado con instituciones de prestigio como la <span className="font-bold text-cyan-600">Universidad EAN</span>, <span className="font-bold text-cyan-600">COOMEVA</span>, <span className="font-bold text-cyan-600">La Equidad</span> y la <span className="font-bold text-cyan-600">Fundación San Antonio</span>.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Nuestra pasión por el deporte nos ha convertido en el aliado preferido de equipos profesionales y escolares en toda Colombia.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Cada puntada lleva el orgullo de ser <span className="font-bold text-blue-900">100% colombianos</span>, apoyando la industria nacional.
                  </p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-900 rounded-3xl transform rotate-3 opacity-20"></div>
                  <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                    <div className="grid grid-cols-2 gap-6">
                      {[
                        { val: '15+', lab: 'Años de experiencia', color: 'text-cyan-600' },
                        { val: '500+', lab: 'Equipos vestidos', color: 'text-blue-900' },
                        { val: '100%', lab: 'Hecho en Colombia', color: 'text-cyan-600' },
                        { val: '2', lab: 'Sedes nacionales', color: 'text-blue-900' }
                      ].map((stat, i) => (
                        <div key={i} className="bg-gray-50 p-6 rounded-2xl text-center hover:bg-white hover:shadow-md transition-all">
                          <div className={`text-4xl font-black ${stat.color} mb-2`}>{stat.val}</div>
                          <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">{stat.lab}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-black text-center mb-12">Nuestro Camino</h2>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 to-blue-900 hidden md:block"></div>
                
                <div className="space-y-12">
                  {timeline.map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className={`flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
                    >
                      <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        <div className="bg-white p-6 rounded-2xl shadow-lg border-b-4 border-cyan-400">
                          <div className="text-3xl font-black text-cyan-500 mb-2">{item.year}</div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{item.event}</h3>
                          <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                      </div>
                      <div className="w-4 h-4 bg-cyan-400 rounded-full border-4 border-white shadow-lg relative z-10 hidden md:block"></div>
                      <div className="flex-1"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-3xl shadow-xl p-8 border-l-8 border-cyan-400"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-cyan-400 rounded-2xl flex items-center justify-center text-white">
                      <Target size={28} />
                    </div>
                    <h2 className="text-3xl font-black">Misión</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Proporcionar soluciones deportivas personalizadas de alta calidad que empoderen a atletas a alcanzar su máximo potencial a través de una experiencia de compra única.
                  </p>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-3xl shadow-xl p-8 border-l-8 border-blue-900"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-blue-900 rounded-2xl flex items-center justify-center text-white">
                      <Eye size={28} />
                    </div>
                    <h2 className="text-3xl font-black">Visión</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Ser la tienda deportiva virtual líder en personalización en Colombia, reconocida por la innovación técnica y el compromiso con la identidad de cada equipo.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-black text-center mb-12">Nuestros Valores</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-6 rounded-2xl shadow-md text-center border-t-4 border-cyan-400"
                  >
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-900 rounded-xl text-cyan-400 mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                    <p className="text-gray-500 text-sm leading-snug">{value.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Colombian Pride */}
          <section className="py-20 px-4 bg-gradient-to-br from-yellow-50 via-blue-50 to-red-50 text-center">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-6xl mb-6">🇨🇴</div>
              <h2 className="text-4xl font-black mb-6">El Orgullo de lo Nuestro</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Nuestra producción es <span className="font-bold text-blue-900">100% nacional</span>. Usamos telas <span className="font-bold text-cyan-600">especiales</span> de alta tecnología de acuerdo a las necesidades del cliente.
              </p>
              <div className="inline-flex bg-white px-6 py-3 rounded-full shadow-lg font-bold text-sm text-gray-600">
                🌱 Industria Local • 🏆 Calidad Garantizada • 🏭 Empleo Nacional
              </div>
            </motion.div>
          </section>

          {/* Clients Gallery */}
          <section className="py-16 px-4 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-black text-center mb-12">Han Confiado en Nosotros</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {clients.map((client, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ backgroundColor: '#1f2937' }}
                    className="bg-gray-800 p-4 rounded-xl text-center border border-gray-700"
                  >
                    <div className="font-bold text-xs uppercase tracking-widest text-cyan-400">{client}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>

       
      </div>
   
  );
};

export default AboutUs;