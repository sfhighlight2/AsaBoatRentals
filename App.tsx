
import React, { useState, useEffect } from 'react';
import { TRAILERS, REVIEWS, LOCATIONS_DETAILS } from './constants';
import LeadForm from './components/LeadForm';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-[#1a365d] p-2 rounded-lg">
              <i className="fa-solid fa-anchor text-white text-xl"></i>
            </div>
            <div className="flex flex-col">
              <span className={`font-black text-xl leading-none ${isScrolled ? 'text-blue-900' : 'text-white'}`}>ASA BOAT TRAILER</span>
              <span className={`text-[10px] font-bold tracking-[0.2em] ${isScrolled ? 'text-blue-600' : 'text-blue-200'}`}>RENTAL & HAULING</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8 font-bold">
            <a href="#trailers" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-500 transition`}>Our Fleet</a>
            <a href="#locations" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-500 transition`}>6 Locations</a>
            <a href="#advantage" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-500 transition`}>Why ASA?</a>
            <a href="#reviews" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-500 transition`}>Reviews</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:7863669200" className={`hidden sm:flex items-center gap-2 font-black px-4 py-2 rounded-full border transition ${isScrolled ? 'text-blue-600 border-blue-100 bg-blue-50' : 'text-white border-white/20 bg-white/10 backdrop-blur-md'}`}>
              <i className="fa-solid fa-phone"></i>
              786-366-9200
            </a>
            <a href="#trailers" className="bg-blue-600 hover:bg-blue-700 text-white font-black px-6 py-2.5 rounded-full shadow-lg transition transform hover:scale-105">
              Reserve Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1621235123018-8424075b28e5?auto=format&fit=crop&q=1200&w=2000" 
            alt="Premium Boat Trailer Rentals South Florida"
            className="w-full h-full object-cover"
          />
          {/* Enhanced Darker Gradient for Maximum Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-slate-950/95 to-blue-900/40"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-blue-600/30 backdrop-blur-md px-3 py-1 rounded-full border border-blue-400/30 text-blue-100 text-sm font-bold uppercase tracking-wider mb-6">
                <i className="fa-solid fa-star text-xs text-yellow-400"></i>
                South Florida's Only Professional Trailer Fleet
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight uppercase tracking-tight">
                Boat Trailer Rentals — <span className="text-blue-400">Available</span> Today
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 font-light leading-relaxed">
                South Florida's only dedicated boat trailer rental company — 35 premium, 2026 model trailers ready now across 6 locations.
              </p>

              {/* Mobile CTA Buttons Below Subheadline */}
              <div className="flex sm:hidden flex-col gap-4 mb-10">
                <a href="tel:7863669200" className="w-full bg-blue-600 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 text-lg uppercase shadow-lg shadow-blue-600/30">
                  <i className="fa-solid fa-phone"></i>
                  Call 786-366-9200
                </a>
                <a href="#trailers" className="w-full bg-white text-blue-900 font-black py-5 rounded-2xl flex items-center justify-center gap-3 text-lg uppercase shadow-lg">
                  <i className="fa-solid fa-calendar-check text-blue-600"></i>
                  Reserve Now
                </a>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  { icon: 'fa-shield-halved', text: '$2M Liability Coverage' },
                  { icon: 'fa-truck-fast', text: 'Same-Day Pickup Available' },
                  { icon: 'fa-toolbox', text: '24/7 Roadside Assistance' },
                  { icon: 'fa-calendar-check', text: 'Pay for 4 Days, Get 7' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-lg font-bold">
                    <i className={`fa-solid ${item.icon} text-blue-400 w-6`}></i>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-8 items-center border-t border-white/10 pt-8">
                <div className="flex flex-col">
                  <div className="flex text-yellow-400 text-lg mb-1">
                    {[1,2,3,4,5].map(i => <i key={i} className="fa-solid fa-star"></i>)}
                  </div>
                  <span className="text-xs font-bold opacity-70 uppercase tracking-widest">500+ Local Reviews</span>
                </div>
                <div className="text-white font-black text-xl tracking-tighter uppercase">Same-day pickup available</div>
              </div>
            </div>

            <div className="w-full" id="lead-form">
              <LeadForm className="mx-auto lg:ml-auto max-w-lg" title="Reserve Your Trailer" buttonText="Check Availability" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Bar */}
      <div className="bg-blue-600 py-4 overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee space-x-12 items-center text-white font-black uppercase text-sm">
          <span>★ Pay for 4 days, get 7 total ★</span>
          <span>★ $2,000,000 liability coverage included ★</span>
          <span>★ 6 South Florida locations ★</span>
          <span>★ 24/7 emergency roadside assistance ★</span>
          <span>★ Stainless steel hardware on every unit ★</span>
          <span>★ Pay for 4 days, get 7 total ★</span>
          <span>★ $2,000,000 liability coverage included ★</span>
        </div>
      </div>

      {/* Why Choose Us / Advantage Section */}
      <section id="advantage" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-blue-600 font-black uppercase tracking-widest text-sm mb-4">Why Boaters Choose ASA</h2>
              <h3 className="text-4xl md:text-5xl font-black mb-8 uppercase leading-tight">We're the only ones doing this right.</h3>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">
                ASA is South Florida's only dedicated boat trailer rental company — not a side hustle, not a guy with a trailer in his driveway. Don't gamble your $100K boat on a $50 Craigslist trailer.
              </p>
              
              <div className="overflow-hidden rounded-3xl border-2 border-slate-100">
                <table className="w-full text-left">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-4 font-black text-xs uppercase text-slate-500">Feature</th>
                      <th className="px-6 py-4 font-black text-xs uppercase text-blue-600">ASA Premium</th>
                      <th className="px-6 py-4 font-black text-xs uppercase text-slate-400">Others</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { f: "Trailer Models", asa: "All 2026 Models", oth: "Aged/Used Junk" },
                      { f: "Brakes", asa: "Every Axle", oth: "Often Non-existent" },
                      { f: "Liability Cover", asa: "$2,000,000 Included", oth: "None" },
                      { f: "Emergency Help", asa: "24/7 Roadside", oth: "Good Luck" },
                      { f: "Hardware", asa: "Stainless Steel", oth: "Rusted Steel" }
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 text-sm font-bold text-slate-500">{row.f}</td>
                        <td className="px-6 py-4 text-sm font-black text-blue-700">{row.asa}</td>
                        <td className="px-6 py-4 text-sm font-medium text-slate-400">{row.oth}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-8 text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <i className="fa-solid fa-certificate text-blue-600"></i>
                Verified business: Florida LLC • D-U-N-S #43849811 • Best of Florida Nominee
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-slate-100 p-4 rounded-[40px] rotate-2">
                <img 
                  src="https://images.unsplash.com/photo-1695666752003-7b3b448f863d?auto=format&fit=crop&q=80&w=800" 
                  alt="Quality Boat Trailer Hardware" 
                  className="rounded-[32px] w-full aspect-square object-cover -rotate-2 hover:rotate-0 transition duration-500 shadow-2xl"
                />
                <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-8 rounded-3xl shadow-2xl max-w-[240px]">
                  <div className="text-3xl font-black mb-2 uppercase">No Junk.</div>
                  <div className="text-xs font-bold uppercase tracking-widest opacity-80 leading-relaxed">
                    Look at our trailers, then have a laugh at theirs.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="trailers" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-blue-600 font-black uppercase tracking-widest text-sm mb-4">Find the Perfect Trailer</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-6 uppercase">The Largest Rental Fleet in South Florida</h3>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Every ASA trailer is built for South Florida's salt, sun, and serious boating. Aluminum frames and stainless hardware mean zero corrosion worries. Brakes on every axle mean control, even on steep ramps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {TRAILERS.map(trailer => (
              <div key={trailer.id} className="flex flex-col bg-white rounded-[32px] overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 group">
                <div className="relative h-72 overflow-hidden">
                  <img src={trailer.image} alt={trailer.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-black uppercase text-blue-900 shadow-sm">
                    High Performance
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-8">
                    <div className="text-white font-black text-2xl uppercase leading-tight tracking-tight">{trailer.name}</div>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Starting at</span>
                      <span className="text-blue-600 font-black text-3xl">{trailer.price}</span>
                    </div>
                    <div className="bg-blue-50 px-4 py-2 rounded-xl text-center">
                      <div className="text-[10px] font-bold text-blue-400 uppercase">Capacity</div>
                      <div className="font-black text-blue-900">{trailer.capacity}</div>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-10 flex-grow">
                    {trailer.features.map((feature, i) => (
                      <li key={i} className="text-sm text-slate-600 flex items-start gap-4">
                        <i className="fa-solid fa-circle-check text-blue-500 mt-1 text-[12px]"></i>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a href="#lead-form" className="w-full py-5 bg-blue-600 text-white font-black rounded-2xl transition-all duration-300 hover:bg-blue-700 shadow-xl shadow-blue-100 uppercase tracking-wider text-center">
                    Reserve This Trailer
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section id="locations" className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">6 Locations Across South Florida</h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Always close to the ramp — wherever you are.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {LOCATIONS_DETAILS.map((loc, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center hover:border-blue-400 hover:bg-white transition-all group">
                <i className="fa-solid fa-location-dot text-blue-600 mb-3 text-xl group-hover:scale-110 transition-transform"></i>
                <div className="font-black text-slate-800 text-xs leading-tight uppercase mb-1">{loc.name}</div>
                <div className="text-[10px] text-blue-500 font-bold uppercase tracking-widest">{loc.sub}</div>
              </div>
            ))}
          </div>
          <div className="mt-16 bg-blue-50 p-10 rounded-[40px] text-center max-w-4xl mx-auto border border-blue-100">
            <h4 className="text-2xl font-black text-blue-900 mb-4 uppercase">Complete Transportation Available Upon Request</h4>
            <p className="text-blue-700 font-medium mb-8">We deliver and transport boats nationwide. Let our team of professionals handle the logistics for you.</p>
            <a href="tel:7863669200" className="inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-700 transition shadow-xl uppercase">
              Get Transport Quote
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-20 gap-10">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-blue-400 font-black uppercase tracking-widest text-sm mb-4">Real Stories from the Dock</h2>
              <h3 className="text-4xl md:text-5xl font-black mb-6 uppercase">Why 500+ Boaters Trust ASA</h3>
              <p className="text-blue-100/70 text-lg font-medium">From emergency saves to stress-free vacation planning, we take care of your boat like it's our own.</p>
            </div>
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 min-w-[320px]">
              <div className="text-5xl font-black text-white mb-2">4.9/5</div>
              <div className="flex text-yellow-400 gap-1 mb-4">
                {[1,2,3,4,5].map(i => <i key={i} className="fa-solid fa-star"></i>)}
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-blue-300">Average Google Rating</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REVIEWS.map(review => (
              <div key={review.id} className="bg-white/5 p-10 rounded-[40px] border border-white/10 hover:bg-white/[0.08] transition flex flex-col group">
                <div className="flex justify-between items-start mb-10">
                  <div className="flex gap-4 items-center">
                    <img src={review.avatar} className="w-16 h-16 rounded-full object-cover border-2 border-blue-500/30 grayscale group-hover:grayscale-0 transition-all duration-500" alt={review.author} />
                    <div>
                      <div className="font-black text-white text-lg uppercase tracking-tight">{review.author}</div>
                      <div className="text-xs text-blue-400 font-black uppercase tracking-widest">{review.date}</div>
                    </div>
                  </div>
                  <i className={`fa-brands fa-${review.platform} text-2xl text-white/10 group-hover:text-blue-400 transition-colors`}></i>
                </div>
                <p className="text-blue-50/80 text-xl leading-relaxed mb-10 flex-grow font-medium">"{review.text}"</p>
                <div className="flex gap-1">
                   {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star text-yellow-400 text-sm"></i>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-20">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-2 mb-8">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <i className="fa-solid fa-anchor text-white text-xl"></i>
                </div>
                <span className="font-black text-xl leading-none uppercase tracking-tighter">ASA BOAT TRAILER</span>
              </div>
              <p className="text-slate-500 font-bold uppercase text-xs leading-loose tracking-widest mb-10">
                South Florida's Only Dedicated Boat Trailer Rental Company.
              </p>
              <div className="flex gap-4">
                {['facebook', 'instagram', 'youtube'].map(s => (
                  <a key={s} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-blue-600 transition shadow-sm">
                    <i className={`fa-brands fa-${s} text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="font-black mb-10 uppercase tracking-widest text-blue-400 text-sm">The Fleet</h5>
              <ul className="space-y-4 text-slate-500 font-black text-[10px] uppercase tracking-[0.2em]">
                <li><a href="#trailers" className="hover:text-white transition">Single Axle (Up to 18')</a></li>
                <li><a href="#trailers" className="hover:text-white transition">Tandem Axle (19'-25')</a></li>
                <li><a href="#trailers" className="hover:text-white transition">HD Tandem (25'-30')</a></li>
                <li><a href="#trailers" className="hover:text-white transition">Triple Axle (30'-36')</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-black mb-10 uppercase tracking-widest text-blue-400 text-sm">Services</h5>
              <ul className="space-y-4 text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em]">
                <li><a href="#trailers" className="hover:text-white transition">Trailer Rentals</a></li>
                <li><a href="tel:7863669200" className="hover:text-white transition">Nationwide Transport</a></li>
                <li><a href="tel:7863669200" className="hover:text-white transition">Mobile Maintenance</a></li>
                <li><a href="tel:7863669200" className="hover:text-white transition">Roadside Help</a></li>
              </ul>
            </div>

            <div className="bg-slate-900 p-10 rounded-[40px] border border-slate-800">
              <h5 className="font-black mb-4 uppercase text-white tracking-tight">Need Help Now?</h5>
              <p className="text-xs font-bold text-slate-500 mb-8 uppercase tracking-widest leading-relaxed">24/7 Hotline for emergencies & instant bookings.</p>
              <a href="tel:7863669200" className="block text-center w-full bg-blue-600 py-5 rounded-2xl font-black text-white hover:bg-blue-700 transition shadow-xl uppercase tracking-widest text-sm">
                786-366-9200
              </a>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-600 font-black uppercase tracking-[0.3em]">
            <p>© 2024 ASA Boat Trailer Rental. D-U-N-S #43849811. All equipment is 2026 spec.</p>
            <div className="flex gap-10">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>

      {/* CSS Animation for Marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: 200%;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;