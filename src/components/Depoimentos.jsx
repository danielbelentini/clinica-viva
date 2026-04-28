import { useState } from 'react'

const depoimentos = [
  {
    initials: 'MF',
    name: 'Mariana Figueiredo',
    role: 'Paciente há 2 anos',
    text: 'Fiz o clareamento e as facetas aqui e o resultado foi além do que esperava. Meu sorriso mudou completamente e minha autoestima foi lá em cima.',
  },
  {
    initials: 'RO',
    name: 'Ricardo Oliveira',
    role: 'Paciente há 1 ano',
    text: 'Sempre tive insegurança com meu sorriso. Depois das restaurações estéticas na Clínica Viva, não consigo mais parar de sorrir. Atendimento impecável.',
  },
  {
    initials: 'LS',
    name: 'Letícia Souza',
    role: 'Paciente há 3 anos',
    text: 'Profissionais incríveis que explicam cada etapa do tratamento. Me senti segura do começo ao fim. Recomendo demais para quem quer cuidar da saúde bucal.',
  },
  {
    initials: 'CP',
    name: 'Carlos Pereira',
    role: 'Paciente há 6 meses',
    text: 'Vim para uma avaliação e descobri que precisava de restaurações que eu nem sabia. Tratamento rápido, sem dor e com resultado natural. Excelente!',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-sage text-base">★</span>
      ))}
    </div>
  )
}

export default function Depoimentos() {
  const [current, setCurrent] = useState(0)
  const total = depoimentos.length

  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  const visible = [
    depoimentos[current],
    depoimentos[(current + 1) % total],
    depoimentos[(current + 2) % total],
  ]

  return (
    <section className="bg-sage-pale py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-tag">Depoimentos</span>
          <h2 className="section-title text-3xl md:text-4xl">
            O que nossos pacientes dizem
          </h2>
        </div>

        {/* Cards — desktop mostra 3, mobile mostra 1 */}
        <div className="hidden md:grid grid-cols-3 gap-6 mb-8">
          {visible.map((d, i) => (
            <Card key={i} d={d} />
          ))}
        </div>

        {/* Mobile: single card */}
        <div className="md:hidden mb-8">
          <Card d={depoimentos[current]} />
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border-2 border-sage text-sage flex items-center justify-center hover:bg-sage hover:text-white transition-all duration-200"
            aria-label="Anterior"
          >
            ←
          </button>
          <div className="flex gap-2">
            {depoimentos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  i === current ? 'bg-sage w-5' : 'bg-sage-muted'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border-2 border-sage text-sage flex items-center justify-center hover:bg-sage hover:text-white transition-all duration-200"
            aria-label="Próximo"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}

function Card({ d }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100">
      <div className="flex gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-sage text-base">★</span>
        ))}
      </div>
      <p className="text-neutral-600 text-sm leading-relaxed mb-5 italic">
        "{d.text}"
      </p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-sage-pale border border-sage-muted flex items-center justify-center text-sage text-xs font-bold flex-shrink-0">
          {d.initials}
        </div>
        <div>
          <div className="text-neutral-800 text-sm font-semibold">{d.name}</div>
          <div className="text-neutral-400 text-xs">{d.role}</div>
        </div>
      </div>
    </div>
  )
}
