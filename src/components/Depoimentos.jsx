import { useState } from 'react'

const depoimentos = [
  {
    initials: 'MF',
    name: 'Mariana Figueiredo',
    role: 'Paciente há 2 anos',
    text: 'Fiz as facetas de porcelana aqui e não consigo parar de sorrir desde então. Sempre tive vergonha dos meus dentes tortos e amarelados, e hoje me sinto outra pessoa. A Dra. Ana foi incrível, explicou tudo com calma e o resultado ficou super natural.',
  },
  {
    initials: 'RO',
    name: 'Ricardo Oliveira',
    role: 'Paciente há 1 ano',
    text: 'Vim indicado por um amigo para fazer o clareamento e valeu muito a pena. Em duas sessões meus dentes ficaram visivelmente mais brancos, sem aquela sensibilidade que eu tinha medo. Atendimento pontual, estrutura ótima e preço justo. Já indiquei pra minha esposa.',
  },
  {
    initials: 'LS',
    name: 'Letícia Souza',
    role: 'Paciente há 3 anos',
    text: 'Tenho muito medo de dentista, mas na Clínica Viva me sinto segura. Já fiz restauração, limpeza e agora estou finalizando o clareamento caseiro. Cada consulta é tranquila, sem pressa e sem dor. É raro encontrar um lugar assim.',
  },
  {
    initials: 'CP',
    name: 'Carlos Pereira',
    role: 'Paciente há 6 meses',
    text: 'Quebrei um dente na época do carnaval e fiquei desesperado. Consegui atendimento rápido aqui e fizeram uma restauração que ficou idêntica ao dente original. Ninguém percebe que é restaurado. Fiquei impressionado com a qualidade do trabalho.',
  },
  {
    initials: 'JB',
    name: 'Juliana Barros',
    role: 'Paciente há 8 meses',
    text: 'Fiz a lente de contato dental e o resultado superou tudo que eu esperava. Meus dentes ficaram perfeitos e o procedimento foi muito menos invasivo do que eu imaginava. A equipe toda é muito atenciosa, desde a recepção até o final da consulta.',
  },
  {
    initials: 'TM',
    name: 'Thiago Martins',
    role: 'Paciente há 1 ano e meio',
    text: 'Cheguei na clínica com dentes bem manchados por anos de café e cigarro. Depois do clareamento a laser, a diferença foi absurda — parecia outro sorriso. Me arrependo de não ter feito antes. Recomendo sem hesitar.',
  },
]

function Card({ d }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100 h-full flex flex-col justify-between">
      <div>
        <div className="flex gap-0.5 mb-4">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-sage text-base">★</span>
          ))}
        </div>
        <p className="text-neutral-600 text-sm leading-relaxed mb-5 italic">
          "{d.text}"
        </p>
      </div>
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

export default function Depoimentos() {
  const [page, setPage] = useState(0)
  const perPage = 3
  const totalPages = Math.ceil(depoimentos.length / perPage)

  const prev = () => setPage((p) => Math.max(0, p - 1))
  const next = () => setPage((p) => Math.min(totalPages - 1, p + 1))

  const visible = depoimentos.slice(page * perPage, page * perPage + perPage)

  return (
    <section className="bg-sage-pale py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-tag">Depoimentos</span>
          <h2 className="section-title text-3xl md:text-4xl">
            O que nossos pacientes dizem
          </h2>
        </div>

        {/* Grid — 1 coluna no mobile, 3 no desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {visible.map((d, i) => (
            <Card key={page * perPage + i} d={d} />
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            disabled={page === 0}
            className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
              page > 0
                ? 'border-sage text-sage hover:bg-sage hover:text-white'
                : 'border-neutral-200 text-neutral-300 cursor-not-allowed'
            }`}
          >
            ←
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`h-2 rounded-full transition-all duration-200 ${
                  page === i ? 'bg-sage w-5' : 'bg-sage-muted w-2'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={page === totalPages - 1}
            className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
              page < totalPages - 1
                ? 'border-sage text-sage hover:bg-sage hover:text-white'
                : 'border-neutral-200 text-neutral-300 cursor-not-allowed'
            }`}
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}