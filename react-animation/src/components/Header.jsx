import reactLogo from '../assets/react.svg'
import '../Header.css'

function Header() {
  return (
    <header className="header-fixo">
      <div className="header-content">

        <div className="logo-area">
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img
              src={reactLogo}
              className="logo react"
              alt="React logo"
            />
          </a>
        </div>

        <h1 className="titulo-header">React animation</h1>

        <div className="github-area">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <button className="botao-github">
              <span className='spanDaparada'>⭐1+</span> Star on GitHub
            </button>
          </a>
        </div>

      </div>
    </header>
  )
}

export default Header