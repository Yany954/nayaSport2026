import { useState } from 'react';
import { ChevronRight, ChevronLeft, Check, Loader2, CheckCircle2, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs.config';

// Importar imágenes con extensiones correctas
import img1 from '../assets/campeonato2.jpeg';
import img2 from '../assets/campeonato_voley.png';
import img3 from '../assets/soccer_electrico.png';
import img4 from '../assets/tawanty1.jpeg';
import img5 from '../assets/tawanty2.jpeg';

const CustomUniform = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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

  // Las imágenes ahora deberían funcionar
  const uniformImages = [
    { image: img1, alt: 'Campeonato 2' },
    { image: img2, alt: 'Campeonato Voleibol' },
    { image: img3, alt: 'Soccer Eléctrico' },
    { image: img4, alt: 'Tawanty 1' },
    { image: img5, alt: 'Tawanty 2' }
  ];

  console.log('Imágenes cargadas:', uniformImages); // Debug

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % uniformImages.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + uniformImages.length) % uniformImages.length);

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const nextStep = () => {
    if (currentStep === 1 && !formData.deporte) {
      setErrorMessage('Por favor selecciona un deporte antes de continuar');
      return;
    }
    setErrorMessage('');
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const validateForm = () => {
    if (!formData.deporte) {
      setErrorMessage('Por favor selecciona un deporte');
      return false;
    }
    if (!formData.nombre.trim()) {
      setErrorMessage('Por favor ingresa tu nombre');
      return false;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Por favor ingresa un email válido');
      return false;
    }
    if (!formData.celular.trim()) {
      setErrorMessage('Por favor ingresa tu celular');
      return false;
    }
    if (!formData.ciudad.trim()) {
      setErrorMessage('Por favor ingresa tu ciudad');
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const templateParams = {
        deporte: deportes.find(d => d.id === formData.deporte)?.name || formData.deporte,
        tipoPrenda: formData.tipoPrenda,
        cantidad: formData.cantidad,
        cantidadLogos: formData.cantidadLogos,
        nombre: formData.nombre,
        email: formData.email,
        celular: formData.celular,
        pais: formData.pais,
        ciudad: formData.ciudad,
        time: new Date().toLocaleString('es-CO', {
          dateStyle: 'full',
          timeStyle: 'short',
          timeZone: 'America/Bogota'
        }),
        to_email: 'naya.sports@gmail.com'
      };

      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('Email enviado:', response);
      setSubmitStatus('success');

      setTimeout(() => {
        setFormData({
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
        setCurrentStep(1);
        setSubmitStatus('idle');
      }, 3000);

    } catch (error: any) {
      console.error('Error:', error);
      setSubmitStatus('error');
      setErrorMessage(error.text || 'Error al enviar. Intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="pt-16">
        {/* Hero con Carrusel */}
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
              <p className="text-xl text-gray-600">Configurador inteligente en 3 pasos</p>
            </div>

            {/* Carrusel */}
            <div className="relative max-w-4xl mx-auto mb-8">
              <div className="overflow-hidden rounded-3xl shadow-2xl aspect-video relative bg-gray-900">
                
                {/* Imágenes del carrusel */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    src={uniformImages[currentImage].image}
                    alt={uniformImages[currentImage].alt}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      console.error('Error cargando imagen:', uniformImages[currentImage].image);
                      e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23ddd" width="100" height="100"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3ENo Image%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </AnimatePresence>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>

                {/* Botones */}
                <button
                  onClick={prevImage}
                  aria-label="Anterior"
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white z-10 transition-all"
                >
                  <ChevronLeft size={28} strokeWidth={3} />
                </button>
                
                <button
                  onClick={nextImage}
                  aria-label="Siguiente"
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white z-10 transition-all"
                >
                  <ChevronRight size={28} strokeWidth={3} />
                </button>

                {/* Dots */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {uniformImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImage(idx)}
                      className={`transition-all rounded-full ${
                        currentImage === idx 
                          ? 'bg-white w-8 h-3' 
                          : 'bg-white/50 hover:bg-white/70 w-3 h-3'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Error si no selecciona deporte */}
            <AnimatePresence>
              {errorMessage && currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="max-w-4xl mx-auto mt-4"
                >
                  <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 flex items-center gap-3">
                    <XCircle className="text-red-600" size={20} />
                    <p className="text-red-700 font-semibold text-sm">{errorMessage}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Barra de Progreso */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center flex-1">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                    currentStep >= step ? 'bg-gradient-to-r from-cyan-400 to-blue-900 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {currentStep > step ? <Check size={20} /> : step}
                  </div>
                  {step < 3 && <div className={`flex-1 h-1 mx-2 ${currentStep > step ? 'bg-cyan-400' : 'bg-gray-200'}`} />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pasos del Formulario */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div layout className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 min-h-[500px] flex flex-col justify-between">

              {/* Mensajes de éxito/error */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="mb-6 bg-green-50 border-2 border-green-200 rounded-xl p-6 flex items-center gap-4"
                  >
                    <CheckCircle2 className="text-green-600" size={32} />
                    <div>
                      <h3 className="font-bold text-green-900 text-lg">¡Cotización enviada!</h3>
                      <p className="text-green-700">Te contactaremos en menos de 24 horas</p>
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="mb-6 bg-red-50 border-2 border-red-200 rounded-xl p-6 flex items-center gap-4"
                  >
                    <XCircle className="text-red-600" size={32} />
                    <div>
                      <h3 className="font-bold text-red-900 text-lg">Error al enviar</h3>
                      <p className="text-red-700">{errorMessage}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Contenido de los pasos */}
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
                      <p className="text-gray-600 mb-6">Selecciona tu deporte</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {deportes.map((dep) => (
                          <button
                            key={dep.id}
                            onClick={() => handleChange('deporte', dep.id)}
                            className={`p-6 rounded-2xl border-2 transition-all hover:scale-105 ${
                              formData.deporte === dep.id ? 'border-cyan-400 bg-cyan-50 shadow-lg' : 'border-gray-100'
                            }`}
                          >
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
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Tipo de Prenda</label>
                        <select
                          value={formData.tipoPrenda}
                          onChange={(e) => handleChange('tipoPrenda', e.target.value)}
                          className="w-full p-4 border-2 border-gray-100 rounded-xl focus:border-cyan-400 outline-none"
                        >
                          <option>Sudadera</option>
                          <option>Camiseta</option>
                          <option>Pantaloneta</option>
                          <option>Conjunto Completo</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Cantidad</label>
                        <input
                          type="number"
                          min="10"
                          value={formData.cantidad}
                          onChange={(e) => handleChange('cantidad', e.target.value)}
                          className="w-full p-4 border-2 border-gray-100 rounded-xl focus:border-cyan-400 outline-none"
                        />
                        {parseInt(formData.cantidad) >= 50 && (
                          <p className="text-green-600 text-sm mt-2 font-semibold">🎉 ¡5% de descuento!</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Cantidad de Logotipos</label>
                        <input
                          type="number"
                          min="1"
                          value={formData.cantidadLogos}
                          onChange={(e) => handleChange('cantidadLogos', e.target.value)}
                          className="w-full p-4 border-2 border-gray-100 rounded-xl focus:border-cyan-400 outline-none"
                        />
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-4">
                      <h2 className="text-3xl font-black mb-4">Datos de Contacto</h2>
                      <input
                        type="text"
                        placeholder="Nombre completo *"
                        value={formData.nombre}
                        onChange={(e) => handleChange('nombre', e.target.value)}
                        className="w-full p-4 border-b-2 border-gray-100 focus:border-cyan-400 outline-none"
                      />
                      <input
                        type="email"
                        placeholder="tu@email.com *"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="w-full p-4 border-b-2 border-gray-100 focus:border-cyan-400 outline-none"
                      />
                      <input
                        type="tel"
                        placeholder="Celular *"
                        value={formData.celular}
                        onChange={(e) => handleChange('celular', e.target.value)}
                        className="w-full p-4 border-b-2 border-gray-100 focus:border-cyan-400 outline-none"
                      />
                      <div className="grid md:grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="País"
                          value={formData.pais}
                          onChange={(e) => handleChange('pais', e.target.value)}
                          className="w-full p-4 border-b-2 border-gray-100 focus:border-cyan-400 outline-none"
                        />
                        <input
                          type="text"
                          placeholder="Ciudad *"
                          value={formData.ciudad}
                          onChange={(e) => handleChange('ciudad', e.target.value)}
                          className="w-full p-4 border-b-2 border-gray-100 focus:border-cyan-400 outline-none"
                        />
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Botones de navegación */}
              <div className="flex justify-between mt-12">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 1 || isSubmitting}
                  className={`px-8 py-3 rounded-xl font-bold ${
                    currentStep === 1 || isSubmitting ? 'text-gray-300' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  Anterior
                </button>

                {currentStep < 3 ? (
                  <button
                    onClick={nextStep}
                    className="bg-gradient-to-r from-cyan-400 to-blue-900 text-white px-10 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-all"
                  >
                    Siguiente <ChevronRight size={20} />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`px-10 py-3 rounded-xl font-bold flex items-center gap-2 ${
                      isSubmitting ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'
                    } text-white`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar <Check size={20} />
                      </>
                    )}
                  </button>
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