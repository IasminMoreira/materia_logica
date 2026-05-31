import guitarrinhaImg from '../assets/guitarrinha.jpg'

const listaProdutos = [
  { id: 1, nome: 'VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE', preco: 989.50 },
  { id: 2, nome: 'VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE', preco: 989.50 },
  { id: 3, nome: 'VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE', preco: 989.50 },
  { id: 4, nome: 'VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE', preco: 989.50 },
]

export default function Produtos() {
  return (
    <section id="produtos" className="produtos" aria-label="Catálogo de instrumentos">

      {listaProdutos.map((produto) => (
        <article
          key={produto.id}
          className="produto"
          aria-label={`Produto: ${produto.nome}`}
        >
          <img src={guitarrinhaImg} alt="Violão Yamaha clássico nylon acústico" />
          <p className="produto__nome">{produto.nome}</p>
          <p className="produto__preco">
            R$ {produto.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </p>
        </article>
      ))}

    </section>
  )
}
