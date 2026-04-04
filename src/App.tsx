import { motion } from 'motion/react';
import { 
  Code2, 
  Database, 
  Headphones, 
  Cloud, 
  Network, 
  ShieldCheck, 
  Lightbulb,
  ArrowRight,
  Mail,
  ChevronRight,
  Cpu,
  Smartphone,
  RefreshCw,
  Settings,
  Layers,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useState, useEffect, FormEvent } from 'react';
import { db, handleFirestoreError, OperationType, isConfigured } from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img 
            src="https://i.postimg.cc/NFs8dTQp/HALL-OF-LEADERS-LOGO.png" 
            alt="Hall of Leaders Logo" 
            className="h-14 w-auto rounded-xl"
            referrerPolicy="no-referrer"
          />
          <span className={`font-display font-bold text-xl tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
            HALL OF <span className="text-primary">LEADERS</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'About', 'Services', 'Software', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            Leaders Choose Leaders
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-6">
            Elevate Your Business to the <span className="text-primary">Hall of Leaders</span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
            Do you aspire for your company to be in the Hall of Corporate Leaders? We assist you with our deep pool of certified engineers and IT staff to develop systems that give you the edge.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl hover:shadow-primary/20 flex items-center gap-2">
              Start Your Journey <ArrowRight size={20} />
            </a>
            <a href="#about" className="bg-white border border-slate-200 hover:border-primary text-slate-900 px-8 py-4 rounded-xl font-bold transition-all">
              Learn More
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-100 ring-1 ring-slate-200/50">
            <img 
              src="https://i.postimg.cc/T1QBcw7h/Gemini-Generated-Image-9w1sid9w1sid9w1s.png" 
              alt="Team working" 
              className="w-full h-full object-cover contrast-[1.05] brightness-[1.02] saturate-[1.1] [image-rendering:optimizeQuality] will-change-transform"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-primary">
                <ShieldCheck size={28} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-tighter">Certified Staff</p>
                <p className="text-lg font-bold text-slate-900">Expert Engineers</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-display font-bold mb-8">About Us</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              We provide software development services to those aspiring to be corporate leaders. Our team of experienced professionals understands the landscape of IT consulting, providing solutions that transform our clients, elevating that to corporate hall of leaders.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              By leveraging on technology that ensures high uptime, we provide our clients comfort in the solutions we deliver. We are committed to your growth and long-term success.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                <h4 className="font-bold text-primary text-2xl mb-1">High</h4>
                <p className="text-sm text-slate-500">Uptime Solutions</p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                <h4 className="font-bold text-primary text-2xl mb-1">Expert</h4>
                <p className="text-sm text-slate-500">IT Consulting</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="https://i.postimg.cc/RVH0Xx1p/About-Us.jpg" 
                alt="About Us" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SoftwareDevelopment = () => {
  return (
    <section id="software" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-display font-bold mb-6">Software Development</h2>
          <p className="text-lg text-slate-600">
            We build software faster, providing innovations to small enterprises and corporates. Our dedicated team of developers give our clients competitive advantage.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Agile Approach",
              desc: "We craft product roadmaps upfront and design before the code is written, giving you the agility to outmanoeuvre competitors.",
              icon: <Lightbulb className="text-primary" size={32} />
            },
            {
              title: "Rapid Innovation",
              desc: "Fast-track your digital transformation with our rapid development cycles and cutting-edge technology stack.",
              icon: <Code2 className="text-primary" size={32} />
            },
            {
              title: "Competitive Edge",
              desc: "Custom solutions tailored to your specific business needs, ensuring you stay ahead in the corporate landscape.",
              icon: <ArrowRight className="text-primary" size={32} />
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-slate-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { name: "ERP Implementation and Support", icon: <Settings size={24} /> },
    { name: "Cloud Infrastructure and Migration", icon: <Cloud size={24} /> },
    { name: "Artificial Intelligence Solutions", icon: <Cpu size={24} /> },
    { name: "Systems Integration", icon: <Layers size={24} /> },
    { name: "Mobile Solutions", icon: <Smartphone size={24} /> },
    { name: "Change Management", icon: <RefreshCw size={24} /> }
  ];

  return (
    <section id="services" className="section-padding bg-secondary text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-display font-bold mb-6">Other Services</h2>
            <p className="text-slate-400 text-lg">
              Beyond software development, we provide a comprehensive suite of IT services to support your business infrastructure and growth.
            </p>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex items-center gap-4 cursor-default"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <span className="text-lg font-medium">{service.name}</span>
              <ChevronRight className="ml-auto text-white/20 group-hover:text-primary transition-colors" size={20} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!isConfigured || !db) {
      setStatus('error');
      console.error("Firebase is not initialized. Please ensure VITE_FIREBASE_API_KEY and other secrets are set in AI Studio.");
      return;
    }

    setStatus('submitting');
    
    const path = 'contacts';
    try {
      await addDoc(collection(db, path), {
        ...formData,
        createdAt: serverTimestamp()
      });
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      handleFirestoreError(error, OperationType.WRITE, path);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="bg-primary rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Ready to lead?</h2>
              <p className="text-emerald-50 text-xl mb-10 opacity-90">
                Contact us today to discuss how we can help your company reach the Hall of Corporate Leaders.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-emerald-100 font-bold uppercase tracking-wider">Email Us</p>
                    <a href="mailto:Hello@hallofleaders.co.za" className="text-xl font-bold hover:underline">
                      Hello@hallofleaders.co.za
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 text-slate-900 shadow-2xl">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                      placeholder="Your Name" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                      placeholder="your@email.com" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Message</label>
                  <textarea 
                    rows={4} 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={status === 'submitting'}
                  className={`w-full font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 ${
                    status === 'submitting' ? 'bg-slate-400 cursor-not-allowed' : 
                    status === 'success' ? 'bg-emerald-500 shadow-emerald-200' :
                    status === 'error' ? 'bg-red-500 shadow-red-200' :
                    'bg-primary hover:bg-primary-dark shadow-primary/20'
                  } text-white`}
                >
                  {status === 'submitting' ? 'Sending...' : 
                   status === 'success' ? <><CheckCircle2 size={20} /> Sent Successfully</> :
                   status === 'error' ? <><AlertCircle size={20} /> Error Sending</> :
                   'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <img 
              src="https://i.postimg.cc/NFs8dTQp/HALL-OF-LEADERS-LOGO.png" 
              alt="Hall of Leaders Logo" 
              className="h-12 w-auto rounded-lg"
              referrerPolicy="no-referrer"
            />
            <span className="font-display font-bold text-lg tracking-tighter text-slate-900">
              HALL OF <span className="text-primary">LEADERS</span>
            </span>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <div className={`w-2 h-2 rounded-full ${isConfigured ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'}`} />
            Firebase {isConfigured ? 'Linked' : 'Configuration Missing'}
          </div>
        </div>
        
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Hall of Leaders. All rights reserved.
        </p>
        
        <div className="flex gap-6">
          {['Privacy', 'Terms', 'LinkedIn', 'Twitter'].map(item => (
            <a key={item} href="#" className="text-sm text-slate-400 hover:text-primary transition-colors">{item}</a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <SoftwareDevelopment />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
