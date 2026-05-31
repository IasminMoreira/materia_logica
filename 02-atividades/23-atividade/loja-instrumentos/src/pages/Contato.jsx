import { useState } from 'react'
import whatsImg from '../assets/whats.png'
import instaImg  from '../assets/insta.png'
import faceImg   from '../assets/face.png'

export default function Contato() {
  const [form, setForm]       = useState({ nome: '', email: '', mensagem: '' })
  const [enviado, setEnviado] = useState(false)
  const [erro, setErro]       = useState('')

  function handleChange(e) {
    setErro('')
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleEnviar(e) {
    e.preventDefault()
    if (!form.nome || !form.email || !form.mensagem) {
      setErro('Por favor, preencha todos os campos antes de enviar.')
      return
    }
    setEnviado(true)
    setErro('')
    setForm({ nome: '', email: '', mensagem: '' })
    setTimeout(() => setEnviado(false), 3500)
  }

  return (
    <section id="contato" className="contato" aria-label="Formulário de contato e redes sociais">

      {/* Formulário */}
      <form
        className="contato__formulario"
        onSubmit={handleEnviar}
        noValidate
        aria-label="Formulário de contato"
      >
        <fieldset style={{ border: 'none', padding: 0, margin: 0, display: 'contents' }}>
          <legend style={{ display: 'none' }}>Dados de contato</legend>

          {enviado && (
            <p className="msg-sucesso" role="status" aria-live="polite">
              ✓ Mensagem enviada com sucesso!
            </p>
          )}

          {erro && (
            <p className="msg-erro" role="alert">
              {erro}
            </p>
          )}

          <div>
            <label htmlFor="nome">Entre com o seu nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              placeholder="Digite seu nome aqui:"
              autoComplete="name"
            />
          </div>

          <div>
            <label htmlFor="email">Entre com o seu e-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Digite seu email aqui:"
              autoComplete="email"
            />
          </div>

          <div>
            <label htmlFor="mensagem">Mensagem / Pedido:</label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={form.mensagem}
              onChange={handleChange}
              placeholder="Faça seu pedido aqui:"
              rows={5}
            />
          </div>

          <button type="submit">Enviar</button>

        </fieldset>
      </form>

      {/* Redes Sociais */}
      <aside className="contato__redes" aria-label="Redes sociais">
        <h2>Acesse também nossas redes sociais:</h2>
        <nav aria-label="Links das redes sociais">
          <ul>
            <li>
              <a href="#" aria-label="WhatsApp">
                <img src={whatsImg} alt="WhatsApp" />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram">
                <img src={instaImg} alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Facebook">
                <img src={faceImg} alt="Facebook" />
              </a>
            </li>
          </ul>
        </nav>
      </aside>

    </section>
  )
}
