import whatsImg from '../assets/whats.png'
import instaImg  from '../assets/insta.png'
import faceImg   from '../assets/face.png'

export default function RodapePrincipal() {
  return (
    <footer className="footer" aria-label="Rodapé da loja">
      <h4>Nossa Loja - Instrumentos Musicais</h4>

      <address>
        Rua Tito, 54 - Lapa <br />
        São Paulo - Brasil
      </address>

      <nav aria-label="Redes sociais no rodapé">
        <ul className="footer__redes">
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
    </footer>
  )
}
