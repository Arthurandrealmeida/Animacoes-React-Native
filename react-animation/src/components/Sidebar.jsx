import '../Sidebar.css'

function Nav() {
  return (
    <nav className="nav-fixo">
      <ul className="nav-lista">
        <li className="nav-item"><a href="app.jsx">🏠 Introdução</a></li>
        <li className="nav-item"><a href="#slide">Slide</a></li>
        <li className="nav-item"><a href="#zoom">Zoom</a></li>
        <li className="nav-item"><a href="#rotate">Rotate</a></li>
      </ul>
    </nav>
  )
}

export default Nav
