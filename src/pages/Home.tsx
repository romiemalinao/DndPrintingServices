import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, Zap, Shield, Smile, Clock, 
  Phone, Mail, MapPin, ExternalLink
} from 'lucide-react';
import { 
  SERVICES, BUSINESS_INFO, PORTFOLIO_ITEMS
} from '../constants';

export const Home = () => {
  return (
    <div className="pt-20">

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-green-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Zap className="w-4 h-4" />
                <span>Same Day Printing Available!</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
                Mabilis, Malinaw, at <span className="text-blue-600">Abot-Kayang</span> Printing
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
                Ang inyong one-stop shop para sa photo printing, lamination, xerox, at document printing. Quality service na hindi masakit sa bulsa!
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61580757008333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 text-center"
                >
                  Mag-message sa Facebook
                </a>
                <a
                  href="#services"
                  className="bg-white text-gray-900 border-2 border-gray-100 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-50 transition-all text-center"
                >
                  Tingnan ang Services
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&q=80&w=1000"
                  alt="Printing Service"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center space-x-3 border border-gray-50">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Shield className="text-green-600 w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Quality Guaranteed</div>
                  <div className="text-xs text-gray-500">Premium Ink & Paper</div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center space-x-3 border border-gray-50">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <Clock className="text-yellow-600 w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Fast Turnaround</div>
                  <div className="text-xs text-gray-500">While you wait</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Ang Aming Serbisyo</h2>
            <h3 className="text-4xl font-extrabold text-gray-900 mb-6">Ano ang hanap mo?</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kumpletong printing solutions para sa iyong pangangailangan sa school, opisina, o personal projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <service.icon className="text-blue-600 w-7 h-7 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
                <p className="text-gray-600 mb-6 line-clamp-3">{service.description}</p>
                <div className="text-blue-600 font-bold text-lg mb-4">{service.price}</div>
                <a href="https://www.facebook.com/profile.php?id=61580757008333" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold flex items-center space-x-2 group/link">
                  <span>Order Now</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Ang Aming mga Gawa</h2>
            <h3 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6">Portfolio</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tingnan ang ilan sa mga natapos naming projects. Patunay ng aming kalidad at dedikasyon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PORTFOLIO_ITEMS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative rounded-[2rem] overflow-hidden mb-6 shadow-lg aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <a href="https://www.facebook.com/profile.php?id=61580757008333" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-6 py-3 rounded-xl font-bold flex items-center space-x-2">
                      <span>Order ng Ganito</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="px-2">
                  <div className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-2">{item.category}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section id="order" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Mag-order Online</h2>
            <h3 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6">Message Us on Facebook</h3>
            <p className="text-xl text-gray-600">Mabilis at madaling paraan para magpa-print. I-message lang kami sa aming Facebook page!</p>
          </div>

          <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-gray-100 p-12 text-center">
            <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-3xl font-black text-gray-900 mb-4">DnD Printing Services</h2>
            <p className="text-gray-600 mb-10 text-lg">
              Para sa mga orders at inquiries, maaari kayong mag-message direct sa aming Facebook page.
            </p>
            <a 
              href="https://www.facebook.com/profile.php?id=61580757008333"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-100"
            >
              <span>Pumunta sa Facebook Page</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Contact Us</h2>
              <h3 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-8">Tara, Mag-usap Tayo!</h3>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                May katanungan? Gamitin ang aming contact details sa ibaba. Sasagot kami agad!
              </p>

              <div className="space-y-10">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="text-blue-600 w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Phone Number</h4>
                    <p className="text-gray-600 text-lg">{BUSINESS_INFO.phone}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="text-green-600 w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Email Address</h4>
                    <p className="text-gray-600 text-lg">{BUSINESS_INFO.email}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center shrink-0">
                    <Clock className="text-yellow-600 w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Business Hours</h4>
                    <p className="text-gray-600 text-lg">{BUSINESS_INFO.hours}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="text-red-600 w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Location</h4>
                    <p className="text-gray-600 text-lg">{BUSINESS_INFO.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-blue-600 rounded-[3rem] rotate-3 opacity-10"></div>
              <div className="relative h-full bg-white rounded-[3rem] border border-gray-100 shadow-sm p-12 flex flex-col justify-center">
                <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mb-8">
                  <Smile className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Handa kaming tumulong!</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Ang aming team ay laging handang mag-assist sa inyong mga printing needs. Huwag mag-atubiling tumawag o mag-text sa amin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
