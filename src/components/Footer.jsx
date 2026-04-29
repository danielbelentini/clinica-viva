import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-neutral-400 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-full bg-sage flex items-center justify-center">
              <span className="text-white font-bold text-xs">V</span>
            </div>
            <span className="font-bold text-white text-sm">Clínica Viva</span>
          </div>
          <p className="text-sm leading-relaxed">
            Especialistas em dentística estética.<br />
            Cuidando do seu sorriso com saúde e beleza.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-3">Navegação</h4>
          <ul className="flex flex-col gap-2 list-none">
            {[['/', 'Home'], ['/sobre', 'Sobre'], ['/servicos', 'Serviços']].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-sm text-neutral-400 hover:text-sage transition-colors no-underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-3">Contato</h4>
          <p className="text-sm mb-1">Seg a Sex: 08h às 19h</p>
          <p className="text-sm mb-1">Sábado: 08h às 14h</p>
          <a
            href="https://wa.me/5511999921543"
            className="text-sage text-sm font-medium hover:text-sage-light transition-colors no-underline"
          >
            (11) 99992-1543
          </a>
        </div>
      </div>

      <div className="border-t border-neutral-700 pt-6 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Clínica Viva. Todos os direitos reservados.
      </div>
    </footer>
  )
}
