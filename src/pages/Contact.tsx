import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-pearl min-h-screen">
      {/* Header */}
      <section className="section-padding pt-40 flex flex-col md:flex-row justify-between items-end gap-10">
        <div className="max-w-2xl">
          <h4 className="font-accent text-gold text-xs uppercase tracking-[0.3em] mb-6">Connect</h4>
          <h1 className="text-6xl md:text-8xl mb-6">Let's Discuss Your Space.</h1>
        </div>
        <a 
          href="https://wa.me/919876543210" 
          className="lux-button !bg-green-600 hover:!bg-green-700 !border-none flex items-center gap-2"
        >
          <MessageCircle className="w-5 h-5" /> WhatsApp US
        </a>
      </section>

      <section className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Form */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-10 md:p-16 shadow-sm border border-black/5"
        >
          <h2 className="text-3xl mb-10">Inquiry form</h2>
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2 border-b border-zinc-200 pb-2 transition-all focus-within:border-gold">
                <label className="font-accent text-[10px] uppercase tracking-widest text-zinc-400">Full Name</label>
                <input type="text" placeholder="John Doe" className="bg-transparent outline-none text-sm placeholder:text-zinc-300" />
              </div>
              <div className="flex flex-col gap-2 border-b border-zinc-200 pb-2 transition-all focus-within:border-gold">
                <label className="font-accent text-[10px] uppercase tracking-widest text-zinc-400">Email Address</label>
                <input type="email" placeholder="john@example.com" className="bg-transparent outline-none text-sm placeholder:text-zinc-300" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2 border-b border-zinc-200 pb-2 transition-all focus-within:border-gold">
              <label className="font-accent text-[10px] uppercase tracking-widest text-zinc-400">Subject</label>
              <select className="bg-transparent outline-none text-sm text-zinc-600">
                <option>Residential Project</option>
                <option>Commercial Tower</option>
                <option>Interior Restoration</option>
                <option>Others</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 border-b border-zinc-200 pb-2 transition-all focus-within:border-gold">
              <label className="font-accent text-[10px] uppercase tracking-widest text-zinc-400">Message</label>
              <textarea rows={4} placeholder="Describe your vision..." className="bg-transparent outline-none text-sm placeholder:text-zinc-300 resize-none" />
            </div>

            <button className="lux-button w-full flex items-center justify-center gap-3">
              Send Message <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>

        {/* Info & Map */}
        <div className="space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h4 className="font-accent text-[10px] uppercase tracking-[0.2em] text-gold mb-4">Direct Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 border border-zinc-200 flex items-center justify-center transition-colors group-hover:bg-gold group-hover:border-gold">
                    <Mail className="w-4 h-4 group-hover:text-white" />
                  </div>
                  <span className="text-sm">hello@aura-studio.com</span>
                </li>
                <li className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 border border-zinc-200 flex items-center justify-center transition-colors group-hover:bg-gold group-hover:border-gold">
                    <Phone className="w-4 h-4 group-hover:text-white" />
                  </div>
                  <span className="text-sm">+91 98765 43210</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-accent text-[10px] uppercase tracking-[0.2em] text-gold mb-4">Main Studio</h4>
              <li className="flex items-start gap-3 group list-none">
                <div className="w-10 h-10 border border-zinc-200 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm leading-relaxed">
                  12/A Sky Tower, <br />
                  Bandra West, Mumbai <br />
                  Maharashtra 400050
                </span>
              </li>
            </div>
          </div>

          <div className="h-[400px] bg-zinc-200 relative grayscale">
             {/* Map Placeholder */}
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center group">
                   <MapPin className="w-12 h-12 text-gold mx-auto mb-4 animate-bounce" />
                   <span className="text-xs uppercase tracking-widest text-zinc-500">Google Map Placeholder</span>
                </div>
             </div>
             <img 
               src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?auto=format&fit=crop&q=80&w=800" 
               alt="Map Background"
               className="w-full h-full object-cover opacity-30"
             />
          </div>
        </div>
      </section>
    </div>
  );
}
