import './js/'
import './css/index.css'

class PraiseButton extends HTMLButtonElement {
  constructor() {
    super()
  }
}

customElements.define('praise-button', PraiseButton)
