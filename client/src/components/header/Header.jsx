import { Link } from "react-router";

export default function Header() {
    return (
    <header>
        <div className="navigation">
        <div className="nav-left-side">
          <h1>Ofertichka.bg</h1>
        </div>
        <div className="nav-right-side">
          <nav>
            <ul>
              <li><Link to="/">Начало</Link></li>
              <li><Link to="/catalog">Обяви</Link></li>
              <li><Link to="/login">Влез</Link></li>
              <li><Link to="/register">Регистрация</Link></li>
              <li><Link className="create-btn" to="/create">Създай обява</Link></li>
            </ul>
          </nav>
        </div>
        </div>
      </header>
    )
}