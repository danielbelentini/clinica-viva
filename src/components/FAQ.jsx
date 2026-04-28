import { useState, useRef } from 'react'

const faqs = [
  {
    q: 'Quanto tempo dura o clareamento dental?',
    a: 'O resultado do clareamento pode durar de 1 a 3 anos, dependendo dos seus hábitos alimentares e de higiene bucal. Alimentos e bebidas como café, vinho tinto e refrigerante podem reduzir a durabilidade. Com cuidados adequados, o resultado é bastante duradouro.',
  },
  {
    q: 'As facetas dentárias são definitivas?',
    a: 'As facetas de porcelana têm vida útil de 10 a 20 anos com os cuidados corretos. Elas são consideradas um tratamento permanente, pois exigem um pequeno desgaste do dente para fixação. Por isso é fundamental uma avaliação criteriosa antes do procedimento.',
  },
  {
    q: 'O clareamento dental faz mal ao esmalte?',
    a: 'Quando realizado por um profissional habilitado e com produtos aprovados, o clareamento é seguro e não danifica o esmalte. Pode causar sensibilidade temporária em alguns pacientes, que desaparece após o tratamento.',
  },
  {
    q: 'Quantas sessões são necessárias para o clareamento?',
    a: 'O clareamento a laser é realizado em 1 a 2 sessões no consultório. Já o clareamento caseiro com moldeiras leva de 2 a 4 semanas. O número de sessões varia conforme o grau de escurecimento e o resultado desejado.',
  },
  {
    q: 'Quem pode fazer facetas dentárias?',
    a: 'A maioria dos adultos pode fazer facetas, mas é necessária uma avaliação prévia. Pacientes com bruxismo severo, problemas periodontais ativos ou pouco esmalte disponível podem precisar de outros tratamentos. Nossa equipe vai indicar a melhor opção para o seu caso.',
  },
  {
    q: 'Como é feita a manutenção das facetas?',
    a: 'A manutenção é simples: escovação correta, fio dental diário e visitas regulares ao dentista. Evitar morder objetos duros e usar protetor bucal se tiver bruxismo também ajuda muito a preservar as facetas por mais tempo.',
  },
]

function FaqItem({ faq, isOpen, onToggle }) {
  const contentRef = useRef(null)

  return (
    <div className={`border rounded-xl overflow-hidden transition-colors duration-200 ${isOpen ? 'border-sage' : 'border-neutral-200'}`}>
      <button
        className={`w-full flex items-center justify-between px-5 py-4 text-left transition-colors duration-200 ${
          isOpen ? 'bg-sage-pale' : 'bg-white hover:bg-sage-pale'
        }`}
        onClick={onToggle}
      >
        <span className={`text-sm font-semibold pr-4 ${isOpen ? 'text-sage-dark' : 'text-neutral-700'}`}>
          {faq.q}
        </span>
        <span
          className="text-sage text-lg font-light flex-shrink-0 transition-transform duration-300"
          style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          +
        </span>
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight + 'px' : '0px',
          transition: 'max-height 0.35s ease',
          overflow: 'hidden',
        }}
      >
        <div className="px-5 pt-3 pb-5 bg-white">
          <p className="text-sm text-neutral-500 leading-relaxed">{faq.a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-tag">Dúvidas frequentes</span>
          <h2 className="section-title text-3xl md:text-4xl">
            Perguntas que nossos pacientes fazem
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              faq={faq}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-neutral-500 text-sm mb-4">Ainda tem dúvidas? Fale com a gente.</p>
          
          <a  href="https://wa.me/5511999921543"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}