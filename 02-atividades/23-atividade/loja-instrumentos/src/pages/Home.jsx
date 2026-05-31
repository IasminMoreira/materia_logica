import lojaImg from '../assets/loja.jpg'

export default function Home() {
  return (
    <section id="home" className="home" aria-label="Apresentação da loja">

      <div className="home__texto">
        <h2>Nossa Loja - Instrumentos Musicais</h2>
        <p>
          Se você é um amante da música, está em busca de um novo instrumento musical
          e não abre mão de qualidade, chegou ao lugar certo! Aqui em nossa loja você
          encontra os melhores itens, como: teclado, piano (digital e acústico),
          contrabaixo, bateria, guitarra, violão, soprano e muito mais! Nossos
          instrumentos possuem o selo de qualidade das melhores marcas do mercado!
          Escolha os seus favoritos e receba-os em casa com toda a comodidade que
          você precisa. Confira nossas opções disponíveis e tenha em mãos instrumentos
          de ponta!
        </p>
      </div>

      <figure className="home__imagem">
        <img src={lojaImg} alt="Interior da loja com diversas guitarras expostas na parede" />
      </figure>

    </section>
  )
}
