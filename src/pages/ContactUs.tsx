import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, Clock, Loader2, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs.config';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    celular: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Preparar los datos del template
      const templateParams = {
        nombre_completo: `${formData.nombre} ${formData.apellido}`,
        nombre: formData.nombre,
        apellido: formData.apellido,
        correo: formData.correo,
        celular: formData.celular,
        mensaje: formData.mensaje,
        time: new Date().toLocaleString('es-CO', {
          dateStyle: 'full',
          timeStyle: 'short',
          timeZone: 'America/Bogota'
        }),
        to_email: 'naya.sports@gmail.com'
      };

      // Enviar email usando EmailJS
      // NOTA: Debes crear un NUEVO TEMPLATE en EmailJS específico para contacto
      // Por ahora usamos el mismo TEMPLATE_ID, pero recomiendo crear uno separado
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        'template_4tr3m2g', // Cambia esto por tu TEMPLATE_ID de contacto
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('Email enviado exitosamente:', response);
      setSubmitStatus('success');

      // Limpiar formulario después de 3 segundos
      setTimeout(() => {
        setFormData({
          nombre: '',
          apellido: '',
          correo: '',
          celular: '',
          mensaje: ''
        });
        setSubmitStatus('idle');
      }, 3000);

    } catch (error: any) {
      console.error('Error al enviar email:', error);
      setSubmitStatus('error');
      setErrorMessage(error.text || 'Hubo un error al enviar el mensaje. Por favor intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Variantes para animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-cyan-50 to-blue-50">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              Hablemos de tu próximo
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-900"> gran juego</span>
            </h1>
            <p className="text-xl text-gray-600">
              Estamos listos para convertir tu visión en realidad
            </p>
          </motion.div>
        </section>

        {/* Main Contact Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12"
            >
              {/* Left: Quick Contact Info */}
              <div className="space-y-8">
                <motion.div variants={itemVariants}>
                  <h2 className="text-3xl font-black mb-6">Respuesta Rápida</h2>
                  <p className="text-gray-600 mb-8">
                    Elige el canal que prefieras. Nuestro equipo está listo para atenderte.
                  </p>
                </motion.div>

                {/* WhatsApp Card */}
                <motion.a
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  href="https://wa.me/573174703402"
                  className="block bg-white border-2 border-green-500 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-green-600">WhatsApp</h3>
                      <p className="bg-green-500 text-white mb-2 font-medium px-2 py-0.5 rounded-full inline-block text-xs uppercase">Respuesta inmediata</p>
                      <p className="font-bold text-xl text-gray-900">+57 317 4703402</p>
                    </div>
                  </div>
                </motion.a>

                {/* Email Card */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-6 border-2 border-cyan-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-gray-900">Correo Electrónico</h3>
                      <p className="text-gray-600 mb-2">Para cotizaciones detalladas</p>
                      <a href="mailto:naya.sports@gmail.com" className="font-bold text-cyan-600 hover:text-cyan-700 break-all">
                        naya.sports@gmail.com
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Schedule Card */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border-2 border-blue-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-gray-900">Horarios de Atención Virtual</h3>
                      <p className="text-gray-700 font-semibold">Lunes a Sábado</p>
                      <p className="text-gray-600">8:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </motion.div>

                {/* Locations */}
                <motion.div variants={itemVariants} className="space-y-4 pt-4">
                  <h3 className="font-bold text-xl text-gray-900">Nuestras Sedes</h3>
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-cyan-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-gray-900">Bogotá</p>
                      <p className="text-gray-600">Calle 64 #23-28, Barrio 7 de agosto</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-cyan-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-gray-900">Curumaní, Cesar</p>
                      <p className="text-gray-600">Calle 3 #12-26, Barrio La Trini</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right: Contact Form */}
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 h-fit sticky top-24"
              >
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Envíanos un mensaje</h3>

                {/* Success/Error Messages */}
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="mb-6 bg-green-50 border-2 border-green-200 rounded-xl p-4 flex items-center gap-3"
                    >
                      <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
                      <p className="text-green-700 font-semibold text-sm">¡Mensaje enviado con éxito! Te contactaremos pronto.</p>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="mb-6 bg-red-50 border-2 border-red-200 rounded-xl p-4 flex items-center gap-3"
                    >
                      <XCircle className="text-red-600 flex-shrink-0" size={24} />
                      <div>
                        <p className="text-red-900 font-semibold text-sm">Error al enviar</p>
                        <p className="text-red-700 text-xs mt-1">{errorMessage}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Nombre</label>
                      <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-cyan-400 outline-none transition-colors bg-transparent disabled:opacity-50"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Apellido</label>
                      <input
                        type="text"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-cyan-400 outline-none transition-colors bg-transparent disabled:opacity-50"
                        placeholder="Tu apellido"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Correo Electrónico</label>
                    <input
                      type="email"
                      name="correo"
                      value={formData.correo}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-cyan-400 outline-none transition-colors bg-transparent disabled:opacity-50"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Celular</label>
                    <input
                      type="tel"
                      name="celular"
                      value={formData.celular}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-cyan-400 outline-none transition-colors bg-transparent disabled:opacity-50"
                      placeholder="+57 3XX XXX XXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Mensaje</label>
                    <textarea
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-100 focus:border-cyan-400 outline-none transition-colors rounded-xl resize-none bg-gray-50 disabled:opacity-50"
                      placeholder="Cuéntanos sobre tu proyecto..."
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg transition-all flex items-center justify-center gap-2 ${isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-cyan-400 to-blue-900 text-white hover:shadow-cyan-200/50'
                      }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensaje
                        <Send size={20} />
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-3xl font-black text-center mb-8"
            >
              Encuéntranos
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Bogotá Map */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100"
              >
                <div className="bg-gradient-to-r from-cyan-400 to-blue-900 text-white p-4">
                  <h3 className="font-bold text-lg">📍 Sede Bogotá</h3>
                  <p className="text-xs opacity-90">Calle 64 #23-28, Barrio 7 de agosto</p>
                </div>
                <div className="aspect-video">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.7126131495835!2d-74.0722183!3d4.6630485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a5652f1e621%3A0x6a6d6d6d6d6d6d6d!2sCl.%2064%20%2323-28%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1700000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </motion.div>

              {/* Curumaní Map */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100"
              >
                <div className="bg-gradient-to-r from-blue-900 to-cyan-400 text-white p-4 text-right">
                  <h3 className="font-bold text-lg">📍 Sede Curumaní</h3>
                  <p className="text-xs opacity-90">Calle 3 #12-26, Cesar</p>
                </div>
                <div className="aspect-video">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15730.0!2d-73.4!3d9.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMTInMDAuMCJOIDczwrAyNCcwMC4wIlc!5e0!3m2!1ses!2sco!4v1700000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactUs;