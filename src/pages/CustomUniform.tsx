import { useState } from 'react';
import { ChevronRight, ChevronLeft, Upload, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


const CustomUniform = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);
  const [formData, setFormData] = useState({
    deporte: '',
    tipoPrenda: 'Sudadera',
    cantidad: '10',
    nombre: '',
    email: '',
    celular: '',
    pais: 'Colombia',
    ciudad: '',
    cantidadLogos: '1'
  });

  const deportes = [
    { id: 'futbol', name: 'Fútbol', icon: '⚽' },
    { id: 'basketball', name: 'Baloncesto', icon: '🏀' },
    { id: 'volleyball', name: 'Voleibol', icon: '🏐' },
    { id: 'cycling', name: 'Ciclismo', icon: '🚴' },
    { id: 'atletismo', name: 'Atletismo', icon: '🏃' },
    { id: 'otro', name: 'Otro', icon: '🏆' }
  ];

  const uniformImages = [
    { sport: 'Fútbol Profesional', client: 'La Equidad', color: 'bg-green-600' },
    { sport: 'Basketball', client: 'Universidad EAN', color: 'bg-blue-700' },
    { sport: 'Ciclismo', client: 'COOMEVA', color: 'bg-red-600' },
    { sport: 'Voleibol', client: 'Uniminuto', color: 'bg-purple-600' },
    { sport: 'Fútbol Infantil', client: 'El Minuto FC', color: 'bg-orange-600' },
    { sport: 'Atletismo', client: 'San Antonio', color: 'bg-yellow-600' }
  ];

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % uniformImages.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + uniformImages.length) % uniformImages.length);

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const nextStep = () => { if (currentStep < 4) setCurrentStep(currentStep + 1); };
  const prevStep = () => { if (currentStep > 1) setCurrentStep(currentStep - 1); };

  return (
     <div className="min-h-screen bg-white text-gray-900">
        <main className="pt-16">
          {/* Hero with Carousel */}
          <section className="py-12 px-4 bg-gradient-to-br from-cyan-50 to-blue-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <motion.h1 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-5xl md:text-6xl font-black mb-6"
                >
                  Diseña tu 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-900"> uniforme perfecto</span>
                </motion.h1>
                <p className="text-xl text-gray-600">Configurador inteligente en 4 pasos</p>
              </div>

              {/* Carousel */}
              <div className="relative max-w-4xl mx-auto mb-8">
                <div className="overflow-hidden rounded-3xl shadow-2xl aspect-video relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImage}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className={`absolute inset-0 ${uniformImages[currentImage].color} flex items-center justify-center`}
                    >
                      <div className="text-center text-white p-8">
                        <div className="text-8xl mb-4">👕</div>
                        <h3 className="text-3xl font-bold mb-2">{uniformImages[currentImage].sport}</h3>
                        <p className="text-xl opacity-90">{uniformImages[currentImage].client}</p>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white z-10"><ChevronLeft /></button>
                  <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white z-10"><ChevronRight /></button>
                </div>
              </div>
            </div>
          </section>

          {/* Progress Bar */}
          <section className="py-8 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-2">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex items-center flex-1">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${currentStep >= step ? 'bg-gradient-to-r from-cyan-400 to-blue-900 text-white' : 'bg-gray-200 text-gray-500'}`}>
                      {currentStep > step ? <Check size={20} /> : step}
                    </div>
                    {step < 4 && <div className={`flex-1 h-1 mx-2 ${currentStep > step ? 'bg-cyan-400' : 'bg-gray-200'}`} />}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Form Steps */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div layout className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 min-h-[500px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {currentStep === 1 && (
                      <div>
                        <h2 className="text-3xl font-black mb-4">¿Qué vas a jugar?</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {deportes.map((dep) => (
                            <button key={dep.id} onClick={() => handleChange('deporte', dep.id)} className={`p-6 rounded-2xl border-2 transition-all ${formData.deporte === dep.id ? 'border-cyan-400 bg-cyan-50' : 'border-gray-100 hover:border-gray-200'}`}>
                              <div className="text-5xl mb-2">{dep.icon}</div>
                              <div className="font-bold">{dep.name}</div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {currentStep === 2 && (
                      <div className="space-y-6">
                        <h2 className="text-3xl font-black mb-4">Detalles Técnicos</h2>
                        <select value={formData.tipoPrenda} onChange={(e) => handleChange('tipoPrenda', e.target.value)} className="w-full p-4 border-2 border-gray-100 rounded-xl outline-none focus:border-cyan-400">
                          <option>Sudadera</option><option>Camiseta</option><option>Pantaloneta</option><option>Conjunto Completo</option>
                        </select>
                        <input type="number" min="10" value={formData.cantidad} onChange={(e) => handleChange('cantidad', e.target.value)} className="w-full p-4 border-2 border-gray-100 rounded-xl outline-none focus:border-cyan-400" placeholder="Cantidad (Mínimo 10)" />
                      </div>
                    )}

                    {currentStep === 3 && (
                      <div className="space-y-6 text-center">
                        <h2 className="text-3xl font-black mb-4">Sube tu Inspiración</h2>
                        <div className="border-2 border-dashed border-cyan-200 rounded-3xl p-12 bg-cyan-50/50">
                          <Upload size={48} className="mx-auto mb-4 text-cyan-500" />
                          <p className="font-bold">Arrastra tus archivos o logos aquí</p>
                          <p className="text-sm text-gray-500 mt-2">Formatos sugeridos: PDF, AI, PNG</p>
                        </div>
                      </div>
                    )}

                    {currentStep === 4 && (
                      <div className="space-y-4">
                        <h2 className="text-3xl font-black mb-4">Datos de Contacto</h2>
                        <input type="text" placeholder="Nombre completo" className="w-full p-4 border-b-2 border-gray-100 outline-none focus:border-cyan-400" onChange={(e) => handleChange('nombre', e.target.value)} />
                        <input type="email" placeholder="tu@email.com" className="w-full p-4 border-b-2 border-gray-100 outline-none focus:border-cyan-400" onChange={(e) => handleChange('email', e.target.value)} />
                        <input type="tel" placeholder="Celular" className="w-full p-4 border-b-2 border-gray-100 outline-none focus:border-cyan-400" onChange={(e) => handleChange('celular', e.target.value)} />
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                <div className="flex justify-between mt-12">
                  <button onClick={prevStep} disabled={currentStep === 1} className={`px-8 py-3 rounded-xl font-bold ${currentStep === 1 ? 'text-gray-300' : 'text-gray-600 hover:bg-gray-50'}`}>Anterior</button>
                  {currentStep < 4 ? (
                    <button onClick={nextStep} className="bg-gradient-to-r from-cyan-400 to-blue-900 text-white px-10 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:shadow-cyan-200/50 transition-all">Siguiente <ChevronRight size={20}/></button>
                  ) : (
                    <button className="bg-green-500 text-white px-10 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:shadow-green-200/50 transition-all">Enviar Cotización <Check size={20}/></button>
                  )}
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
  );
};

export default CustomUniform;