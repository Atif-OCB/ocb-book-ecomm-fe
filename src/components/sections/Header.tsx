import { Link } from "@tanstack/react-router"

export const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link className="nav__link" href="/">Home</Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}