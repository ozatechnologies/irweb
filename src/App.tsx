import { useState, useEffect } from 'react'

// Simple SVG Botanical Decoration
const BotanicalLeaf = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 190 L50 20" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    <path d="M50 160 C30 140 20 110 30 80 C40 50 50 40 50 40 C50 40 60 50 70 80 C80 110 70 140 50 160 Z" fill="currentColor" opacity="0.08" />
    <path d="M50 120 C40 110 35 90 40 70" stroke="currentColor" strokeWidth="1" opacity="0.3" fill="none" />
    <path d="M50 100 C60 90 65 70 60 50" stroke="currentColor" strokeWidth="1" opacity="0.3" fill="none" />
  </svg>
)

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-[#F6F1E6] text-[#1F2B23]">
      
      {/* FLOATING NAVIGATION */}
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${scrolled ? 'top-4' : ''}`}>
        <div className="glass-nav rounded-full px-6 py-3 flex items-center gap-8 md:gap-12">
          <div className="flex items-center gap-2">
            <img src="https://i.ibb.co/jPTSdNvr/Chat-GPT-Image-Jun-29-2026-01-05-16-AM.png" alt="Indus Renewables" className="h-6 w-auto" />
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#1F2B23]/80">
            <a href="#philosophy" className="hover:text-[#1F2B23] transition-colors">Philosophy</a>
            <a href="#solutions" className="hover:text-[#1F2B23] transition-colors">Solutions</a>
            <a href="#projects" className="hover:text-[#1F2B23] transition-colors">Projects</a>
          </div>

          <a href="#contact" className="bg-[#A7E34D] hover:bg-[#96ce3e] text-[#1F2B23] text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-[0_4px_12px_rgba(167,227,77,0.4)]">
            Get Started
          </a>
        </div>
      </nav>

      {/* HERO SECTION (100vh) */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col justify-end pb-16 md:pb-24">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/Swjz86Kk/Chat-GPT-Image-Jun-29-2026-02-11-08-AM.png" 
            alt="Aerial solar farm" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F2B23]/90 via-[#1F2B23]/40 to-[#1F2B23]/20" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-end gap-12 md:gap-8">
          
          {/* Bottom-Left: Content */}
          <div className="max-w-2xl text-white space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A7E34D]" />
              <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-white/90">Renewable Energy Solutions</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-semibold leading-[0.95] tracking-tight text-balance">
              We design a <br />
              <span className="font-serif italic font-normal text-white/90">better</span> future.
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-md leading-relaxed font-light">
              Premium solar installations that honor architecture, empower communities, and regenerate our planet.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#contact" className="bg-[#A7E34D] hover:bg-[#96ce3e] text-[#1F2B23] font-semibold px-8 py-4 rounded-full transition-all shadow-[0_10px_30px_rgba(167,227,77,0.3)]">
                Start Your Project
              </a>
              <a href="#projects" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-medium px-8 py-4 rounded-full transition-all">
                View Projects
              </a>
            </div>
          </div>

          {/* Bottom-Right: Floating Stats Cards */}
          <div className="hidden md:grid grid-cols-2 gap-4 max-w-md animate-fade-up delay-200">
            <div className="glass-card rounded-[24px] p-6 flex flex-col justify-between h-[140px] animate-float">
              <span className="text-[11px] font-medium tracking-wider uppercase text-[#1F2B23]/50">Energy Savings</span>
              <span className="text-5xl font-semibold text-[#1F2B23] tracking-tight">47<span className="text-2xl text-[#1F2B23]/40">%</span></span>
            </div>
            <div className="glass-card rounded-[24px] p-6 flex flex-col justify-between h-[140px] animate-float delay-100" style={{ animationDelay: '0.5s' }}>
              <span className="text-[11px] font-medium tracking-wider uppercase text-[#1F2B23]/50">Warranty</span>
              <span className="text-5xl font-semibold text-[#1F2B23] tracking-tight">25<span className="text-2xl text-[#1F2B23]/40">yr</span></span>
            </div>
            <div className="glass-card rounded-[24px] p-6 flex flex-col justify-between h-[140px] animate-float delay-200" style={{ animationDelay: '1s' }}>
              <span className="text-[11px] font-medium tracking-wider uppercase text-[#1F2B23]/50">Homes Powered</span>
              <span className="text-5xl font-semibold text-[#1F2B23] tracking-tight">12<span className="text-2xl text-[#1F2B23]/40">k+</span></span>
            </div>
            <div className="glass-card rounded-[24px] p-6 flex flex-col justify-between h-[140px] animate-float delay-300" style={{ animationDelay: '1.5s' }}>
              <span className="text-[11px] font-medium tracking-wider uppercase text-[#1F2B23]/50">Capacity</span>
              <span className="text-5xl font-semibold text-[#1F2B23] tracking-tight">98<span className="text-2xl text-[#1F2B23]/40">MW</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section id="philosophy" className="relative py-32 md:py-48 bg-[#F6F1E6] overflow-hidden">
        <BotanicalLeaf className="absolute top-20 -left-12 w-48 h-96 text-[#1F2B23] opacity-[0.04]" />
        <BotanicalLeaf className="absolute bottom-20 -right-12 w-48 h-96 rotate-180 text-[#1F2B23] opacity-[0.04]" />
        
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center space-y-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1F2B23]/5 border border-[#1F2B23]/10">
            <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#1F2B23]/70">Our Philosophy</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight text-balance text-[#1F2B23]">
            Solar isn't just technology.<br />
            It's a <span className="font-serif italic font-normal text-[#1F2B23]/80">relationship</span> with sunlight.
          </h2>

          <p className="text-lg md:text-xl text-[#1F2B23]/60 leading-relaxed max-w-2xl mx-auto font-light">
            We approach every installation as a collaboration between architecture, nature, and human aspiration. Our designs don't just generate energy—they elevate spaces.
          </p>
        </div>
      </section>

      {/* SOLUTIONS SECTION */}
      <section id="solutions" className="py-32 bg-[#F0EBE0]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1F2B23]/5 border border-[#1F2B23]/10">
                <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#1F2B23]/70">Solutions</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight text-[#1F2B23]">
                Tailored <span className="font-serif italic font-normal text-[#1F2B23]/80">solar</span><br />for every scale.
              </h2>

              <p className="text-lg text-[#1F2B23]/60 leading-relaxed font-light">
                From intimate residential homes to expansive commercial installations, we craft solutions that honor context and maximize efficiency.
              </p>

              <div className="space-y-4 pt-4">
                {['Residential rooftop systems', 'Commercial & industrial', 'Ground-mounted solar farms', 'Battery storage integration'].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group cursor-default">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#A7E34D] group-hover:scale-150 transition-transform" />
                    <span className="text-[#1F2B23] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architectural Illustration Placeholder */}
            <div className="relative aspect-[4/3] bg-[#E8E2D5] rounded-[24px] overflow-hidden border border-[#1F2B23]/5 flex items-center justify-center">
              <div className="text-center p-12">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#1F2B23]/5 flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#1F2B23]/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <p className="text-[#1F2B23]/40 text-sm font-medium tracking-wide">Architectural Visualization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION (Dark) */}
      <section id="projects" className="py-32 bg-[#1F2B23] text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
                <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-white/70">Featured Projects</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight">
                Where <span className="font-serif italic font-normal text-white/80">sunlight</span><br />meets design.
              </h2>
            </div>
            <a href="#contact" className="text-[#A7E34D] hover:text-white font-medium flex items-center gap-2 transition-colors">
              View all projects <span className="text-lg">→</span>
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Riverside Villa', loc: 'Pune, India', size: '12.5 kW System' },
              { title: 'Garden Estate', loc: 'Bangalore, India', size: '8.2 kW System' }
            ].map((project, i) => (
              <div key={i} className="group relative aspect-[4/3] bg-[#2D4A3A] rounded-[24px] overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F2B23] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-8 md:p-10 space-y-2">
                  <div className="text-[11px] font-medium tracking-wider uppercase text-[#A7E34D]">{project.loc}</div>
                  <h3 className="text-2xl md:text-3xl font-semibold">{project.title}</h3>
                  <div className="text-white/60 text-sm font-light">{project.size}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER / CTA */}
      <section id="contact" className="py-32 bg-[#F6F1E6] relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center space-y-10">
          <h2 className="text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight text-[#1F2B23]">
            Ready to harness<br />the <span className="font-serif italic font-normal text-[#1F2B23]/80">sun</span>?
          </h2>
          <p className="text-lg text-[#1F2B23]/60 max-w-xl mx-auto font-light">
            Schedule a complimentary consultation. We'll assess your property and design a custom system.
          </p>
          <a href="mailto:hello@indusrenewables.com" className="inline-block bg-[#1F2B23] hover:bg-[#2D4A3A] text-white font-semibold px-10 py-4 rounded-full transition-all shadow-[0_10px_30px_rgba(31,43,35,0.2)]">
            Schedule Consultation
          </a>
        </div>

        <footer className="mt-32 pt-10 border-t border-[#1F2B23]/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-[#1F2B23]/40">
          <div>© 2026 Indus Renewables. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#1F2B23] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#1F2B23] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#1F2B23] transition-colors">Contact</a>
          </div>
        </footer>
      </section>

    </div>
  )
}
