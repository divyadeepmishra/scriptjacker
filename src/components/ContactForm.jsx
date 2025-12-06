'use client';

import { cn } from '@/lib/utils';
import { AlertCircle, CheckCircle, Loader2, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formState.name.trim()) newErrors.name = 'Name is required';
    if (!formState.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formState.email)) newErrors.email = 'Invalid email';
    if (!formState.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStatus('loading');

    // Simulate robust API call with potential network latency
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
           // Simulate 90% success rate
           Math.random() > 0.1 ? resolve() : reject(new Error("Network glitch simulation"));
        }, 2000);
      });

      setStatus('success');
      setFormState({ name: '', email: '', message: '' });

      // Auto-reset success message after 5s
      setTimeout(() => setStatus('idle'), 5000);

    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-surface/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5 shadow-2xl">
      <h3 className="text-2xl font-bold text-white mb-6">Start a Secure Project</h3>

      <form onSubmit={handleSubmit} className="space-y-5">

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
          <input
            type="text"
            id="name"
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            className={cn(
              "w-full px-4 py-3 rounded-xl bg-black/40 border text-white placeholder-gray-600 focus:outline-none focus:ring-2 transition-all",
              errors.name ? "border-red-500 focus:ring-red-500/20" : "border-white/10 focus:border-neon-teal focus:ring-neon-teal/20"
            )}
            placeholder="Jane Doe"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center"><AlertCircle size={12} className="mr-1"/> {errors.name}</p>}
        </div>

        <div>
           <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
           <input
             type="email"
             id="email"
             value={formState.email}
             onChange={(e) => setFormState({ ...formState, email: e.target.value })}
             className={cn(
               "w-full px-4 py-3 rounded-xl bg-black/40 border text-white placeholder-gray-600 focus:outline-none focus:ring-2 transition-all",
               errors.email ? "border-red-500 focus:ring-red-500/20" : "border-white/10 focus:border-neon-teal focus:ring-neon-teal/20"
             )}
             placeholder="jane@company.com"
           />
           {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center"><AlertCircle size={12} className="mr-1"/> {errors.email}</p>}
        </div>

        <div>
           <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Project Details</label>
           <textarea
             id="message"
             rows={4}
             value={formState.message}
             onChange={(e) => setFormState({ ...formState, message: e.target.value })}
             className={cn(
               "w-full px-4 py-3 rounded-xl bg-black/40 border text-white placeholder-gray-600 focus:outline-none focus:ring-2 transition-all resize-none",
               errors.message ? "border-red-500 focus:ring-red-500/20" : "border-white/10 focus:border-neon-teal focus:ring-neon-teal/20"
             )}
             placeholder="Tell us about your security needs..."
           />
           {errors.message && <p className="text-red-500 text-xs mt-1 flex items-center"><AlertCircle size={12} className="mr-1"/> {errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className={cn(
            "w-full py-4 rounded-full font-bold flex items-center justify-center transition-all",
            status === 'success'
               ? "bg-green-500 text-white"
               : "bg-gradient-to-r from-neon-teal to-neon-purple text-white hover:opacity-90 active:scale-[0.98]"
          )}
        >
           {status === 'loading' ? (
             <Loader2 className="w-5 h-5 animate-spin" />
           ) : status === 'success' ? (
             <>
               <CheckCircle className="w-5 h-5 mr-2" /> Message Sent
             </>
           ) : (
             <>
               Send Message <Send className="w-4 h-4 ml-2" />
             </>
           )}
        </button>

      </form>
    </div>
  );
}
