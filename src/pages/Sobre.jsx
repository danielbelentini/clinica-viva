import { Link } from 'react-router-dom'
import Depoimentos from '../components/Depoimentos'

export default function Sobre() {
  return (
    <main className="pt-16">
      <PageHero />
      <Historia />
      <Equipe />
      <Valores />
      <Depoimentos />
      <CTA />
    </main>
  )
}

function PageHero() {
  return (
    <section className="bg-sage-pale py-20 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <span className="section-tag">Quem somos</span>
        <h1 className="section-title text-4xl md:text-5xl mb-5">
          Sobre a Clínica Viva
        </h1>
        <p className="text-neutral-500 text-base leading-relaxed">
          Nascemos da vontade de oferecer odontologia estética de alto nível com um atendimento que vai além do consultório.
        </p>
      </div>
    </section>
  )
}

function Historia() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div
          className="rounded-2xl overflow-hidden h-80 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&q=80&auto=format&fit=crop)',
          }}
        />
        <div>
          <span className="section-tag">Nossa história</span>
          <h2 className="section-title text-3xl md:text-4xl mb-5">
            Uma clínica criada para cuidar de verdade
          </h2>
          <p className="text-neutral-500 text-sm leading-relaxed mb-4">
            A Clínica Viva surgiu em 2014 com uma proposta simples: oferecer tratamentos odontológicos estéticos de alta qualidade num ambiente acolhedor, onde cada paciente se sinta ouvido e cuidado.
          </p>
          <p className="text-neutral-500 text-sm leading-relaxed mb-4">
            Ao longo dos anos, nos especializamos em dentística, combinando tecnologia de ponta com técnicas que preservam ao máximo a estrutura natural dos dentes.
          </p>
          <p className="text-neutral-500 text-sm leading-relaxed">
            Hoje, mais de 3.000 pacientes confiam em nós para cuidar da saúde e estética do seu sorriso.
          </p>
        </div>
      </div>
    </section>
  )
}

function Equipe() {
  const membros = [
    {
      nome: 'Dra. Ana Carvalho',
      especialidade: 'Dentística e Estética',
      bio: 'Especialista em facetas e clareamento com mais de 12 anos de experiência. Mestre em Dentística pela USP.',
      initials: 'AC',
    },
    {
      nome: 'Dr. Paulo Mendes',
      especialidade: 'Restaurações Estéticas',
      bio: 'Especialista em restaurações e lentes de contato dental. Formado pela UNICAMP com pós-graduação em Estética.',
      initials: 'PM',
    },
    {
      nome: 'Dra. Fernanda Lima',
      especialidade: 'Clareamento e Prevenção',
      bio: 'Referência em clareamento dental e saúde bucal preventiva. Palestrante em congressos de odontologia estética.',
      initials: 'FL',
    },
  ]
  return (
    <section className="bg-neutral-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-tag">Nossa equipe</span>
          <h2 className="section-title text-3xl md:text-4xl">
            Profissionais que fazem a diferença
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {membros.map((m) => (
            <div key={m.nome} className="bg-white rounded-2xl p-6 border border-neutral-100 text-center">
              <div className="w-16 h-16 rounded-full bg-sage-pale border-2 border-sage-muted flex items-center justify-center text-sage font-bold text-lg mx-auto mb-4">
                {m.initials}
              </div>
              <h3 className="font-bold text-neutral-800 text-base mb-1">{m.nome}</h3>
              <p className="text-sage text-xs font-semibold tracking-wide uppercase mb-3">{m.especialidade}</p>
              <p className="text-neutral-500 text-sm leading-relaxed">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Valores() {
  const valores = [
    { titulo: 'Saúde em primeiro lugar', desc: 'Todo tratamento estético começa com uma avaliação de saúde bucal. Beleza e função andam juntas.' },
    { titulo: 'Transparência', desc: 'Explicamos cada etapa do tratamento para que você tome decisões informadas e se sinta seguro.' },
    { titulo: 'Excelência técnica', desc: 'Investimos continuamente em capacitação e tecnologia para oferecer o melhor da odontologia moderna.' },
    { titulo: 'Cuidado genuíno', desc: 'Nos importamos com você além do consultório. Nosso relacionamento não termina no final da consulta.' },
  ]
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-tag">Nossos valores</span>
          <h2 className="section-title text-3xl md:text-4xl">
            O que guia o nosso trabalho
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {valores.map((v) => (
            <div key={v.titulo} className="border border-neutral-200 rounded-2xl p-6 hover:border-sage-muted hover:bg-sage-pale transition-all duration-300">
              <div className="w-8 h-8 rounded-full bg-sage mb-4 flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <h4 className="font-bold text-neutral-800 text-sm mb-2">{v.titulo}</h4>
              <p className="text-neutral-500 text-xs leading-relaxed">{v.desc}</p>
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
          Venha nos conhecer pessoalmente
        </h2>
        <p className="text-sage-pale text-sm mb-8">
          A primeira consulta é gratuita. Venha conversar com nossa equipe sem compromisso.
        </p>
        <a
          href="https://wa.me/5511999921543"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-sage font-bold text-sm px-8 py-4 rounded-full hover:bg-neutral-50 transition-all duration-300 active:scale-95"
        >
          Agendar visita
        </a>
      </div>
    </section>
  )
}
