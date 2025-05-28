'use client';

import { FaWhatsapp, FaFacebook, FaPhoneAlt, FaEnvelope, FaChartLine, FaRegClipboard, FaUserTie, FaLightbulb } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react'; // For sticky header and potential form handling

export default function HomePage() {
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);

  // Effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsHeaderSticky(true);
      } else {
        setIsHeaderSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Header */}
      <header className={`py-4 shadow-md z-50 transition-all duration-300 ${isHeaderSticky ? 'fixed top-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm' : 'relative bg-white'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-sky-400">Patricio Llauradó</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><a href="#hero" className="text-gray-700 hover:text-sky-600 transition">Inicio</a></li>
              <li><a href="#services" className="text-gray-700 hover:text-sky-600 transition">Servicios</a></li>
              <li><a href="#about" className="text-gray-700 hover:text-sky-600 transition">Sobre Mí</a></li>
              <li><a href="#contact" className="text-gray-700 hover:text-sky-600 transition">Contacto</a></li>
            </ul>
          </nav>
          <p className="hidden md:block text-sm text-gray-600">Consultoría Administrativa en CABA</p>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative bg-gradient-to-br from-sky-400 to-sky-600 py-24 text-white overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div> {/* Subtle background pattern */}
        <div className="max-w-6xl mx-auto px-6 text-center z-10 relative">
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Transforma tu Negocio: Eficiencia y Crecimiento Sostenible
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-sky-100 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Te ayudo a optimizar procesos, reducir costos y potenciar la productividad de tu empresa.
          </motion.p>
          <motion.a
            href="https://wa.me/549XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-sky-700 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-sky-100 hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <FaWhatsapp size={24} /> ¡Impulsa tu Empresa Ahora!
          </motion.a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-16">Nuestros Servicios Clave</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Service Card 1 */}
            <motion.div
              className="flex flex-col items-center p-8 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <FaChartLine size={50} className="text-sky-600 mb-6" />
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Auditorías Empresariales Detalladas</h4>
              <p className="text-gray-600 text-center leading-relaxed">
                Evaluación profunda de procesos internos, identificación de ineficiencias y oportunidades de mejora para una gestión más eficaz.
              </p>
            </motion.div>

            {/* Service Card 2 */}
            <motion.div
              className="flex flex-col items-center p-8 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FaRegClipboard size={50} className="text-sky-600 mb-6" />
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Optimización Administrativa y Financiera</h4>
              <p className="text-gray-600 text-center leading-relaxed">
                Implementación de metodologías probadas para reducir costos, optimizar tiempos operativos y mejorar el flujo de caja.
              </p>
            </motion.div>

            {/* Service Card 3 - New Service Example */}
            <motion.div
              className="flex flex-col items-center p-8 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <FaLightbulb size={50} className="text-sky-600 mb-6" />
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Desarrollo e Implementación Estratégica</h4>
              <p className="text-gray-600 text-center leading-relaxed">
                Asesoramiento en la creación y ejecución de estrategias a medida para alcanzar tus objetivos de negocio a largo plazo.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Me / Why Choose Us Section */}
      <section id="about" className="py-20 bg-sky-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold text-sky-700 mb-12">¿Por Qué elegir a Patricio Llauradó?</h3>
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Replace with actual image of Patricio */}
            <div className="flex-shrink-0">
              <img src="/pato.jpg" alt="Patricio Llauradó" className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-white" />
            </div>
            <div className="text-left md:text-lg text-gray-700 leading-relaxed">
              <p className="mb-4">
                Con <strong className="text-sky-700">más de 45 años de experiencia</strong> en administracion empresarial, mi enfoque se centra en brindar soluciones prácticas y personalizadas que generen resultados tangibles. Entiendo los desafíos únicos de las empresas en CABA y me dedico a transformar sus operaciones para un crecimiento sostenible.
              </p>
              <p>
                Mi compromiso es ser tu socio estratégico, identificando oportunidades de mejora y guiándote en la implementación de cambios que optimicen tu rendimiento y rentabilidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section (Placeholder) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">Lo Que Dicen Nuestros Clientes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <motion.div
              className="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-100"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-700 italic mb-4">"La consultoría de Patricio fue fundamental para reorganizar nuestros procesos internos. Vimos una mejora significativa en la eficiencia y en la reducción de costos en solo unos meses."</p>
              <p className="font-semibold text-gray-800">- Ana Gómez, Directora de Operaciones</p>
            </motion.div>
            {/* Testimonial 2 */}
            <motion.div
              className="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-100"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-gray-700 italic mb-4">"Su visión estratégica nos ayudó a identificar nuevas oportunidades y a optimizar nuestra cadena de valor. Profesionalismo y resultados garantizados."</p>
              <p className="font-semibold text-gray-800">- Juan Pérez, CEO de Tech Solutions</p>
            </motion.div>
            {/* Add more testimonials */}
          </div>
        </div>
      </section>

      {/* Contact Section with Form */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">Hablemos de Tu Próximo Paso</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h4 className="text-2xl font-semibold text-gray-800 mb-6">Información de Contacto</h4>
              <div className="flex flex-col gap-5 text-gray-700 text-lg">
                <a href="https://wa.me/549XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-sky-600 transition-colors">
                  <FaWhatsapp size={22} className="text-sky-500" /> WhatsApp: +54 9 XXXX-XXXXXX
                </a>
                <a href="mailto:patricio@consultora.com" className="flex items-center gap-3 hover:text-sky-600 transition-colors">
                  <FaEnvelope size={22} className="text-red-500" /> Email: patricio@consultora.com
                </a>
                <div className="flex items-center gap-3">
                  <FaPhoneAlt size={22} className="text-sky-500" /> Teléfono: (011) 1234-5678
                </div>
                <a href="https://facebook.com/tuPagina" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-sky-600 transition-colors">
                  <FaFacebook size={22} className="text-sky-700" /> Facebook: /tuPagina
                </a>
              </div>
            </div>

            {/* Contact Form (Client-side functionality not included, requires backend) */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h4 className="text-2xl font-semibold text-gray-800 mb-6">Envíanos un Mensaje</h4>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nombre Completo</label>
                  <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent" placeholder="Tu Nombre" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                  <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent" placeholder="tu@email.com" />
                </div>
             <div>
  <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Mensaje</label>
  <textarea id="message" name="message" rows={5} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent" placeholder="Describe tus necesidades..."></textarea>
</div>
                <button type="submit" className="bg-sky-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-sky-700 transition-colors shadow-md">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Patricio Llauradó. Todos los derechos reservados.</p>
          <p className="mt-2">Desarrollado con ❤️ y la visión de tu éxito.</p>
        </div>
      </footer>
    </main>
  );
}