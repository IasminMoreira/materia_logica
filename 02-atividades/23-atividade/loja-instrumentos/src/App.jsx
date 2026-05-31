import NavegacaoPrincipal from './components/NavegacaoPrincipal'
import RodapePrincipal    from './components/RodapePrincipal'
import Home               from './pages/Home'
import Produtos           from './pages/Produtos'
import Endereco           from './pages/Endereco'
import Contato            from './pages/Contato'
import bodyBg             from './assets/guitarra_fundo_body.jpg'

export default function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bodyBg})`,
        backgroundRepeat: 'no-repeat',
        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
        fontSize: 14,
      }}
    >
      <main
        style={{
          position: 'relative',
          width: '90%',
          margin: '0 auto',
          backgroundColor: 'rgba(155,0,0,0.5)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <NavegacaoPrincipal />
        <Home />
        <Produtos />
        <Endereco />
        <Contato />
        <RodapePrincipal />
      </main>
    </div>
  )
}
