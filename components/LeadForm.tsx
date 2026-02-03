
import React, { useState } from 'react';

interface LeadFormProps {
  className?: string;
  title?: string;
  buttonText?: string;
}

const LeadForm: React.FC<LeadFormProps> = ({
  className = "",
  title = "Reserve Your Trailer",
  buttonText = "Check Availability"
}) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`bg-white p-10 rounded-[40px] shadow-2xl text-center flex flex-col items-center justify-center min-h-[500px] ${className}`}>
        <div className="bg-green-100 p-6 rounded-full mb-8">
          <i className="fa-solid fa-check text-green-600 text-5xl"></i>
        </div>
        <h3 className="text-3xl font-black text-gray-800 mb-4 uppercase tracking-tight">Request Received!</h3>
        <p className="text-gray-500 font-bold uppercase text-xs tracking-widest leading-relaxed">Our rental concierge will call you within 15 minutes to confirm availability.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-12 text-blue-600 font-black uppercase tracking-widest text-[10px] hover:underline"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <div className={`bg-white p-10 md:p-12 rounded-[40px] shadow-2xl ${className}`}>
      <h3 className="text-3xl font-black text-gray-800 mb-2 uppercase tracking-tight">{title}</h3>
      <p className="text-xs font-black text-blue-600 mb-10 uppercase tracking-[0.2em] flex items-center gap-2">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        Instant Confirmation Available
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-[10px] font-black text-gray-400 mb-2 uppercase tracking-widest">Full Name*</label>
          <input
            required
            type="text"
            placeholder="John Doe"
            className="w-full px-6 py-5 rounded-2xl border-2 border-slate-100 focus:border-blue-500 outline-none transition font-bold"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] font-black text-gray-500 mb-2 uppercase tracking-widest">Phone Number*</label>
            <input
              required
              type="tel"
              placeholder="(786) 366-9200"
              className="w-full px-6 py-5 rounded-2xl border-2 border-slate-100 focus:border-blue-500 outline-none transition font-bold"
            />
          </div>
          <div>
            <label className="block text-[10px] font-black text-gray-500 mb-2 uppercase tracking-widest">Email Address*</label>
            <input
              required
              type="email"
              placeholder="john@example.com"
              className="w-full px-6 py-5 rounded-2xl border-2 border-slate-100 focus:border-blue-500 outline-none transition font-bold"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] font-black text-gray-500 mb-2 uppercase tracking-widest">Trailer Size</label>
            <select className="w-full px-6 py-5 rounded-2xl border-2 border-slate-100 focus:border-blue-500 outline-none transition appearance-none bg-white font-bold">
              <option>Single Axle (Up to 18')</option>
              <option>Tandem Axle (19'-25')</option>
              <option>HD Tandem (25'-30')</option>
              <option>Triple Axle (30'-36')</option>
              <option>Not sure - I need help</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-black text-gray-400 mb-2 uppercase tracking-widest">Rental Start Date</label>
            <div className="relative">
              <input
                required
                type="date"
                className="w-full px-6 py-5 rounded-2xl border-2 border-slate-100 focus:border-blue-500 outline-none transition font-bold text-slate-800 bg-white appearance-none"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#1a365d] hover:bg-blue-600 text-white font-black py-6 px-8 rounded-2xl shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition duration-200 flex items-center justify-center gap-4 uppercase tracking-widest text-sm"
        >
          {buttonText}
          <i className="fa-solid fa-arrow-right text-xs"></i>
        </button>
      </form>

      <div className="mt-12 flex items-center justify-center gap-8 border-t border-slate-50 pt-10">
        <div className="flex flex-col items-center">
          <div className="flex text-yellow-400 text-[10px] mb-2">
            {[1, 2, 3, 4, 5].map(i => <i key={i} className="fa-solid fa-star"></i>)}
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400">Google Verified</span>
        </div>
        <div className="h-10 w-px bg-slate-100"></div>
        <div className="flex flex-col items-center">
          <i className="fa-solid fa-shield-check text-blue-600 text-xl mb-1"></i>
          <span className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400">Insured $2M</span>
        </div>
      </div>
    </div>
  );
};

export default LeadForm;
