import { Link } from 'react-router-dom'
import Depoimentos from '../components/Depoimentos'
import FAQ from '../components/FAQ'

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <Numeros />
      <Servicos />
      <Diferenciais />
      <Depoimentos />
      <FAQ />
      <CTA />
    </main>
  )
}

function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center px-6"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1600&q=80&auto=format&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-white/85" />
      <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center py-20">
        <div>
          <span className="section-tag">Dentística Estética</span>
          <h1 className="font-bold text-neutral-800 leading-tight mb-5"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
          >
            Seu sorriso saudável<br />
            <span className="text-sage">começa aqui.</span>
          </h1>
          <p className="text-neutral-500 text-base leading-relaxed mb-8 max-w-md">
            Somos especialistas em clareamento, facetas e restaurações estéticas. Cuidamos da saúde e da beleza do seu sorriso com técnica, tecnologia e muita atenção.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/5511999921543"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Agendar avaliação gratuita
            </a>
            <Link to="/servicos" className="btn-outline">
              Ver serviços
            </Link>
          </div>
        </div>

        {/* Card flutuante */}
        <div className="hidden md:flex justify-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-xs w-full border border-neutral-100">
            <div className="w-12 h-12 rounded-full bg-sage-pale flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#7A9E7E" opacity="0.3"/>
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#7A9E7E"/>
              </svg>
            </div>
            <h3 className="font-bold text-neutral-800 text-lg mb-2">Avaliação Gratuita</h3>
            <p className="text-neutral-500 text-sm leading-relaxed mb-5">
              Venha conhecer nossa clínica. Na primeira consulta, fazemos uma avaliação completa sem custo.
            </p>
            <div className="flex flex-col gap-2 text-sm text-neutral-500">
              <div className="flex items-center gap-2">
                <span className="text-sage">✓</span> Sem compromisso
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sage">✓</span> Diagnóstico completo
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sage">✓</span> Plano de tratamento personalizado
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Numeros() {
  const items = [
    { num: '10+', label: 'Anos de experiência' },
    { num: '3.000+', label: 'Pacientes atendidos' },
    { num: '98%', label: 'Índice de satisfação' },
    { num: '6', label: 'Especialidades' },
  ]
  return (
    <section className="bg-sage py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {items.map((i) => (
          <div key={i.label}>
            <div className="font-bold text-white text-3xl md:text-4xl mb-1">{i.num}</div>
            <div className="text-sage-pale text-xs tracking-wide uppercase">{i.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Servicos() {
  const items = [
    {
      icon: '✦',
      title: 'Clareamento Dental',
      desc: 'Técnicas modernas a laser ou com moldeiras para um sorriso até 8 tons mais branco com segurança.',
    },
    {
      icon: '◈',
      title: 'Facetas de Porcelana',
      desc: 'Lâminas ultrafinas que corrigem forma, cor e alinhamento, devolvendo naturalidade ao sorriso.',
    },
    {
      icon: '◉',
      title: 'Restaurações Estéticas',
      desc: 'Resinas de alta qualidade que imitam a aparência natural do dente com durabilidade e precisão.',
    },
    {
      icon: '◇',
      title: 'Lente de Contato Dental',
      desc: 'A versão mais fina das facetas, com mínimo desgaste dental e resultado natural impressionante.',
    },
  ]
  return (
    <section className="bg-neutral-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-tag">Nossos serviços</span>
          <h2 className="section-title text-3xl md:text-4xl mb-3">
            Tratamentos que transformam
          </h2>
          <p className="text-neutral-500 text-sm max-w-lg mx-auto">
            Combinamos técnica avançada e materiais premium para resultados que respeitam a naturalidade do seu sorriso.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl p-6 border border-neutral-100 hover:border-sage-muted hover:shadow-sm transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-full bg-sage-pale flex items-center justify-center text-sage text-lg mb-4 group-hover:bg-sage group-hover:text-white transition-all duration-300">
                {s.icon}
              </div>
              <h3 className="font-bold text-neutral-800 text-base mb-2">{s.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed mb-4">{s.desc}</p>
              <Link to="/servicos" className="text-sage text-xs font-semibold hover:text-sage-dark transition-colors">
                Saiba mais →
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/servicos" className="btn-primary">
            Ver todos os serviços
          </Link>
        </div>
      </div>
    </section>
  )
}

function Diferenciais() {
  const items = [
    { title: 'Tecnologia de ponta', desc: 'Equipamentos modernos para diagnósticos precisos e procedimentos mais confortáveis.' },
    { title: 'Equipe especializada', desc: 'Profissionais com formação específica em dentística e atualização contínua.' },
    { title: 'Atendimento humanizado', desc: 'Cada paciente é único. Tratamento personalizado com escuta ativa e cuidado real.' },
    { title: 'Ambiente acolhedor', desc: 'Um espaço pensado para você se sentir confortável e seguro durante toda a consulta.' },
  ]
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="section-tag">Por que a Clínica Viva</span>
          <h2 className="section-title text-3xl md:text-4xl mb-5">
            Saúde bucal com quem realmente se importa
          </h2>
          <p className="text-neutral-500 text-sm leading-relaxed mb-8">
            Mais do que tratar dentes, nosso objetivo é cuidar de pessoas. Cada tratamento é planejado pensando no seu bem-estar, no resultado que você deseja e na sua saúde a longo prazo.
          </p>
          <Link to="/sobre" className="btn-outline">
            Conheça nossa história
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {items.map((d) => (
            <div key={d.title} className="bg-sage-pale rounded-2xl p-5">
              <div className="w-8 h-8 rounded-full bg-sage mb-3 flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <h4 className="font-bold text-neutral-800 text-sm mb-1">{d.title}</h4>
              <p className="text-neutral-500 text-xs leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="bg-sage py-16 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-bold text-white text-3xl md:text-4xl mb-4">
          Pronto para transformar seu sorriso?
        </h2>
        <p className="text-sage-pale text-sm mb-8">
          Agende sua avaliação gratuita e descubra o tratamento ideal para você.
        </p>
        <a
          href="https://wa.me/5511999921543"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-sage font-bold text-sm px-8 py-4 rounded-full hover:bg-neutral-50 transition-all duration-300 active:scale-95"
        >
          Agendar pelo WhatsApp
        </a>
      </div>
    </section>
  )
}
