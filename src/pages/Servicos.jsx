import { Link } from 'react-router-dom'
import FAQ from '../components/FAQ'
import Depoimentos from '../components/Depoimentos'

export default function Servicos() {
  return (
    <main className="pt-16">
      <PageHero />
      <ListaServicos />
      <Processo />
      <Depoimentos />
      <FAQ />
      <Contato />
    </main>
  )
}

function PageHero() {
  return (
    <section className="bg-sage-pale py-20 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <span className="section-tag">O que fazemos</span>
        <h1 className="section-title text-4xl md:text-5xl mb-5">
          Nossos Serviços
        </h1>
        <p className="text-neutral-500 text-base leading-relaxed mb-8">
          Tratamentos especializados em dentística estética para transformar seu sorriso com saúde, naturalidade e técnica avançada.
        </p>
        <a
          href="https://wa.me/5511999921543"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Agendar avaliação gratuita
        </a>
      </div>
    </section>
  )
}

const servicos = [
  {
    id: 'clareamento',
    title: 'Clareamento Dental',
    tag: 'Estética',
    img: 'https://images.unsplash.com/photo-1654373535457-383a0a4d00f9?w=800&q=80&auto=format&fit=crop',
    desc: 'O clareamento dental é um dos tratamentos estéticos mais populares e eficazes. Utilizamos tecnologia a laser e géis de alta concentração para resultados visíveis e duradouros.',
    beneficios: [
      'Resultado de até 8 tons mais claro',
      'Procedimento seguro e supervisionado',
      'Opções no consultório ou caseiro com moldeiras',
      'Baixa sensibilidade com protocolo moderno',
    ],
    duracao: '1 a 2 sessões (laser) ou 2 a 4 semanas (caseiro)',
  },
  {
    id: 'facetas',
    title: 'Facetas de Porcelana',
    tag: 'Restauração',
    img: 'https://images.unsplash.com/photo-1660300110546-3b39e353b672?w=800&q=80&auto=format&fit=crop',
    desc: 'As facetas de porcelana são finas lâminas cerâmicas fixadas na superfície dos dentes para corrigir cor, forma, tamanho e alinhamento, com resultado extremamente natural.',
    beneficios: [
      'Correção de cor, forma e alinhamento',
      'Aparência extremamente natural',
      'Durabilidade de 10 a 20 anos',
      'Resistente a manchas',
    ],
    duracao: '2 a 3 consultas ao longo de 2 semanas',
  },
  {
    id: 'restauracoes',
    title: 'Restaurações Estéticas',
    tag: 'Saúde e Estética',
    img: 'https://images.unsplash.com/photo-1664529845836-433c172142ca?w=800&q=80&auto=format&fit=crop',
    desc: 'Utilizamos resinas compostas de última geração para restaurar dentes fraturados, cariados ou desgastados, com resultado indistinguível do dente natural.',
    beneficios: [
      'Resultado idêntico ao dente natural',
      'Procedimento realizado em uma única sessão',
      'Preserva ao máximo a estrutura dental',
      'Alta durabilidade e resistência',
    ],
    duracao: '1 consulta por restauração',
  },
  {
    id: 'lente',
    title: 'Lente de Contato Dental',
    tag: 'Alta Estética',
    img: 'https://images.unsplash.com/photo-1660737217837-95f00b9eae53?w=800&q=80&auto=format&fit=crop',
    desc: 'A lente de contato dental é a versão mais refinada das facetas, com espessura mínima e desgaste mínimo do dente, indicada para quem busca o máximo em naturalidade.',
    beneficios: [
      'Espessura de 0,2mm — mínimo desgaste',
      'Translucidez que imita o esmalte natural',
      'Ideal para quem tem dentes saudáveis',
      'Resultado premium e sofisticado',
    ],
    duracao: '2 a 3 consultas ao longo de 2 semanas',
  },
]

function ListaServicos() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-20">
        {servicos.map((s, i) => (
          <div
            key={s.id}
            id={s.id}
            className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'md:[&>*:first-child]:order-2' : ''}`}
          >
            <div
              className="rounded-2xl overflow-hidden h-72 bg-cover bg-center"
              style={{ backgroundImage: `url(${s.img})` }}
            />
            <div>
              <span className="section-tag">{s.tag}</span>
              <h2 className="section-title text-2xl md:text-3xl mb-4">{s.title}</h2>
              <p className="text-neutral-500 text-sm leading-relaxed mb-5">{s.desc}</p>
              <ul className="flex flex-col gap-2 mb-5">
                {s.beneficios.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-neutral-600">
                    <span className="text-sage font-bold mt-0.5 flex-shrink-0">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-neutral-400 mb-6">
                <span className="font-semibold text-neutral-500">Duração estimada:</span> {s.duracao}
              </p>
              <a
                href="https://wa.me/5511999921543"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Quero este tratamento
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Processo() {
  const etapas = [
    { num: '01', titulo: 'Avaliação gratuita', desc: 'Examinamos sua saúde bucal e entendemos o que você deseja alcançar.' },
    { num: '02', titulo: 'Plano personalizado', desc: 'Elaboramos um plano de tratamento sob medida com prazos e investimento claros.' },
    { num: '03', titulo: 'Tratamento', desc: 'Realizamos os procedimentos com tecnologia de ponta e máximo conforto para você.' },
    { num: '04', titulo: 'Acompanhamento', desc: 'Seguimos acompanhando seu sorriso para garantir os melhores resultados a longo prazo.' },
  ]
  return (
    <section className="bg-sage-pale py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-tag">Como funciona</span>
          <h2 className="section-title text-3xl md:text-4xl">
            Do primeiro contato ao sorriso novo
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {etapas.map((e) => (
            <div key={e.num} className="bg-white rounded-2xl p-6 border border-neutral-100">
              <div className="font-bold text-sage text-3xl mb-3">{e.num}</div>
              <h4 className="font-bold text-neutral-800 text-sm mb-2">{e.titulo}</h4>
              <p className="text-neutral-500 text-xs leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contato() {
  return (
    <section id="contato" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="section-tag">Fale conosco</span>
          <h2 className="section-title text-3xl md:text-4xl mb-5">
            Agende sua consulta
          </h2>
          <p className="text-neutral-500 text-sm leading-relaxed mb-8">
            Entre em contato e nossa equipe vai te atender rapidamente para agendar sua avaliação gratuita.
          </p>

          <div className="flex flex-col gap-4 mb-8">
            {[
              { label: 'Endereço', value: 'Rua Estados Unidos, 1200 — Jardim América, São Paulo — SP' },
              { label: 'Horários', value: 'Seg a Sex: 08h às 19h · Sáb: 08h às 14h' },
              { label: 'WhatsApp', value: '(11) 99992-1543' },
            ].map((i) => (
              <div key={i.label} className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-sage-pale flex items-center justify-center flex-shrink-0">
                  <span className="text-sage text-xs">✓</span>
                </div>
                <div>
                  <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-0.5">{i.label}</div>
                  <div className="text-sm text-neutral-600">{i.value}</div>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/5511999921543"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2 w-fit"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Agende agora pelo WhatsApp
          </a>
        </div>

        {/* Mapa */}
        <div className="rounded-2xl overflow-hidden h-80 border border-neutral-200">
          <iframe
            title="Localização da Clínica Viva"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.034155186824!2d-46.67061032395314!3d-23.56721676180873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59d700c9a711%3A0x1d2a10535cf2d329!2sR.%20Estados%20Unidos%2C%201418%20-%20Jardim%20America%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001427-001!5e0!3m2!1spt-BR!2sbr!4v1777916722563!5m2!1spt-BR!2sbr"
          />
        </div>
      </div>
    </section>
  )
}
