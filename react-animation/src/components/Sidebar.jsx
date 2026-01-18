import '../Sidebar.css'

function Sidebar({ mudarPagina }) {
  return (
    <nav className="nav-fixo">
      <ul className="nav-lista">

        <li
          className="nav-item"
          onClick={() => mudarPagina('introducao')}
        >
          🏠 Introdução
        </li>

        <li
          className="nav-item"
          onClick={() => mudarPagina('texto-Rotativo')}
        >
          texto Rotativo
        </li>

        <li
          className="nav-item"
          onClick={() => mudarPagina('zoom')}
        >
          Zoom
        </li>

        <li
          className="nav-item"
          onClick={() => mudarPagina('rotate')}
        >
          Rotate
        </li>

      </ul>
    </nav>
  )
}

export default Sidebar
