import headerImg from '../assets/guitarras_header.jpg'

const navLinks = [
  { label: 'Home',         alvo: 'home'     },
  { label: 'Quem Somos',   alvo: 'home'     },
  { label: 'Instrumentos', alvo: 'produtos' },
  { label: 'Endereço',     alvo: 'endereco' },
  { label: 'Contato',      alvo: 'contato'  },
]

function irPara(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function NavegacaoPrincipal() {
  return (
    <header
      className="header"
      style={{ backgroundImage: `url(${headerImg})` }}
    >
      <nav className="header__nav" aria-label="Menu principal">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={`#${link.alvo}`}
            onClick={(e) => { e.preventDefault(); irPara(link.alvo) }}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
