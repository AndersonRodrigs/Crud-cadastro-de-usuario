import './Nav.css'
import NavItem from './navItem/navItem'

export default function Nav(props) {
  return (
    <aside className="menu-area">
      <nav className="menu">
        <NavItem href="/" icon="home" label="Início"/>
        <NavItem href="/users" icon="users" label="Usuários"/>
      </nav>
    </aside>
  )
}
