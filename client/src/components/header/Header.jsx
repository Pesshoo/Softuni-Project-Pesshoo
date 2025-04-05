export default function Header() {
    return (
    <header>
        <div className="navigation">
        <div className="nav-left-side">
          <h1>Ofertichka.bg</h1>
        </div>
        <div className="nav-center-side">
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/catalog">Catalog</a></li>
            </ul>
          </nav>
        </div>
        <div className="nav-right-side">
          <nav>
            <ul>
              <li><a href="/">Login</a></li>
              <li><a href="/">Register</a></li>
              <li><a className="create-btn" href="/">Create</a></li>
            </ul>
          </nav>
        </div>
        </div>
      </header>
    )
}