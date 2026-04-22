'use client'

import { useState } from 'react'

export default function FitnessPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  const programs = [
    {
      name: 'FUERZA TOTAL',
      desc: 'Powerlifting y entrenamiento funcional para construir una base sólida. Pesas, barras y todo el hierro que necesitás.',
      level: 'INTERMEDIO',
      sessions: '4x / semana',
      duration: '60 min',
      color: '#FF4500',
    },
    {
      name: 'CARDIO EXTREMO',
      desc: 'HIIT de alta intensidad diseñado para quemar grasa y construir resistencia cardiovascular al límite.',
      level: 'AVANZADO',
      sessions: '5x / semana',
      duration: '45 min',
      color: '#FF8C00',
    },
    {
      name: 'CUERPO & MENTE',
      desc: 'Pilates, movilidad y entrenamiento de fuerza funcional. El programa perfecto para quienes empiezan.',
      level: 'PRINCIPIANTE',
      sessions: '3x / semana',
      duration: '50 min',
      color: '#FFB300',
    },
  ]

  const testimonials = [
    {
      name: 'Facundo R.',
      text: 'Bajé 18kg en 5 meses. Los coaches te enseñan la técnica correcta y te empujan cuando más lo necesitás.',
      stars: 5,
      tag: '-18kg',
    },
    {
      name: 'Valentina M.',
      text: 'Pensé que nunca podría hacer una sentadilla con barra. APEX cambió todo. Ahora levanto 80kg y sigo subiendo.',
      stars: 5,
      tag: '+80kg',
    },
    {
      name: 'Tomás P.',
      text: 'La comunidad es lo mejor. No es solo un gimnasio, es el equipo que te hace aparecer aunque llueva.',
      stars: 5,
      tag: '1 año',
    },
  ]

  const navLinks = [
    { label: 'Programas', href: '#programas' },
    { label: 'Coaches', href: '#programas' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'App', href: '#app' },
  ]

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans">
      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-[#0a0a0a] flex flex-col items-center justify-center gap-8 md:hidden">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-6 text-white/40 hover:text-white text-3xl leading-none"
            aria-label="Cerrar menú"
          >
            ✕
          </button>
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-black uppercase tracking-widest text-white/70 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#programas"
            onClick={() => setMenuOpen(false)}
            className="mt-4 px-8 py-3 text-sm font-black uppercase tracking-widest text-black"
            style={{ background: '#FF4500' }}
          >
            Prueba Gratis
          </a>
        </div>
      )}

      {/* Nav */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-white/5">
        <a href="#" className="flex items-center gap-3">
          <div
            className="w-8 h-8 flex items-center justify-center font-black text-xs text-black"
            style={{ background: '#FF4500', clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
          >
            A
          </div>
          <span className="font-black text-xl tracking-widest uppercase">APEX</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-white/50">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-white transition-colors">{l.label}</a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#programas"
            className="hidden md:block px-5 py-2.5 text-xs font-black uppercase tracking-widest text-black"
            style={{ background: '#FF4500' }}
          >
            Prueba Gratis
          </a>
          <button
            className="md:hidden text-white text-2xl leading-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 py-20 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-5"
          style={{ background: 'repeating-linear-gradient(45deg, #FF4500 0px, #FF4500 1px, transparent 1px, transparent 40px)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ background: '#FF4500' }}
        />

        <div className="relative max-w-5xl">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-black uppercase tracking-widest mb-8"
            style={{ background: 'rgba(255,69,0,0.15)', border: '1px solid rgba(255,69,0,0.3)', color: '#FF6A33' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500] animate-pulse" />
            12 semanas. 1 transformación.
          </div>

          <h1 className="text-[clamp(2rem,12vw,10rem)] font-black leading-[0.85] tracking-tighter uppercase mb-8">
            SIN<br />
            <span style={{ WebkitTextStroke: '2px #FF4500', color: 'transparent' }}>EXCUSAS.</span>
            <br />
            <span className="text-gradient-orange">RESULTADOS.</span>
          </h1>

          <p className="text-white/50 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
            Entrenamiento de élite para personas reales. Coaches certificados, programas
            probados y una comunidad que no te deja bajar los brazos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#programas"
              className="px-8 py-4 text-base font-black uppercase tracking-widest text-black inline-block text-center"
              style={{ background: '#FF4500' }}
            >
              Empezar Ahora →
            </a>
            <a
              href="#programas"
              className="px-8 py-4 text-base font-bold text-white inline-block text-center"
              style={{ border: '1px solid rgba(255,255,255,0.15)' }}
            >
              Ver programas
            </a>
          </div>

          <p className="text-white/25 text-xs font-bold uppercase tracking-widest mt-6">
            Primera semana gratis · Sin contrato · Cancelá cuando quieras
          </p>
        </div>

        <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4">
          {[
            { value: '10k+', label: 'Miembros activos' },
            { value: '500+', label: 'Workouts disponibles' },
            { value: '4.9★', label: 'App Store rating' },
          ].map((s) => (
            <div key={s.label} className="p-5 rounded-xl text-right" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="text-3xl font-black" style={{ color: '#FF4500' }}>{s.value}</div>
              <div className="text-xs text-white/40 uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats bar */}
      <div className="py-8 px-6 border-y" style={{ background: '#FF4500', borderColor: '#FF4500' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-black text-center">
          {[
            { value: '10,000+', label: 'Miembros' },
            { value: '98%', label: 'Tasa de renovación' },
            { value: '50+', label: 'Coaches certificados' },
            { value: '#1', label: 'En Argentina' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-black">{s.value}</div>
              <div className="text-sm font-bold uppercase tracking-wider opacity-60">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Programs */}
      <section id="programas" className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-0">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <p className="text-[#FF4500] text-xs font-black uppercase tracking-[0.4em] mb-3">Nuestros programas</p>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              Elegí tu<br />
              <span style={{ WebkitTextStroke: '2px #FF4500', color: 'transparent' }}>desafío</span>
            </h2>
          </div>
          <p className="text-white/40 text-sm max-w-xs">
            Todos los programas incluyen seguimiento personalizado de tu coach.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((p) => (
            <div
              key={p.name}
              className="group p-8 rounded-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div
                className="inline-block px-3 py-1 text-xs font-black uppercase tracking-widest text-black mb-6"
                style={{ background: p.color }}
              >
                {p.level}
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4">{p.name}</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-6 flex-1">{p.desc}</p>

              <div className="border-t border-white/10 pt-6 grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-xs text-white/30 uppercase tracking-wider mb-1">Frecuencia</div>
                  <div className="font-bold text-sm" style={{ color: p.color }}>{p.sessions}</div>
                </div>
                <div>
                  <div className="text-xs text-white/30 uppercase tracking-wider mb-1">Duración</div>
                  <div className="font-bold text-sm" style={{ color: p.color }}>{p.duration}</div>
                </div>
              </div>

              <a
                href="mailto:info@apextraining.com?subject=Quiero%20conocer%20un%20programa"
                className="w-full block py-3 text-center text-xs font-black uppercase tracking-widest text-white"
                style={{ background: `${p.color}20`, border: `1px solid ${p.color}40` }}
              >
                Consultar programa →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="resultados"
        className="py-24 px-6 md:px-12 scroll-mt-0"
        style={{ background: 'rgba(255,69,0,0.04)', borderTop: '1px solid rgba(255,69,0,0.1)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#FF4500] text-xs font-black uppercase tracking-[0.4em] mb-3">Resultados reales</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
              Ellos lo lograron.<br />
              <span className="text-gradient-orange">Vos podés también.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="p-8 rounded-2xl relative" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="absolute top-6 right-6 px-3 py-1 text-xs font-black text-black" style={{ background: '#FF4500' }}>
                  {t.tag}
                </div>
                <div className="text-[#FF4500] text-xl mb-4">{'★'.repeat(t.stars)}</div>
                <p className="text-white/70 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-black text-sm" style={{ background: '#FF4500' }}>
                    {t.name[0]}
                  </div>
                  <span className="font-bold text-sm">{t.name}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#programas"
              className="inline-block px-8 py-4 text-sm font-black uppercase tracking-widest text-black"
              style={{ background: '#FF4500' }}
            >
              Quiero mis resultados →
            </a>
          </div>
        </div>
      </section>

      {/* App Download */}
      <section id="app" className="py-24 px-6 md:px-12 max-w-5xl mx-auto scroll-mt-0">
        <div className="rounded-3xl p-12 md:p-16 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FF4500, #FF8C00)' }}>
          <div
            className="absolute top-0 right-0 text-[300px] font-black leading-none opacity-10 select-none pointer-events-none"
            style={{ color: 'black', transform: 'translate(20%, -20%)' }}
          >
            A
          </div>
          <div className="relative">
            <p className="text-black/60 text-xs font-black uppercase tracking-[0.4em] mb-4">Disponible en iOS & Android</p>
            <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter leading-none mb-6">
              Entrenás<br />donde quieras.
            </h2>
            <p className="text-black/60 max-w-md mb-10 leading-relaxed">
              500+ workouts, seguimiento de progreso, nutrición y comunidad. Todo en tu bolsillo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://apps.apple.com/ar/genre/ios/id36"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-black text-white font-bold text-sm hover:bg-zinc-900 transition-colors"
              >
                <span className="text-2xl">🍎</span> App Store
              </a>
              <a
                href="https://play.google.com/store/apps"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-black text-white font-bold text-sm hover:bg-zinc-900 transition-colors"
              >
                <span className="text-2xl">🤖</span> Google Play
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <a href="#" className="flex items-center gap-2">
            <div
              className="w-6 h-6 flex items-center justify-center font-black text-xs text-black"
              style={{ background: '#FF4500', clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
            >
              A
            </div>
            <span className="font-black tracking-widest uppercase text-sm">APEX Training</span>
          </a>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center">
            <a href="tel:+541143219876" className="text-white/30 text-xs hover:text-white transition-colors">+54 11 4321-9876</a>
            <span className="hidden md:block text-white/10">·</span>
            <a href="mailto:info@apextraining.com" className="text-white/30 text-xs hover:text-white transition-colors">info@apextraining.com</a>
          </div>
          <div className="flex gap-6 text-xs text-white/30 font-bold uppercase tracking-wider">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube</a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">TikTok</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
