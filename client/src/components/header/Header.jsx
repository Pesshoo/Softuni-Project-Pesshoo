import { Link } from "react-router";
import { UserContext } from "../../contexts/UserContext";
import { useContext, useEffect} from "react"

export default function Header() {
  const {email} = useContext(UserContext)

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

              {email ? (                  
                    <>
                      <li><Link to="/logout">Излез</Link></li>
                      <li><Link className="create-btn" to="/create">Създай обява</Link></li>
                    </>
                )
                : <>
                   <li><Link className="login-btn" to="/login">Влез</Link></li>
                   <li><Link className="create-btn" to="/register">Регистрация</Link></li>
                  </>
              }

            </ul>
          </nav>
        </div>
        </div>
      </header>
    )
}