import { useState } from 'react';
import { ChevronDown, Search, Palette, Package, Clock, CreditCard, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


const Faqs = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todas', icon: <Package size={20} /> },
    { id: 'personalizacion', name: 'Personalización', icon: <Palette size={20} /> },
    { id: 'pedidos', name: 'Pedidos y Tiempos', icon: <Clock size={20} /> },
    { id: 'pagos', name: 'Pagos y Envíos', icon: <CreditCard size={20} /> }
  ];

  const faqs = [
    {
      category: 'personalizacion',
      question: '¿Cómo puedo personalizar mis uniformes deportivos?',
      answer: 'Envíanos una imagen o lluvia de ideas de cómo desean el diseño de los uniformes, con los logos en PDF. Tan pronto nos confirmen el pedido, realizamos el montaje digital full color para su aprobación.'
    },
    {
      category: 'personalizacion',
      question: '¿Qué opciones de personalización están disponibles?',
      answer: 'Tenemos disponibles varias plantillas de diseño. Solo debes enviarnos tus logos y los detalles que desees incluir. Puedes personalizar colores, diseños, y agregar tu identidad visual completa.'
    },
    {
      category: 'personalizacion',
      question: '¿Puedo agregar nombres y números a los uniformes?',
      answer: 'Sí, claro. Deben enviarnos una lista organizada con el nombre a estampar, el número y las tallas respectivamente.'
    },
    {
      category: 'pedidos',
      question: '¿Cuál es el proceso de pedido y personalización?',
      answer: 'Primero realizamos una cotización. Una vez aprobada, se requiere un anticipo del 50% para iniciar el diseño. Luego enviamos el montaje para tu aprobación final antes de confección.'
    },
    {
      category: 'pedidos',
      question: '¿Cuánto tiempo tarda en entregarse un pedido?',
      answer: 'El proceso demora de 15 a 20 días hábiles, dependiendo de las cantidades. El tiempo inicia una vez aprobado el diseño y recibido el anticipo.'
    },
    {
      category: 'pedidos',
      question: '¿Cuántos uniformes mínimo fabrican?',
      answer: 'Fabricamos desde un mínimo de 10 unidades en adelante para garantizar la calidad en la producción personalizada.'
    },
    {
      category: 'pagos',
      question: '¿Cómo se manejan los envíos?',
      answer: 'Envíos a nivel nacional vía Interrapidísimo o la empresa de tu preferencia, con pago contraentrega a cargo del cliente.'
    },
    {
      category: 'pagos',
      question: '¿Qué métodos de pago aceptan?',
      answer: 'Aceptamos transferencias a Bancolombia, Davivienda y Nequi.'
    },
    {
      category: 'pedidos',
      question: '¿Tienen experiencia con equipos reconocidos?',
      answer: 'Sí, más de 15 años. Hemos vestido a la Universidad EAN, COOMEVA, La Equidad, Uniminuto y muchas más.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
      <div className="min-h-screen bg-white text-gray-900">
        <main className="pt-16">
          {/* Hero Section */}
          <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-cyan-50 to-blue-50">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl font-black mb-6"
              >
                Preguntas
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-900"> Frecuentes</span>
              </motion.h1>
              <p className="text-xl text-gray-600 mb-8">
                Todo lo que necesitas saber sobre nuestros uniformes deportivos
              </p>

              {/* Search Bar */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-2xl mx-auto relative"
              >
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Busca tu pregunta..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-100 focus:border-cyan-400 outline-none transition-all text-lg shadow-sm"
                />
              </motion.div>
            </div>
          </section>

          {/* Categories */}
          <section className="py-8 px-4 bg-white border-b sticky top-16 z-30">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((cat) => (
                  <motion.button
                    key={cat.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                      activeCategory === cat.id
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-900 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {cat.icon}
                    {cat.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="py-16 px-4 min-h-[400px]">
            <div className="max-w-4xl mx-auto">
              <AnimatePresence mode="popLayout">
                {filteredFAQs.length === 0 ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="text-6xl mb-4">🔍</div>
                    <p className="text-xl text-gray-600">No hay resultados para "{searchTerm}"</p>
                  </motion.div>
                ) : (
                  <div className="space-y-4">
                    {filteredFAQs.map((faq, idx) => (
                      <motion.div
                        layout
                        key={faq.question}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-2xl shadow-sm border-2 border-gray-100 overflow-hidden hover:border-cyan-200 transition-all"
                      >
                        <button
                          onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                          className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors"
                        >
                          <span className="font-bold text-lg text-gray-900">{faq.question}</span>
                          <ChevronDown
                            size={24}
                            className={`text-cyan-500 transition-transform duration-300 ${openFAQ === idx ? 'rotate-180' : ''}`}
                          />
                        </button>
                        
                        <AnimatePresence>
                          {openFAQ === idx && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-5 pt-2">
                                <div className="border-l-4 border-cyan-400 pl-4 py-2 bg-cyan-50/30 rounded-r-lg">
                                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                )}
              </AnimatePresence>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 bg-gradient-to-br from-blue-900 to-cyan-600 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-black mb-4">¿Aún tienes dudas?</h2>
              <p className="text-xl mb-8 opacity-90">Nuestro equipo está listo para ayudarte personalmente</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="https://wa.me/573174703402"
                  className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-xl"
                >
                  <Phone size={20} /> WhatsApp
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="mailto:naya.sports@gmail.com"
                  className="border-2 border-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-white hover:text-blue-900 transition-all"
                >
                  <Mail size={20} /> Correo
                </motion.a>
              </div>
            </div>
          </section>
        </main>
      </div>
  );
};

export default Faqs;