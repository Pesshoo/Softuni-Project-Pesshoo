import { Link } from "react-router";
import { UserContext } from "../../contexts/UserContext";
import { useContext, useEffect, useRef, useState} from "react"

export default function Header() {
  const {email} = useContext(UserContext)

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
                      <li><Link className="create-btn" to="/create">Създай обява</Link></li>
                    </>
                )
                : <>
                  </>
              }

            </ul>

              <div className="account-dropdown" ref={dropdownRef}>
                      <button className="login-btn" onClick={() => setShowDropdown(prev => !prev)}>
                        Акаунт
                      </button>

                      {showDropdown && (
                        <div className="dropdown-menu">
                          {email ? (
                            <>
                              <Link to="/profile" onClick={() => setShowDropdown(false)}>👤 Менажиране на акаунт</Link>
                              <Link to="/logout" onClick={() => setShowDropdown(false)}>🚪  Излез</Link>
                            </>
                          ) : (
                            <>
                              <Link to="/login" onClick={() => setShowDropdown(false)}>🔐 Влез</Link>
                              <Link to="/register" onClick={() => setShowDropdown(false)}>📝 Регистрация</Link>
                            </>
                          )}
                        </div>
                      )}
              </div>
          </nav>
        </div>
        </div>
      </header>
    )
}